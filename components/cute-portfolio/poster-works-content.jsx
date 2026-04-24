import { Reveal } from "@/components/ui/reveal";

export function PosterWorksContent({ content }) {
  return (
    <>
      <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">Poster Works</p>
          <h1 className="font-display mt-3 text-4xl leading-[1.05] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.15rem]">
            {content.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {content.intro}
          </p>
        </Reveal>
      </section>

      <div className="grid gap-6">
        {content.entries.map((entry, index) => (
          <Reveal key={entry.title} delay={0.04 * index} className="soft-panel rounded-[34px] p-4 sm:p-6">
            <article className="grid items-start gap-6 lg:grid-cols-[minmax(0,380px),1fr]">
              <div className="overflow-hidden rounded-[30px] border border-white/90 bg-white/92 p-3 shadow-[0_20px_38px_rgba(234,175,199,0.16)]">
                <img
                  src={entry.image}
                  alt={entry.imageAlt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="block w-full rounded-[24px] object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
                  {entry.eyebrow}
                </p>
                <h2 className="font-display mt-3 text-3xl font-black text-[var(--foreground-strong)]">
                  {entry.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-[var(--foreground-strong)] sm:text-base">
                  {entry.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
