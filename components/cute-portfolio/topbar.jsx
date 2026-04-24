"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramIcon, MenuIcon } from "@/components/cute-portfolio/icons";
import { mainNavigation, posterBadge, socialProfile } from "@/lib/portfolio-content";

export function Topbar({ onMenu }) {
  const pathname = usePathname();

  return (
    <div className="soft-panel-strong sticky top-4 z-20 rounded-[30px] px-4 py-4 sm:px-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="min-w-0 flex-1 md:flex-none">
          <p className="font-display text-2xl font-black text-[var(--foreground-strong)] sm:text-[1.9rem]">
            Grace Beck
          </p>
          <p className="mt-1 text-[11px] font-black uppercase tracking-[0.26em] text-[#cc7d9d] sm:text-xs">
            Photography • Art • Film • Poster Works
          </p>
        </Link>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={socialProfile.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/86 text-[#d86f99] shadow-[0_14px_28px_rgba(243,167,196,0.2)] transition hover:-translate-y-0.5"
            aria-label="Open Instagram profile"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          <Link
            href={posterBadge.href}
            aria-label="Open Poster Works shortcut"
            className="floating-b group relative flex items-center gap-2 rounded-full border border-white/90 bg-[linear-gradient(135deg,rgba(255,229,238,0.96),rgba(255,255,255,0.96))] px-2 py-2 shadow-[0_16px_34px_rgba(236,168,197,0.22)] transition hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_left,_rgba(255,204,223,0.55),_rgba(255,204,223,0)_58%)] opacity-0 transition group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-full border border-white/90 bg-white/96 p-1">
              <Image
                src={posterBadge.image}
                alt={posterBadge.imageAlt}
                width={896}
                height={1195}
                className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              />
            </div>
            <div className="relative hidden pr-2 lg:block">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c983a3]">
                {posterBadge.eyebrow}
              </p>
              <p className="font-display text-lg font-black leading-none text-[#5b344b]">
                {posterBadge.label}
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/84 text-[#6b5561] shadow-[0_12px_28px_rgba(234,175,199,0.18)] md:hidden"
            aria-label="Open navigation"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="candy-scroll mt-4 hidden items-center gap-2 overflow-x-auto pb-1 md:flex">
        {mainNavigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2.5 text-sm font-black transition ${
                isActive
                  ? "bg-[linear-gradient(135deg,#ffc9dd,#f8abc9)] text-[#5d3450] shadow-[0_14px_30px_rgba(243,165,195,0.28)]"
                  : "bg-white/72 text-[#765f6b] hover:bg-white/90 hover:text-[#4b3441]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
