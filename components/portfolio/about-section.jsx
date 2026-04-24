import Image from "next/image";
import { Reveal, ScaleIn } from "@/components/ui/reveal";

export function AboutSection({ content }) {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="soft-panel-strong overflow-hidden rounded-[36px] p-5 sm:p-7 lg:p-9">
        <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <ScaleIn className="relative">
            <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(200,247,238,0.95),_rgba(200,247,238,0)_72%)] blur-2xl sm:-left-6 sm:h-36 sm:w-36" />
            <div className="absolute -bottom-6 right-2 h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(223,228,255,0.92),_rgba(223,228,255,0)_72%)] blur-2xl sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/85 bg-white/72 p-3 shadow-[0_28px_65px_rgba(102,131,165,0.16)] sm:p-4">
              <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.75),_rgba(244,249,255,0.88))]">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  width={900}
                  height={1125}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </ScaleIn>

          <Reveal className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.32em] text-sky-700/80">
              {content.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-slate-900 sm:text-5xl">
              {content.title}
            </h2>

            <div className="mt-6 h-px w-24 bg-gradient-to-r from-sky-300/90 via-emerald-200/90 to-transparent" />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {content.copy}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/90 bg-white/82 px-4 py-2 text-sm font-semibold text-slate-600 shadow-[0_14px_30px_rgba(102,131,165,0.08)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
