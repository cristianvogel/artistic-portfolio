import { ArrowRight, ExternalLink } from 'lucide-react';
import { LoopGallery } from '../components/LoopGallery.jsx';
import { MediaRenderer } from '../components/Media.jsx';
import { ProjectMetadata } from '../components/ProjectMetadata.jsx';
import { ThesisTagGrid } from '../components/ThesisTagGrid.jsx';

export const AbstractSection = ({ abstractData }) => (
  <div className="animate-in fade-in duration-500 space-y-8">
    <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-12">Abstract</h2>
    <div className="prose prose-neutral prose-lg max-w-3xl leading-relaxed">
      <p>{abstractData.text}</p>
    </div>
    <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-200">
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Candidate</p>
        <p className="font-medium">{abstractData.candidate}</p>
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Position</p>
        <p className="font-medium">{abstractData.position}</p>
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Institution</p>
        <p className="font-medium">{abstractData.institution}</p>
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">Duration</p>
        <p className="font-medium">{abstractData.duration}</p>
      </div>
    </div>
  </div>
);

export const WritingSection = ({ writings }) => (
  <div className="animate-in fade-in duration-500 space-y-12">
    <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-12">Writing & Research</h2>
    <div className="space-y-16 max-w-3xl">
      {writings.map(item => (
        <article key={item.id} className="group cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
            <h3 className="text-xl font-medium group-hover:underline underline-offset-4">{item.title}</h3>
            <span className="text-xs font-mono text-neutral-400">{item.year}</span>
          </div>
          <p className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6">{item.publication}</p>
          <p className="text-neutral-700 leading-relaxed">{item.excerpt}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-neutral-900">
            Read full text <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </article>
      ))}
    </div>
  </div>
);

export const CollaboratorsSection = ({ collaborators }) => (
  <div className="animate-in fade-in duration-500 space-y-12">
    <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-12">Collaborators</h2>
    <ul className="max-w-2xl divide-y divide-neutral-200 border-y border-neutral-200">
      {collaborators.map((collab, idx) => (
        <li key={idx} className="py-6 flex flex-col md:flex-row md:items-center justify-between group hover:bg-neutral-50 transition-colors -mx-4 px-4">
          <div>
            <p className="text-lg font-medium">{collab.name}</p>
            <p className="text-sm font-mono text-neutral-500 mt-1">{collab.role}</p>
          </div>
          <a href={collab.link} className="mt-4 md:mt-0 flex items-center text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
            Profile <ExternalLink size={14} className="ml-2" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export const ProjectSection = ({ project }) => (
  <div className="animate-in fade-in duration-500 space-y-8 max-w-4xl">
    <header className="mb-12">
      <h2 className="text-3xl lg:text-6xl font-light tracking-tight mb-6">{project.title}</h2>
      <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
        <span>{project.year}</span>
        <span>—</span>
        <span>{project.type}</span>
      </div>

      <ProjectMetadata project={project} />
    </header>

    <div className="my-12">
      <MediaRenderer media={project.media} title={project.title} />
    </div>

    <LoopGallery loops={project.loops} />

    <div className="max-w-3xl">
      <div className="prose prose-neutral prose-lg leading-relaxed text-neutral-800">
        <p>{project.description}</p>
      </div>
      <ThesisTagGrid tags={project.thesisTags} youtubeInfo={project.youtubeInfo} />
    </div>
  </div>
);
