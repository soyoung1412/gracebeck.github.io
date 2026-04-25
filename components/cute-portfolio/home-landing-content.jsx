import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/site-path";

export function HomeLandingContent({ content }) {
  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="relative">
          {content.label ? (
            <div className="absolute left-0 top-0 sticker-tag -rotate-[2deg]">{content.label}</div>
          ) : null}
          <div className="pt-14">
            <h1 className="max-w-4xl font-display text-4xl font-black tracking-[0.04em] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.2rem]">
              {content.title}
            </h1>
          </div>
        </Reveal>

        <Reveal className="handmade-card relative self-start">
          <div className="absolute -left-2 top-4 z-10 sticker-tag rotate-[-4deg]">img_9516</div>
          <div className="relative mt-8 max-w-[430px] border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow)]">
            <div className="absolute -right-3 -top-3 h-14 w-14 border-2 border-[var(--line-strong)] bg-[var(--paper-rose)] opacity-80" />
            <div className="masonry-image-wrap">
              <img
                src={withBasePath(content.image)}
                alt={content.imageAlt}
                loading="eager"
                className="masonry-image block aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <Reveal className="paper-card paper-card--ink handmade-card p-5 sm:p-6">
          <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-[#ffd1e8]">
            {content.aboutTitle}
          </p>
          <div className="mt-4 grid gap-4">
            {content.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-sm leading-7 text-[#f6e6f0] sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-5 font-display text-sm font-black tracking-[0.12em] text-[#ffd5ea] sm:text-base">
            {content.tagsLine}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {content.previews.map((preview, index) => (
            <Reveal
              key={preview.href}
              delay={0.04 * index}
              className={`handmade-card ${
                preview.style === "wide"
                  ? "sm:col-span-2"
                  : preview.style === "tall"
                    ? "sm:row-span-2"
                    : ""
              }`}
            >
              <Link href={preview.href} className="group block h-full">
                <div className="border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)] h-full">
                  <div className="masonry-image-wrap bg-[#fff9fc]">
                    <img
                      src={withBasePath(preview.image)}
                      alt={preview.imageAlt}
                      loading="eager"
                      className={`masonry-image block w-full object-cover ${
                        preview.style === "tall"
                          ? "aspect-[4/5]"
                          : preview.style === "wide"
                            ? "aspect-[16/9]"
                            : "aspect-square"
                      }`}
                    />
                  </div>
                  <p className="mt-3 font-display text-sm font-black uppercase tracking-[0.16em] text-[#7a5d8c]">
                    {preview.title}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
