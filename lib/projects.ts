export type ProjectTheme = "sunset" | "aurora" | "graphite";

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  theme?: ProjectTheme;
  previewImage?: string;
  previewAlt?: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  results: string[];
  externalUrl?: string;
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    slug: "victor-couto",
    title: "Victor COUTO",
    eyebrow: "Site vitrine",
    theme: "sunset",
    previewImage: "/assets/artisan-code-site-preview.png",
    previewAlt:
      "Landing page premium pour l'entreprise Victor COUTO, artisan normand.",
    summary:
      "Landing page premium pour un artisan avec hiérarchie claire, univers sobre et conversion orientée prise de contact.",
    description:
      "Conception et développement d'une vitrine premium pour un artisan normand, pensée pour présenter le savoir-faire, rassurer rapidement et déclencher une prise de contact.",
    role:
      "Direction artistique, structuration de contenu, intégration frontend et optimisation de la conversion.",
    stack: ["Next.js", "TypeScript", "UI direction", "Performance web"],
    problem:
      "Le besoin était de proposer une présence web plus qualitative qu'un simple site catalogue, tout en gardant un message lisible et une expérience fluide sur mobile.",
    solution:
      "J'ai construit une landing page à forte hiérarchie visuelle avec un hero direct, des sections courtes et des appels à l'action lisibles pour mettre en avant le profil de l'entreprise.",
    results: [
      "Une présence digitale plus crédible et plus premium.",
      "Un parcours orienté prise de contact sans friction.",
      "Une interface claire qui met le contenu métier au premier plan.",
    ],
    externalUrl: "https://www.artisan-couto.fr",
    seoTitle: "Victor COUTO — Étude de cas site vitrine artisan",
    seoDescription:
      "Étude de cas d'un site vitrine premium pour artisan: direction artistique, hiérarchie forte et conversion orientée contact.",
  },
  {
    slug: "hp-sonorisation",
    title: "HP Sonorisation",
    eyebrow: "Event & Booking",
    theme: "graphite",
    previewImage: "/assets/hp-sonorisation-site-preview.png",
    previewAlt:
      "Site immersif HP Sonorisation avec esthétique nocturne et CTA marqués.",
    summary:
      "Vitrine immersive pour un prestataire son et animation, pensée autour d'un univers nocturne et d'un hero spectaculaire.",
    description:
      "Refonte d'une vitrine événementielle pour mettre en avant l'univers de marque, la capacité à animer des événements et la lisibilité des prises de contact.",
    role:
      "Conception produit, design frontend, storytelling visuel et cadrage des sections de conversion.",
    stack: ["Next.js", "TypeScript", "Brand experience", "Responsive UI"],
    problem:
      "Le site devait se différencier visuellement tout en restant compréhensible sur des usages mobiles et en conservant un objectif de conversion.",
    solution:
      "J'ai construit une interface plus immersive, avec une direction artistique nocturne, un hero affirmé et des sections conçues pour valoriser l'offre rapidement.",
    results: [
      "Une identité visuelle plus mémorable.",
      "Un message plus lisible sur les prestations proposées.",
      "Un meilleur équilibre entre impact visuel et clarté du parcours.",
    ],
    externalUrl: "https://www.hpsonorisation.fr",
    seoTitle: "HP Sonorisation — Étude de cas vitrine événementielle",
    seoDescription:
      "Étude de cas d'une vitrine immersive pour prestataire son et animation: univers de marque, hero visuel fort et CTA plus lisibles.",
  },
  {
    slug: "swift-2048",
    title: "2048 Swift Game",
    eyebrow: "iOS Game",
    theme: "sunset",
    summary:
      "Clone du puzzle 2048 développé en Swift, avec logique de jeu personnalisée et animations fluides.",
    description:
      "Projet iOS construit pour explorer Swift, les patterns de logique applicative et la qualité perçue à travers l'animation et la réactivité de l'interface.",
    role:
      "Développement iOS, architecture de logique de jeu et travail sur l'animation de l'expérience.",
    stack: ["Swift", "UIKit", "Game logic", "Animation"],
    problem:
      "L'objectif était de reproduire un gameplay connu tout en contrôlant entièrement la logique de fusion, de score et les transitions d'état.",
    solution:
      "J'ai développé une implémentation personnalisée du moteur de jeu, avec un soin particulier porté à la fluidité des mouvements et à la robustesse des règles.",
    results: [
      "Une meilleure maîtrise des fondamentaux Swift et UIKit.",
      "Un projet démonstratif utile pour montrer une progression mobile réelle.",
      "Une base claire pour itérer sur l'UX et la logique de jeu.",
    ],
    externalUrl: "https://github.com/Spocsk/2048-Like",
    seoTitle: "2048 Swift Game — Projet iOS en Swift",
    seoDescription:
      "Projet iOS en Swift inspiré de 2048: logique de jeu personnalisée, animations fluides et apprentissage de l'écosystème Apple.",
  },
  {
    slug: "allocator-cpp",
    title: "Allocator C++",
    eyebrow: "Systems Programming",
    theme: "aurora",
    summary:
      "Projet C++ centré sur l'allocation mémoire et la compréhension fine des mécanismes bas niveau.",
    description:
      "Exploration plus systémique d'un allocateur en C++ pour approfondir les sujets de mémoire, performance et architecture bas niveau.",
    role:
      "Conception bas niveau, expérimentation algorithmique et travail sur les compromis performance / lisibilité.",
    stack: ["C++", "Memory management", "Systems programming", "Performance"],
    problem:
      "Le projet visait à mieux comprendre les mécanismes d'allocation mémoire et à manipuler des sujets rarement visibles dans des projets frontend classiques.",
    solution:
      "J'ai conçu un projet focalisé sur la mécanique de l'allocation et l'observation des impacts d'implémentation sur la structure du code et les performances.",
    results: [
      "Une compréhension plus fine des mécanismes mémoire.",
      "Un projet technique crédible hors du périmètre web habituel.",
      "Une preuve de curiosité et de polyvalence sur des sujets bas niveau.",
    ],
    externalUrl: "https://github.com/Spocsk/Allocator-Cpp",
    seoTitle: "Allocator C++ — Projet de programmation système",
    seoDescription:
      "Projet C++ autour de l'allocation mémoire et de la programmation système: expérimentation, performance et compréhension bas niveau.",
  },
  {
    slug: "portfolio-dylan",
    title: "Portfolio Dylan",
    eyebrow: "Frontend",
    theme: "graphite",
    summary:
      "Le code source de ce portfolio, construit avec Next.js, une direction artistique premium et une logique SEO/GEO plus solide.",
    description:
      "Portfolio personnel pensé comme une vitrine de profil senior: frontend léché, structure éditoriale plus claire et meilleur cadrage pour les moteurs et les recruteurs.",
    role:
      "Conception produit, frontend, structuration de contenu, travail SEO/GEO et maintien du design system léger.",
    stack: ["Next.js", "TypeScript", "React", "Metadata API", "Vercel"],
    problem:
      "Le portfolio devait rester distinctif visuellement tout en devenant plus explicite, plus indexable et plus utile pour le recrutement.",
    solution:
      "J'ai structuré le site autour d'une home forte, de pages internes indexables, de métadonnées enrichies et de signaux d'entité plus clairs.",
    results: [
      "Une meilleure lisibilité du profil et des expertises.",
      "Des surfaces indexables supplémentaires au-delà de la home.",
      "Une base plus robuste pour la visibilité SEO et GEO.",
    ],
    externalUrl: "https://github.com/Spocsk/Portfolio-Dylan",
    seoTitle: "Portfolio Dylan — Refonte frontend et SEO/GEO",
    seoDescription:
      "Étude de cas du portfolio Dylan: refonte frontend, nouvelles pages internes et renforcement des signaux SEO/GEO.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
