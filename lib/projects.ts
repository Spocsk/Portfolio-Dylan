export type ProjectTheme = "sunset" | "aurora" | "graphite";

export interface Project {
  title: string;
  description: string;
  link: string;
  eyebrow: string;
  theme?: ProjectTheme;
  previewImage?: string;
  previewAlt?: string;
  ctaLabel?: string;
}

export const projects: Project[] = [
  {
    title: "Victor COUTO",
    eyebrow: "Site vitrine",
    theme: "sunset",
    description:
      "Une landing page pour l'entreprise de Victor COUTO. Un site premium pour un artisan normand, avec direction artistique sobre, hiérarchie forte et conversion orientée prise de contact.",
    link: "https://www.artisan-couto.fr",
    ctaLabel: "Voir le projet",
    previewImage: "/assets/artisan-code-site-preview.png",
    previewAlt: "Aperçu du site",
  },
  {
    title: "HP Sonorisation",
    eyebrow: "Event & Booking",
    theme: "graphite",
    description:
      "Une vitrine immersive pour un prestataire son et animation, pensée autour d'un univers nocturne, d'un CTA fort et d'un hero visuel spectaculaire.",
    link: "https://www.hpsonorisation.fr",
    ctaLabel: "Voir le projet",
    previewImage: "/assets/hp-sonorisation-site-preview.png",
    previewAlt: "Aperçu du site HP Sonorisation",
  },
  {
    title: "2048 Swift Game",
    eyebrow: "iOS Game",
    theme: "sunset",
    description:
      "Un clone du célèbre puzzle, écrit en Swift, avec des animations fluides et une logique de jeu entièrement personnalisée.",
    link: "https://github.com/Spocsk/2048-Like",
  },
  {
    title: "Allocator C++",
    eyebrow: "Systems Programming",
    theme: "aurora",
    description:
      "Un projet C++ centré sur l'allocation mémoire et la compréhension fine des mécanismes bas niveau, avec une approche orientée performance et architecture système.",
    link: "https://github.com/Spocsk/Allocator-Cpp",
  },
  {
    title: "Portfolio Dylan",
    eyebrow: "Frontend",
    theme: "graphite",
    description:
      "Le code source de ce portfolio, construit avec Next.js, un carrousel de projets et une direction artistique premium.",
    link: "https://github.com/Spocsk/Portfolio-Dylan",
  },
];
