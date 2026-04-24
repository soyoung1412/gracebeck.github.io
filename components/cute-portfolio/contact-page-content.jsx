import Link from "next/link";
import { ArrowRightIcon } from "@/components/cute-portfolio/icons";
import { Reveal } from "@/components/ui/reveal";

export function ContactPageContent({ content }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
      <Reveal className="soft-panel-strong rounded-[36px] p-5 sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.34em] text-[#d27b9c]">{content.eyebrow}</p>
        <h1 className="font-display mt-4 text-4xl font-black leading-[1.08] text-[var(--foreground-strong)] sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {content.copy}
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {content.cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[28px] border border-white/90 bg-gradient-to-br ${card.gradient} p-5 shadow-[0_16px_34px_rgba(234,175,199,0.14)]`}
            >
              <p className="font-display text-2xl font-black text-[var(--foreground-strong)]">
                {card.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#7d6672]">{card.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6">
        <Reveal className="soft-panel rounded-[34px] p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">Say Hello</p>
          <div className="mt-4 grid gap-3">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-4 rounded-[24px] border border-white/90 bg-white/86 px-4 py-4 text-sm font-black text-[#644e5b] shadow-[0_12px_28px_rgba(234,175,199,0.12)] transition hover:-translate-y-0.5"
              >
                <span>{link.label}</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="soft-panel rounded-[34px] p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">Working Style</p>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-[#7d6672]">
            {content.process.map((step) => (
              <li
                key={step}
                className="rounded-[22px] border border-white/90 bg-white/84 px-4 py-3 shadow-[0_10px_22px_rgba(234,175,199,0.1)]"
              >
                {step}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
