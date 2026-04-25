import Image from "next/image";
import Link from "next/link";
import { Reveal, ScaleIn } from "@/components/ui/reveal";
import { WindowFrame } from "@/components/cute-portfolio/window-frame";
import { withBasePath } from "@/lib/site-path";

export function GalleryPageContent({ content }) {
  return (
    <>
      <Reveal>
        <WindowFrame title={`${content.title.toLowerCase()}.exe`}>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">
            <div>
              <h1 className="font-display text-4xl leading-[1.05] uppercase tracking-[0.12em] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.15rem]">
                {content.title}
              </h1>
            </div>

            <ScaleIn className="mx-auto w-full max-w-[220px]">
              <div className="overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow-soft)]">
                <Image
                  src={withBasePath(content.icon)}
                  alt={content.iconAlt}
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </WindowFrame>
      </Reveal>

      <Reveal>
        <WindowFrame title="gallery.view" bodyClassName="p-3 sm:p-4">
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
            {content.photos.map((photo, index) => (
              <figure
                key={photo.slug ?? photo.src}
                className="mb-4 break-inside-avoid overflow-hidden border-2 border-[var(--line-strong)] bg-white p-2 shadow-[var(--shadow-soft)]"
              >
                <Link
                  href={photo.slug ? `/art/${photo.slug}` : withBasePath(photo.src)}
                  className="group block"
                >
                  <img
                    src={withBasePath(photo.src)}
                    alt={photo.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="block w-full transition duration-200 group-hover:scale-[1.01]"
                  />
                  <figcaption className="px-2 pb-1 pt-3 font-display text-xs font-black uppercase tracking-[0.18em] text-[#c9829f]">
                    Open Full View
                  </figcaption>
                </Link>
              </figure>
            ))}
          </div>
        </WindowFrame>
      </Reveal>
    </>
  );
}
