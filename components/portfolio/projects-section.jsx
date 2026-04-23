import { ArrowUpRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

function ProjectPreview({ project }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border border-white/80 bg-gradient-to-br ${project.gradient} p-5 shadow-[0_20px_46px_rgba(102,131,165,0.12)]`}
    >
      <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-white/45 blur-2xl" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/75 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {project.category}
          </span>
          <span className="text-sm font-medium text-slate-500">{project.year}</span>
        </div>

        <div className="mt-5 rounded-[22px] border border-white/75 bg-white/76 p-4 shadow-[0_14px_32px_rgba(102,131,165,0.1)]">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="h-3 w-16 rounded-full bg-emerald-100" />
            </div>
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-white to-sky-100" />
          </div>
          <div className="mt-4 grid gap-3">
            <div className="h-24 rounded-[20px] bg-gradient-to-br from-white via-white to-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-[18px] bg-white/85" />
              <div className="h-14 rounded-[18px] bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <Reveal
      delay={delay}
      className="lift-card soft-panel w-[85vw] shrink-0 snap-center rounded-[32px] p-4 sm:w-[74vw] md:w-auto md:p-5"
    >
      <article className="flex h-full flex-col gap-5">
        <ProjectPreview project={project} />

        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.26em] text-sky-700/75">
                {project.label}
              </p>
              <h3 className="font-display mt-2 text-2xl font-extrabold text-slate-900">
                {project.title}
              </h3>
            </div>
            <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/85 bg-white/85 text-slate-600">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/90 bg-white/78 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="scroll-mt-28">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work built like polished product stories, not crowded mockups."
          copy="Each card below uses original abstract previews and sample content, so you can swap in real case studies later without changing the layout system."
        />
      </Reveal>

      <div className="pretty-scroll -mx-4 mt-6 flex snap-x gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={0.05 * index} />
        ))}
      </div>
    </section>
  );
}
