import type { Locale } from "./i18n";

export type ProjectTheme = "sunset" | "aurora" | "graphite";

export type ProjectAxis = "web" | "systems" | "pedagogy";

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  axis: ProjectAxis;
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
    axis: "systems",
    featured: true,
    theme: "graphite",
    previewImage: "/assets/campbell-scientific-logo.jpg",
    previewAlt: "Logo Campbell Scientific.",
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
    axis: "systems",
    featured: false,
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
    slug: "duoshot",
    title: "DuoShot",
    eyebrow: "SaaS App Store",
    axis: "web",
    featured: true,
    theme: "aurora",
    previewImage: "/assets/duoshot-site-preview.webp",
    previewAlt:
      "DuoShot : pipeline de screenshots App Store pour iPhone Duo, preview sans chassis.",
    summary:
      "SaaS Next.js pour produire des screenshots App Store iPhone Duo justes, en quelques minutes, sans device physique.",
    description:
      "DuoShot est un pipeline App Store sans chassis : outer 5,4″, inner 7,6″, option 6,9″. Preview sans compte, export ZIP une fois connecté. Uploads navigateur vers Supabase Storage, rendu Sharp côté Node, checkout Stripe.",
    role: "Conception produit, architecture fullstack Next.js, auth Supabase, pipeline d’images Sharp et monétisation Stripe.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Sharp"],
    problem:
      "Les captures App Store pour iPhone Duo (écran externe et interne) n’ont pas la géométrie d’un iPhone classique. Sans device, les chassis et ratios faux cassent la review.",
    solution:
      "Un pipeline web qui clippe et compose les trois formats Duo, avec preview immédiate, ZIP HD derrière compte, et plans Free / Launch / Indie / Studio.",
    results: [
      "Un outil public en production : https://duoshot.vercel.app.",
      "Preview sans compte, ZIP avec compte, auth Google / email / magic link.",
      "Quality gate Vitest + Cypress, déploiements Vercel.",
    ],
    externalUrl: "https://duoshot.vercel.app",
    seoTitle: "DuoShot — Étude de cas SaaS screenshots iPhone Duo",
    seoDescription:
      "Étude de cas DuoShot : SaaS Next.js + Supabase + Stripe pour des screenshots App Store iPhone Duo sans device.",
  },
  {
    slug: "makeitgueznet",
    title: "MakeItGueznet",
    eyebrow: "Jeu de soirée",
    axis: "web",
    featured: false,
    theme: "sunset",
    previewImage: "/assets/makeitgueznet-site-preview.webp",
    previewAlt:
      "MakeItGueznet : accueil Polaroid pour rejoindre une salle et légender des fichiers perso.",
    summary:
      "Jeu de soirée web : salles, bibliothèque d’images et de GIF, légendes, notes anonymes sur 5 étoiles.",
    description:
      "MakeItGueznet est un jeu privé pour jouer avec les fichiers du groupe. Compte pour la bibliothèque, code de salle, drop dans le lobby, une image différente par joueur, overlay texte (y compris sur GIF), vote anonyme, révélation des auteurs.",
    role: "Conception produit, frontend Next.js, backend Convex (auth, storage, temps réel) et direction visuelle Polaroid.",
    stack: ["Next.js", "TypeScript", "Convex", "Realtime"],
    problem:
      "Les kits payants de jeux de mèmes bloquent l’upload des photos et GIF du groupe. On voulait une partie complète sur téléphone et laptop, avec nos fichiers seulement.",
    solution:
      "Une seule boucle : bibliothèque perso, salle à code court, pool commun, légende sur Polaroid, notes 1–5 sans voir l’auteur, scores, manche suivante.",
    results: [
      "Un produit jouable en production : https://makeitgueznet.vercel.app.",
      "Temps réel Convex pour salles, manches et votes.",
      "Identité Polaroid originale, sans copier une marque tierce.",
    ],
    externalUrl: "https://makeitgueznet.vercel.app",
    seoTitle: "MakeItGueznet — Étude de cas jeu de soirée Next.js / Convex",
    seoDescription:
      "Étude de cas MakeItGueznet : jeu de soirée Next.js et Convex, fichiers perso, légendes et notes anonymes.",
  },
  {
    slug: "poselock",
    title: "PoseLock",
    eyebrow: "App iOS",
    axis: "web",
    featured: true,
    theme: "graphite",
    previewImage: "/assets/poselock-site-preview.png",
    previewAlt: "Bannière du site PoseLock : Pose. Score. Lock.",
    summary:
      "Application iOS de posing on-device : Pose. Score. Lock. Vision Body Pose 3D, journal et abonnement StoreKit.",
    description:
      "PoseLock évalue la ligne, pas la personne. Caméra plein écran, squelette, packs de poses, locks avec stills, journal J-7. Tout tourne sur l’appareil : SwiftUI, Vision 3D, SwiftData. Pas de backend.",
    role: "Conception produit, SwiftUI, scoring Vision, SwiftData, StoreKit 2 et quota Pro.",
    stack: ["SwiftUI", "Vision 3D", "SwiftData", "StoreKit 2"],
    problem:
      "Le posing photo manque d’un feedback immédiat et privé. Un score en ligne impliquerait d’envoyer l’image ; ici tout doit rester on-device.",
    solution:
      "Cadre caméra, score de lock, templates gold, journal comparatif, paywall au 4ᵉ lock gratuit. iPhone, iOS 17+.",
    results: [
      "App iOS livrée, sources publiques : https://github.com/Spocsk/PoseLock.",
      "Quatre surfaces : onboarding, accueil, caméra, réglages — journal et bibliothèque en feuilles.",
      "Tests unitaires sur scoring, pose du jour et quota.",
    ],
    externalUrl: "https://spocsk.github.io/PoseLock/",
    seoTitle: "PoseLock — Étude de cas app iOS posing on-device",
    seoDescription:
      "Étude de cas PoseLock : app iOS SwiftUI, Vision Body Pose 3D et StoreKit, scoring on-device sans backend.",
  },
  {
    slug: "pas-envoye",
    title: "Pas envoyé",
    eyebrow: "App iOS",
    axis: "web",
    featured: false,
    theme: "graphite",
    summary:
      "App iOS no-contact : compteur de jours, brouillon non envoyé, widgets lock et home. Le silence est la fonctionnalité.",
    description:
      "Pas envoyé aide à ne plus écrire à quelqu’un. Gros chiffre, « Conserver ici », brouillon qui ne part jamais vers Messages, reset honnête au craquage. Widgets toujours gratuits. Paywall depuis les réglages seulement.",
    role: "Conception produit, SwiftUI, widgets, persistance App Group, RevenueCat et analytics PostHog minimales.",
    stack: ["SwiftUI", "Widgets", "RevenueCat", "PostHog"],
    problem:
      "Les apps de « no contact » poussent coach, streaks et social. Ici le besoin est inverse : un compteur, un tiroir pour ce qu’on n’envoie pas, zéro thérapie.",
    solution:
      "Cœur gratuit : une personne, compteur calendaire, 7 derniers brouillons, widgets. Pro : historique illimité, jusqu’à 3 personnes, export. Jamais de paywall au premier lancement.",
    results: [
      "App iOS livrée, UI française, iPhone only, sombre uniquement.",
      "Widgets verrouillage et accueil toujours hors paywall.",
      "Tests unitaires et UI : compteur, persistance, aucun envoi Messages, paywall depuis Réglages.",
    ],
    seoTitle: "Pas envoyé — Étude de cas app iOS no-contact",
    seoDescription:
      "Étude de cas Pas envoyé : app iOS SwiftUI no-contact, compteur de jours, brouillons non envoyés et widgets.",
  },
  {
    slug: "cast-loop",
    title: "Cast Loop",
    eyebrow: "SaaS multi-tenant",
    axis: "web",
    featured: false,
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
    axis: "web",
    featured: false,
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
    axis: "web",
    featured: false,
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
    axis: "pedagogy",
    featured: false,
    theme: "sunset",
    summary:
      "Projet fil rouge pour étudiants : comprendre Docker, Jenkins et SonarQube en construisant un système de gestion de stocks de livres.",
    description:
      "Conçu pour des étudiants de master : un environnement pédagogique complet mêlant développement full-stack (Node.js, Angular) et bonnes pratiques DevOps.",
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
      "BibliFlow : projet fil rouge pour enseigner Docker, Jenkins, SonarQube, Node.js et Angular via une gestion de stocks de livres.",
  },
  {
    slug: "swift-2048",
    title: "2048 Swift Game",
    eyebrow: "Exploration iOS",
    axis: "systems",
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
    axis: "systems",
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
    axis: "web",
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
  duoshot: {
    eyebrow: "App Store SaaS",
    previewAlt: "DuoShot App Store screenshot pipeline for iPhone Duo, preview without a chassis.",
    summary: "A Next.js SaaS that produces accurate iPhone Duo App Store screenshots in minutes, without a physical device.",
    description: "DuoShot is a chassis-free App Store pipeline: outer 5.4″, inner 7.6″, optional 6.9″. Preview without an account, ZIP export once signed in. Browser uploads to Supabase Storage, Sharp rendering on Node, Stripe checkout.",
    role: "Product design, Next.js full-stack architecture, Supabase auth, Sharp image pipeline and Stripe billing.",
    problem: "App Store captures for iPhone Duo (outer and inner displays) do not match a classic iPhone. Without a device, wrong chassis and ratios fail review.",
    solution: "A web pipeline that clips and composes the three Duo formats, with instant preview, HD ZIP behind an account, and Free / Launch / Indie / Studio plans.",
    results: ["A public production tool at https://duoshot.vercel.app.", "Preview without an account, ZIP with an account, Google / email / magic-link auth.", "Vitest + Cypress quality gate, Vercel deploys."],
    seoTitle: "DuoShot — iPhone Duo screenshot SaaS case study",
    seoDescription: "DuoShot case study: a Next.js + Supabase + Stripe SaaS for iPhone Duo App Store screenshots without a device.",
  },
  makeitgueznet: {
    eyebrow: "Party game",
    previewAlt: "MakeItGueznet Polaroid home to join a room and caption personal files.",
    summary: "A web party game: rooms, a personal image and GIF library, captions, anonymous five-star ratings.",
    description: "MakeItGueznet is a private game for playing with the group’s own files. Account for the library, room code, lobby drops, a different image per player, text overlay (including on GIFs), anonymous voting, then author reveal.",
    role: "Product design, Next.js frontend, Convex backend (auth, storage, realtime) and Polaroid visual direction.",
    problem: "Paid meme-kit games block uploads of the group’s photos and GIFs. We wanted a full round on phone and laptop, using only our files.",
    solution: "One loop: personal library, short room code, shared pool, Polaroid caption, 1–5 ratings without seeing the author, scores, next round.",
    results: ["A playable production product at https://makeitgueznet.vercel.app.", "Convex realtime for rooms, rounds and votes.", "An original Polaroid identity, with no third-party brand copy."],
    seoTitle: "MakeItGueznet — Next.js / Convex party-game case study",
    seoDescription: "MakeItGueznet case study: a Next.js and Convex party game with personal files, captions and anonymous ratings.",
  },
  poselock: {
    eyebrow: "iOS app",
    previewAlt: "PoseLock iOS posing app: pose, score and lock on-device.",
    summary: "An on-device iOS posing app: Pose. Score. Lock. Vision Body Pose 3D, journal and StoreKit subscription.",
    description: "PoseLock judges the line, never the person. Full-screen camera, skeleton, pose packs, locks with stills, J-7 journal. Everything runs on-device: SwiftUI, Vision 3D, SwiftData. No backend.",
    role: "Product design, SwiftUI, Vision scoring, SwiftData, StoreKit 2 and Pro quota.",
    problem: "Photo posing lacks immediate, private feedback. An online score would mean sending the image; here everything has to stay on-device.",
    solution: "Camera frame, lock score, gold templates, comparative journal, paywall on the 4th free lock. iPhone, iOS 17+.",
    results: ["A shipped iOS app, public sources at https://github.com/Spocsk/PoseLock.", "Four surfaces: onboarding, home, camera, settings — journal and library as sheets.", "Unit tests for scoring, pose of the day and quota."],
    seoTitle: "PoseLock — On-device iOS posing app case study",
    seoDescription: "PoseLock case study: a SwiftUI iOS app with Vision Body Pose 3D and StoreKit, scoring entirely on-device.",
  },
  "pas-envoye": {
    eyebrow: "iOS app",
    previewAlt: "Pas envoyé iOS no-contact app with day counter and unsent drafts.",
    summary: "A no-contact iOS app: day counter, unsent draft, lock and home widgets. Silence is the feature.",
    description: "Pas envoyé helps you stop writing to someone. Big number, “Keep it here”, a draft that never opens Messages, honest reset on a slip. Widgets always free. Paywall from Settings only.",
    role: "Product design, SwiftUI, widgets, App Group persistence, RevenueCat and minimal PostHog analytics.",
    problem: "No-contact apps push coaching, streaks and social. The need here is the opposite: a counter, a drawer for what you don’t send, no therapy.",
    solution: "Free core: one person, calendar-day counter, last 7 drafts, widgets. Pro: unlimited history, up to 3 people, export. Never a paywall on first launch.",
    results: ["A shipped iOS app, French UI, iPhone only, dark only.", "Lock and home widgets always outside the paywall.", "Unit and UI tests: counter, persistence, no Messages send, paywall from Settings."],
    seoTitle: "Pas envoyé — iOS no-contact app case study",
    seoDescription: "Pas envoyé case study: a SwiftUI iOS no-contact app with a day counter, unsent drafts and widgets.",
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
    description: "Designed for master’s students: a complete teaching environment mixing full-stack development (Node.js, Angular) and DevOps practice.",
    role: "Lecturer — pedagogy, Node / Angular stack, Docker, Jenkins CI, SonarQube quality.",
    problem: "Students needed an end-to-end project connecting API, UI, software quality and industrialisation, not isolated exercises.",
    solution: "A book-stock fil rouge: Node.js REST API, Angular UI, SonarQube analysis, Docker containers and Jenkins automation.",
    results: ["A teaching environment that mixes development and DevOps.", "Practice that transfers to industry (quality, CI, containers).", "A working project delivered with the students."],
    seoTitle: "BibliFlow — Docker / Jenkins / SonarQube teaching project",
    seoDescription: "BibliFlow: a capstone project teaching Docker, Jenkins, SonarQube, Node.js and Angular through a book-stock system.",
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

const translatedProjectCopy: Record<Exclude<Locale, "fr">, Record<string, ProjectCopy>> = {
  en: englishProjectCopy,
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
