#!/usr/bin/env node
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const DEFAULTS = {
  count: 4,
  duration: 15,
  candidates: 14,
  minWidth: 1280,
  width: null,
  crf: 24,
  preset: 'slow',
  audioBitrate: '160k',
  outputRoot: 'public/generated-loops',
  audio: true
};

const parseArgs = argv => {
  const args = { ...DEFAULTS };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--url') args.url = argv[++index];
    else if (arg === '--name') args.name = argv[++index];
    else if (arg === '--project') args.project = argv[++index];
    else if (arg === '--count') args.count = Number(argv[++index]);
    else if (arg === '--duration') args.duration = Number(argv[++index]);
    else if (arg === '--candidates') args.candidates = Number(argv[++index]);
    else if (arg === '--starts') args.starts = argv[++index];
    else if (arg === '--min-width') args.minWidth = Number(argv[++index]);
    else if (arg === '--width') args.width = Number(argv[++index]);
    else if (arg === '--crf') args.crf = Number(argv[++index]);
    else if (arg === '--preset') args.preset = argv[++index];
    else if (arg === '--audio-bitrate') args.audioBitrate = argv[++index];
    else if (arg === '--output-root') args.outputRoot = argv[++index];
    else if (arg === '--no-audio') args.audio = false;
    else if (!args.url && !arg.startsWith('--')) args.url = arg;
  }

  if (!args.url) {
    throw new Error('Usage: node scripts/loop-grabber.mjs --url <youtube-url> --name <asset-name>');
  }

  return args;
};

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    maxBuffer: options.maxBuffer ?? 1024 * 1024 * 20,
    stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
    ...options
  });

  if (result.status !== 0) {
    const detail = result.stderr || result.stdout || '';
    throw new Error(`${command} ${args.join(' ')} failed\n${detail}`);
  }

  return result.stdout ?? '';
};

const canRun = (command, versionArgs = ['--version']) => {
  const result = spawnSync(command, versionArgs, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  return result.status === 0;
};

const slugify = value => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 64);

const findBinary = (names, versionArgs) => names.find(command => canRun(command, versionArgs));

const getYtDlpCommand = () => {
  if (canRun('yt-dlp')) return { command: 'yt-dlp', args: [] };
  if (existsSync('.loop-grabber-venv/bin/python')) {
    const moduleCheck = spawnSync('.loop-grabber-venv/bin/python', ['-m', 'yt_dlp', '--version'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    if (moduleCheck.status === 0) return { command: '.loop-grabber-venv/bin/python', args: ['-m', 'yt_dlp'] };
  }
  if (canRun('python3')) {
    const moduleCheck = spawnSync('python3', ['-m', 'yt_dlp', '--version'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    if (moduleCheck.status === 0) return { command: 'python3', args: ['-m', 'yt_dlp'] };
  }

  throw new Error('Install yt-dlp, or create .loop-grabber-venv with yt-dlp installed, so YouTube sources can be downloaded.');
};

const getOptimalResolution = info => {
  const videoFormat = [
    ...(info.requested_formats ?? []),
    ...(info.requested_downloads?.flatMap(download => download.requested_formats ?? []) ?? []),
    info
  ].find(format => format?.vcodec && format.vcodec !== 'none');

  const width = videoFormat?.width ?? info.width ?? null;
  const height = videoFormat?.height ?? info.height ?? null;

  return {
    label: width && height ? `${width}x${height}` : (videoFormat?.resolution ?? info.resolution ?? null),
    width,
    height,
    formatId: videoFormat?.format_id ?? info.format_id ?? null,
    videoCodec: videoFormat?.vcodec ?? info.vcodec ?? null,
    audioCodec: info.acodec ?? null
  };
};

const getOutputWidth = ({ options, optimalResolution }) => {
  if (options.width) return options.width;
  return Math.max(options.minWidth, optimalResolution.width ?? options.minWidth);
};

const downloadSource = ({ options, outputDir, tmpDir }) => {
  const infoPath = join(outputDir, 'source-info.json');
  const downloadTemplate = join(tmpDir, 'source.%(ext)s');
  const ytdlp = getYtDlpCommand();

  console.log(`Downloading source metadata and media with yt-dlp for ${options.url}`);
  const info = JSON.parse(run(ytdlp.command, [
    ...ytdlp.args,
    '-f', 'bv*+ba/best',
    '--dump-single-json',
    '--no-warnings',
    options.url
  ], { capture: true }));
  const optimalResolution = getOptimalResolution(info);
  writeFileSync(infoPath, `${JSON.stringify({
    id: info.id,
    title: info.title,
    uploader: info.uploader,
    uploadDate: info.upload_date,
    duration: info.duration,
    optimalRes: optimalResolution.label,
    optimalResolution,
    webpageUrl: info.webpage_url ?? options.url
  }, null, 2)}\n`);

  run(ytdlp.command, [
    ...ytdlp.args,
    '-f', 'bv*+ba/best',
    '--merge-output-format', 'mp4',
    '-o', downloadTemplate,
    options.url
  ]);

  const downloaded = ['mp4', 'mkv', 'webm', 'mov']
    .map(ext => join(tmpDir, `source.${ext}`))
    .find(existsSync);

  if (!downloaded) {
    throw new Error(`No downloaded source file found in ${tmpDir}`);
  }

  return { file: downloaded, info };
};

const getDuration = (ffprobe, file) => Number(run(ffprobe, [
  '-v', 'error',
  '-show_entries', 'format=duration',
  '-of', 'default=noprint_wrappers=1:nokey=1',
  file
], { capture: true }).trim());

const getRmsScore = (ffmpeg, file, start, duration) => {
  const result = spawnSync(ffmpeg, [
    '-hide_banner',
    '-nostats',
    '-ss', String(start),
    '-t', String(duration),
    '-i', file,
    '-vn',
    '-af', 'volumedetect',
    '-f', 'null',
    '-'
  ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

  const output = `${result.stdout}\n${result.stderr}`;
  const match = output.match(/mean_volume:\s*(-?\d+(?:\.\d+)?) dB/);
  if (!match) return -80;
  return Number(match[1]);
};

const getSceneScore = (ffmpeg, file, start, duration) => {
  const result = spawnSync(ffmpeg, [
    '-hide_banner',
    '-nostats',
    '-ss', String(start),
    '-t', String(duration),
    '-i', file,
    '-vf', "fps=3,scale=320:-1,select='gt(scene,0.018)',showinfo",
    '-an',
    '-f', 'null',
    '-'
  ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

  const output = `${result.stdout}\n${result.stderr}`;
  return (output.match(/showinfo/g) ?? []).length;
};

const toTimecode = seconds => {
  const whole = Math.round(seconds);
  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const secs = whole % 60;
  return hours > 0
    ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    : `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const parseTimecode = value => {
  const parts = value.trim().split(':').map(Number);
  if (parts.some(Number.isNaN)) throw new Error(`Invalid timecode: ${value}`);

  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return (parts[0] * 60) + parts[1];
  if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + parts[2];

  throw new Error(`Invalid timecode: ${value}`);
};

const parseStarts = starts => starts
  ?.split(',')
  .map(value => value.trim())
  .filter(Boolean)
  .map(parseTimecode);

const pickCandidateStarts = ({ totalDuration, loopDuration, candidateCount }) => {
  const usableStart = Math.min(20, Math.max(0, totalDuration * 0.05));
  const usableEnd = Math.max(usableStart + loopDuration, totalDuration - loopDuration - Math.min(20, totalDuration * 0.05));
  const span = Math.max(loopDuration, usableEnd - usableStart);

  return Array.from({ length: candidateCount }, (_, index) => {
    const ratio = candidateCount === 1 ? 0 : index / (candidateCount - 1);
    return Math.max(0, Math.min(totalDuration - loopDuration, usableStart + (span * ratio)));
  });
};

const chooseSegments = candidates => {
  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  const chosen = [];

  for (const candidate of sorted) {
    if (chosen.every(item => Math.abs(item.start - candidate.start) >= candidate.duration * 1.5)) {
      chosen.push(candidate);
    }
    if (chosen.length === candidate.count) break;
  }

  return chosen.sort((a, b) => a.start - b.start);
};

const main = () => {
  const options = parseArgs(process.argv.slice(2));
  const slug = slugify(options.name ?? options.project ?? 'youtube-source');
  const outputDir = resolve(options.outputRoot, slug);
  const tmpDir = resolve('.tmp-loop-grabber', slug);
  const ffmpeg = findBinary(['ffmpeg', '/Users/cristianvogel/.local/bin/ffmpeg'], ['-version']);
  const ffprobe = findBinary(['ffprobe', '/opt/homebrew/bin/ffprobe'], ['-version']);

  if (!ffmpeg) throw new Error('ffmpeg was not found.');
  if (!ffprobe) throw new Error('ffprobe was not found.');

  mkdirSync(outputDir, { recursive: true });
  mkdirSync(tmpDir, { recursive: true });

  const { file: downloaded, info } = downloadSource({ options, outputDir, tmpDir });
  const optimalResolution = getOptimalResolution(info);
  const outputWidth = getOutputWidth({ options, optimalResolution });

  const totalDuration = getDuration(ffprobe, downloaded);
  const explicitStarts = parseStarts(options.starts);
  const selected = explicitStarts
    ? explicitStarts.map(start => ({ start, duration: options.duration, rms: 0, scene: 0, score: 0, count: explicitStarts.length }))
    : chooseSegments(pickCandidateStarts({
      totalDuration,
      loopDuration: options.duration,
      candidateCount: options.candidates
    }).map(start => {
      const rms = getRmsScore(ffmpeg, downloaded, start, options.duration);
      const scene = getSceneScore(ffmpeg, downloaded, start, options.duration);
      const score = (rms + 80) + (scene * 1.8);
      return { start, duration: options.duration, rms, scene, score, count: options.count };
    }));

  if (explicitStarts) {
    console.log(`Rendering ${explicitStarts.length} explicit starts from ${Math.round(totalDuration)}s source.`);
  } else {
    console.log(`Scored ${options.candidates} candidate windows from ${Math.round(totalDuration)}s source.`);
  }
  const loops = selected.map((segment, index) => {
    const number = String(index + 1).padStart(2, '0');
    const videoName = `loop-${number}.mp4`;
    const posterName = `poster-${number}.jpg`;
    const videoPath = join(outputDir, videoName);
    const posterPath = join(outputDir, posterName);

    console.log(`Rendering ${videoName} from ${toTimecode(segment.start)}: rms ${segment.rms.toFixed(1)} dB, scene score ${segment.scene}`);
    run(ffmpeg, [
      '-hide_banner',
      '-y',
      '-ss', String(segment.start),
      '-t', String(options.duration),
      '-i', downloaded,
      '-vf', `scale=${outputWidth}:-2,fps=30`,
      ...(options.audio
        ? ['-c:a', 'aac', '-b:a', options.audioBitrate]
        : ['-an']),
      '-c:v', 'libx264',
      '-profile:v', 'main',
      '-pix_fmt', 'yuv420p',
      '-crf', String(options.crf),
      '-preset', options.preset,
      '-movflags', '+faststart',
      videoPath
    ]);

    run(ffmpeg, [
      '-hide_banner',
      '-y',
      '-ss', String(segment.start),
      '-i', downloaded,
      '-frames:v', '1',
      '-update', '1',
      '-vf', `scale=${outputWidth}:-2`,
      posterPath
    ]);

    return {
      src: `/${basename(options.outputRoot)}/${slug}/${videoName}`,
      poster: `/${basename(options.outputRoot)}/${slug}/${posterName}`,
      alt: `${info.title ?? options.name ?? 'YouTube source'} 15 second loop at ${toTimecode(segment.start)}`,
      timecode: toTimecode(segment.start),
      audio: options.audio,
      score: Number(segment.score.toFixed(2))
    };
  });

  const manifest = {
    source: options.url,
    title: info.title,
    uploader: info.uploader,
    duration: totalDuration,
    optimalRes: getOptimalResolution(info).label,
    outputWidth,
    encode: {
      crf: options.crf,
      preset: options.preset,
      fps: 30,
      audioBitrate: options.audio ? options.audioBitrate : null
    },
    generatedAt: new Date().toISOString(),
    loops
  };

  writeFileSync(join(outputDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  rmSync(tmpDir, { recursive: true, force: true });
  console.log(JSON.stringify(manifest.loops, null, 2));
};

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
