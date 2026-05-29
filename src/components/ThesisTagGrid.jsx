import { ExternalLink, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const InfoModal = ({ info, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const metadata = Object.entries(info.metadata ?? {}).filter(([key]) => key !== 'source');

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-neutral-950/45 px-4 py-6 backdrop-blur-sm md:items-center">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close more info" onClick={onClose} />
      <aside className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-neutral-200 bg-[#FAFAFA] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.24)] md:p-8">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-400">YouTube Description</p>
            <h3 className="max-w-xl text-2xl font-light leading-tight tracking-tight text-neutral-950">
              {info.metadata?.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-neutral-300 text-neutral-500 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-5 text-[15px] leading-relaxed text-neutral-800">
          {info.publishedDescription.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 md:grid-cols-3">
          {metadata.map(([key, value]) => (
            <div key={key} className="bg-white px-4 py-3">
              <dt className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400">{key}</dt>
              <dd className="mt-1 text-xs leading-snug text-neutral-700">{value}</dd>
            </div>
          ))}
        </dl>

        {info.metadata?.source && (
          <a
            href={info.metadata.source}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-950"
          >
            Open source <ExternalLink size={13} />
          </a>
        )}
      </aside>
    </div>
  );
};

export const ThesisTagGrid = ({ tags, youtubeInfo }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  if (!tags?.length && !youtubeInfo) return null;

  return (
    <section className="mt-10 border-t border-neutral-200 pt-6">
      <div className="mb-4 flex items-center gap-4">
        <h3 className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">Relevance</h3>
        <span className="h-px flex-1 bg-neutral-200" />
      </div>
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {tags?.map((tag, index) => (
          <span
            key={tag}
            className={`min-h-16 border border-neutral-200 bg-white/60 px-3 py-3 text-xs leading-tight text-neutral-700 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-neutral-900 hover:bg-neutral-950 hover:text-white ${index % 5 === 0 ? 'xl:col-span-2' : ''}`}
          >
            {tag}
          </span>
        ))}
        {youtubeInfo && (
          <button
            type="button"
            onClick={() => setIsInfoOpen(true)}
            className="min-h-16 border border-neutral-950 bg-neutral-950 px-3 py-3 text-left text-xs leading-tight text-white transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:text-neutral-950 xl:col-span-2"
          >
            {youtubeInfo.label}
          </button>
        )}
      </div>
      {isInfoOpen && <InfoModal info={youtubeInfo} onClose={() => setIsInfoOpen(false)} />}
    </section>
  );
};
