import Image from "next/image";
import { Reveal, ScaleIn } from "@/components/ui/reveal";

export function AboutPageContent({ content }) {
  return (
    <div className="grid gap-6">
      <div className="soft-panel-strong rounded-[36px] p-5 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <ScaleIn className="relative">
            <div className="absolute -left-3 top-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,_rgba(255,203,223,0.92),_rgba(255,203,223,0)_72%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-white/86 p-3 shadow-[0_24px_56px_rgba(234,175,199,0.2)]">
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  width={900}
                  height={1200}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </ScaleIn>

          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-[#d27b9c]">{content.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-black leading-[1.06] text-[var(--foreground-strong)] sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {content.copy}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {content.tags.map((tag) => (
                <span key={tag} className="candy-pill px-4 py-2 text-sm font-black text-[#715966]">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {content.notes.map((item, index) => (
          <Reveal
            key={item.title}
            delay={0.05 * index}
            className={`soft-panel rounded-[30px] bg-gradient-to-br ${item.gradient} p-5 sm:p-6`}
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d27b9c]">{item.eyebrow}</p>
            <h2 className="font-display mt-3 text-2xl font-black text-[var(--foreground-strong)]">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#7d6672]">{item.copy}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
