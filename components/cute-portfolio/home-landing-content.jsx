import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function HomeLandingContent({ content }) {
  return (
    <>
      <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
        <div className="mx-auto grid max-w-[860px] gap-6 sm:gap-8">
          <Reveal className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[28px] border border-white/90 bg-white/90 p-2.5 shadow-[0_20px_40px_rgba(236,168,197,0.14)] sm:max-w-[240px]">
            <img
              src={content.image}
              alt={content.imageAlt}
              loading="eager"
              className="block aspect-[2/3] w-full rounded-[22px] object-cover"
            />
          </Reveal>

          <div className="grid gap-5">
            {content.intro.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.05 * index}>
                <p className="text-base leading-8 text-[var(--foreground-strong)] sm:text-[1.08rem] sm:leading-9">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="soft-panel rounded-[34px] p-4 sm:p-6">
        <Link href={content.posterPreview.href} className="group block">
          <div className="grid items-center gap-6 md:grid-cols-[260px,1fr]">
            <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white/92 p-3 shadow-[0_20px_38px_rgba(234,175,199,0.16)]">
              <img
                src={content.posterPreview.image}
                alt={content.posterPreview.imageAlt}
                loading="eager"
                className="block w-full rounded-[22px] object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
                {content.posterPreview.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-3xl font-black text-[var(--foreground-strong)]">
                {content.posterPreview.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {content.posterPreview.copy}
              </p>
              <span className="mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#ffc9dd,#f8abc9)] px-4 py-2 text-sm font-black text-[#5d3450] shadow-[0_14px_30px_rgba(243,165,195,0.24)] transition group-hover:-translate-y-0.5">
                Go to Poster Works
              </span>
            </div>
          </div>
        </Link>
      </Reveal>
    </>
  );
}
