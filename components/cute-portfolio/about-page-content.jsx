import Image from "next/image";
import { Reveal, ScaleIn } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { withBasePath } from "@/lib/site-path";

export function AboutPageContent({ content }) {
  return (
    <div className="grid gap-6">
      <WindowFrame title="about_grace.txt">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <ScaleIn className="relative">
            <div className="relative overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)]">
              <Image
                src={withBasePath(content.image)}
                alt={content.imageAlt}
                width={900}
                height={1200}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </ScaleIn>

          <Reveal>
            <h1 className="font-display text-4xl font-black uppercase tracking-[0.12em] text-[var(--foreground-strong)] sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--foreground-strong)] sm:text-lg">
              {content.copy}
            </p>
          </Reveal>
        </div>
      </WindowFrame>

      {content.notes?.length ? (
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
      ) : null}
    </div>
  );
}
