import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/site-path";

export function HomeLandingContent({ content }) {
  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="relative">
          <div className="absolute left-0 top-0 sticker-tag -rotate-[2deg]">{content.label}</div>
          <div className="pt-14">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.2rem]">
              {content.title}
            </h1>

            <div className="mt-7 grid gap-4">
              {content.intro.map((paragraph, index) => (
                <Reveal
                  key={paragraph}
                  delay={0.05 * index}
                  className={`handmade-card note-scribble p-5 sm:p-6 ${
                    index === 0
                      ? "paper-card paper-card--bordered max-w-[760px]"
                      : "paper-card paper-card--dashed ml-auto max-w-[700px] bg-[linear-gradient(180deg,#fff8fb,#f7ebf6)]"
                  }`}
                >
                  <p className="text-base leading-8 text-[var(--foreground-strong)] sm:text-[1.08rem] sm:leading-9">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="grid gap-4 self-start">
          <div className="paper-card handmade-card border-0 bg-[linear-gradient(180deg,#f7e5ee,#efe4f6)] p-5 shadow-[var(--shadow-soft)]">
            <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-[#8a6aa3]">
              homepage mood
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--foreground-strong)]">
              soft profile-page energy, handwritten details, little personality notes, and sections that feel collected instead of machine-repeated.
            </p>
          </div>

          <div className="paper-card paper-card--ink handmade-card p-5 sm:p-6">
            <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-[#ffd1e8]">
              personality card
            </p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase tracking-[0.08em] text-white sm:text-6xl">
              {content.moodTitle}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#f6e6f0] sm:text-base">
              {content.moodCopy}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.facts.map((fact) => (
                <div
                  key={fact}
                  className="border border-white/18 bg-white/8 px-3 py-3 text-sm leading-6 text-[#fff0f7] backdrop-blur-sm"
                >
                  {fact}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {content.chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-[#f4bfdc] bg-[#f8e2ed] px-3 py-2 font-display text-[0.72rem] font-black uppercase tracking-[0.15em] text-[#6d4565]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="grid items-start gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <Reveal className="handmade-card relative">
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

        <div className="grid gap-5">
          <Reveal className="paper-card border-0 bg-[linear-gradient(180deg,#fff8fb,#f1e9f7)] p-5 sm:p-6 shadow-[var(--shadow-soft)]">
            <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-[#9b76aa]">
              little note
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[var(--foreground-strong)] sm:text-3xl">
              {content.noteTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {content.noteCopy}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {content.noteList.map((item) => (
                <span
                  key={item}
                  className="sticker-tag bg-white/90 text-[0.68rem] text-[#6f567d]"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="handmade-card">
            <Link href={content.posterPreview.href} className="group block">
              <div className="grid items-center gap-6 border-2 border-[var(--line-strong)] bg-white p-4 shadow-[var(--shadow)] md:grid-cols-[1fr_260px]">
                <div>
                  <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-[#c7789a]">
                    {content.posterPreview.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--foreground-strong)] sm:text-[2.2rem]">
                    {content.posterPreview.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {content.posterPreview.copy}
                  </p>
                  <span className="sticker-tag mt-5 bg-[var(--paper-rose)] text-[#6a4565] transition group-hover:-translate-y-0.5">
                    Go to Poster Works
                  </span>
                </div>

                <div className="masonry-image-wrap border-2 border-[var(--line-strong)] bg-[#fff9fc] p-3 shadow-[var(--shadow-soft)]">
                  <img
                    src={withBasePath(content.posterPreview.image)}
                    alt={content.posterPreview.imageAlt}
                    loading="eager"
                    className="masonry-image block w-full object-cover"
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
