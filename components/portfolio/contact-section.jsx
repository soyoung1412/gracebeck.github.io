import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function ContactSection({ content }) {
  return (
    <section id="contact" className="scroll-mt-28">
      <Reveal className="soft-panel-strong rounded-[36px] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <SectionHeading eyebrow="Contact" title={content.title} copy={content.copy} />

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={content.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(59,88,126,0.28)] transition hover:-translate-y-0.5"
              >
                {content.primaryCta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href={content.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_34px_rgba(102,131,165,0.12)] transition hover:-translate-y-0.5"
              >
                {content.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.cards.map((card) => (
              <div
                key={card.title}
                className={`rounded-[28px] border border-white/85 bg-gradient-to-br ${card.gradient} p-5 shadow-[0_20px_40px_rgba(102,131,165,0.12)]`}
              >
                <p className="font-display text-xl font-extrabold text-slate-900">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
