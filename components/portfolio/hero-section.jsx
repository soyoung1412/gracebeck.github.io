import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, SparkleIcon } from "@/components/ui/icons";
import { Reveal, ScaleIn } from "@/components/ui/reveal";
import { DecorativeIllustration } from "@/components/portfolio/decorative-illustration";

function StatCard({ label, value }) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/70 px-5 py-4 shadow-[0_16px_40px_rgba(102,131,165,0.12)]">
      <div className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">{value}</div>
      <div className="mt-1 text-sm leading-6 text-slate-500">{label}</div>
    </div>
  );
}

export function HeroSection({ content }) {
  return (
    <section id="home" className="relative">
      <div className="soft-panel-strong relative overflow-hidden rounded-[36px] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(255,255,255,0)_45%),linear-gradient(135deg,_rgba(200,247,238,0.42),_rgba(223,228,255,0.42)_48%,_rgba(255,232,245,0.34)_100%)]" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex max-w-max items-center gap-3 rounded-full border border-white/90 bg-white/78 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_14px_30px_rgba(102,131,165,0.12)]">
                <SparkleIcon className="h-4 w-4 text-emerald-500" />
                {content.availability}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-[30px] border border-white/80 bg-white/74 p-5 shadow-[0_20px_48px_rgba(102,131,165,0.12)] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.26em] text-sky-700/80">
                      Featured Banner
                    </p>
                    <h2 className="font-display mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                      {content.featuredCard.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {content.featuredCard.copy}
                    </p>
                  </div>
                  <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                    {content.featuredCard.label}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.34em] text-sky-700/80">
                  {content.eyebrow}
                </p>
                <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] text-slate-900 sm:text-5xl lg:text-[4.35rem]">
                  {content.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  {content.copy}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={content.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(59,88,126,0.28)] transition hover:-translate-y-0.5"
                >
                  {content.primaryCta.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href={content.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/78 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_34px_rgba(102,131,165,0.12)] transition hover:-translate-y-0.5"
                >
                  {content.secondaryCta.label}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid gap-3 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <StatCard key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>
            </Reveal>
          </div>

          <ScaleIn delay={0.14}>
            <DecorativeIllustration />
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
