export const ThesisTagGrid = ({ tags }) => {
  if (!tags?.length) return null;

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
      </div>
    </section>
  );
};
