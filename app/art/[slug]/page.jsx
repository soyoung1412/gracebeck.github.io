import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/cute-portfolio/portfolio-shell";
import { Reveal } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { artPage, getArtPhotoBySlug } from "@/lib/portfolio-content";
import { withBasePath } from "@/lib/site-path";

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
      <Reveal>
        <WindowFrame title={`${photo.title.toLowerCase()}.png`}>
          <Link
            href="/art"
            className="desktop-link px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#6a5360]"
          >
            Back to Art
          </Link>
          <h1 className="font-display mt-5 text-4xl leading-[1.05] uppercase tracking-[0.12em] text-[var(--foreground-strong)] sm:text-5xl">
            {photo.title}
          </h1>
        </WindowFrame>
      </Reveal>

      <Reveal>
        <WindowFrame title="full_view.png">
          <div className="overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)]">
            <img
              src={withBasePath(photo.src)}
              alt={photo.alt}
              loading="eager"
              className="mx-auto block max-h-[85vh] w-full object-contain"
            />
          </div>
        </WindowFrame>
      </Reveal>
    </PortfolioShell>
  );
}
