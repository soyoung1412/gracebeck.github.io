import Link from "next/link";

export function SiteFooter({ socialLinks }) {
  return (
    <footer id="footer" className="soft-panel mt-4 rounded-[30px] px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-extrabold text-slate-900">Grace Beck</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Pastel anime-inspired portfolio UI built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="rounded-full border border-white/85 bg-white/76 px-4 py-2 text-sm font-semibold text-slate-600 shadow-[0_14px_30px_rgba(102,131,165,0.1)] transition hover:-translate-y-0.5 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
