import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, SparkleIcon } from "@/components/cute-portfolio/icons";
import { Reveal, ScaleIn } from "@/components/ui/reveal";

function HeroVisual({ visual }) {
  return (
    <ScaleIn className="relative min-h-[250px]">
      <div className={`relative overflow-hidden rounded-[34px] border border-white/90 bg-gradient-to-br ${visual.gradient} p-5 shadow-[0_22px_48px_rgba(236,168,197,0.2)] sm:p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.74),_rgba(255,255,255,0)_55%)]" />
        <div className="floating-a absolute right-6 top-5 rounded-full bg-white/84 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#cf7d9f] shadow-[0_14px_28px_rgba(234,175,199,0.18)]">
          {visual.badge}
        </div>
        <div className="floating-b absolute bottom-5 left-5 rounded-full bg-white/80 px-4 py-2 text-sm font-black text-[#7b6370] shadow-[0_12px_26px_rgba(234,175,199,0.14)]">
          {visual.note}
        </div>

        {visual.image ? (
          <div className="relative ml-auto mt-6 w-full max-w-[280px] overflow-hidden rounded-[28px] border border-white/85 bg-white/82 p-3 shadow-[0_20px_38px_rgba(234,175,199,0.18)]">
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src={visual.image}
                alt={visual.imageAlt}
                width={720}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="relative mx-auto mt-12 h-[220px] max-w-[320px]">
            <div className="absolute inset-x-7 top-0 h-36 rounded-[42px] border border-white/75 bg-white/76 shadow-[0_24px_52px_rgba(236,168,197,0.18)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 rounded-[38px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,228,240,0.82))] shadow-[0_24px_48px_rgba(236,168,197,0.2)]">
              <div className="absolute left-8 top-7 h-16 w-16 rounded-[26px] bg-[linear-gradient(135deg,#ffe7ef,#ffd0e2)] shadow-[0_12px_22px_rgba(236,168,197,0.16)]" />
              <div className="absolute left-28 top-8 h-12 w-24 rounded-full bg-[linear-gradient(135deg,#fffdfc,#ffe2ee)] shadow-[0_12px_22px_rgba(236,168,197,0.14)]" />
              <div className="absolute right-10 top-8 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd9e6,#ffc5d9)] text-[#cf7d9f] shadow-[0_14px_28px_rgba(236,168,197,0.16)]">
                <SparkleIcon className="h-6 w-6" />
              </div>
              <div className="absolute bottom-8 left-9 right-9 h-14 rounded-[24px] bg-white/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]" />
            </div>
          </div>
        )}
      </div>
    </ScaleIn>
  );
}

export function PageHero({ content }) {
  return (
    <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <Reveal>
            <p className="font-display text-sm font-black uppercase tracking-[0.34em] text-[#d27b9c]">
              {content.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.15rem]">
              {content.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.copy}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={content.primaryCta.href} className="candy-button candy-button-primary">
                {content.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href={content.secondaryCta.href} className="candy-button candy-button-secondary">
                {content.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
          {content.stats ? (
            <Reveal delay={0.2}>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[26px] border border-white/90 bg-white/78 px-4 py-4 shadow-[0_14px_32px_rgba(234,175,199,0.14)]"
                  >
                    <p className="font-display text-3xl font-black text-[var(--foreground-strong)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>

        <HeroVisual visual={content.visual} />
      </div>
    </section>
  );
}
