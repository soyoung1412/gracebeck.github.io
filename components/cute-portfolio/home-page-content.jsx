import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/cute-portfolio/icons";
import { PageHero } from "@/components/cute-portfolio/page-hero";
import { ProjectCard } from "@/components/cute-portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";

export function HomePageContent({ content }) {
  return (
    <>
      <PageHero content={content.hero} />

      <Reveal delay={0.12} className="relative z-10 mx-auto flex justify-center lg:-mt-10 lg:justify-end">
        <Link
          href={content.posterSpotlight.href}
          className="floating-c group relative flex w-full max-w-[420px] items-center gap-4 overflow-hidden rounded-[32px] border border-white/90 bg-[linear-gradient(135deg,rgba(255,233,242,0.98),rgba(255,255,255,0.94))] p-3 shadow-[0_26px_56px_rgba(236,168,197,0.24)] transition hover:-translate-y-1 sm:p-4"
        >
          <div className="pointer-events-none absolute -left-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,197,219,0.78),_rgba(255,197,219,0)_72%)] blur-2xl" />
          <div className="relative shrink-0 overflow-hidden rounded-[26px] border border-white/90 bg-white/92 p-2 shadow-[0_14px_28px_rgba(234,175,199,0.18)]">
            <Image
              src={content.posterSpotlight.image}
              alt={content.posterSpotlight.imageAlt}
              width={896}
              height={1195}
              className="h-[116px] w-[96px] object-contain sm:h-[142px] sm:w-[118px]"
            />
          </div>
          <div className="relative min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
              {content.posterSpotlight.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-black leading-none text-[var(--foreground-strong)] sm:text-[2.1rem]">
              {content.posterSpotlight.title}
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#7c6571]">
              {content.posterSpotlight.copy}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#c86f94]">
              Open page
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </Reveal>

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
