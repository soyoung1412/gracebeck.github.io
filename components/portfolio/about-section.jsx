import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

function StrengthCard({ strength, delay }) {
  return (
    <Reveal
      delay={delay}
      className="lift-card rounded-[28px] border border-white/85 bg-white/74 p-5 shadow-[0_18px_40px_rgba(102,131,165,0.1)]"
    >
      <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${strength.gradient} shadow-[0_14px_26px_rgba(122,175,211,0.16)]`} />
      <p className="font-display mt-4 text-2xl font-extrabold text-slate-900">{strength.title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{strength.copy}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700/80">{strength.highlight}</p>
    </Reveal>
  );
}

export function AboutSection({ content, strengths }) {
  return (
    <section id="about" className="grid gap-6 scroll-mt-28 xl:grid-cols-[0.88fr_1.12fr] xl:gap-8">
      <Reveal className="soft-panel rounded-[34px] p-6 sm:p-8">
        <SectionHeading eyebrow="About" title={content.title} copy={content.copy} />

        <div className="mt-6 rounded-[28px] border border-white/85 bg-[linear-gradient(135deg,_rgba(216,241,255,0.82),_rgba(255,255,255,0.72))] p-5 shadow-[0_20px_42px_rgba(102,131,165,0.1)]">
          <p className="font-display text-xl font-extrabold text-slate-900">{content.callout.title}</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">{content.callout.copy}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {content.quickNotes.map((note) => (
              <div
                key={note.label}
                className="rounded-[22px] border border-white/85 bg-white/76 px-4 py-4 shadow-[0_14px_32px_rgba(102,131,165,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{note.label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{note.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {strengths.map((strength, index) => (
          <StrengthCard key={strength.title} strength={strength} delay={0.05 * index} />
        ))}
      </div>
    </section>
  );
}
