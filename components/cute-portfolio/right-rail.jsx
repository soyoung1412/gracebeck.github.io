import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparkleIcon } from "@/components/cute-portfolio/icons";
import { railProfile } from "@/lib/portfolio-content";

export function RightRail({ rail }) {
  return (
    <aside className="grid gap-5 lg:grid-cols-2 xl:grid-cols-1">
      <div className="soft-panel-strong rounded-[30px] p-5">
        <div className="flex items-start gap-4">
          <div className="overflow-hidden rounded-[22px] border border-white/90 bg-white/90 shadow-[0_14px_32px_rgba(234,175,199,0.18)]">
            <Image
              src={railProfile.image}
              alt={railProfile.alt}
              width={92}
              height={92}
              className="h-[92px] w-[92px] object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-xl font-black text-[var(--foreground-strong)]">
              {railProfile.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{railProfile.role}</p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#fff1f6] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#d47f9f]">
              <SparkleIcon className="h-3 w-3" />
              {railProfile.status}
            </p>
          </div>
        </div>
      </div>

      <div className="soft-panel rounded-[30px] p-5">
        <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d47f9f]">
          {rail.paletteTitle}
        </p>
        <div className="mt-4 grid gap-3">
          {rail.palette.map((swatch) => (
            <div key={swatch.name} className="flex items-center gap-3 rounded-[22px] bg-white/84 px-3 py-3 shadow-[0_10px_24px_rgba(234,175,199,0.12)]">
              <span className="h-10 w-10 rounded-2xl border border-white/85" style={{ background: swatch.color }} />
              <div>
                <p className="text-sm font-black text-[#594350]">{swatch.name}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b08a99]">
                  {swatch.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="soft-panel rounded-[30px] p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d47f9f]">
              {rail.listTitle}
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{rail.listCopy}</p>
          </div>
          <SparkleIcon className="h-5 w-5 text-[#f093b6]" />
        </div>

        <div className="mt-4 grid gap-3">
          {rail.list.map((item) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              className="flex items-center justify-between gap-3 rounded-[24px] border border-white/90 bg-[linear-gradient(135deg,#fff3f8,#ffffff)] px-4 py-3 text-[#614b57] shadow-[0_12px_26px_rgba(234,175,199,0.14)] transition hover:-translate-y-0.5"
            >
              <div>
                <p className="text-sm font-black">{item.title}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c191a4]">
                  {item.subtitle}
                </p>
              </div>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>

      <div className="soft-panel-strong rounded-[30px] bg-[linear-gradient(180deg,rgba(255,220,234,0.82),rgba(255,255,255,0.82))] p-5">
        <p className="text-xs font-black uppercase tracking-[0.26em] text-[#d47f9f]">
          {rail.noteTitle}
        </p>
        <p className="font-display mt-3 text-2xl font-black leading-tight text-[var(--foreground-strong)]">
          {rail.noteHeading}
        </p>
        <p className="mt-3 text-sm leading-7 text-[#7f6673]">{rail.noteCopy}</p>
      </div>
    </aside>
  );
}
