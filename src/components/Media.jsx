import { useRef, useState } from 'react';
import { ExternalLink, Pause, Play, Volume2 } from 'lucide-react';
import { FormattedText } from './FormattedText.jsx';

const getYouTubeId = url => {
  const match = url.match(/\/embed\/([^?]+)/);
  return match?.[1] ?? url;
};

const getYouTubeEmbedUrl = ({ id, startSeconds }) => {
  const params = new URLSearchParams({
    autoplay: '1',
    controls: '1',
    iv_load_policy: '3',
    modestbranding: '1',
    playsinline: '1',
    rel: '0'
  });

  if (startSeconds) {
    params.set('start', String(startSeconds));
  }

  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
};

const getVimeoEmbedUrl = ({ id, hash, startSeconds, autoplay = true }) => {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    badge: '0',
    byline: '0',
    dnt: '1',
    portrait: '0',
    title: '0'
  });

  if (hash) {
    params.set('h', hash);
  }

  const startHash = startSeconds ? `#t=${startSeconds}s` : '';

  return `https://player.vimeo.com/video/${id}?${params.toString()}${startHash}`;
};

export const MinimalAudioPlayer = ({ url, caption }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div className="border border-neutral-700 bg-neutral-950 p-4 text-neutral-200 flex flex-col gap-4">
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center border border-neutral-500 text-neutral-200 hover:bg-neutral-200 hover:text-neutral-950 transition-colors focus:outline-none"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
        </button>
        <div className="flex-grow h-[2px] bg-neutral-800 relative">
          <div
            className="absolute top-0 left-0 h-full bg-neutral-300 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <Volume2 size={16} className="text-neutral-400" />
      </div>
      {caption && <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider"><FormattedText text={caption} /></p>}
    </div>
  );
};

export const MinimalVideoPlayer = ({ url, caption }) => (
  <div className="flex flex-col gap-2">
    <div className="border border-neutral-300 bg-neutral-100 relative w-full aspect-video">
      <video controls className="w-full h-full object-cover" src={url} preload="metadata" />
    </div>
    {caption && <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2"><FormattedText text={caption} /></p>}
  </div>
);

export const YouTubeEmbed = ({ media }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = getYouTubeId(media.url);
  const thumbnailUrl = media.poster || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full overflow-hidden border border-neutral-300 bg-neutral-950 aspect-video">
        {isLoaded ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={getYouTubeEmbedUrl({ id: videoId, startSeconds: media.startSeconds })}
            title={media.caption || 'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="group absolute inset-0 flex items-center justify-center overflow-hidden bg-neutral-950 focus:outline-none"
            aria-label={`Play ${media.caption || 'video'}`}
          >
            <img
              src={thumbnailUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.025] group-hover:opacity-100 group-hover:grayscale-0"
            />
            <span className="absolute inset-0 bg-black/20" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-950 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
              <Play size={24} className="ml-1" />
            </span>
          </button>
        )}
      </div>
      {media.caption && <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2"><FormattedText text={media.caption} /></p>}
    </div>
  );
};

export const VimeoEmbed = ({ media }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full overflow-hidden border border-neutral-300 bg-neutral-950 aspect-video">
        {isLoaded ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={getVimeoEmbedUrl(media)}
            title={media.caption || 'Vimeo video player'}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="group absolute inset-0 flex items-center justify-center overflow-hidden bg-neutral-950 focus:outline-none"
            aria-label={`Play ${media.caption || 'video'}`}
          >
            {media.poster && (
              <img
                src={media.poster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.025] group-hover:opacity-100 group-hover:grayscale-0"
              />
            )}
            <span className="absolute inset-0 bg-black/20" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-neutral-950 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
              <Play size={24} className="ml-1" />
            </span>
          </button>
        )}
      </div>
      {media.caption && <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2"><FormattedText text={media.caption} /></p>}
    </div>
  );
};

export const BandcampEmbed = ({ media }) => {
  const params = [
    `track=${media.trackId}`,
    'size=large',
    'bgcol=ffffff',
    'linkcol=111111',
    'tracklist=false',
    'artwork=small',
    'transparent=true'
  ].join('/');

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden border border-neutral-300 bg-white">
        <iframe
          className="block h-[120px] w-full"
          src={`https://bandcamp.com/EmbeddedPlayer/${params}/`}
          title={media.caption || 'Bandcamp audio player'}
          seamless
        >
          <a href={media.url}>{media.caption || 'Listen on Bandcamp'}</a>
        </iframe>
      </div>
      {media.caption && <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2"><FormattedText text={media.caption} /></p>}
    </div>
  );
};

export const SoundCloudEmbed = ({ media }) => {
  const params = new URLSearchParams({
    visual: 'true',
    url: media.trackUrl,
    show_artwork: 'true'
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden border border-neutral-300 bg-white">
        <iframe
          className="block h-[400px] w-full"
          src={`https://w.soundcloud.com/player/?${params.toString()}`}
          title={media.caption || 'SoundCloud audio player'}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
        />
      </div>
      {media.caption && <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2"><FormattedText text={media.caption} /></p>}
    </div>
  );
};

export const MultiWorkGrid = ({ works, caption }) => (
  <div className="flex flex-col gap-6">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {works.map((work, idx) => (
        <a
          key={idx}
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 block"
        >
          <div
            className="relative aspect-video overflow-hidden rounded-[10px] bg-neutral-100 p-1 ring-1 ring-black/[0.06]"
            data-meta-date={work.metaIso}
            data-meta-created={work.metaCreated}
          >
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full rounded-[6px] object-cover grayscale transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.035] group-hover:grayscale-0"
            />
            <div className="absolute inset-1 flex items-center justify-center rounded-[6px] bg-black/10 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100">
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transform scale-75 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-100 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                <Play size={20} className="ml-1" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-baseline px-1">
            <div>
              <p className="text-sm font-medium text-neutral-800">{work.title}</p>
              {work.date && (
                <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-400">
                  <time dateTime={work.metaIso}>{work.date}</time> / {work.metaLabel}
                </p>
              )}
              {work.metaCreated && (
                <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-400">
                  Created {work.metaCreated.slice(0, 10)}
                </p>
              )}
            </div>
            <ExternalLink size={12} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </div>
        </a>
      ))}
    </div>
    {caption && <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider text-center"><FormattedText text={caption} /></p>}
  </div>
);

export const LinkCard = ({ media }) => (
  <a
    href={media.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block border border-neutral-300 bg-neutral-950 p-6 text-neutral-100 transition-colors hover:bg-neutral-900"
  >
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">{media.label}</p>
        <h3 className="mt-4 max-w-2xl text-2xl font-light tracking-tight text-neutral-50">{media.title}</h3>
        {media.caption && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300">
            <FormattedText text={media.caption} />
          </p>
        )}
      </div>
      <ExternalLink size={18} className="mt-1 shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-50" />
    </div>
  </a>
);

export const MediaRenderer = ({ media, title }) => {
  if (media.type === 'audio') {
    return <MinimalAudioPlayer url={media.url} caption={media.caption} />;
  }

  if (media.type === 'video') {
    return <MinimalVideoPlayer url={media.url} caption={media.caption} />;
  }

  if (media.type === 'youtube') {
    return <YouTubeEmbed media={media} />;
  }

  if (media.type === 'vimeo') {
    return <VimeoEmbed media={media} />;
  }

  if (media.type === 'bandcamp') {
    return <BandcampEmbed media={media} />;
  }

  if (media.type === 'soundcloud') {
    return <SoundCloudEmbed media={media} />;
  }

  if (media.type === 'multi-work') {
    return <MultiWorkGrid works={media.works} caption={media.caption} />;
  }

  if (media.type === 'link') {
    return <LinkCard media={media} />;
  }

  if (media.type === 'image') {
    return (
      <div className="flex flex-col gap-2">
        <img src={media.url} alt={title} className="w-full h-auto border border-neutral-200" />
        {media.caption && (
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider pt-2">
            <FormattedText text={media.caption} />
          </p>
        )}
      </div>
    );
  }

  return null;
};
