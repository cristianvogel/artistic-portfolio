import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const pauseOtherLoopVideos = currentVideo => {
  document.querySelectorAll('[data-loop-video]').forEach(video => {
    if (video !== currentVideo && !video.paused) {
      video.pause();
    }
  });
};

const LoopVideo = ({ loop }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(!loop.audio);
  const [isMuted, setIsMuted] = useState(!loop.audio);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const enterFullscreen = async () => {
    if (!containerRef.current || document.fullscreenElement) return;

    if (containerRef.current.requestFullscreen) {
      await containerRef.current.requestFullscreen();
    } else if (containerRef.current.webkitRequestFullscreen) {
      containerRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.webkitEnterFullscreen) {
      videoRef.current.webkitEnterFullscreen();
    } else if (containerRef.current.msRequestFullscreen) {
      containerRef.current.msRequestFullscreen();
    }
  };

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await enterFullscreen();
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

  const closeFullscreen = async () => {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="relative group/video overflow-hidden bg-neutral-950 ring-1 ring-black/[0.06]">
      <video
        ref={videoRef}
        className="aspect-video h-full w-full object-cover fullscreen:h-screen"
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
        data-loop-video
        onContextMenu={event => event.preventDefault()}
        onPlay={event => {
          pauseOtherLoopVideos(event.currentTarget);
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
      />

      {isFullscreen && (
        <button
          type="button"
          onClick={closeFullscreen}
          className="absolute right-4 top-4 z-10 border border-white/30 bg-neutral-950/70 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-neutral-950"
        >
          Close
        </button>
      )}

      <div className={`absolute inset-x-3 bottom-3 flex items-center transition-opacity duration-300 ${loop.audio ? 'opacity-100' : 'opacity-0 group-hover/video:opacity-100'}`}>
        <div className="flex gap-2">
          {loop.audio && (
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center border border-white/30 bg-neutral-950/70 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-neutral-950"
              aria-label={isPlaying ? 'Pause loop' : 'Play loop'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
          )}
          {loop.audio && (
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-10 w-10 items-center justify-center border border-white/30 bg-neutral-950/70 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-neutral-950"
              aria-label={isMuted ? 'Unmute loop' : 'Mute loop'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          )}
        </div>
      </div>
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
