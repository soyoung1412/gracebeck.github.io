"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CloseIcon, InstagramIcon } from "@/components/cute-portfolio/icons";
import { Topbar } from "@/components/cute-portfolio/topbar";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { bottomLinks, mainNavigation, socialProfile } from "@/lib/portfolio-content";

export function PortfolioShell({ children, showFooter = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="mx-auto max-w-[1260px] px-4 py-4 sm:px-6 lg:px-8">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="mt-6 grid gap-6">{children}</main>

        {showFooter ? (
          <footer className="mt-8 pb-10">
            <WindowFrame title="links.exe">
              <div className="flex flex-wrap items-center gap-2">
                {bottomLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="desktop-link px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#6a5360]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={socialProfile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="desktop-link gap-2 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#d56f98]"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </WindowFrame>
          </footer>
        ) : null}
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
              <WindowFrame title="menu.exe" className="max-w-[360px]">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-lg font-black uppercase tracking-[0.18em] text-[var(--foreground-strong)]">
                    Grace Beck
                  </p>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="desktop-link icon-button text-[#684f5d]"
                    aria-label="Close navigation"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 grid gap-2">
                  {mainNavigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`desktop-link justify-between gap-3 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] ${
                          isActive
                            ? "bg-[linear-gradient(180deg,#ffd8eb,#f4a4cf)] text-[#5c3450]"
                            : "text-[#6d5662]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {bottomLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="desktop-link px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#684f5c]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={socialProfile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="desktop-link gap-2 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#d56f98]"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </WindowFrame>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
