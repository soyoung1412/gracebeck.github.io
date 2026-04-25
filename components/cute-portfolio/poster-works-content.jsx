import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/site-path";

export function PosterWorksContent({ content }) {
  return (
    <>
      <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr,200px]">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">Poster Works</p>
            <h1 className="font-display mt-3 text-4xl leading-[1.05] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.15rem]">
              {content.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.intro}
            </p>
          </Reveal>

          {content.headerIcon ? (
            <Reveal className="mx-auto w-full max-w-[150px] lg:mx-0 lg:ml-auto lg:max-w-[180px]">
              <div className="overflow-hidden rounded-[28px] border border-white/90 bg-white/90 p-2.5 shadow-[0_20px_40px_rgba(236,168,197,0.14)]">
                <img
                  src={withBasePath(content.headerIcon.image)}
                  alt={content.headerIcon.imageAlt}
                  loading="eager"
                  className="block w-full rounded-[22px] object-contain"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.entries.map((entry, index) => (
          <Reveal key={entry.title} delay={0.04 * index} className="soft-panel rounded-[34px] p-4 sm:p-5">
            <Link href={`/posters/${entry.slug}`} className="group flex h-full flex-col gap-5">
              <article className="flex h-full flex-col gap-5">
                <div className="overflow-hidden rounded-[30px] border border-white/90 bg-white/92 p-3 shadow-[0_20px_38px_rgba(234,175,199,0.16)]">
                  <img
                    src={withBasePath(entry.image)}
                    alt={entry.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="block w-full rounded-[24px] object-contain transition duration-200 group-hover:scale-[1.01]"
                  />
                </div>

                <div className="flex h-full flex-col">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
                    {entry.eyebrow}
                  </p>
                  <h2 className="font-display mt-3 text-2xl font-black text-[var(--foreground-strong)] sm:text-3xl">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--foreground-strong)] sm:text-base">
                    {entry.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-black text-[#c76c92]">
                    Open full poster
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
