import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar.jsx';
import { ABSTRACT_DATA, COLLABORATORS, PROJECTS, THESIS_TAGS_BY_PROJECT, WRITINGS, YOUTUBE_INFO_BY_PROJECT } from './data/portfolio.js';
import { AbstractSection, CollaboratorsSection, ProjectSection, WritingSection } from './views/Sections.jsx';

export default function App() {
  const [activeView, setActiveView] = useState('abstract');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  const activeProject = PROJECTS.find(project => project.id === activeView);

  const renderContent = () => {
    if (activeView === 'abstract') {
      return <AbstractSection abstractData={ABSTRACT_DATA} />;
    }

    if (activeView === 'writing') {
      return <WritingSection writings={WRITINGS} />;
    }

    if (activeView === 'collaborators') {
      return <CollaboratorsSection collaborators={COLLABORATORS} />;
    }

    if (activeProject) {
      return (
        <ProjectSection
          project={{
            ...activeProject,
            thesisTags: THESIS_TAGS_BY_PROJECT[activeProject.id],
            youtubeInfo: YOUTUBE_INFO_BY_PROJECT[activeProject.id]
          }}
        />
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] font-sans selection:bg-neutral-900 selection:text-white flex flex-col lg:flex-row">
      <Sidebar
        abstractData={ABSTRACT_DATA}
        activeView={activeView}
        projects={PROJECTS}
        onSelectView={setActiveView}
      />

      <main className="w-full lg:pl-[380px] xl:pl-[420px] min-h-screen">
        <div className="p-8 py-12 lg:p-20 xl:p-24 max-w-[1000px] mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
