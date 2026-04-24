"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackgroundAccents } from "@/components/portfolio/background-accents";
import { SparkleIcon } from "@/components/ui/icons";

function SidebarLink({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`cute-nav-link ${isActive ? "cute-nav-link-active" : ""}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-pink-300/80" />
      {label}
    </Link>
  );
}

export function PageShell({ heading, subheading, children }) {
  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundAccents />

      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 pb-8 pt-5 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="soft-panel cute-sidebar rounded-[32px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#ffcbe3] via-[#ffdff0] to-[#ffeef8] px-4 py-4 shadow-[0_18px_34px_rgba(224,138,179,0.24)]">
            <p className="font-display text-xl font-extrabold tracking-wide text-[#b85d8f]">Lunar Bloom</p>
            <p className="mt-1 text-sm text-[#8c5d76]">Grace Beck Portfolio</p>
          </div>

          <nav className="mt-6 grid gap-2">
            <SidebarLink href="/" label="Home" />
            <SidebarLink href="/projects" label="Projects" />
            <SidebarLink href="/about" label="About" />
            <SidebarLink href="/contact" label="Contact" />
          </nav>

          <div className="mt-6 rounded-3xl border border-white/80 bg-white/70 p-4 shadow-[0_16px_28px_rgba(201,145,176,0.16)]">
            <p className="text-sm font-semibold text-slate-700">Design mood</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Soft pink cards, rounded corners, little sparkles, and clear page-by-page structure.
            </p>
          </div>
        </aside>

        <div className="space-y-6 pb-8">
          <header className="soft-panel rounded-[30px] px-5 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-[#c46b9a]">Pastel navigation</p>
                <h1 className="font-display mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">{heading}</h1>
                <p className="mt-1 text-sm text-slate-500 sm:text-base">{subheading}</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ffd8ea]/80 px-4 py-2 text-sm font-semibold text-[#9e4c79]">
                <SparkleIcon className="h-4 w-4" />
                Cute UX Mode
              </div>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
