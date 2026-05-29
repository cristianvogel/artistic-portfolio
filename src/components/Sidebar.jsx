export const Sidebar = ({ abstractData, activeView, projects, onSelectView }) => (
  <aside className="w-full lg:w-[380px] xl:w-[420px] lg:h-screen lg:fixed lg:border-r lg:border-neutral-200 bg-[#FAFAFA] flex flex-col z-10">
    <div className="p-8 lg:p-10 border-b border-neutral-200">
      <button onClick={() => onSelectView('abstract')} className="text-left w-full focus:outline-none group">
        <h1 className="text-xl text-blue-950 font-medium tracking-tight mb-0 group-hover:text-neutral-500 transition-colors uppercase">
          {abstractData.title}
        </h1>
          <h2 className="text-lg text-amber-900 mt-0 tracking-tight mb-2 font-light">
              {abstractData.subtitle}
          </h2>
        <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-[0.2em] leading-relaxed">
          {abstractData.candidate}<br />
          PhD Proposal Portfolio
        </p>
      </button>
    </div>

    <nav className="flex-grow overflow-y-auto p-8 lg:p-10 custom-scrollbar">
      <div className="mb-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6">Overview</p>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => onSelectView('abstract')}
              className={`text-left text-base transition-colors hover:text-neutral-900 ${activeView === 'abstract' ? 'font-medium text-neutral-900' : 'text-neutral-500'}`}
            >
              Abstract & Details
            </button>
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6">Selected Supporting Works</p>
        <div className="space-y-8">
          {(() => {
            const CATEGORY_ORDER = ['Audio Visual', 'Composition', 'Realtime', 'Practice Based Research', 'Interdisciplinary', 'Selected Composition for Dance'];
            
            // Sort projects reverse-chronologically first
            const sortedProjects = [...projects].sort((a, b) => {
              const dateA = a.chronology?.iso || a.year || "";
              const dateB = b.chronology?.iso || b.year || "";
              return dateB.localeCompare(dateA);
            });

            return CATEGORY_ORDER.map(category => {
              const sourceProjects = category === 'Audio Visual' ? projects : sortedProjects;
              const categoryProjects = sourceProjects.filter(p => p.category === category);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category} className="space-y-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-300 border-l border-neutral-200 pl-4 ml-1">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {categoryProjects.map((project) => {
                      return (
                        <li key={project.id} className="ml-7">
                          <button
                            onClick={() => onSelectView(project.id)}
                            className={`w-full text-left text-sm transition-colors hover:text-neutral-900 flex items-baseline gap-3 ${activeView === project.id ? 'font-medium text-neutral-900' : 'text-neutral-500'}`}
                          >
                            <span className="truncate">{project.title}</span>
                            {project.chronology && (
                              <time dateTime={project.chronology.iso} className="ml-auto text-[10px] font-mono uppercase tracking-[0.16em] opacity-45">
                                {project.chronology.year}
                              </time>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            });
          })()}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6">Research Context</p>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => onSelectView('writing')}
              className={`text-left text-base transition-colors hover:text-neutral-900 ${activeView === 'writing' ? 'font-medium text-neutral-900' : 'text-neutral-500'}`}
            >
              Writing
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
);
