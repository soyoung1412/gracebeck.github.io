"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstagramIcon, MenuIcon } from "@/components/cute-portfolio/icons";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { mainNavigation, posterBadge, socialProfile } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site-path";

export function Topbar({ onMenu }) {
  const pathname = usePathname();

  return (
    <WindowFrame title="gracebeck.exe" className="sticky top-4 z-20">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-[0.22em] text-[var(--foreground-strong)] sm:text-xl"
        >
          Grace Beck
        </Link>

        <nav className="candy-scroll hidden flex-1 items-center gap-2 overflow-x-auto md:flex">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`desktop-link px-4 py-2 text-sm font-black uppercase tracking-[0.14em] ${
                  isActive
                    ? "bg-[linear-gradient(180deg,#ffd8eb,#f4a4cf)] text-[#5d355f]"
                    : "text-[#6f5a85]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={socialProfile.instagram}
            target="_blank"
            rel="noreferrer"
            className="desktop-link icon-button text-[#d86f99]"
            aria-label="Open Instagram profile"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          <Link
            href={posterBadge.href}
            aria-label="Open Poster Works shortcut"
            className="desktop-link gap-2 px-2 py-2 text-[#5d355f]"
          >
            <Image
              src={withBasePath(posterBadge.image)}
              alt={posterBadge.imageAlt}
              width={896}
              height={1195}
              className="h-9 w-9 object-contain"
            />
            <span className="hidden font-display text-[0.72rem] font-black uppercase tracking-[0.18em] lg:block">
              {posterBadge.label}
            </span>
          </Link>

          <button
            type="button"
            onClick={onMenu}
            className="desktop-link icon-button text-[#6b5561] md:hidden"
            aria-label="Open navigation"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </WindowFrame>
  );
}
