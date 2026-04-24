import { PageHero } from "@/components/cute-portfolio/page-hero";
import { ProjectCard } from "@/components/cute-portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";

export function CategoryPageContent({ content }) {
  return (
    <>
      <PageHero content={content.hero} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="soft-panel rounded-[34px] p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
            {content.sectionEyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-black text-[var(--foreground-strong)]">
            {content.sectionTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">{content.sectionCopy}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {content.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={0.04 * index} />
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          {content.sideCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={0.04 * index}
              className={`soft-panel rounded-[34px] bg-gradient-to-br ${card.gradient} p-5 sm:p-6`}
            >
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-3 text-2xl font-black text-[var(--foreground-strong)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#7d6672]">{card.copy}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="candy-pill px-3 py-1.5 text-xs font-black text-[#735b68]">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
