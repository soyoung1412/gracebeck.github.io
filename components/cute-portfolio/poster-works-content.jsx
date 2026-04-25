import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { withBasePath } from "@/lib/site-path";

export function PosterWorksContent({ content }) {
  return (
    <>
      <Reveal>
        <WindowFrame title="posters.exe">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr,200px]">
            <div>
              <h1 className="font-display text-4xl leading-[1.05] uppercase tracking-[0.12em] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.15rem]">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                {content.intro}
              </p>
            </div>

            {content.headerIcon ? (
              <div className="mx-auto w-full max-w-[150px] lg:mx-0 lg:ml-auto lg:max-w-[180px]">
                <div className="overflow-hidden border-2 border-[var(--line-strong)] bg-white p-2.5 shadow-[var(--shadow-soft)]">
                  <img
                    src={withBasePath(content.headerIcon.image)}
                    alt={content.headerIcon.imageAlt}
                    loading="eager"
                    className="block w-full object-contain"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </WindowFrame>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.entries.map((entry, index) => (
          <Reveal key={entry.title} delay={0.04 * index}>
            <Link href={`/posters/${entry.slug}`} className="group block h-full">
              <article className="window-panel h-full">
                <div className="window-titlebar">
                  <span className="window-title">{entry.eyebrow}</span>
                  <span className="window-controls" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div className="window-body flex h-full flex-col gap-5">
                  <div className="overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)]">
                    <img
                      src={withBasePath(entry.image)}
                      alt={entry.imageAlt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="block w-full object-contain transition duration-200 group-hover:scale-[1.01]"
                    />
                  </div>

                  <div className="flex h-full flex-col">
                    <h2 className="font-display text-2xl font-black uppercase tracking-[0.08em] text-[var(--foreground-strong)] sm:text-3xl">
                      {entry.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground-strong)] sm:text-base">
                      {entry.description}
                    </p>
                    <span className="mt-5 inline-flex font-display text-sm font-black uppercase tracking-[0.12em] text-[#c76c92]">
                      Open full poster
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
