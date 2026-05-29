import { ArrowRight, ExternalLink } from 'lucide-react';
import { LoopGallery } from '../components/LoopGallery.jsx';
import { MediaRenderer } from '../components/Media.jsx';
import { ProjectMetadata } from '../components/ProjectMetadata.jsx';
import { ThesisTagGrid } from '../components/ThesisTagGrid.jsx';
import { FormattedText } from '../components/FormattedText.jsx';

export const AbstractSection = ({ abstractData }) => (
  <div className="animate-in fade-in duration-500 space-y-8">
    <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-12">Abstract</h2>
    <div className="prose prose-neutral prose-lg max-w-3xl leading-relaxed">
      <p><FormattedText text={abstractData.text} /></p>
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
    <div className="card grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

      <div id="project-media" className="md:col-span-1">
        <MediaRenderer media={project.media} title={project.title} />
        {project.duration && (
          <dl className="mt-4 border-t border-neutral-200 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            <div className="flex items-baseline justify-between gap-4">
              <dt>Duration</dt>
              <dd className="text-neutral-900">{project.duration}</dd>
            </div>
          </dl>
        )}
      </div>

      <div id="project-description" className="md:col-span-2 space-y-8">
        <div className="prose prose-neutral prose-lg leading-relaxed text-neutral-800">
          <p><FormattedText text={project.description} /></p>
        </div>
        {project.notes?.length > 0 && (
          <div className="border-y border-neutral-200 py-4">
            <h3 className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-400">Performance Notes</h3>
            <div className="grid gap-4">
              {project.notes.map(note => (
                <a
                  key={note.label}
                  href={note.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 text-sm text-neutral-700"
                >
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 group-hover:text-neutral-900">
                    <span>{note.label}</span>
                    {note.venue && <span className="text-neutral-400">{note.venue}</span>}
                    {note.date && <span className="text-neutral-400">{note.date}</span>}
                    {note.location && <span className="text-neutral-400">{note.location}</span>}
                  </span>
                  <span className="leading-relaxed group-hover:text-neutral-950">{note.text}</span>
                  <span className="inline-flex w-fit items-center gap-1 border-b border-neutral-300 pb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400 transition-colors group-hover:border-neutral-900 group-hover:text-neutral-900">
                    Source <ExternalLink size={11} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
        <LoopGallery loops={project.loops} />
        <ThesisTagGrid tags={project.thesisTags} youtubeInfo={project.youtubeInfo} />
      </div>
    </div>
  </div>
);
