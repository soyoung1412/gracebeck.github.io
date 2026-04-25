import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { Reveal } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
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
      <Reveal>
        <WindowFrame title={`${poster.title.toLowerCase()}.png`}>
          <Link
            href="/posters"
            className="desktop-link px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#6a5360]"
          >
            Back to Poster Works
          </Link>
          <h1 className="font-display mt-5 text-4xl leading-[1.05] uppercase tracking-[0.12em] text-[var(--foreground-strong)] sm:text-5xl">
            {poster.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--foreground-strong)] sm:text-lg">
            {poster.description}
          </p>
        </WindowFrame>
      </Reveal>

      <Reveal>
        <WindowFrame title="full_view.png">
          <div className="overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)]">
            <img
              src={withBasePath(poster.image)}
              alt={poster.imageAlt}
              loading="eager"
              className="mx-auto block max-h-[85vh] w-full object-contain"
            />
          </div>
        </WindowFrame>
      </Reveal>
    </PortfolioShell>
  );
}
