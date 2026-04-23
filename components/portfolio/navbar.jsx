"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CloseIcon, MenuIcon, SparkleIcon } from "@/components/ui/icons";

export function Navbar({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="soft-panel sticky top-4 z-30 rounded-[28px] px-4 py-3 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <Link href="#home" className="flex min-w-0 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-white/80 shadow-[0_10px_30px_rgba(122,175,211,0.16)]">
            <span className="font-display text-base font-extrabold text-sky-700">GB</span>
          </span>
          <div className="min-w-0">
            <p className="font-display truncate text-lg font-extrabold tracking-[0.04em] text-slate-900">
              Grace Beck
            </p>
            <p className="truncate text-sm text-slate-500">Pastel-first digital portfolio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white/75 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(59,88,126,0.28)] transition hover:-translate-y-0.5"
          >
            Say Hello
            <SparkleIcon className="h-4 w-4 text-emerald-200" />
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-white/80 text-slate-700 shadow-[0_10px_30px_rgba(122,175,211,0.16)] md:hidden"
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mt-4 grid gap-2 md:hidden"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-white/75 bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(122,175,211,0.12)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(59,88,126,0.24)]"
            >
              Say Hello
            </Link>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
