import {
  CameraIcon,
  FilmIcon,
  HomeIcon,
  MailIcon,
  PaletteIcon,
  SparkleIcon,
  UserIcon
} from "@/components/cute-portfolio/icons";

export const mainNavigation = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Posters", href: "/posters", icon: PaletteIcon },
  { label: "Film", href: "/film", icon: FilmIcon },
  { label: "Photography", href: "/photography", icon: CameraIcon },
  { label: "About", href: "/about", icon: UserIcon },
  { label: "Contact", href: "/contact", icon: MailIcon }
];

export const bottomLinks = [
  { label: "About Grace", href: "/about", icon: UserIcon },
  { label: "Contact", href: "/contact", icon: MailIcon }
];

export const profileCard = {
  title: "Rosebloom Mode",
  copy:
    "A multi-page portfolio that borrows the category-page structure of a film/design portfolio, then wraps it in a sweeter pink dashboard experience.",
  tags: ["Cute UX", "Separate Pages", "Soft Pink"]
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
    eyebrow: "Lunar Bloom Studio",
    title: "A cute multi-page portfolio for posters, film pieces, and photography stories.",
    copy:
      "I reworked the experience into separate routes so each medium has its own page, while keeping the interaction language soft, pink, rounded, and playful like a dreamy creative dashboard.",
    primaryCta: {
      label: "Open Posters",
      href: "/posters"
    },
    secondaryCta: {
      label: "Meet Grace",
      href: "/about"
    },
    stats: [
      { value: "06", label: "Dedicated routes across the portfolio" },
      { value: "18", label: "Sample projects arranged as dashboard cards" },
      { value: "03", label: "Core mediums organized separately" }
    ],
    visual: {
      badge: "Cute UX",
      note: "Separate pages",
      gradient: "from-[#ffd6e6] via-[#ffeef5] to-[#fff7fb]"
    }
  },
  posterSpotlight: {
    eyebrow: "Pop-Out Shortcut",
    title: "Posters",
    copy: "Jump straight into your poster archive using your custom floating icon.",
    href: "/posters",
    image: "/images/posters-icon.png",
    imageAlt: "Illustrated posters icon created by Grace Beck"
  },
  featuredRoutes: [
    {
      label: "Posters",
      title: "Poster Archive",
      year: "Route",
      description:
        "A category page for title treatments, posters, campaign visuals, and dreamy graphic compositions.",
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
      title: "Photo Diary",
      year: "Route",
      description:
        "Portraits, warm color studies, and visual moods presented as a separate gallery page.",
      tags: ["Portraits", "Editorial", "Mood"],
      href: "/photography",
      previewGradient: "from-[#fff0f5] via-[#fffdfd] to-[#ffe9e5]"
    },
    {
      label: "About",
      title: "Grace Beck",
      year: "Profile",
      description:
        "An about page with your actual artwork, soft spacing, and a dedicated artist bio instead of an inline section.",
      tags: ["Profile", "Process", "Bio"],
      href: "/about",
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated poster portrait created by Grace Beck",
      previewGradient: "from-[#ffe8ef] via-[#fff7fb] to-[#fff4ee]"
    }
  ],
  noteCards: [
    {
      title: "Sidebar-first navigation",
      copy:
        "The shell now behaves more like an app: persistent sidebar on desktop, drawer on small screens, and page-specific content in the center.",
      gradient: "from-[#fff0f6] via-white to-[#ffe6ef]"
    },
    {
      title: "Soft card hierarchy",
      copy:
        "Rounded cards, cream surfaces, and petal gradients keep the interface cute without losing clarity or spacing discipline.",
      gradient: "from-[#fff8fb] via-white to-[#ffece7]"
    },
    {
      title: "Real route structure",
      copy:
        "Home, Posters, Film, Photography, About, and Contact are all separate pages now instead of one long scroll.",
      gradient: "from-[#fff1f7] via-white to-[#f8efff]"
    }
  ],
  quickLinks: [
    { label: "Go to Posters", href: "/posters" },
    { label: "Go to Film", href: "/film" },
    { label: "Go to Photography", href: "/photography" },
    { label: "Go to Contact", href: "/contact" }
  ]
};

export const homeRail = {
  paletteTitle: "Palette",
  palette: sharedPalette,
  listTitle: "Open Pages",
  listCopy: "Quick jumps across the portfolio",
  list: [
    { title: "Posters", subtitle: "posters and layouts", href: "/posters" },
    { title: "Film", subtitle: "reels and stills", href: "/film" },
    { title: "Photography", subtitle: "gallery and mood", href: "/photography" }
  ],
  noteTitle: "Studio Note",
  noteHeading: "Cute, but still portfolio-ready.",
  noteCopy:
    "The shell keeps the app-like charm from your reference image while the content structure now behaves like a true multi-page portfolio."
};

export const graphicDesignPage = {
  searchPlaceholder: "Search posters, campaigns, title cards...",
  hero: {
    eyebrow: "Posters",
    title: "Poster design, title treatments, and dreamy layout systems.",
    copy:
      "This page isolates the graphic design work into its own route, closer to a category portfolio page while still living inside the same cute dashboard shell.",
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
  sectionEyebrow: "Selected Posters",
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
        "Graphic design now lives on its own route, so the user can focus on poster and layout work without scrolling past film and photography first.",
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
  searchPlaceholder: "Search portraits, galleries, color studies...",
  hero: {
    eyebrow: "Photography",
    title: "Portraits, photo stories, and mood-led image collections.",
    copy:
      "Photography gets its own page as well, keeping the cute shell while giving gallery work a calmer, more focused browsing flow.",
    primaryCta: {
      label: "Open About Grace",
      href: "/about"
    },
    secondaryCta: {
      label: "Go to Contact",
      href: "/contact"
    },
    visual: {
      badge: "Photo Diary",
      note: "Warm portraits",
      gradient: "from-[#ffe2ec] via-[#fff7fb] to-[#fff0ea]",
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated poster portrait created by Grace Beck"
    }
  },
  sectionEyebrow: "Selected Photography",
  sectionTitle: "A gentle gallery page with more room for mood, portraits, and atmosphere.",
  sectionCopy:
    "The page structure is ready for real photography sets later, but even as sample content it already behaves like a dedicated gallery route.",
  projects: [
    {
      label: "Portrait Study",
      title: "Roselight Portrait",
      year: "2026",
      description:
        "A soft portrait set centered on blush lighting, calm eye-lines, and a diary-like sense of stillness.",
      tags: ["Portrait", "Color", "Mood"],
      image: "/images/poster-grace.png",
      imageAlt: "Illustrated poster portrait created by Grace Beck",
      previewGradient: "from-[#ffe5ee] via-[#fff8fb] to-[#fff2e8]"
    },
    {
      label: "Color Story",
      title: "Peach Hour",
      year: "2025",
      description:
        "A gentle set focused on peach-and-cream tones, natural texture, and nostalgic framing.",
      tags: ["Editorial", "Warmth", "Light"],
      previewGradient: "from-[#fff0f5] via-[#fffdfd] to-[#ffece2]"
    },
    {
      label: "Collection",
      title: "Window Notes",
      year: "2025",
      description:
        "A sequence of soft-focus interiors and reflective details built around quiet domestic scenes.",
      tags: ["Still Life", "Series", "Quiet"],
      previewGradient: "from-[#ffeaf2] via-[#fff8fb] to-[#f2ecff]"
    },
    {
      label: "Moodbook",
      title: "Petal Evenings",
      year: "2024",
      description:
        "Night portraits and gentle neon edges translated into a warm, dreamy image set.",
      tags: ["Night", "Portraits", "Color"],
      previewGradient: "from-[#fff0f6] via-[#fff9fc] to-[#ffece7]"
    }
  ],
  sideCards: [
    {
      eyebrow: "Gallery Logic",
      title: "A calmer route for images",
      copy:
        "Separating photography from the homepage lets the browsing pace breathe more, which is especially helpful for image-led work.",
      tags: ["Gallery page", "Focused viewing"],
      gradient: "from-[#fff4f8] via-white to-[#ffece7]"
    },
    {
      eyebrow: "Visual Mood",
      title: "Cute shell, softer pacing",
      copy:
        "The pink dashboard language stays, but the cards and spacing on this route slow down so the imagery can take the lead.",
      tags: ["Mood-led", "Soft spacing"],
      gradient: "from-[#fff8fb] via-white to-[#f6efff]"
    }
  ]
};

export const photographyRail = {
  paletteTitle: "Photography Palette",
  palette: [
    { name: "Cloud Pink", note: "hero tint", color: "#ffd9e7" },
    { name: "Peach Mist", note: "photo cards", color: "#ffe9df" },
    { name: "Ivory Air", note: "base", color: "#fffefb" }
  ],
  listTitle: "Jump To",
  listCopy: "Next stops in the studio",
  list: [
    { title: "Home", subtitle: "dashboard landing", href: "/" },
    { title: "Posters", subtitle: "poster route", href: "/posters" },
    { title: "About", subtitle: "artist profile", href: "/about" }
  ],
  noteTitle: "Gallery Note",
  noteHeading: "Photography has breathing room now.",
  noteCopy:
    "Instead of being one section inside a landing page, photography now reads as a full category with its own rhythm and visual hierarchy."
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
