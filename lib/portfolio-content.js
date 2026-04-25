import {
  BrushIcon,
  CameraIcon,
  FilmIcon,
  HomeIcon,
  MailIcon,
  PaletteIcon,
  UserIcon
} from "@/components/cute-portfolio/icons";

export const mainNavigation = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Photography", href: "/photography", icon: CameraIcon },
  { label: "Art", href: "/art", icon: BrushIcon },
  { label: "Film", href: "/film", icon: FilmIcon },
  { label: "Poster Works", href: "/posters", icon: PaletteIcon }
];

export const socialProfile = {
  instagram: "https://www.instagram.com/soyoung_forever1412/"
};

export const posterBadge = {
  label: "Poster Works",
  href: "/posters",
  image: "/images/posters-icon.png",
  imageAlt: "Illustrated posters icon created by Grace Beck"
};

export const bottomLinks = [
  { label: "About Grace", href: "/about", icon: UserIcon },
  { label: "Contact", href: "/contact", icon: MailIcon }
];

export const profileCard = {
  title: "Rosebloom Mode",
  copy:
    "A multi-page portfolio with a cleaner top navigation, separate category pages, and a playful poster icon shortcut in the header.",
  tags: ["Top Nav", "Separate Pages", "Soft Pink"]
};

export const railProfile = {
  name: "Grace Beck",
  role: "Poster Design • Film • Photography",
  status: "Open for commissions",
  image: "/images/poster-grace.png",
  alt: "Illustrated poster portrait created by Grace Beck"
};

const sharedPalette = [
  { name: "Petal Pink", note: "Navigation", color: "#ffc7db" },
  { name: "Powder Blush", note: "Panels", color: "#ffe9f2" },
  { name: "Cream Light", note: "Background", color: "#fffdf9" }
];

export const homeLandingPage = {
  label: "profile / archive",
  title: "A soft little internet scrapbook for posters, film sets, event photos, and all the aesthetics I keep collecting.",
  image: "/images/home-mood/infp-home.jpg",
  imageAlt: "Grace Beck taking a photo in front of ornate doors",
  intro: [
    "hi I'm a rising sophmore studying pma, coming from a fine arts major. I like making posters and aesthetic style art. I'm always down to help on film sets and make posters for literally anything! I love taking photos at events!!",
    "I made this website so I can build my own kind of pinterest hehe > - < !!! fun things about me is that I'm INFP I lived in Korea, China, and the states!! I love kdrama&anime!!"
  ],
  moodTitle: "INFP",
  moodCopy:
    "warm, nostalgic, detail-obsessed, and always trying to make the page feel a little more personal than polished in a boring way.",
  facts: [
    "lived in Korea, China, and the states",
    "loves kdrama, anime, and aesthetic style art",
    "always down to help on film sets",
    "loves taking photos at events"
  ],
  chips: ["poster making", "event photos", "film sets", "kdrama", "anime", "little details"],
  noteTitle: "my little pinterest",
  noteCopy:
    "I wanted the site to feel more like a handmade profile page than a formal portfolio template, so it can hold my work and my personality at the same time.",
  noteList: ["posters for literally anything", "visual storytelling", "soft moods", "cute but intentional UI"],
  posterPreview: {
    href: "/posters",
    image: "/images/home-posters/joseph-verse.png",
    imageAlt: "Jeremiah 29:11 poster created by Grace Beck",
    eyebrow: "Poster Works",
    title: "Open the poster page",
    copy: "See the Jeremiah 29:11 poster, er poster 2, and the special piece using my intro image."
  }
};

export const posterWorksPage = {
  title: "Poster Works",
  intro:
    "A small page of posters and pieces that each carry a lot of personal meaning for me. Click any one to open the full image on its own page.",
  headerIcon: {
    image: "/images/home-posters/poster-header-icon.png",
    imageAlt: "Decorative poster page icon"
  },
  entries: [
    {
      slug: "jeremiah-29-11",
      eyebrow: "Poster 01",
      title: "Jeremiah 29:11",
      image: "/images/home-posters/joseph-verse.png",
      imageAlt: "Jeremiah 29:11 poster",
      description:
        "to my twin bro and bestest friend ever, a sophmore I ran into my senior year who became the most closest friend ever !!"
    },
    {
      slug: "er-poster-2",
      eyebrow: "Poster 02",
      title: "er poster 2",
      image: "/images/home-posters/er-poster-2.png",
      imageAlt: "er poster 2",
      description:
        "1 John 1:7 to the light that came through the midst of all coldest time of my life, who perhaps contributed a lot in me making this website itself, let alone someone I would always ever look up to and thank for - who got me into film making, and poster making hehe!"
    },
    {
      slug: "closest-friend-piece",
      eyebrow: "Poster 03",
      title: "from my closest friend",
      image: "/images/home-posters/intro.jpg",
      imageAlt: "Baek Soyoung portrait poster by a close friend",
      description:
        "this poster is actually not created by me! but my closest friend ever I met in my art academy who had grinded with me all those summer days and will be meeting again this summer - I love you girl"
    }
  ]
};

export function getPosterWorkBySlug(slug) {
  return posterWorksPage.entries.find((entry) => entry.slug === slug);
}

export const homePage = {
  searchPlaceholder: "Search posters, films, galleries...",
  hero: {
    eyebrow: "Grace Beck Portfolio",
    title: "A multi-page portfolio with dedicated spaces for photography, art, film, and poster work.",
    copy:
      "Inspired by portfolio sites with straightforward page navigation, this version makes each category easy to open from the top while keeping your soft, original visual style.",
    primaryCta: {
      label: "Open Poster Works",
      href: "/posters"
    },
    secondaryCta: {
      label: "View Art",
      href: "/art"
    },
    stats: [
      { value: "05", label: "Top-level sections across the portfolio" },
      { value: "04", label: "Creative categories separated into their own pages" },
      { value: "01", label: "Poster icon shortcut pinned in the header" }
    ],
    visual: {
      badge: "Top Navigation",
      note: "Separate pages",
      gradient: "from-[#ffd6e6] via-[#ffeef5] to-[#fff7fb]"
    }
  },
  featuredRoutes: [
    {
      label: "Poster Works",
      title: "Poster Archive",
      year: "Route",
      description:
        "A dedicated page for title treatments, poster systems, campaign art, and visual storytelling through print-inspired design.",
      tags: ["Posters", "Layouts", "Campaigns"],
      href: "/posters",
      previewGradient: "from-[#ffd4e4] via-[#fff5fa] to-[#fff0f6]"
    },
    {
      label: "Film",
      title: "Motion Stories",
      year: "Route",
      description:
        "Short films, concept reels, and motion-led storytelling arranged in a dedicated film view.",
      tags: ["Reels", "Storyboards", "Stills"],
      href: "/film",
      previewGradient: "from-[#ffe6ef] via-[#fffafc] to-[#f9ecff]"
    },
    {
      label: "Photography",
      title: "Photography of Youth",
      year: "Route",
      description:
        "A dedicated gallery built only from the Photography of Youth image series.",
      tags: ["Portraits", "Editorial", "Mood"],
      href: "/photography",
      image: "/images/photography-of-youth/icon.png",
      imageAlt: "Photography of Youth illustrated icon",
      previewGradient: "from-[#fff0f5] via-[#fffdfd] to-[#ffe9e5]"
    },
    {
      label: "Art",
      title: "Art",
      year: "Route",
      description:
        "A dedicated gallery built from your uploaded art pieces.",
      tags: ["Painting", "Studio", "Sketches"],
      href: "/art",
      image: "/images/art-gallery/icon.jpg",
      imageAlt: "Grace Beck painting in the studio",
      previewGradient: "from-[#ffe8ef] via-[#fff7fb] to-[#fff4ee]"
    }
  ],
  noteCards: [
    {
      title: "Top navigation flow",
      copy:
        "The main sections now live across the top of the site so visitors can jump directly between Photography, Art, Film, and Poster Works.",
      gradient: "from-[#fff0f6] via-white to-[#ffe6ef]"
    },
    {
      title: "Poster icon shortcut",
      copy:
        "Your custom poster icon now pops in the header as a playful UX shortcut that links straight to the poster work page.",
      gradient: "from-[#fff8fb] via-white to-[#ffece7]"
    },
    {
      title: "Clear separate pages",
      copy:
        "Home, Photography, Art, Film, and Poster Works now read like individual rooms instead of sections buried inside one long page.",
      gradient: "from-[#fff1f7] via-white to-[#f8efff]"
    }
  ],
  quickLinks: [
    { label: "Go to Photography", href: "/photography" },
    { label: "Go to Art", href: "/art" },
    { label: "Go to Film", href: "/film" },
    { label: "Go to Poster Works", href: "/posters" }
  ]
};

export const homeRail = {
  paletteTitle: "Palette",
  palette: sharedPalette,
  listTitle: "Open Pages",
  listCopy: "Quick jumps across the portfolio",
  list: [
    { title: "Photography", subtitle: "gallery and mood", href: "/photography" },
    { title: "Art", subtitle: "illustration and concept", href: "/art" },
    { title: "Poster Works", subtitle: "posters and layouts", href: "/posters" }
  ],
  noteTitle: "Studio Note",
  noteHeading: "Cleaner structure, softer presentation.",
  noteCopy:
    "The site now feels closer to a straightforward portfolio with page-by-page browsing, while still keeping the pink, rounded visual language."
};

export const graphicDesignPage = {
  searchPlaceholder: "Search posters, campaigns, title cards...",
  hero: {
    eyebrow: "Poster Works",
    title: "Poster design, title treatments, and dreamy layout systems.",
    copy:
      "This page isolates the poster work into its own route, closer to a category portfolio page while still living inside the same soft visual system.",
    primaryCta: {
      label: "View About Page",
      href: "/about"
    },
    secondaryCta: {
      label: "See Film Work",
      href: "/film"
    },
    visual: {
      badge: "Poster Room",
      note: "Warm gradients",
      gradient: "from-[#ffc8db] via-[#ffe8f1] to-[#fff6fa]",
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated poster portrait created by Grace Beck"
    }
  },
  sectionEyebrow: "Selected Poster Works",
  sectionTitle: "A separate page for visual storytelling through type, poster systems, and campaign art.",
  sectionCopy:
    "These cards stand in for a fuller archive of poster work. The layout is built to scale with more projects later without needing to redesign the shell.",
  projects: [
    {
      label: "Poster Series",
      title: "Midnight Bloom",
      year: "2026",
      description:
        "A warm poster sequence built around layered typography, floral framing, and soft cinematic color.",
      tags: ["Poster", "Typography", "Print"],
      previewGradient: "from-[#ffd4e4] via-[#fff7fb] to-[#ffe9e6]"
    },
    {
      label: "Campaign Art",
      title: "Roseglass Release",
      year: "2026",
      description:
        "Launch visuals for a fictional music-and-film crossover project, using nostalgic pink glow and rounded panel composition.",
      tags: ["Campaign", "Art Direction", "Digital"],
      previewGradient: "from-[#ffe6ef] via-[#fff9fc] to-[#fdefff]"
    },
    {
      label: "Editorial Layout",
      title: "Cinema Notes",
      year: "2025",
      description:
        "A magazine-style concept featuring critic pull-quotes, cover mockups, and petal-toned editorial spreads.",
      tags: ["Editorial", "Layout", "Print"],
      previewGradient: "from-[#fff0f6] via-[#fffdfd] to-[#fff1e7]"
    },
    {
      label: "Identity System",
      title: "Pink Archive",
      year: "2025",
      description:
        "A playful brand system translating dreamy internet culture into a clean, gallery-friendly visual identity.",
      tags: ["Branding", "Identity", "System"],
      previewGradient: "from-[#ffe9f2] via-[#fff7fb] to-[#f7efff]"
    }
  ],
  sideCards: [
    {
      eyebrow: "Why separate pages",
      title: "Work feels easier to browse",
      copy:
        "Poster work now lives on its own route, so the viewer can focus on that body of work without scrolling through every medium first.",
      tags: ["Category route", "Clearer UX"],
      gradient: "from-[#fff2f7] via-white to-[#ffe8f1]"
    },
    {
      eyebrow: "Mood board",
      title: "Soft pink, rounded, polished",
      copy:
        "The palette leans cute and gentle, but every card still keeps spacing, contrast, and hierarchy disciplined enough for a real portfolio.",
      tags: ["Pink shell", "Rounded cards"],
      gradient: "from-[#fff8fb] via-white to-[#fff1e8]"
    }
  ]
};

export const graphicDesignRail = {
  paletteTitle: "Poster Colors",
  palette: [
    { name: "Poster Pink", note: "hero cards", color: "#ffcadc" },
    { name: "Soft Cream", note: "surface", color: "#fffdf9" },
    { name: "Type Ink", note: "headings", color: "#4d3b48" }
  ],
  listTitle: "Category Links",
  listCopy: "Move through the portfolio",
  list: [
    { title: "Home", subtitle: "cute dashboard landing", href: "/" },
    { title: "Film", subtitle: "motion category", href: "/film" },
    { title: "Photography", subtitle: "gallery category", href: "/photography" }
  ],
  noteTitle: "Page Intent",
  noteHeading: "Posters get their own room.",
  noteCopy:
    "This route mirrors the category-based portfolio structure you referenced, but with the sweeter app-like styling from your UX inspiration."
};

const artPhotos = [
  {
    slug: "art-studio-01",
    title: "Art Piece 01",
    src: "/images/art-gallery/01.jpg",
    alt: "Grace Beck art piece 1"
  },
  {
    slug: "art-studio-02",
    title: "Art Piece 02",
    src: "/images/art-gallery/02.jpg",
    alt: "Grace Beck art piece 2"
  },
  {
    slug: "art-studio-03",
    title: "Art Piece 03",
    src: "/images/art-gallery/03.jpg",
    alt: "Grace Beck art piece 3"
  },
  {
    slug: "art-studio-04",
    title: "Art Piece 04",
    src: "/images/art-gallery/04.jpg",
    alt: "Grace Beck art piece 4"
  },
  {
    slug: "art-studio-05",
    title: "Art Piece 05",
    src: "/images/art-gallery/05.jpg",
    alt: "Grace Beck art piece 5"
  },
  {
    slug: "cornell-portfolio-01",
    title: "Cornell Portfolio 01",
    src: "/images/art-gallery-cornell/01.png",
    alt: "Cornell portfolio art page 1"
  },
  {
    slug: "cornell-portfolio-02",
    title: "Cornell Portfolio 02",
    src: "/images/art-gallery-cornell/02.png",
    alt: "Cornell portfolio art page 2"
  },
  {
    slug: "cornell-portfolio-05",
    title: "Cornell Portfolio 05",
    src: "/images/art-gallery-cornell/05.png",
    alt: "Cornell portfolio art page 5"
  },
  {
    slug: "cornell-portfolio-06",
    title: "Cornell Portfolio 06",
    src: "/images/art-gallery-cornell/06.png",
    alt: "Cornell portfolio art page 6"
  },
  {
    slug: "cornell-portfolio-07",
    title: "Cornell Portfolio 07",
    src: "/images/art-gallery-cornell/07.png",
    alt: "Cornell portfolio art page 7"
  },
  {
    slug: "cornell-portfolio-08",
    title: "Cornell Portfolio 08",
    src: "/images/art-gallery-cornell/08.png",
    alt: "Cornell portfolio art page 8"
  },
  {
    slug: "cornell-portfolio-09",
    title: "Cornell Portfolio 09",
    src: "/images/art-gallery-cornell/09.png",
    alt: "Cornell portfolio art page 9"
  },
  {
    slug: "cornell-portfolio-10",
    title: "Cornell Portfolio 10",
    src: "/images/art-gallery-cornell/10.png",
    alt: "Cornell portfolio art page 10"
  },
  {
    slug: "cornell-portfolio-11",
    title: "Cornell Portfolio 11",
    src: "/images/art-gallery-cornell/11.png",
    alt: "Cornell portfolio art page 11"
  },
  {
    slug: "cornell-portfolio-12",
    title: "Cornell Portfolio 12",
    src: "/images/art-gallery-cornell/12.png",
    alt: "Cornell portfolio art page 12"
  },
  {
    slug: "cornell-portfolio-13",
    title: "Cornell Portfolio 13",
    src: "/images/art-gallery-cornell/13.png",
    alt: "Cornell portfolio art page 13"
  },
  {
    slug: "cornell-portfolio-14",
    title: "Cornell Portfolio 14",
    src: "/images/art-gallery-cornell/14.png",
    alt: "Cornell portfolio art page 14"
  },
  {
    slug: "cornell-portfolio-15",
    title: "Cornell Portfolio 15",
    src: "/images/art-gallery-cornell/15.png",
    alt: "Cornell portfolio art page 15"
  },
  {
    slug: "cornell-portfolio-16",
    title: "Cornell Portfolio 16",
    src: "/images/art-gallery-cornell/16.png",
    alt: "Cornell portfolio art page 16"
  },
  {
    slug: "cornell-portfolio-17",
    title: "Cornell Portfolio 17",
    src: "/images/art-gallery-cornell/17.png",
    alt: "Cornell portfolio art page 17"
  }
];

export const artPage = {
  eyebrow: "studio archive",
  title: "Art",
  intro:
    "a looser archive of paintings, sketches, material studies, and portfolio pages. I wanted this part to feel like pinning things onto a wall instead of filing them into identical boxes.",
  accent:
    "click any piece to open it larger. some stay quiet and borderless, some feel more like pinned sheets, and some carry a darker note so the page doesn’t all move in one rhythm.",
  tags: ["paintings", "sketches", "portfolio pages", "material studies"],
  icon: "/images/art-gallery/icon.jpg",
  iconAlt: "Grace Beck painting in the studio",
  photos: artPhotos
};

export function getArtPhotoBySlug(slug) {
  return artPhotos.find((photo) => photo.slug === slug);
}

export const artRail = {
  paletteTitle: "Art Palette",
  palette: [
    { name: "Rose Glow", note: "hero tint", color: "#ffd4e4" },
    { name: "Cloud Cream", note: "surface", color: "#fffdf9" },
    { name: "Lavender Veil", note: "support", color: "#efe8ff" }
  ],
  listTitle: "Explore Next",
  listCopy: "Move through the portfolio",
  list: [
    { title: "Photography", subtitle: "gallery page", href: "/photography" },
    { title: "Film", subtitle: "motion page", href: "/film" },
    { title: "Poster Works", subtitle: "poster route", href: "/posters" }
  ],
  noteTitle: "Art Note",
  noteHeading: "Art now has its own page too.",
  noteCopy:
    "This keeps the browsing structure closer to the reference you liked, with distinct pages for each main kind of work."
};

export const filmPage = {
  searchPlaceholder: "Search reels, scenes, direction notes...",
  hero: {
    eyebrow: "Film",
    title: "Moving-image projects, still frames, and cinematic storytelling pages.",
    copy:
      "Film lives on a dedicated route too, with a layout tuned for reels, shot lists, and project summaries rather than general homepage sections.",
    primaryCta: {
      label: "Open Photography",
      href: "/photography"
    },
    secondaryCta: {
      label: "Back Home",
      href: "/"
    },
    visual: {
      badge: "Film Log",
      note: "Scene cards",
      gradient: "from-[#ffdbe8] via-[#fff4f8] to-[#f6efff]"
    }
  },
  sectionEyebrow: "Selected Film Pieces",
  sectionTitle: "Short-form motion work framed as its own category page.",
  sectionCopy:
    "This page keeps the soft interface but shifts the content language toward storyboards, scene notes, and project reels.",
  projects: [
    {
      label: "Short Film",
      title: "Afterglow Hall",
      year: "2026",
      description:
        "A moody fictional short framed by warm hallway light, intimate portraiture, and a quiet character arc.",
      tags: ["Direction", "Still Frames", "Narrative"],
      previewGradient: "from-[#ffe4ed] via-[#fff8fb] to-[#f3eefe]"
    },
    {
      label: "Concept Reel",
      title: "Velvet Transit",
      year: "2025",
      description:
        "A moving collage of city textures, title slates, and soft transitions built for a dreamy visual identity reel.",
      tags: ["Reel", "Motion", "Titles"],
      previewGradient: "from-[#fff1f7] via-[#fffdfd] to-[#ffe9e4]"
    },
    {
      label: "Mood Study",
      title: "Sunday Static",
      year: "2025",
      description:
        "An atmospheric exercise in pacing and emotion, using limited dialogue and strong visual motifs.",
      tags: ["Mood", "Story", "Editing"],
      previewGradient: "from-[#ffe8f0] via-[#fff7fb] to-[#f1ebff]"
    },
    {
      label: "Brand Film",
      title: "Petal Signal",
      year: "2024",
      description:
        "A soft commercial concept that pairs product closeups, reflective surfaces, and graceful motion cues.",
      tags: ["Brand Film", "Color", "Direction"],
      previewGradient: "from-[#fff0f5] via-[#fffdf9] to-[#fff0ea]"
    }
  ],
  sideCards: [
    {
      eyebrow: "Film UX",
      title: "Scene-first pacing",
      copy:
        "The route is tuned for story information and reel summaries, so it feels distinct from the graphic design and photography pages.",
      tags: ["Story cards", "Separate flow"],
      gradient: "from-[#fff2f7] via-white to-[#f4efff]"
    },
    {
      eyebrow: "Motion tone",
      title: "Soft movement, not heavy effects",
      copy:
        "Framer Motion is still present, but the transitions stay subtle so the cute interface never overwhelms the work.",
      tags: ["Subtle motion", "Gentle reveal"],
      gradient: "from-[#fff8fb] via-white to-[#ffece6]"
    }
  ]
};

export const filmRail = {
  paletteTitle: "Film Palette",
  palette: [
    { name: "Rosy Glow", note: "hero accents", color: "#ffcfe0" },
    { name: "Moon Cream", note: "cards", color: "#fffaf6" },
    { name: "Lavender Dust", note: "secondary", color: "#efe8ff" }
  ],
  listTitle: "Scene Jumps",
  listCopy: "Continue exploring",
  list: [
    { title: "Posters", subtitle: "poster room", href: "/posters" },
    { title: "Photography", subtitle: "photo diary", href: "/photography" },
    { title: "Contact", subtitle: "book a project", href: "/contact" }
  ],
  noteTitle: "Route Note",
  noteHeading: "Film is no longer buried in one scroll.",
  noteCopy:
    "Breaking the portfolio into pages makes each discipline easier to understand, which was the main structural change you asked for."
};

export const photographyPage = {
  eyebrow: "photo diary",
  title: "Photography of Youth",
  intro:
    "small scenes, after-school light, friends, and the kinds of moments I want to keep because they already feel nostalgic while they’re happening.",
  accent:
    "the layout is intentionally uneven so it reads more like a visual diary than a clean commercial grid.",
  tags: ["youth", "friends", "after-school light", "nostalgia"],
  icon: "/images/photography-of-youth/icon.png",
  iconAlt: "Photography of Youth illustrated icon",
  photos: [
    { src: "/images/photography-of-youth/01.jpg", alt: "Photography of Youth photo 1" },
    { src: "/images/photography-of-youth/02.jpg", alt: "Photography of Youth photo 2" },
    { src: "/images/photography-of-youth/03.jpg", alt: "Photography of Youth photo 3" },
    { src: "/images/photography-of-youth/04.jpg", alt: "Photography of Youth photo 4" },
    { src: "/images/photography-of-youth/05.jpg", alt: "Photography of Youth photo 5" },
    { src: "/images/photography-of-youth/06.jpg", alt: "Photography of Youth photo 6" },
    { src: "/images/photography-of-youth/07.jpg", alt: "Photography of Youth photo 7" },
    { src: "/images/photography-of-youth/08.jpg", alt: "Photography of Youth photo 8" },
    { src: "/images/photography-of-youth/09.jpg", alt: "Photography of Youth photo 9" },
    { src: "/images/photography-of-youth/10.jpg", alt: "Photography of Youth photo 10" },
    { src: "/images/photography-of-youth/11.jpg", alt: "Photography of Youth photo 11" },
    { src: "/images/photography-of-youth/12.jpg", alt: "Photography of Youth photo 12" },
    { src: "/images/photography-of-youth/13.jpg", alt: "Photography of Youth photo 13" },
    { src: "/images/photography-of-youth/14.jpg", alt: "Photography of Youth photo 14" },
    { src: "/images/photography-of-youth/15.jpg", alt: "Photography of Youth photo 15" },
    { src: "/images/photography-of-youth/16.jpg", alt: "Photography of Youth photo 16" }
  ]
};

export const aboutPage = {
  title: "About Grace",
  copy:
    "rising sophmore in pma interested in colorgrading specifically coming from an art major background. Loves asian movies/dramas/anime",
  image: "/images/poster-grace.png",
  imageAlt: "Illustrated poster portrait created by Grace Beck",
  notes: []
};

export const aboutRail = {
  paletteTitle: "About Palette",
  palette: [
    { name: "Blossom", note: "identity", color: "#ffc8dc" },
    { name: "Sugar Cream", note: "surface", color: "#fffdf9" },
    { name: "Petal Ink", note: "type", color: "#56414e" }
  ],
  listTitle: "Around the Site",
  listCopy: "Where to go next",
  list: [
    { title: "Posters", subtitle: "posters and layouts", href: "/posters" },
    { title: "Film", subtitle: "motion stories", href: "/film" },
    { title: "Contact", subtitle: "start a project", href: "/contact" }
  ],
  noteTitle: "Artist Note",
  noteHeading: "Your real artwork is part of the shell now.",
  noteCopy:
    "The About page uses your illustration as the main image, so the site feels more personal and less like a placeholder template."
};

export const contactPage = {
  email: "sb2764@cornell.edu",
  links: [
    { label: "sb2764@cornell.edu", href: "mailto:sb2764@cornell.edu" }
  ],
  process: []
};

export const contactRail = {
  paletteTitle: "Contact Palette",
  palette: [
    { name: "Letter Pink", note: "cta accents", color: "#ffc6da" },
    { name: "Pearl", note: "panel fill", color: "#fffefb" },
    { name: "Tea Rose", note: "support color", color: "#ffe7de" }
  ],
  listTitle: "Quick Routes",
  listCopy: "Useful pages while contacting",
  list: [
    { title: "About", subtitle: "artist profile", href: "/about" },
    { title: "Posters", subtitle: "poster route", href: "/posters" },
    { title: "Home", subtitle: "dashboard landing", href: "/" }
  ],
  noteTitle: "Contact Note",
  noteHeading: "The whole portfolio now feels like an app.",
  noteCopy:
    "The separate routes, sidebar, and right rail make the experience feel more like a creative interface and less like a single landing page."
};
