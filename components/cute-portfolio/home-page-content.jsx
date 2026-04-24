import Link from "next/link";
import { PageHero } from "@/components/cute-portfolio/page-hero";
import { ProjectCard } from "@/components/cute-portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";

export function HomePageContent({ content }) {
  return (
    <>
      <PageHero content={content.hero} />

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <section className="grid gap-6">
          <Reveal className="soft-panel rounded-[34px] p-5 sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
                  Featured Worlds
                </p>
                <h2 className="font-display mt-3 text-3xl font-black text-[var(--foreground-strong)]">
                  Browse the studio by medium.
                </h2>
              </div>
              <p className="max-w-xs text-right text-sm leading-6 text-[var(--muted)]">
                Inspired by portfolio category pages, rebuilt into a sweeter dashboard experience.
              </p>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {content.featuredRoutes.map((project, index) => (
                <ProjectCard key={project.title} project={project} delay={0.04 * index} />
              ))}
            </div>
          </Reveal>
        </section>

        <section className="grid gap-6">
          <Reveal className="soft-panel rounded-[34px] p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
              Cute UX Notes
            </p>
            <div className="mt-4 grid gap-4">
              {content.noteCards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-[28px] border border-white/90 bg-gradient-to-br ${card.gradient} p-5 shadow-[0_16px_32px_rgba(234,175,199,0.12)]`}
                >
                  <p className="font-display text-2xl font-black text-[var(--foreground-strong)]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#7c6571]">{card.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="soft-panel-strong rounded-[34px] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
                  Quick Links
                </p>
                <h3 className="font-display mt-2 text-2xl font-black text-[var(--foreground-strong)]">
                  Jump into a dedicated page
                </h3>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {content.quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[24px] border border-white/90 bg-white/82 px-4 py-4 text-sm font-black text-[#654f5b] shadow-[0_12px_28px_rgba(234,175,199,0.12)] transition hover:-translate-y-0.5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
