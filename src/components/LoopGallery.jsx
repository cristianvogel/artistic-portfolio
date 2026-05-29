import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

const LoopVideo = ({ loop }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(!loop.audio);
  const [isMuted, setIsMuted] = useState(!loop.audio);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 ring-1 ring-black/[0.06]">
      <video
        ref={videoRef}
        className="aspect-video h-full w-full object-cover"
        src={loop.src}
        poster={loop.poster}
        aria-label={loop.alt}
        autoPlay={!loop.audio}
        muted={!loop.audio}
        loop
        playsInline
        preload="metadata"
        controls={false}
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        onContextMenu={event => event.preventDefault()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {loop.audio && (
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-10 w-10 items-center justify-center border border-white/30 bg-neutral-950/70 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-neutral-950"
            aria-label={isPlaying ? 'Pause loop' : 'Play loop'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="flex h-10 w-10 items-center justify-center border border-white/30 bg-neutral-950/70 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-neutral-950"
            aria-label={isMuted ? 'Unmute loop' : 'Mute loop'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      )}
    </div>
  );
};

export const LoopGallery = ({ loops }) => {
  if (!loops?.length) return null;

  return (
    <section className="mt-14">
      <div className="mb-4 flex items-center gap-4">
        <h3 className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">Motion Excerpts</h3>
        <span className="h-px flex-1 bg-neutral-200" />
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {loops.map(loop => (
          <figure key={loop.src} className="group">
            <LoopVideo loop={loop} />
            <figcaption className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              15 sec loop / {loop.timecode}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
