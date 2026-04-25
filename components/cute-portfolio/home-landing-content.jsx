import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { withBasePath } from "@/lib/site-path";

export function HomeLandingContent({ content }) {
  return (
    <>
      <Reveal>
        <WindowFrame title="home.txt" className="mx-auto max-w-[900px]">
          <div className="mx-auto grid max-w-[860px] gap-6 sm:gap-8">
            <div className="mx-auto w-full max-w-[220px] overflow-hidden border-2 border-[var(--line-strong)] bg-white p-2 shadow-[var(--shadow-soft)] sm:max-w-[240px]">
              <img
                src={withBasePath(content.image)}
                alt={content.imageAlt}
                loading="eager"
                className="block aspect-[2/3] w-full object-cover"
              />
            </div>

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
        </WindowFrame>
      </Reveal>

      <Reveal>
        <WindowFrame title="posters.exe">
          <div className="grid gap-5">
            <Link href={content.posterPreview.href} className="group block">
              <div className="grid items-center gap-6 md:grid-cols-[260px,1fr]">
                <div className="overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)]">
                  <img
                    src={withBasePath(content.posterPreview.image)}
                    alt={content.posterPreview.imageAlt}
                    loading="eager"
                    className="block w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="font-display text-2xl font-black uppercase tracking-[0.12em] text-[var(--foreground-strong)] sm:text-3xl">
                    {content.posterPreview.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {content.posterPreview.copy}
                  </p>
                  <span className="desktop-link mt-4 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#5d3450]">
                    Go to Poster Works
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </WindowFrame>
      </Reveal>
    </>
  );
}
