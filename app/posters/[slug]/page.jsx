import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { Reveal } from "@/components/ui/reveal";
import { getPosterWorkBySlug, posterWorksPage } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site-path";

export function generateStaticParams() {
  return posterWorksPage.entries.map((entry) => ({
    slug: entry.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const poster = getPosterWorkBySlug(slug);

  return {
    title: poster ? `${poster.title} | Grace Beck` : "Poster Works | Grace Beck"
  };
}

export default async function PosterDetailPage({ params }) {
  const { slug } = await params;
  const poster = getPosterWorkBySlug(slug);

  if (!poster) {
    notFound();
  }

  return (
    <PortfolioShell>
      <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
        <Reveal>
          <Link
            href="/posters"
            className="inline-flex rounded-full bg-white/84 px-4 py-2 text-sm font-black text-[#6a5360] shadow-[0_10px_22px_rgba(234,175,199,0.12)] transition hover:-translate-y-0.5"
          >
            Back to Poster Works
          </Link>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
            {poster.eyebrow}
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[1.05] text-[var(--foreground-strong)] sm:text-5xl">
            {poster.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--foreground-strong)] sm:text-lg">
            {poster.description}
          </p>
        </Reveal>
      </section>

      <Reveal className="soft-panel rounded-[34px] p-4 sm:p-6">
        <div className="overflow-hidden rounded-[30px] border border-white/90 bg-white/92 p-3 shadow-[0_20px_38px_rgba(234,175,199,0.16)]">
          <img
            src={withBasePath(poster.image)}
            alt={poster.imageAlt}
            loading="eager"
            className="mx-auto block max-h-[85vh] w-full rounded-[24px] object-contain"
          />
        </div>
      </Reveal>
    </PortfolioShell>
  );
}
