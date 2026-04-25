import Image from "next/image";
import Link from "next/link";
import { Reveal, ScaleIn } from "@/components/ui/reveal";
import { withBasePath } from "@/lib/site-path";

const masonryVariants = [
  {
    key: "plain",
    cardClass: "masonry-card sm:translate-y-0",
    frameClass: "masonry-frame masonry-frame--plain p-3"
  },
  {
    key: "paper",
    cardClass: "masonry-card sm:translate-y-6",
    frameClass: "masonry-frame masonry-frame--paper p-4"
  },
  {
    key: "ink",
    cardClass: "masonry-card sm:-translate-y-2",
    frameClass: "masonry-frame masonry-frame--ink p-3"
  },
  {
    key: "airy",
    cardClass: "masonry-card sm:translate-y-10",
    frameClass: "masonry-frame masonry-frame--airy p-0"
  }
];

export function GalleryPageContent({ content }) {
  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-start">
        <Reveal className="relative pt-12">
          <div className="absolute left-0 top-0 sticker-tag -rotate-[3deg]">{content.eyebrow}</div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-[var(--foreground-strong)] sm:text-5xl lg:text-[4.3rem]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--foreground-strong)] sm:text-lg">
            {content.intro}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {content.tags?.map((tag) => (
              <span key={tag} className="sticker-tag bg-white text-[0.68rem] text-[#7a5e8a]">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <ScaleIn className="handmade-card mx-auto w-full max-w-[280px] xl:ml-auto xl:mr-0 xl:mt-8">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-[#e4c5da]" />
            <div className="relative overflow-hidden border-2 border-[var(--line-strong)] bg-white p-3 shadow-[var(--shadow)]">
              <Image
                src={withBasePath(content.icon)}
                alt={content.iconAlt}
                width={900}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </ScaleIn>
      </section>

      <div className="masonry-flow">
        {content.photos.map((photo, index) => {
          const variant = masonryVariants[index % masonryVariants.length];
          const href = photo.slug ? `/art/${photo.slug}` : withBasePath(photo.src);

          return (
            <figure
              key={photo.slug ?? photo.src}
              className={variant.cardClass}
              data-variant={variant.key}
            >
              <Link
                href={href}
                target={photo.slug ? undefined : "_blank"}
                rel={photo.slug ? undefined : "noreferrer"}
                className="group block"
              >
                <div className={variant.frameClass}>
                  <div className="masonry-image-wrap">
                    <img
                      src={withBasePath(photo.src)}
                      alt={photo.alt}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="masonry-image"
                    />
                  </div>
                  <figcaption className="masonry-caption">Open Full View</figcaption>
                </div>
              </Link>
            </figure>
          );
        })}
      </div>
    </>
  );
}
