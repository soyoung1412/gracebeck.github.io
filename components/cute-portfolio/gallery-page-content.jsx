import Image from "next/image";
import Link from "next/link";
import { Reveal, ScaleIn } from "@/components/ui/reveal";

export function GalleryPageContent({ content }) {
  return (
    <>
      <section className="soft-panel-strong overflow-hidden rounded-[38px] px-5 py-6 sm:px-8 sm:py-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">
          <div>
            <Reveal>
              <h1 className="font-display text-4xl leading-[1.05] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.15rem]">
                {content.title}
              </h1>
            </Reveal>
          </div>

          <ScaleIn className="mx-auto w-full max-w-[220px]">
            <div className="overflow-hidden rounded-[32px] border border-white/90 bg-white/90 p-3 shadow-[0_24px_48px_rgba(236,168,197,0.16)]">
              <Image
                src={content.icon}
                alt={content.iconAlt}
                width={900}
                height={900}
                priority
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </ScaleIn>
        </div>
      </section>

      <Reveal className="soft-panel rounded-[34px] p-3 sm:p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {content.photos.map((photo, index) => (
            <figure
              key={photo.slug ?? photo.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[28px] border border-white/90 bg-white/92 p-2 shadow-[0_18px_36px_rgba(234,175,199,0.14)]"
            >
              <Link
                href={photo.slug ? `/art/${photo.slug}` : photo.src}
                className="group block"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="block w-full rounded-[22px] transition duration-200 group-hover:scale-[1.01]"
                />
                <figcaption className="px-2 pb-1 pt-3 text-xs font-black uppercase tracking-[0.22em] text-[#c9829f]">
                  Open Full Art
                </figcaption>
              </Link>
            </figure>
          ))}
        </div>
      </Reveal>
    </>
  );
}
