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
  eyebrow: "Featured",
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
      title: "Art Studies",
      year: "Route",
      description:
        "Illustrations, concept pieces, and digital experiments collected into their own art page.",
      tags: ["Illustration", "Concept", "Digital"],
      href: "/art",
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated portrait created by Grace Beck",
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

export const artPage = {
  searchPlaceholder: "Search illustrations, concept pieces, visual studies...",
  hero: {
    eyebrow: "Art",
    title: "Illustrations, concept pieces, and visual experiments collected into their own page.",
    copy:
      "This route gives your art its own breathing room, separate from film, photography, and poster work, while still feeling part of one cohesive portfolio.",
    primaryCta: {
      label: "Open Poster Works",
      href: "/posters"
    },
    secondaryCta: {
      label: "See Photography",
      href: "/photography"
    },
    visual: {
      badge: "Art Room",
      note: "Original pieces",
      gradient: "from-[#ffdbe7] via-[#fff6fb] to-[#f1ebff]",
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated portrait created by Grace Beck"
    }
  },
  sectionEyebrow: "Selected Art",
  sectionTitle: "A separate art page for illustration, concept work, and softer experiments.",
  sectionCopy:
    "This section is ready for sketches, digital paintings, concept visuals, and mixed-media explorations that deserve their own dedicated presentation.",
  projects: [
    {
      label: "Illustration",
      title: "Roselight Study",
      year: "2026",
      description:
        "A soft digital illustration focused on glow, blush tones, and character-driven composition.",
      tags: ["Illustration", "Digital", "Portrait"],
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated portrait created by Grace Beck",
      previewGradient: "from-[#ffe1ec] via-[#fff8fb] to-[#fff0ea]"
    },
    {
      label: "Concept Piece",
      title: "Window Bloom",
      year: "2025",
      description:
        "A visual development piece built around warm interiors, floral edges, and cinematic stillness.",
      tags: ["Concept", "Color", "Mood"],
      previewGradient: "from-[#fff0f5] via-[#fffdfd] to-[#f2ecff]"
    },
    {
      label: "Mixed Media",
      title: "Petal Static",
      year: "2025",
      description:
        "A playful experimental composition mixing sketch lines, digital paint, and soft graphic textures.",
      tags: ["Mixed Media", "Texture", "Experiment"],
      previewGradient: "from-[#ffe9f2] via-[#fff7fb] to-[#ffece6]"
    },
    {
      label: "Visual Study",
      title: "Soft Orbit",
      year: "2024",
      description:
        "A color and composition study exploring rounded forms, light bloom, and dreamy framing.",
      tags: ["Study", "Composition", "Light"],
      previewGradient: "from-[#fff2f7] via-[#fffefd] to-[#efe8ff]"
    }
  ],
  sideCards: [
    {
      eyebrow: "Art Direction",
      title: "A dedicated space for personal work",
      copy:
        "Separating art from poster work makes the site easier to read and gives illustration-based projects their own identity.",
      tags: ["Personal work", "Separate route"],
      gradient: "from-[#fff2f7] via-white to-[#f3edff]"
    },
    {
      eyebrow: "Presentation",
      title: "Soft, clean, and intentional",
      copy:
        "The page keeps the gentle palette, but the content organization stays simple so the artwork remains the focus.",
      tags: ["Curated", "Readable"],
      gradient: "from-[#fff8fb] via-white to-[#ffece7]"
    }
  ]
};

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
  title: "Photography of Youth",
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
  searchPlaceholder: "Search bio, process, inspirations...",
  eyebrow: "About Grace",
  title: "A creative practice shaped by posters, visual storytelling, photography, and cinematic warmth.",
  copy:
    "Grace Beck builds visual worlds that feel nostalgic, soft, and contemporary at the same time. Her work moves between poster design, photography, film-inspired storytelling, and internet-era aesthetics that still feel warm and human.",
  image: "/images/poster-grace.png",
  imageAlt: "Illustrated poster portrait created by Grace Beck",
  tags: ["Poster Design", "Visual Storytelling", "Photography", "Cinematic Aesthetics"],
  notes: [
    {
      eyebrow: "Practice",
      title: "Warm visuals, clear structure",
      copy:
        "Even when the interface leans cute, the layouts are still built to be readable, scalable, and realistic for a deployed portfolio.",
      gradient: "from-[#fff1f6] via-white to-[#ffece6]"
    },
    {
      eyebrow: "Direction",
      title: "Separate pages over long scrolls",
      copy:
        "The portfolio now behaves more like a collection of distinct rooms, which makes each medium easier to explore on its own.",
      gradient: "from-[#fff6fa] via-white to-[#f4efff]"
    },
    {
      eyebrow: "Mood",
      title: "Cute UX with an artistic finish",
      copy:
        "Soft pink gradients, rounded cards, and airy spacing keep the experience playful, but it still feels polished and intentional.",
      gradient: "from-[#fff8fb] via-white to-[#ffe9f2]"
    }
  ]
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
  searchPlaceholder: "Search contact details and booking info...",
  eyebrow: "Contact",
  title: "Let’s build a portfolio, campaign, or visual story that feels unmistakably yours.",
  copy:
    "Whether you need a cute art-directed portfolio, poster visuals, concept development, or a more cinematic presentation of your work, this contact route gives that conversation a dedicated space too.",
  cards: [
    {
      title: "Best Fit",
      copy: "Portfolio refreshes, poster concepts, visual storytelling pages, and soft dashboard-style creative sites.",
      gradient: "from-[#fff1f7] via-white to-[#ffe8ee]"
    },
    {
      title: "Tone",
      copy: "Cute, rounded, and pink-forward, but still organized enough for viewers to understand the work quickly.",
      gradient: "from-[#fff6fa] via-white to-[#fff0e8]"
    },
    {
      title: "Stack",
      copy: "Next.js, Tailwind CSS, Framer Motion, responsive layouts, and reusable content-driven components.",
      gradient: "from-[#fff8fb] via-white to-[#f4efff]"
    },
    {
      title: "Availability",
      copy: "Open for commissions, portfolio upgrades, and creative coding collaborations.",
      gradient: "from-[#fff0f5] via-white to-[#ffece6]"
    }
  ],
  links: [
    { label: "Email Grace", href: "mailto:hello@gracebeck.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "Dribbble", href: "https://dribbble.com/" }
  ],
  process: [
    "Start with references, mood, and which page or category needs the most attention.",
    "Map the route structure so the work is separated cleanly instead of buried in one scroll.",
    "Refine the card system, interactions, and typography until the cute UI still feels premium."
  ]
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
