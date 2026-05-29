const MetaRow = ({ label, children }) => (
  <div>
    <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">{label}</dt>
    <dd className="mt-1 text-sm text-neutral-700">{children}</dd>
  </div>
);

export const ProjectMetadata = ({ project }) => {
  if (!project.chronology) return null;

  return (
    <dl
      className="mt-8 grid grid-cols-1 gap-4 border-y border-neutral-200 py-5 md:grid-cols-3"
      data-meta-date={project.chronology.iso}
      data-meta-end-date={project.chronology.endIso}
      data-meta-source={project.chronology.source}
    >
      <MetaRow label="Date">
        <time dateTime={project.chronology.iso}>{project.chronology.primary}</time>
      </MetaRow>
      <MetaRow label="Date source">{project.chronology.label}</MetaRow>
      <MetaRow label="Source URL">
        <a
          href={project.chronology.source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950"
        >
          {project.chronology.source.replace(/^https?:\/\//, '')}
        </a>
      </MetaRow>
    </dl>
  );
};
