"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CloseIcon } from "@/components/cute-portfolio/icons";
import { RightRail } from "@/components/cute-portfolio/right-rail";
import { Sidebar } from "@/components/cute-portfolio/sidebar";
import { Topbar } from "@/components/cute-portfolio/topbar";

export function PortfolioShell({ children, rail, searchPlaceholder }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="floating-a absolute left-[-4rem] top-24 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,199,220,0.78),_rgba(255,199,220,0)_72%)] blur-3xl" />
        <div className="floating-b absolute right-[-5rem] top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(255,233,242,0.82),_rgba(255,233,242,0)_72%)] blur-3xl" />
        <div className="floating-c absolute bottom-8 left-[58%] h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(255,232,225,0.62),_rgba(255,232,225,0)_72%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[255px,minmax(0,1fr),300px]">
          <div className="hidden xl:block">
            <Sidebar />
          </div>

          <div className="min-w-0">
            <Topbar searchPlaceholder={searchPlaceholder} onMenu={() => setMenuOpen(true)} />
            <main className="mt-6 grid gap-6">{children}</main>
          </div>

          <div className="hidden xl:block">
            <div className="sticky top-4">
              <RightRail rail={rail} />
            </div>
          </div>
        </div>

        <div className="mt-6 xl:hidden">
          <RightRail rail={rail} />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(69,39,53,0.18)] backdrop-blur-sm xl:hidden"
          >
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="h-full max-w-[320px] p-4"
            >
              <div className="flex h-full flex-col">
                <div className="mb-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/86 text-[#684f5d] shadow-[0_12px_30px_rgba(234,175,199,0.18)]"
                    aria-label="Close navigation"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </button>
                </div>
                <Sidebar onNavigate={() => setMenuOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
