"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { bottomLinks, mainNavigation, profileCard } from "@/lib/portfolio-content";

function SidebarLink({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`group relative flex items-center gap-3 rounded-full px-4 py-3 text-sm font-extrabold transition ${
        isActive
          ? "bg-[linear-gradient(135deg,#ffc9dd,#f7abc8)] text-[#5c3450] shadow-[0_14px_34px_rgba(243,165,195,0.35)]"
          : "text-[#725b69] hover:bg-white/80 hover:text-[#46313f]"
      }`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
          isActive ? "border-white/90 bg-white/70" : "border-white/80 bg-white/66"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span>{item.label}</span>
    </Link>
  );
}

export function Sidebar({ onNavigate }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col gap-6">
      <div className="soft-panel-strong rounded-[30px] px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#ffd7e5,#fff0f5)] shadow-[0_14px_28px_rgba(244,167,195,0.2)]">
            <div className="font-display text-xl font-black text-[#d9749e]">GB</div>
          </div>
          <div>
            <p className="font-display text-xl font-black leading-none text-[var(--foreground-strong)]">
              Grace Beck
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
              Poster, film, and photo worlds
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {mainNavigation.map((item) => (
            <div key={item.href} onClick={onNavigate}>
              <SidebarLink item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="soft-panel rounded-[28px] p-5">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d07fa0]">
          Studio Card
        </p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-4 rounded-[26px] bg-[linear-gradient(180deg,rgba(255,240,245,0.92),rgba(255,255,255,0.7))] p-4"
        >
          <p className="font-display text-2xl font-black text-[var(--foreground-strong)]">
            {profileCard.title}
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{profileCard.copy}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profileCard.tags.map((tag) => (
              <span key={tag} className="candy-pill px-3 py-1.5 text-xs font-extrabold text-[#725b69]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="soft-panel rounded-[28px] p-4">
        <div className="space-y-2">
          {bottomLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  isActive ? "bg-white/92 text-[#44303c]" : "text-[#7a6370] hover:bg-white/78"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
