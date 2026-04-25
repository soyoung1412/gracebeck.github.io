import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { Reveal } from "@/components/ui/reveal";
import { artPage, getArtPhotoBySlug } from "@/lib/portfolio-content";

export function generateStaticParams() {
  return artPage.photos.map((photo) => ({
    slug: photo.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const photo = getArtPhotoBySlug(slug);

  return {
    title: photo ? `${photo.title} | Grace Beck` : "Art | Grace Beck"
  };
}

export default async function ArtDetailPage({ params }) {
  const { slug } = await params;
  const photo = getArtPhotoBySlug(slug);

  if (!photo) {
    notFound();
  }

  return (
    <PortfolioShell>
      <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
        <Reveal>
          <Link
            href="/art"
            className="inline-flex rounded-full bg-white/84 px-4 py-2 text-sm font-black text-[#6a5360] shadow-[0_10px_22px_rgba(234,175,199,0.12)] transition hover:-translate-y-0.5"
          >
            Back to Art
          </Link>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.26em] text-[#d27b9c]">
            Grace Beck Art
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[1.05] text-[var(--foreground-strong)] sm:text-5xl">
            {photo.title}
          </h1>
        </Reveal>
      </section>

      <Reveal className="soft-panel rounded-[34px] p-4 sm:p-6">
        <div className="overflow-hidden rounded-[30px] border border-white/90 bg-white/92 p-3 shadow-[0_20px_38px_rgba(234,175,199,0.16)]">
          <img
            src={photo.src}
            alt={photo.alt}
            loading="eager"
            className="mx-auto block max-h-[85vh] w-full rounded-[24px] object-contain"
          />
        </div>
      </Reveal>
    </PortfolioShell>
  );
}
