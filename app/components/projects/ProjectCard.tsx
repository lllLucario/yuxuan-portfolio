import type { Project } from "@/app/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative rounded-xl border border-white/10 bg-neutral-900/40 transition hover:border-white/20 hover:bg-neutral-900/60">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`View ${project.title} on GitHub`}
        className="absolute inset-0 z-10 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      />

      <div className="relative z-0 space-y-8 p-6 transition group-hover:blur-[2px] group-hover:opacity-60 group-focus-within:blur-[2px] group-focus-within:opacity-60 sm:p-8">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-neutral-100 sm:text-2xl">{project.title}</h3>
          <p className="text-neutral-300">{project.description}</p>
        </div>

        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-400">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="space-y-3">
          <p className="text-sm text-neutral-400">{project.stack.join(", ")}</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-950/80 px-4 py-2 text-sm font-medium text-neutral-100">
          View on GitHub ↗
        </div>
      </div>
    </article>
  );
}
