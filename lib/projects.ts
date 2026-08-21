import type { Locale } from "./i18n";

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
    slug: "cast-loop",
    title: "Cast Loop",
    eyebrow: "SaaS multi-tenant",
    theme: "aurora",
    previewImage: "/assets/cast-loop-site-preview.png",
    previewAlt:
      "Cockpit de publication Cast Loop avec tableau de bord, calendrier éditorial et pipeline de posts.",
    summary:
      "Plateforme SaaS multi-tenant de planification et publication sociale pour agences et équipes, avec cockpit unique multi-comptes.",
    description:
      "Produit SaaS complet pour connecter plusieurs comptes sociaux (LinkedIn, Facebook, Instagram), gérer plusieurs entreprises clientes et orchestrer brouillons, calendrier, programmation et publication depuis un cockpit unique.",
    role: "Conception produit, architecture fullstack, frontend Next.js, API NestJS, schéma Supabase et pipeline de publication.",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Supabase",
      "Postgres",
      "Monorepo pnpm",
    ],
    problem:
      "Les équipes qui gèrent plusieurs marques sur plusieurs réseaux perdent du temps à jongler entre interfaces, comptes et fuseaux de publication, sans visibilité centralisée sur ce qui est planifié, publié ou en échec.",
    solution:
      "J'ai conçu une architecture multi-tenant stricte (filtrage par organisation et membership, JWT Supabase validé côté API Nest), un scheduler minute-par-minute avec verrouillage Postgres pour traiter les posts planifiés, et un cockpit Next.js qui consolide comptes, calendrier, pipeline éditorial et rappels Telegram pour les comptes connect-only.",
    results: [
      "Un cockpit unique pour piloter plusieurs entreprises clientes et plusieurs comptes sociaux.",
      "Un pipeline de publication robuste avec états explicites (draft, scheduled, publishing, published, failed) et audit log.",
      "Une base SaaS extensible prête à accueillir analytics, workflow d'approbation et formats de contenu additionnels.",
    ],
    seoTitle: "Cast Loop — Étude de cas SaaS de publication sociale",
    seoDescription:
      "Étude de cas de Cast Loop, plateforme SaaS multi-tenant de planification et publication sociale: architecture Next.js + NestJS + Supabase et pipeline de publication.",
  },
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
    role: "Direction artistique, structuration de contenu, intégration frontend et optimisation de la conversion.",
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
    role: "Conception produit, design frontend, storytelling visuel et cadrage des sections de conversion.",
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
    role: "Développement iOS, architecture de logique de jeu et travail sur l'animation de l'expérience.",
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
    role: "Conception bas niveau, expérimentation algorithmique et travail sur les compromis performance / lisibilité.",
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
    previewImage: "/assets/portfolio-dylan-site-preview.png",
    previewAlt:
      "Portfolio Dylan COUTO DE OLIVEIRA, développeur web et mobile senior, direction artistique premium.",
    summary:
      "Le code source de ce portfolio, construit avec Next.js, une direction artistique premium et une logique SEO/GEO plus solide.",
    description:
      "Portfolio personnel pensé comme une vitrine de profil senior: frontend léché, structure éditoriale plus claire et meilleur cadrage pour les moteurs et les recruteurs.",
    role: "Conception produit, frontend, structuration de contenu, travail SEO/GEO et maintien du design system léger.",
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

type ProjectCopy = Pick<
  Project,
  | "eyebrow"
  | "previewAlt"
  | "summary"
  | "description"
  | "role"
  | "problem"
  | "solution"
  | "results"
  | "seoTitle"
  | "seoDescription"
>;

const englishProjectCopy: Record<string, ProjectCopy> = {
  "cast-loop": {
    eyebrow: "Multi-tenant SaaS",
    previewAlt: "Cast Loop publishing cockpit with dashboard, editorial calendar and post pipeline.",
    summary: "A multi-tenant SaaS platform for social planning and publishing, giving agencies and teams one cockpit for multiple accounts.",
    description: "A complete SaaS product for connecting multiple social accounts (LinkedIn, Facebook and Instagram), managing several client companies and coordinating drafts, calendars, scheduling and publishing from one cockpit.",
    role: "Product design, full-stack architecture, Next.js frontend, NestJS API, Supabase schema and publishing pipeline.",
    problem: "Teams managing several brands across multiple networks waste time switching between interfaces, accounts and publishing time zones, with no central view of what is scheduled, published or failing.",
    solution: "I designed a strict multi-tenant architecture (organization and membership filtering, Supabase JWT validation in the Nest API), a minute-by-minute scheduler with Postgres locking for scheduled posts, and a Next.js cockpit combining accounts, calendars, the editorial pipeline and Telegram reminders for connect-only accounts.",
    results: ["One cockpit for managing multiple client companies and social accounts.", "A robust publishing pipeline with explicit states (draft, scheduled, publishing, published, failed) and an audit log.", "An extensible SaaS foundation ready for analytics, approval workflows and additional content formats."],
    seoTitle: "Cast Loop — Social publishing SaaS case study",
    seoDescription: "Cast Loop case study: a multi-tenant social planning and publishing SaaS with a Next.js, NestJS and Supabase architecture and a reliable publishing pipeline.",
  },
  "victor-couto": {
    eyebrow: "Showcase website",
    previewAlt: "Premium landing page for Victor COUTO, a Normandy-based craft business.",
    summary: "A premium landing page for a craft business, with clear hierarchy, a restrained visual world and a contact-focused journey.",
    description: "Design and development of a premium showcase website for a Normandy-based craft business, created to present its expertise, build trust quickly and encourage contact.",
    role: "Art direction, content structure, frontend integration and conversion optimization.",
    problem: "The goal was to create a higher-quality web presence than a simple catalogue website while keeping the message clear and the mobile experience smooth.",
    solution: "I built a landing page with strong visual hierarchy, a direct hero, concise sections and clear calls to action that foreground the company profile.",
    results: ["A more credible and premium digital presence.", "A frictionless journey focused on contact.", "A clear interface that keeps the business content front and center."],
    seoTitle: "Victor COUTO — Craft business website case study",
    seoDescription: "Case study of a premium showcase website for a craft business, combining strong art direction, clear hierarchy and contact-focused conversion.",
  },
  "hp-sonorisation": {
    eyebrow: "Events & booking",
    previewAlt: "Immersive HP Sonorisation website with a night-time aesthetic and prominent calls to action.",
    summary: "An immersive showcase for a sound and entertainment provider, built around a night-time visual world and a striking hero.",
    description: "Redesign of an events website to highlight the brand world, its ability to bring events to life and clear contact paths.",
    role: "Product design, frontend design, visual storytelling and conversion-section planning.",
    problem: "The website needed to stand out visually while remaining easy to understand on mobile and preserving a clear conversion goal.",
    solution: "I created a more immersive interface with night-time art direction, a confident hero and sections designed to communicate the offer quickly.",
    results: ["A more memorable visual identity.", "A clearer presentation of the services offered.", "A stronger balance between visual impact and journey clarity."],
    seoTitle: "HP Sonorisation — Events website case study",
    seoDescription: "Case study of an immersive website for a sound and entertainment provider, with a strong brand world, visual hero and clearer calls to action.",
  },
  "swift-2048": {
    eyebrow: "iOS game",
    previewAlt: "2048 puzzle game developed in Swift.",
    summary: "A 2048 puzzle clone built in Swift with custom game logic and smooth animations.",
    description: "An iOS project built to explore Swift, application-logic patterns and perceived quality through animation and interface responsiveness.",
    role: "iOS development, game-logic architecture and experience animation.",
    problem: "The goal was to reproduce familiar gameplay while retaining full control over merge logic, scoring and state transitions.",
    solution: "I developed a custom implementation of the game engine, focusing closely on movement fluidity and robust rules.",
    results: ["A stronger command of Swift and UIKit fundamentals.", "A useful demonstration project showing genuine mobile progress.", "A clear foundation for further UX and game-logic iterations."],
    seoTitle: "2048 Swift Game — iOS project in Swift",
    seoDescription: "A Swift iOS project inspired by 2048, featuring custom game logic, smooth animations and hands-on learning of the Apple ecosystem.",
  },
  "allocator-cpp": {
    eyebrow: "Systems programming",
    previewAlt: "C++ memory allocator systems-programming project.",
    summary: "A C++ project focused on memory allocation and a deeper understanding of low-level mechanisms.",
    description: "A systems-oriented exploration of a C++ allocator to deepen knowledge of memory, performance and low-level architecture.",
    role: "Low-level design, algorithmic experimentation and work on performance/readability trade-offs.",
    problem: "The project aimed to build a better understanding of memory-allocation mechanisms and explore topics rarely visible in typical frontend work.",
    solution: "I designed a project centered on allocation mechanics and on observing how implementation choices affect code structure and performance.",
    results: ["A deeper understanding of memory mechanisms.", "A credible technical project beyond the usual web scope.", "Evidence of curiosity and versatility in low-level topics."],
    seoTitle: "C++ Allocator — Systems programming project",
    seoDescription: "A C++ project exploring memory allocation and systems programming through experimentation, performance work and low-level understanding.",
  },
  "portfolio-dylan": {
    eyebrow: "Frontend",
    previewAlt: "Portfolio of Dylan COUTO DE OLIVEIRA, senior web and mobile developer, with premium art direction.",
    summary: "The source code for this portfolio, built with Next.js, premium art direction and a stronger SEO/GEO foundation.",
    description: "A personal portfolio designed as a senior-profile showcase, with polished frontend work, a clearer editorial structure and better framing for search engines and recruiters.",
    role: "Product design, frontend, content structure, SEO/GEO work and maintenance of a lean design system.",
    problem: "The portfolio needed to remain visually distinctive while becoming more explicit, indexable and useful for recruitment.",
    solution: "I structured the website around a strong homepage, indexable internal pages, richer metadata and clearer entity signals.",
    results: ["A clearer presentation of the profile and expertise.", "More indexable surfaces beyond the homepage.", "A more robust foundation for SEO and GEO visibility."],
    seoTitle: "Dylan Portfolio — Frontend and SEO/GEO redesign",
    seoDescription: "Dylan portfolio case study: frontend redesign, new internal pages and stronger SEO/GEO signals.",
  },
};

const spanishProjectCopy: Record<string, ProjectCopy> = {
  "cast-loop": {
    eyebrow: "SaaS multiempresa",
    previewAlt: "Panel de publicación de Cast Loop con dashboard, calendario editorial y pipeline de publicaciones.",
    summary: "Plataforma SaaS multiempresa para planificar y publicar en redes sociales, con un único panel para agencias, equipos y múltiples cuentas.",
    description: "Producto SaaS completo para conectar varias cuentas sociales (LinkedIn, Facebook e Instagram), gestionar varias empresas cliente y coordinar borradores, calendario, programación y publicación desde un único panel.",
    role: "Diseño de producto, arquitectura full-stack, frontend Next.js, API NestJS, esquema Supabase y pipeline de publicación.",
    problem: "Los equipos que gestionan varias marcas en distintas redes pierden tiempo cambiando de interfaz, cuenta y zona horaria, sin una visión centralizada de lo programado, publicado o fallido.",
    solution: "Diseñé una arquitectura multiempresa estricta (filtrado por organización y membresía, validación JWT de Supabase en la API Nest), un programador minuto a minuto con bloqueo Postgres y un panel Next.js que reúne cuentas, calendario, pipeline editorial y recordatorios de Telegram.",
    results: ["Un único panel para gestionar varias empresas cliente y cuentas sociales.", "Un pipeline robusto con estados explícitos (draft, scheduled, publishing, published, failed) y registro de auditoría.", "Una base SaaS extensible preparada para analítica, flujos de aprobación y nuevos formatos."],
    seoTitle: "Cast Loop — Caso de estudio SaaS de publicación social",
    seoDescription: "Caso de estudio de Cast Loop, plataforma SaaS multiempresa de planificación y publicación social con arquitectura Next.js, NestJS y Supabase.",
  },
  "victor-couto": {
    eyebrow: "Sitio corporativo",
    previewAlt: "Landing page premium para Victor COUTO, empresa artesanal de Normandía.",
    summary: "Landing page premium para una empresa artesanal, con jerarquía clara, una estética sobria y un recorrido orientado al contacto.",
    description: "Diseño y desarrollo de un sitio premium para una empresa artesanal de Normandía, pensado para presentar su saber hacer, generar confianza y facilitar el contacto.",
    role: "Dirección de arte, estructura de contenidos, integración frontend y optimización de la conversión.",
    problem: "El objetivo era crear una presencia web más cualitativa que un simple catálogo, manteniendo un mensaje claro y una experiencia móvil fluida.",
    solution: "Construí una landing page con una jerarquía visual marcada, un hero directo, secciones breves y llamadas a la acción claras.",
    results: ["Una presencia digital más creíble y premium.", "Un recorrido sin fricciones orientado al contacto.", "Una interfaz clara que sitúa el contenido del negocio en primer plano."],
    seoTitle: "Victor COUTO — Caso de estudio de sitio artesanal",
    seoDescription: "Caso de estudio de un sitio premium para una empresa artesanal, con dirección de arte, jerarquía clara y conversión orientada al contacto.",
  },
  "hp-sonorisation": {
    eyebrow: "Eventos y reservas",
    previewAlt: "Sitio inmersivo de HP Sonorisation con estética nocturna y llamadas a la acción destacadas.",
    summary: "Sitio inmersivo para un proveedor de sonido y animación, construido alrededor de un universo nocturno y un hero espectacular.",
    description: "Rediseño de un sitio de eventos para destacar el universo de marca, su capacidad para animar eventos y facilitar el contacto.",
    role: "Diseño de producto, diseño frontend, narrativa visual y definición de las secciones de conversión.",
    problem: "El sitio debía diferenciarse visualmente, seguir siendo comprensible en móvil y mantener un objetivo de conversión claro.",
    solution: "Creé una interfaz más inmersiva, con dirección de arte nocturna, un hero rotundo y secciones diseñadas para comunicar rápidamente la oferta.",
    results: ["Una identidad visual más memorable.", "Una presentación más clara de los servicios.", "Un mejor equilibrio entre impacto visual y claridad del recorrido."],
    seoTitle: "HP Sonorisation — Caso de estudio de sitio de eventos",
    seoDescription: "Caso de estudio de un sitio inmersivo para servicios de sonido y animación, con identidad fuerte, hero visual y llamadas a la acción más claras.",
  },
  "swift-2048": {
    eyebrow: "Juego iOS",
    previewAlt: "Juego de puzle 2048 desarrollado en Swift.",
    summary: "Clon del puzle 2048 desarrollado en Swift, con lógica de juego personalizada y animaciones fluidas.",
    description: "Proyecto iOS creado para explorar Swift, los patrones de lógica de aplicación y la calidad percibida mediante la animación y la capacidad de respuesta de la interfaz.",
    role: "Desarrollo iOS, arquitectura de la lógica de juego y animación de la experiencia.",
    problem: "El objetivo era reproducir una mecánica conocida manteniendo el control total sobre las fusiones, la puntuación y las transiciones de estado.",
    solution: "Desarrollé una implementación propia del motor de juego, cuidando especialmente la fluidez de los movimientos y la solidez de las reglas.",
    results: ["Mayor dominio de los fundamentos de Swift y UIKit.", "Un proyecto demostrativo que refleja una evolución móvil real.", "Una base clara para seguir iterando sobre la UX y la lógica de juego."],
    seoTitle: "2048 Swift Game — Proyecto iOS en Swift",
    seoDescription: "Proyecto iOS en Swift inspirado en 2048, con lógica personalizada, animaciones fluidas y aprendizaje práctico del ecosistema Apple.",
  },
  "allocator-cpp": {
    eyebrow: "Programación de sistemas",
    previewAlt: "Proyecto de programación de sistemas sobre un asignador de memoria en C++.",
    summary: "Proyecto C++ centrado en la asignación de memoria y en la comprensión profunda de los mecanismos de bajo nivel.",
    description: "Exploración de un asignador en C++ para profundizar en memoria, rendimiento y arquitectura de bajo nivel.",
    role: "Diseño de bajo nivel, experimentación algorítmica y análisis de los compromisos entre rendimiento y legibilidad.",
    problem: "El proyecto buscaba comprender mejor los mecanismos de asignación de memoria y abordar temas poco visibles en proyectos frontend convencionales.",
    solution: "Diseñé un proyecto centrado en la mecánica de asignación y en observar cómo las decisiones de implementación afectan a la estructura y al rendimiento.",
    results: ["Una comprensión más profunda de los mecanismos de memoria.", "Un proyecto técnico sólido fuera del ámbito web habitual.", "Una muestra de curiosidad y versatilidad en temas de bajo nivel."],
    seoTitle: "Allocator C++ — Proyecto de programación de sistemas",
    seoDescription: "Proyecto C++ sobre asignación de memoria y programación de sistemas: experimentación, rendimiento y comprensión de bajo nivel.",
  },
  "portfolio-dylan": {
    eyebrow: "Frontend",
    previewAlt: "Portfolio de Dylan COUTO DE OLIVEIRA, desarrollador web y móvil sénior, con dirección de arte premium.",
    summary: "El código fuente de este portfolio, creado con Next.js, una dirección de arte premium y una base SEO/GEO más sólida.",
    description: "Portfolio personal concebido como escaparate de un perfil sénior: frontend cuidado, estructura editorial más clara y mejor contexto para buscadores y reclutadores.",
    role: "Diseño de producto, frontend, estructura de contenidos, trabajo SEO/GEO y mantenimiento de un sistema de diseño ligero.",
    problem: "El portfolio debía conservar su personalidad visual y, al mismo tiempo, ser más explícito, indexable y útil para la contratación.",
    solution: "Estructuré el sitio alrededor de una página de inicio potente, páginas internas indexables, metadatos enriquecidos y señales de entidad más claras.",
    results: ["Mayor claridad del perfil y de las especialidades.", "Más páginas indexables además de la portada.", "Una base más sólida para la visibilidad SEO y GEO."],
    seoTitle: "Portfolio Dylan — Rediseño frontend y SEO/GEO",
    seoDescription: "Caso de estudio del portfolio de Dylan: rediseño frontend, nuevas páginas internas y refuerzo de las señales SEO/GEO.",
  },
};

const translatedProjectCopy: Record<Exclude<Locale, "fr">, Record<string, ProjectCopy>> = {
  en: englishProjectCopy,
  es: spanishProjectCopy,
};

export function getProjects(locale: Locale = "fr"): Project[] {
  if (locale === "fr") return projects;
  return projects.map((project) => ({
    ...project,
    ...translatedProjectCopy[locale][project.slug],
  }));
}

export function getProjectBySlug(slug: string, locale: Locale = "fr") {
  return getProjects(locale).find((project) => project.slug === slug);
}
