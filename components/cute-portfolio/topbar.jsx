"use client";

import { BellIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/cute-portfolio/icons";

export function Topbar({ searchPlaceholder, onMenu }) {
  return (
    <div className="soft-panel-strong sticky top-4 z-20 rounded-[28px] px-4 py-4 sm:px-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/90 bg-white/80 text-[#6b5561] shadow-[0_12px_28px_rgba(234,175,199,0.2)] lg:hidden"
          aria-label="Open navigation"
        >
          <MenuIcon className="h-5 w-5" />
        </button>

        <div className="flex flex-1 items-center gap-3 rounded-full border border-white/90 bg-white/88 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <SearchIcon className="h-4 w-4 text-[#d88cac]" />
          <input
            type="text"
            aria-label="Search the portfolio"
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm font-semibold text-[#755d6a] outline-none placeholder:text-[#c59aab]"
          />
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-[linear-gradient(135deg,#ffe7ef,#ffd3e3)] text-[#d9779f] shadow-[0_14px_28px_rgba(243,167,196,0.22)]"
            aria-label="Favorites"
          >
            <HeartIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-[linear-gradient(135deg,#ffe7ef,#ffd3e3)] text-[#d9779f] shadow-[0_14px_28px_rgba(243,167,196,0.22)]"
            aria-label="Notifications"
          >
            <BellIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
