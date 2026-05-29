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
            <div className="overflow-hidden bg-neutral-950 ring-1 ring-black/[0.06]">
              <video
                className="aspect-video h-full w-full object-cover grayscale transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:grayscale-0"
                src={loop.src}
                poster={loop.poster}
                aria-label={loop.alt}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <figcaption className="mt-2 text-[10px] font-mono uppercase tracking-[0.18em] text-neutral-400">
              15 sec loop / {loop.timecode}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
