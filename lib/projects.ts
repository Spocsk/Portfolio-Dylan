import type { Locale } from "./i18n";

export type ProjectTheme = "sunset" | "aurora" | "graphite";

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  featured: boolean;
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
    slug: "campbell-scientific",
    title: "Campbell Scientific",
    eyebrow: "Data industrielle",
    featured: true,
    theme: "graphite",
    summary:
      "Applications web Angular / NestJS pour l’exploitation de systèmes d’acquisition de données critiques, utilisées dans plus de 30 pays.",
    description:
      "Chez Campbell Scientific, j’ai travaillé sur des applications web industrielles destinées à visualiser, configurer et exploiter des données terrain à forte volumétrie : météo, hydrologie, pétrole/gaz, utilities et environnements isolés.",
    role: "Ingénieur logiciel — interfaces Angular / TypeScript, APIs NestJS / Node.js, CI/CD et Docker.",
    stack: ["Angular", "TypeScript", "NestJS", "Node.js", "Docker", "CI/CD"],
    problem:
      "Les équipes terrain et les clients industriels ont besoin d’interfaces fiables pour des données dont une erreur ou une indisponibilité peut impacter une décision opérationnelle, dans plus de 30 pays.",
    solution:
      "Conception d’interfaces Angular pour la visualisation et la configuration, APIs NestJS pour les workflows métier (équipements, mesures, supervision, cloud), et industrialisation des livraisons via CI/CD et Docker.",
    results: [
      "Des applications utilisées dans plus de 30 pays, chez des clients publics, industriels et scientifiques.",
      "Une attention particulière à la fiabilité, à la réactivité UI et à l’usage en conditions extrêmes.",
      "Des releases plus sûres grâce à la CI/CD et aux pratiques qualité.",
    ],
    seoTitle: "Campbell Scientific — Étude de cas Angular / NestJS",
    seoDescription:
      "Étude de cas Campbell Scientific : applications web industrielles Angular et NestJS pour de l’acquisition de données critique dans plus de 30 pays.",
  },
  {
    slug: "operis",
    title: "Operis",
    eyebrow: "SaaS collectivités",
    featured: true,
    theme: "aurora",
    summary:
      "Interfaces Angular pour des SaaS dédiés aux collectivités, jusqu’à 15 000 utilisateurs/jour et une couverture d’environ 60 % des métropoles.",
    description:
      "Chez Operis, j’ai développé des interfaces Angular pour des solutions SaaS destinées aux collectivités territoriales : urbanisme, foncier, scolaire et démarches administratives dématérialisées, dans un cadre réglementaire (GNAU, loi ELAN).",
    role: "Développeur front-end Angular / TypeScript, composants réutilisables, accessibilité et clarté des parcours agents / usagers.",
    stack: ["Angular", "TypeScript", "SaaS", "Accessibilité"],
    problem:
      "Les agents publics et les usagers manipulent des données administratives sensibles. Les parcours doivent rester lisibles, traçables et stables, à grande échelle.",
    solution:
      "Développement de composants Angular réutilisables, modernisation de parcours liés au GNAU et à la loi ELAN, et travail sur la cohérence UI pour accélérer les évolutions produit.",
    results: [
      "Contribution à des plateformes jusqu’à 15 000 utilisateurs/jour.",
      "Couverture annoncée d’environ 60 % des métropoles françaises.",
      "Moins de duplication d’écrans métier grâce aux composants partagés.",
    ],
    seoTitle: "Operis — Étude de cas SaaS collectivités Angular",
    seoDescription:
      "Étude de cas Operis : interfaces Angular pour des SaaS collectivités, jusqu’à 15 000 utilisateurs/jour et ~60 % des métropoles.",
  },
  {
    slug: "cast-loop",
    title: "Cast Loop",
    eyebrow: "SaaS multi-tenant",
    featured: true,
    theme: "aurora",
    previewImage: "/assets/cast-loop-site-preview.webp",
    previewAlt:
      "Cockpit de publication Cast Loop avec tableau de bord, calendrier éditorial et pipeline de posts.",
    summary:
      "Plateforme SaaS multi-tenant de planification et publication sociale pour agences et équipes, avec cockpit unique multi-comptes.",
    description:
      "Produit SaaS complet pour connecter plusieurs comptes sociaux (LinkedIn, Facebook, Instagram), gérer plusieurs entreprises clientes et orchestrer brouillons, calendrier, programmation et publication depuis un cockpit unique.",
    role: "Conception produit, architecture fullstack, frontend Next.js, API NestJS, schéma Supabase et pipeline de publication.",
    stack: ["Next.js", "NestJS", "TypeScript", "Supabase", "Postgres", "Monorepo pnpm"],
    problem:
      "Les équipes qui gèrent plusieurs marques sur plusieurs réseaux perdent du temps à jongler entre interfaces, comptes et fuseaux de publication, sans visibilité centralisée.",
    solution:
      "Architecture multi-tenant stricte (organisation, membership, JWT Supabase côté API Nest), scheduler minute-par-minute avec verrouillage Postgres, et cockpit Next.js pour comptes, calendrier, pipeline éditorial et rappels Telegram.",
    results: [
      "Un cockpit unique pour plusieurs entreprises clientes et comptes sociaux.",
      "Un pipeline avec états explicites (draft, scheduled, publishing, published, failed) et audit log.",
      "Une base SaaS extensible (analytics, approbation, formats additionnels).",
    ],
    externalUrl: "https://cast-loop-web.vercel.app",
    seoTitle: "Cast Loop — Étude de cas SaaS de publication sociale",
    seoDescription:
      "Étude de cas Cast Loop : SaaS multi-tenant Next.js + NestJS + Supabase pour planifier et publier sur les réseaux sociaux.",
  },
  {
    slug: "victor-couto",
    title: "Victor COUTO",
    eyebrow: "Site vitrine",
    featured: true,
    theme: "sunset",
    previewImage: "/assets/artisan-code-site-preview.webp",
    previewAlt: "Landing page premium pour l'entreprise Victor COUTO, artisan normand.",
    summary:
      "Landing page premium pour un artisan avec hiérarchie claire, univers sobre et conversion orientée prise de contact.",
    description:
      "Conception et développement d'une vitrine premium pour un artisan normand, pensée pour présenter le savoir-faire, rassurer rapidement et déclencher une prise de contact.",
    role: "Direction artistique, structuration de contenu, intégration frontend et optimisation de la conversion.",
    stack: ["Next.js", "TypeScript", "UI direction", "Performance web"],
    problem:
      "Le besoin était une présence web plus qualitative qu’un catalogue, avec un message lisible et une expérience fluide sur mobile.",
    solution:
      "Landing à forte hiérarchie visuelle : hero direct, sections courtes, appels à l’action lisibles.",
    results: [
      "Une présence digitale plus crédible et plus premium.",
      "Un parcours orienté prise de contact sans friction.",
      "Une interface claire qui met le contenu métier au premier plan.",
    ],
    externalUrl: "https://www.artisan-couto.fr",
    seoTitle: "Victor COUTO — Étude de cas site vitrine artisan",
    seoDescription:
      "Étude de cas d’un site vitrine premium pour artisan : direction artistique, hiérarchie forte et conversion orientée contact.",
  },
  {
    slug: "hp-sonorisation",
    title: "HP Sonorisation",
    eyebrow: "Event & Booking",
    featured: true,
    theme: "graphite",
    previewImage: "/assets/hp-sonorisation-site-preview.webp",
    previewAlt: "Site immersif HP Sonorisation avec esthétique nocturne et CTA marqués.",
    summary:
      "Vitrine immersive pour un prestataire son et animation, pensée autour d’un univers nocturne et d’un hero spectaculaire.",
    description:
      "Refonte d’une vitrine événementielle pour mettre en avant l’univers de marque, la capacité à animer des événements et la lisibilité des prises de contact.",
    role: "Conception produit, design frontend, storytelling visuel et cadrage des sections de conversion.",
    stack: ["Next.js", "TypeScript", "Brand experience", "Responsive UI"],
    problem:
      "Le site devait se différencier visuellement tout en restant compréhensible sur mobile, avec un objectif de conversion.",
    solution:
      "Interface plus immersive, direction artistique nocturne, hero affirmé, sections pour valoriser l’offre rapidement.",
    results: [
      "Une identité visuelle plus mémorable.",
      "Un message plus lisible sur les prestations proposées.",
      "Un meilleur équilibre entre impact visuel et clarté du parcours.",
    ],
    externalUrl: "https://www.hpsonorisation.fr",
    seoTitle: "HP Sonorisation — Étude de cas vitrine événementielle",
    seoDescription:
      "Étude de cas d’une vitrine immersive pour prestataire son et animation : univers de marque, hero visuel fort et CTA plus lisibles.",
  },
  {
    slug: "bibliflow",
    title: "BibliFlow",
    eyebrow: "Enseignement DevOps",
    featured: true,
    theme: "sunset",
    summary:
      "Projet fil rouge pour étudiants : comprendre Docker, Jenkins et SonarQube en construisant un système de gestion de stocks de livres.",
    description:
      "Conçu pour des étudiants de master à Nexa : un environnement pédagogique complet mêlant développement full-stack (Node.js, Angular) et bonnes pratiques DevOps.",
    role: "Intervenant — cadrage pédagogique, stack Node / Angular, containerisation Docker, CI Jenkins, qualité SonarQube.",
    stack: ["Node.js", "Angular", "Docker", "Jenkins", "SonarQube"],
    problem:
      "Les étudiants avaient besoin d’un projet de bout en bout pour relier API, interface, qualité logicielle et industrialisation, pas d’exercices isolés.",
    solution:
      "Un fil rouge stocks de livres : API REST Node.js, UI Angular, analyse SonarQube, conteneurs Docker et automatisation Jenkins.",
    results: [
      "Un environnement pédagogique qui mélange développement et DevOps.",
      "Une pratique transposable en entreprise (qualité, CI, containers).",
      "Un projet fonctionnel livré avec les étudiants.",
    ],
    externalUrl: "https://github.com/Spocsk/BibliFlow",
    seoTitle: "BibliFlow — Projet pédagogique Docker / Jenkins / SonarQube",
    seoDescription:
      "BibliFlow : projet fil rouge Nexa pour enseigner Docker, Jenkins, SonarQube, Node.js et Angular via une gestion de stocks de livres.",
  },
  {
    slug: "swift-2048",
    title: "2048 Swift Game",
    eyebrow: "Exploration iOS",
    featured: false,
    theme: "sunset",
    summary:
      "Clone du puzzle 2048 développé en Swift, avec logique de jeu personnalisée et animations fluides.",
    description:
      "Projet iOS pour explorer Swift, les patterns de logique applicative et la qualité perçue à travers l’animation. Exploration, pas l’offre mobile principale.",
    role: "Développement iOS, architecture de logique de jeu et travail sur l’animation.",
    stack: ["Swift", "SwiftUI", "Game logic", "Animation"],
    problem:
      "Reproduire un gameplay connu tout en contrôlant fusion, score et transitions d’état.",
    solution:
      "Implémentation personnalisée du moteur, avec un soin porté à la fluidité des mouvements et à la robustesse des règles.",
    results: [
      "Une meilleure maîtrise de Swift et SwiftUI.",
      "Un projet démonstratif d’exploration mobile.",
      "Une base pour itérer sur l’UX de jeu.",
    ],
    externalUrl: "https://github.com/Spocsk/2048-Like",
    seoTitle: "2048 Swift Game — Projet iOS en Swift",
    seoDescription:
      "Projet iOS en Swift inspiré de 2048 : logique de jeu personnalisée, animations fluides, exploration de l’écosystème Apple.",
  },
  {
    slug: "allocator-cpp",
    title: "Allocator C++",
    eyebrow: "Exploration systèmes",
    featured: false,
    theme: "aurora",
    summary:
      "Projet C++ centré sur l’allocation mémoire et la compréhension des mécanismes bas niveau.",
    description:
      "Exploration systémique d’un allocateur en C++ pour approfondir mémoire, performance et architecture bas niveau — hors de l’offre TypeScript.",
    role: "Conception bas niveau, expérimentation algorithmique, compromis performance / lisibilité.",
    stack: ["C++", "Memory management", "Systems programming", "Performance"],
    problem:
      "Mieux comprendre l’allocation mémoire, un sujet rarement visible dans des projets frontend.",
    solution:
      "Un projet focalisé sur la mécanique d’allocation et l’observation des impacts d’implémentation.",
    results: [
      "Une compréhension plus fine des mécanismes mémoire.",
      "Un projet technique hors du périmètre web habituel.",
      "Une preuve de curiosité sur des sujets bas niveau.",
    ],
    externalUrl: "https://github.com/Spocsk/Allocator-Cpp",
    seoTitle: "Allocator C++ — Projet de programmation système",
    seoDescription:
      "Projet C++ autour de l’allocation mémoire et de la programmation système : expérimentation, performance et compréhension bas niveau.",
  },
  {
    slug: "portfolio-dylan",
    title: "Portfolio Dylan",
    eyebrow: "Frontend",
    featured: false,
    theme: "graphite",
    previewImage: "/assets/portfolio-dylan-site-preview.webp",
    previewAlt:
      "Portfolio Dylan COUTO DE OLIVEIRA, développeur full-stack TypeScript, direction artistique premium.",
    summary:
      "Le code source de ce portfolio, Next.js, direction artistique soignée, structure SEO/GEO et preuves nominatives.",
    description:
      "Portfolio pensé comme une vitrine de profil senior : frontend léché, pages internes indexables, signaux d’entité alignés sur LinkedIn.",
    role: "Conception produit, frontend, structuration de contenu, travail SEO/GEO.",
    stack: ["Next.js", "TypeScript", "React", "Metadata API", "Vercel"],
    problem:
      "Le site devait rester distinctif visuellement tout en devenant explicite, indexable et utile pour le recrutement.",
    solution:
      "Home forte, pages internes, métadonnées, schema Person, études de cas nominatives.",
    results: [
      "Une meilleure lisibilité du profil et des expertises.",
      "Des surfaces indexables au-delà de la home.",
      "Une base plus robuste pour la visibilité SEO et GEO.",
    ],
    externalUrl: "https://github.com/Spocsk/Portfolio-Dylan",
    seoTitle: "Portfolio Dylan — Refonte frontend et SEO/GEO",
    seoDescription:
      "Étude de cas du portfolio Dylan : refonte frontend, pages internes et renforcement des signaux SEO/GEO.",
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
  "campbell-scientific": {
    eyebrow: "Industrial data",
    previewAlt: "Campbell Scientific industrial data-acquisition case study.",
    summary: "Angular / NestJS web apps for critical data-acquisition systems, used in 30+ countries.",
    description: "At Campbell Scientific I worked on industrial web applications to visualise, configure and operate high-volume field data: weather, hydrology, oil and gas, utilities and remote environments.",
    role: "Software engineer — Angular / TypeScript interfaces, NestJS / Node.js APIs, CI/CD and Docker.",
    problem: "Field teams and industrial clients need reliable interfaces for data where a mistake or an outage can affect an operational decision, across 30+ countries.",
    solution: "Angular interfaces for visualisation and configuration, NestJS APIs for equipment, measurements, supervision and cloud workflows, and safer releases through CI/CD and Docker.",
    results: ["Applications used in 30+ countries by public, industrial and scientific clients.", "A close focus on reliability, UI responsiveness and extreme-condition usage.", "Safer releases through CI/CD and quality practices."],
    seoTitle: "Campbell Scientific — Angular / NestJS case study",
    seoDescription: "Campbell Scientific case study: industrial Angular and NestJS web apps for critical data acquisition in 30+ countries.",
  },
  operis: {
    eyebrow: "Local-government SaaS",
    previewAlt: "Operis local-government SaaS case study.",
    summary: "Angular interfaces for local-government SaaS, up to 15,000 users/day and about 60% of French metropolitan areas.",
    description: "At Operis I built Angular interfaces for SaaS used by local authorities: planning, land, schools and digitised administrative journeys, under GNAU and ELAN constraints.",
    role: "Front-end developer — Angular / TypeScript, reusable components, accessibility and agent/citizen journeys.",
    problem: "Public agents and citizens handle sensitive administrative data. Journeys have to stay readable, traceable and stable at scale.",
    solution: "Reusable Angular components, modernised GNAU / ELAN journeys, and a more consistent UI to speed up product changes.",
    results: ["Contribution to platforms of up to 15,000 users/day.", "Announced coverage of about 60% of French metropolitan areas.", "Less duplication in business screens through shared components."],
    seoTitle: "Operis — Local-government Angular SaaS case study",
    seoDescription: "Operis case study: Angular interfaces for local-government SaaS, up to 15,000 users/day and ~60% of French metropolitan areas.",
  },
  "cast-loop": {
    eyebrow: "Multi-tenant SaaS",
    previewAlt: "Cast Loop publishing cockpit with dashboard, editorial calendar and post pipeline.",
    summary: "A multi-tenant SaaS platform for social planning and publishing, giving agencies and teams one cockpit for multiple accounts.",
    description: "A complete SaaS product for connecting multiple social accounts (LinkedIn, Facebook and Instagram), managing several client companies and coordinating drafts, calendars, scheduling and publishing from one cockpit.",
    role: "Product design, full-stack architecture, Next.js frontend, NestJS API, Supabase schema and publishing pipeline.",
    problem: "Teams managing several brands across multiple networks waste time switching between interfaces, accounts and publishing time zones, with no central view.",
    solution: "A strict multi-tenant architecture, a minute-by-minute scheduler with Postgres locking, and a Next.js cockpit for accounts, calendars, the editorial pipeline and Telegram reminders.",
    results: ["One cockpit for multiple client companies and social accounts.", "A pipeline with explicit states and an audit log.", "An extensible SaaS foundation."],
    seoTitle: "Cast Loop — Social publishing SaaS case study",
    seoDescription: "Cast Loop case study: a multi-tenant social publishing SaaS with Next.js, NestJS and Supabase.",
  },
  "victor-couto": {
    eyebrow: "Showcase website",
    previewAlt: "Premium landing page for Victor COUTO, a Normandy-based craft business.",
    summary: "A premium landing page for a craft business, with clear hierarchy, a restrained visual world and a contact-focused journey.",
    description: "Design and development of a premium showcase website for a Normandy-based craft business, created to present its expertise, build trust quickly and encourage contact.",
    role: "Art direction, content structure, frontend integration and conversion optimization.",
    problem: "The goal was a higher-quality web presence than a catalogue, with a clear message and a smooth mobile experience.",
    solution: "A landing page with strong visual hierarchy, a direct hero, concise sections and clear calls to action.",
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
    problem: "The website needed to stand out visually while remaining easy to understand on mobile, with a clear conversion goal.",
    solution: "A more immersive interface with night-time art direction, a confident hero and sections designed to communicate the offer quickly.",
    results: ["A more memorable visual identity.", "A clearer presentation of the services offered.", "A stronger balance between visual impact and journey clarity."],
    seoTitle: "HP Sonorisation — Events website case study",
    seoDescription: "Case study of an immersive website for a sound and entertainment provider, with a strong brand world, visual hero and clearer calls to action.",
  },
  bibliflow: {
    eyebrow: "DevOps teaching",
    previewAlt: "BibliFlow teaching project around Docker, Jenkins and SonarQube.",
    summary: "A fil-rouge project for students: learn Docker, Jenkins and SonarQube by building a book-stock system.",
    description: "Designed for master’s students at Nexa: a complete teaching environment mixing full-stack development (Node.js, Angular) and DevOps practice.",
    role: "Lecturer — pedagogy, Node / Angular stack, Docker, Jenkins CI, SonarQube quality.",
    problem: "Students needed an end-to-end project connecting API, UI, software quality and industrialisation, not isolated exercises.",
    solution: "A book-stock fil rouge: Node.js REST API, Angular UI, SonarQube analysis, Docker containers and Jenkins automation.",
    results: ["A teaching environment that mixes development and DevOps.", "Practice that transfers to industry (quality, CI, containers).", "A working project delivered with the students."],
    seoTitle: "BibliFlow — Docker / Jenkins / SonarQube teaching project",
    seoDescription: "BibliFlow: Nexa fil-rouge project teaching Docker, Jenkins, SonarQube, Node.js and Angular through a book-stock system.",
  },
  "swift-2048": {
    eyebrow: "iOS exploration",
    previewAlt: "2048 puzzle game developed in Swift.",
    summary: "A 2048 puzzle clone built in Swift with custom game logic and smooth animations.",
    description: "An iOS project to explore Swift, application-logic patterns and perceived quality through animation. Exploration, not the main mobile offer.",
    role: "iOS development, game-logic architecture and experience animation.",
    problem: "Reproduce familiar gameplay while keeping full control over merge logic, scoring and state transitions.",
    solution: "A custom game engine, focusing on movement fluidity and robust rules.",
    results: ["A stronger command of Swift and SwiftUI.", "A useful mobile exploration project.", "A foundation for further game UX work."],
    seoTitle: "2048 Swift Game — iOS project in Swift",
    seoDescription: "A Swift iOS project inspired by 2048, featuring custom game logic, smooth animations and hands-on learning of the Apple ecosystem.",
  },
  "allocator-cpp": {
    eyebrow: "Systems exploration",
    previewAlt: "C++ memory allocator systems-programming project.",
    summary: "A C++ project focused on memory allocation and a deeper understanding of low-level mechanisms.",
    description: "A systems-oriented exploration of a C++ allocator — outside the TypeScript hiring offer.",
    role: "Low-level design, algorithmic experimentation and performance/readability trade-offs.",
    problem: "Understand memory-allocation mechanisms rarely visible in typical frontend work.",
    solution: "A project centered on allocation mechanics and on observing how implementation choices affect structure and performance.",
    results: ["A deeper understanding of memory mechanisms.", "A credible technical project beyond the usual web scope.", "Evidence of curiosity in low-level topics."],
    seoTitle: "C++ Allocator — Systems programming project",
    seoDescription: "A C++ project exploring memory allocation and systems programming through experimentation, performance work and low-level understanding.",
  },
  "portfolio-dylan": {
    eyebrow: "Frontend",
    previewAlt: "Portfolio of Dylan COUTO DE OLIVEIRA, full-stack TypeScript developer, with premium art direction.",
    summary: "The source code for this portfolio, built with Next.js, careful art direction and a stronger SEO/GEO foundation.",
    description: "A personal portfolio designed as a senior-profile showcase, with polished frontend work, indexable internal pages and entity signals aligned with LinkedIn.",
    role: "Product design, frontend, content structure, SEO/GEO work.",
    problem: "The portfolio needed to remain visually distinctive while becoming more explicit, indexable and useful for recruitment.",
    solution: "A strong homepage, indexable internal pages, richer metadata and named case studies.",
    results: ["A clearer presentation of the profile and expertise.", "More indexable surfaces beyond the homepage.", "A more robust foundation for SEO and GEO visibility."],
    seoTitle: "Dylan Portfolio — Frontend and SEO/GEO redesign",
    seoDescription: "Dylan portfolio case study: frontend redesign, new internal pages and stronger SEO/GEO signals.",
  },
};

const spanishProjectCopy: Record<string, ProjectCopy> = {
  "campbell-scientific": {
    eyebrow: "Datos industriales",
    previewAlt: "Caso de estudio Campbell Scientific de adquisición de datos industriales.",
    summary: "Aplicaciones web Angular / NestJS para sistemas de adquisición de datos críticos, usadas en más de 30 países.",
    description: "En Campbell Scientific trabajé en aplicaciones web industriales para visualizar, configurar y explotar datos de campo de alto volumen: meteorología, hidrología, petróleo/gas, utilities y entornos aislados.",
    role: "Ingeniero de software — interfaces Angular / TypeScript, APIs NestJS / Node.js, CI/CD y Docker.",
    problem: "Los equipos de campo y los clientes industriales necesitan interfaces fiables para datos cuya error o indisponibilidad puede afectar una decisión operativa, en más de 30 países.",
    solution: "Interfaces Angular para visualización y configuración, APIs NestJS para equipos, medidas, supervisión y cloud, e industrialización de entregas con CI/CD y Docker.",
    results: ["Aplicaciones usadas en más de 30 países por clientes públicos, industriales y científicos.", "Atención a la fiabilidad, la reactividad de la UI y el uso en condiciones extremas.", "Releases más seguras gracias a CI/CD y prácticas de calidad."],
    seoTitle: "Campbell Scientific — Caso de estudio Angular / NestJS",
    seoDescription: "Caso Campbell Scientific: aplicaciones web industriales Angular y NestJS para adquisición de datos crítica en más de 30 países.",
  },
  operis: {
    eyebrow: "SaaS administraciones",
    previewAlt: "Caso de estudio Operis de SaaS para administraciones locales.",
    summary: "Interfaces Angular para SaaS de administraciones locales, hasta 15.000 usuarios/día y alrededor del 60 % de las metrópolis francesas.",
    description: "En Operis desarrollé interfaces Angular para SaaS de administraciones territoriales: urbanismo, suelo, escolar y trámites desmaterializados, en un marco GNAU y ley ELAN.",
    role: "Desarrollador front-end Angular / TypeScript, componentes reutilizables, accesibilidad y recorridos agentes / ciudadanos.",
    problem: "Agentes públicos y ciudadanos manipulan datos administrativos sensibles. Los recorridos deben seguir siendo legibles, trazables y estables a gran escala.",
    solution: "Componentes Angular reutilizables, modernización de recorridos GNAU / ELAN y más coherencia UI para acelerar la evolución del producto.",
    results: ["Contribución a plataformas de hasta 15.000 usuarios/día.", "Cobertura anunciada de alrededor del 60 % de las metrópolis francesas.", "Menos duplicación de pantallas de negocio gracias a componentes compartidos."],
    seoTitle: "Operis — Caso de estudio SaaS Angular para administraciones",
    seoDescription: "Caso Operis: interfaces Angular para SaaS de administraciones, hasta 15.000 usuarios/día y ~60 % de las metrópolis.",
  },
  "cast-loop": {
    eyebrow: "SaaS multiempresa",
    previewAlt: "Panel de publicación de Cast Loop con dashboard, calendario editorial y pipeline de publicaciones.",
    summary: "Plataforma SaaS multiempresa para planificar y publicar en redes sociales, con un único panel para agencias, equipos y múltiples cuentas.",
    description: "Producto SaaS completo para conectar varias cuentas sociales (LinkedIn, Facebook e Instagram), gestionar varias empresas cliente y coordinar borradores, calendario, programación y publicación desde un único panel.",
    role: "Diseño de producto, arquitectura full-stack, frontend Next.js, API NestJS, esquema Supabase y pipeline de publicación.",
    problem: "Los equipos que gestionan varias marcas en distintas redes pierden tiempo cambiando de interfaz, cuenta y zona horaria, sin una visión centralizada.",
    solution: "Arquitectura multiempresa estricta, programador minuto a minuto con bloqueo Postgres y un panel Next.js que reúne cuentas, calendario, pipeline editorial y recordatorios de Telegram.",
    results: ["Un único panel para varias empresas cliente y cuentas sociales.", "Un pipeline con estados explícitos y registro de auditoría.", "Una base SaaS extensible."],
    seoTitle: "Cast Loop — Caso de estudio SaaS de publicación social",
    seoDescription: "Caso de estudio de Cast Loop, plataforma SaaS multiempresa de planificación y publicación social con Next.js, NestJS y Supabase.",
  },
  "victor-couto": {
    eyebrow: "Sitio corporativo",
    previewAlt: "Landing page premium para Victor COUTO, empresa artesanal de Normandía.",
    summary: "Landing page premium para una empresa artesanal, con jerarquía clara, una estética sobria y un recorrido orientado al contacto.",
    description: "Diseño y desarrollo de un sitio premium para una empresa artesanal de Normandía, pensado para presentar su saber hacer, generar confianza y facilitar el contacto.",
    role: "Dirección de arte, estructura de contenidos, integración frontend y optimización de la conversión.",
    problem: "El objetivo era una presencia web más cualitativa que un catálogo, con un mensaje claro y una experiencia móvil fluida.",
    solution: "Landing page con jerarquía visual marcada, hero directo, secciones breves y llamadas a la acción claras.",
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
    solution: "Interfaz más inmersiva, dirección de arte nocturna, hero rotundo y secciones diseñadas para comunicar rápidamente la oferta.",
    results: ["Una identidad visual más memorable.", "Una presentación más clara de los servicios.", "Un mejor equilibrio entre impacto visual y claridad del recorrido."],
    seoTitle: "HP Sonorisation — Caso de estudio de sitio de eventos",
    seoDescription: "Caso de estudio de un sitio inmersivo para servicios de sonido y animación, con identidad fuerte, hero visual y llamadas a la acción más claras.",
  },
  bibliflow: {
    eyebrow: "Enseñanza DevOps",
    previewAlt: "Proyecto pedagógico BibliFlow con Docker, Jenkins y SonarQube.",
    summary: "Proyecto fil rouge para estudiantes: entender Docker, Jenkins y SonarQube construyendo un sistema de stocks de libros.",
    description: "Diseñado para estudiantes de máster en Nexa: un entorno pedagógico completo que mezcla desarrollo full-stack (Node.js, Angular) y prácticas DevOps.",
    role: "Docente — pedagogía, stack Node / Angular, Docker, CI Jenkins, calidad SonarQube.",
    problem: "Los estudiantes necesitaban un proyecto de extremo a extremo que uniera API, interfaz, calidad e industrialización, no ejercicios aislados.",
    solution: "Un fil rouge de stocks de libros: API REST Node.js, UI Angular, análisis SonarQube, contenedores Docker y automatización Jenkins.",
    results: ["Un entorno pedagógico que mezcla desarrollo y DevOps.", "Una práctica transferable a empresa (calidad, CI, contenedores).", "Un proyecto funcional entregado con los estudiantes."],
    seoTitle: "BibliFlow — Proyecto pedagógico Docker / Jenkins / SonarQube",
    seoDescription: "BibliFlow: proyecto fil rouge Nexa para enseñar Docker, Jenkins, SonarQube, Node.js y Angular con una gestión de stocks de libros.",
  },
  "swift-2048": {
    eyebrow: "Exploración iOS",
    previewAlt: "Juego de puzle 2048 desarrollado en Swift.",
    summary: "Clon del puzle 2048 desarrollado en Swift, con lógica de juego personalizada y animaciones fluidas.",
    description: "Proyecto iOS para explorar Swift y la calidad percibida mediante la animación. Exploración, no la oferta móvil principal.",
    role: "Desarrollo iOS, arquitectura de la lógica de juego y animación de la experiencia.",
    problem: "Reproducir una mecánica conocida manteniendo el control total sobre fusiones, puntuación y transiciones de estado.",
    solution: "Una implementación propia del motor, cuidando la fluidez de los movimientos y la solidez de las reglas.",
    results: ["Mayor dominio de Swift y SwiftUI.", "Un proyecto demostrativo de exploración móvil.", "Una base para seguir iterando sobre la UX de juego."],
    seoTitle: "2048 Swift Game — Proyecto iOS en Swift",
    seoDescription: "Proyecto iOS en Swift inspirado en 2048, con lógica personalizada, animaciones fluidas y aprendizaje práctico del ecosistema Apple.",
  },
  "allocator-cpp": {
    eyebrow: "Exploración de sistemas",
    previewAlt: "Proyecto de programación de sistemas sobre un asignador de memoria en C++.",
    summary: "Proyecto C++ centrado en la asignación de memoria y en la comprensión de los mecanismos de bajo nivel.",
    description: "Exploración de un asignador en C++ — fuera de la oferta TypeScript.",
    role: "Diseño de bajo nivel, experimentación algorítmica y compromisos entre rendimiento y legibilidad.",
    problem: "Comprender mejor los mecanismos de asignación de memoria, poco visibles en proyectos frontend.",
    solution: "Un proyecto centrado en la mecánica de asignación y en observar cómo las decisiones de implementación afectan a la estructura y al rendimiento.",
    results: ["Una comprensión más profunda de los mecanismos de memoria.", "Un proyecto técnico sólido fuera del ámbito web habitual.", "Una muestra de curiosidad en temas de bajo nivel."],
    seoTitle: "Allocator C++ — Proyecto de programación de sistemas",
    seoDescription: "Proyecto C++ sobre asignación de memoria y programación de sistemas: experimentación, rendimiento y comprensión de bajo nivel.",
  },
  "portfolio-dylan": {
    eyebrow: "Frontend",
    previewAlt: "Portfolio de Dylan COUTO DE OLIVEIRA, desarrollador full-stack TypeScript, con dirección de arte premium.",
    summary: "El código fuente de este portfolio, creado con Next.js, una dirección de arte cuidada y una base SEO/GEO más sólida.",
    description: "Portfolio personal concebido como escaparate de un perfil sénior: frontend cuidado, páginas internas indexables y señales de entidad alineadas con LinkedIn.",
    role: "Diseño de producto, frontend, estructura de contenidos, trabajo SEO/GEO.",
    problem: "El portfolio debía conservar su personalidad visual y, al mismo tiempo, ser más explícito, indexable y útil para la contratación.",
    solution: "Página de inicio potente, páginas internas, metadatos enriquecidos y casos de estudio con nombre.",
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

export function getFeaturedProjects(locale: Locale = "fr"): Project[] {
  return getProjects(locale).filter((project) => project.featured);
}

export function getProjectBySlug(slug: string, locale: Locale = "fr") {
  return getProjects(locale).find((project) => project.slug === slug);
}
