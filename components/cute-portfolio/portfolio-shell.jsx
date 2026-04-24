"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CloseIcon, InstagramIcon } from "@/components/cute-portfolio/icons";
import { Topbar } from "@/components/cute-portfolio/topbar";
import { bottomLinks, mainNavigation, socialProfile } from "@/lib/portfolio-content";

export function PortfolioShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="floating-a absolute left-[-4rem] top-24 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,199,220,0.78),_rgba(255,199,220,0)_72%)] blur-3xl" />
        <div className="floating-b absolute right-[-5rem] top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,233,242,0.82),_rgba(255,233,242,0)_72%)] blur-3xl" />
        <div className="floating-c absolute bottom-8 left-[58%] h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(255,232,225,0.62),_rgba(255,232,225,0)_72%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-[1260px] px-4 py-4 sm:px-6 lg:px-8">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="mt-8 grid gap-8">{children}</main>

        <footer className="mt-12 pb-10">
          <div className="soft-panel rounded-[30px] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-2xl font-black text-[var(--foreground-strong)]">
                  Grace Beck
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
                  Separate pages for photography, art, film, and poster works.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {bottomLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-white/84 px-4 py-2 text-sm font-black text-[#6a5360] shadow-[0_10px_22px_rgba(234,175,199,0.12)] transition hover:-translate-y-0.5"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={socialProfile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffe5ee,#ffffff)] px-4 py-2 text-sm font-black text-[#d56f98] shadow-[0_10px_22px_rgba(234,175,199,0.12)] transition hover:-translate-y-0.5"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(69,39,53,0.18)] backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="p-4"
            >
              <div className="soft-panel-strong max-w-[360px] rounded-[30px] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-black text-[var(--foreground-strong)]">
                      Grace Beck
                    </p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-[#cf7d9e]">
                      Home • Photography • Art • Film • Poster Works
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/86 text-[#684f5d] shadow-[0_12px_30px_rgba(234,175,199,0.18)]"
                    aria-label="Close navigation"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-6 grid gap-3">
                  {mainNavigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 rounded-[22px] px-4 py-3 text-sm font-black transition ${
                          isActive
                            ? "bg-[linear-gradient(135deg,#ffc9dd,#f7abc8)] text-[#5c3450] shadow-[0_14px_32px_rgba(243,165,195,0.24)]"
                            : "bg-white/80 text-[#6d5662]"
                        }`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/90 bg-white/82">
                          <Icon className="h-4 w-4" />
                        </span>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {bottomLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-full bg-white/84 px-4 py-2 text-sm font-black text-[#684f5c]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={socialProfile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffe6ef,#ffffff)] px-4 py-2 text-sm font-black text-[#d56f98]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
