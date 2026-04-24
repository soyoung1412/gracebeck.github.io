import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/cute-portfolio/icons";
import { Reveal } from "@/components/ui/reveal";

function PreviewScene({ project }) {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${project.previewGradient} p-3`}>
        <div className="overflow-hidden rounded-[22px] border border-white/85 bg-white/84 shadow-[0_18px_36px_rgba(234,175,199,0.16)]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={720}
            height={900}
            className="h-56 w-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${project.previewGradient} p-4`}>
      <div className="absolute right-6 top-5 h-16 w-16 rounded-full bg-white/40 blur-2xl" />
      <div className="relative rounded-[24px] border border-white/82 bg-white/82 p-4 shadow-[0_18px_36px_rgba(234,175,199,0.14)]">
        <div className="flex items-center justify-between gap-3">
          <span className="h-3 w-24 rounded-full bg-[#ffd5e4]" />
          <span className="h-10 w-10 rounded-[18px] bg-[linear-gradient(135deg,#fff6fa,#ffd3e3)]" />
        </div>
        <div className="mt-4 grid gap-3">
          <div className="h-28 rounded-[24px] bg-[linear-gradient(135deg,#fffdfb,#ffe8f0)]" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-14 rounded-[18px] bg-[#fff1f6]" />
            <div className="h-14 rounded-[18px] bg-[#fff9fb]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="lift-card soft-panel rounded-[32px] p-4 sm:p-5">
      <article className="flex h-full flex-col gap-5">
        <PreviewScene project={project} />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d27b9c]">
              {project.label}
            </p>
            <h3 className="font-display mt-2 text-2xl font-black text-[var(--foreground-strong)]">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-white/90 bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#bc8a9d]">
            {project.year}
          </span>
        </div>
        <p className="text-sm leading-7 text-[var(--muted)]">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="candy-pill px-3 py-1.5 text-xs font-black text-[#735b68]">
              {tag}
            </span>
          ))}
        </div>
        {project.href ? (
          <Link href={project.href} className="mt-1 inline-flex items-center gap-2 text-sm font-black text-[#c76c92]">
            Open page
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        ) : null}
      </article>
    </Reveal>
  );
}
