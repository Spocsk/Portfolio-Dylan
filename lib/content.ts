import type { TimelineItem } from "../components/bento";

export const timeline: TimelineItem[] = [
  { years: "2024 — 2026", title: "Campbell Scientific", detail: "Ingénieur logiciel full-stack TypeScript · monitoring environnemental" },
  { years: "2022 — 2024", title: "Operis", detail: "Développeur front-end Angular · SaaS pour les collectivités" },
  { years: "2020 — 2022", title: "Citizens", detail: "Développeur full-stack Symfony / Vue.js · SaaS de mécénat de compétences" },
  { years: "Depuis 2022", title: "Formateur", detail: "Cours de développement en Bachelor et Mastère" },
];

export const formation: TimelineItem[] = [
  { years: "2020 — 2022", title: "Normandie Web School", detail: "Concepteur développeur d'applications (Bac+3/4), titre RNCP" },
  { years: "2018 — 2020", title: "IUT de Rouen", detail: "DUT Génie électrique et informatique industrielle" },
];

export const references = [
  { name: "Laurent P.", company: "Campbell Scientific", role: "Engineering Manager" },
  { name: "Hassene B.", company: "Operis", role: "Scrum Master / Manager" },
  { name: "Antoine F.", company: "Extia", role: "Ingénieur d'affaires" },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  sector: string;
  context: string;
  missions: string[];
  team?: string;
  result: string;
  stack: string[];
  cv: { context: string; missions: string[]; stack: string[] };
};

export const experiences: Experience[] = [
  {
    company: "Campbell Scientific",
    role: "Ingénieur logiciel full-stack TypeScript",
    period: "Janvier 2024 — Juillet 2026",
    sector: "Environnement & monitoring · éditeur logiciel",
    context: "Conception et maintenance d'un système distribué de monitoring environnemental et d'analyse météorologique.",
    missions: [
      "Conception d'environ 10 micro-frontends Angular et 10 microservices NestJS / Node.js.",
      "Couverture de tests unitaires, d'intégration et E2E montée au-delà de 80 %, diagnostic des anomalies applicatives.",
      "Déploiements Docker / Kubernetes, monitoring Grafana, optimisation de requêtes PostgreSQL.",
      "Pipelines GitLab CI optimisés : −30 % de temps de build.",
      "Correction de problèmes de dépendances sur un microservice Java / Spring Boot.",
    ],
    team: "Équipe : 7 développeurs full-stack, 1 QA, 1 PM, 1 PO, 3 DevOps.",
    result: "Écosystème distribué maintenu en production, tests au-delà de 80 %, build −30 %.",
    stack: ["Angular", "NestJS", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "GitLab CI", "Grafana", "Spring Boot"],
    cv: {
      context: "conception d'un système distribué d'analyse météorologique.",
      missions: ["Conception de micro-frontends et de microservices.", "Montée de la couverture de tests unitaires au-delà de 80 %.", "Déploiements Docker / Kubernetes.", "Optimisation des pipelines GitLab."],
      stack: ["Angular", "NestJS", "Kubernetes", "GitLab CI", "PostgreSQL"],
    },
  },
  {
    company: "Operis",
    role: "Développeur front-end Angular",
    period: "Septembre 2022 — Janvier 2024",
    sector: "Éditeur SaaS · collectivités territoriales",
    context: "Interfaces Angular pour des solutions SaaS destinées aux collectivités, jusqu'à 15 000 utilisateurs par jour. Modernisation d'un produit SIG métier : urbanisme, foncier, scolaire, démarches dématérialisées, GNAU, loi ELAN.",
    missions: [
      "Écrans métier urbanisme, foncier, scolaire et démarches dématérialisées.",
      "Refonte d'une application vieillissante en Angular 14/15 et NestJS : 10 à 15 écrans et les parcours clés.",
      "Composants réutilisables, flux RxJS / NgRx, lazy loading, réorganisation du store.",
      "Intégration au back-end NestJS et à des scripts Python exécutés en arrière-plan.",
      "Tests Jest et GitHub Actions au-delà de 80 % de couverture.",
    ],
    team: "Équipe : 4 front, 4 back, 1 Scrum Master, 1 PM. Accompagnement de 3 développeurs.",
    result: "Parcours GNAU et loi ELAN modernisés, livrés sur un parc couvrant ≈ 60 % des métropoles françaises.",
    stack: ["Angular", "RxJS", "NgRx", "NestJS", "Next.js", "Python", "Jest", "GitHub Actions"],
    cv: {
      context: "développement de solutions SaaS destinées aux collectivités territoriales.",
      missions: ["Développement d'interfaces métier.", "Création de composants réutilisables.", "Modernisation des parcours utilisateurs.", "Livraisons multiples sur des plateformes régionales."],
      stack: ["Angular", "TypeScript", "SaaS", "Agile", "Next.js"],
    },
  },
  {
    company: "Citizens",
    role: "Développeur full-stack Symfony / Vue.js",
    period: "Décembre 2020 — Septembre 2022",
    sector: "Plateforme web · mécénat de compétences",
    context: "Conception d'un SaaS complet de mécénat de compétences, du socle technique et de l'infrastructure jusqu'à la mise en production.",
    missions: [
      "API Symfony 5 avec API Platform et MySQL.",
      "SPA Vue.js avec gestion des états via Vuex, interface web et mobile.",
      "Docker, pipelines CI/CD et environnements de pré-production Linux.",
      "Encadrement de 2 développeurs en Scrum, sprints de 1 à 4 semaines.",
    ],
    result: "Plateforme mise en production, socle technique et chaîne CI/CD en place.",
    stack: ["Symfony 5", "API Platform", "Vue.js", "Vuex", "MySQL", "Docker", "Linux"],
    cv: {
      context: "conception d'un SaaS complet pour le mécénat de compétences.",
      missions: ["Développement d'une API complète.", "Création d'une interface web et mobile.", "Mise en place des process de mise en production."],
      stack: ["Symfony 5", "Vue.js", "Docker", "CI/CD", "MySQL", "Scrum"],
    },
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  href?: string;
  url?: string;
  status?: string;
  image?: { src: string; alt: string };
};

export const products: Project[] = [
  { title: "Cartable", kicker: "Outil · MCP", description: "Prospection d'écoles et rentabilité des contrats pour formateur indépendant, aussi interrogeable par Claude.", url: "https://cartable-nine.vercel.app" },
  { title: "DuoShot", kicker: "Produit · Next.js, Supabase", description: "Les captures App Store de l'iPhone Duo, justes, en trois minutes et sans appareil.", url: "https://duoshot.vercel.app", image: { src: "/assets/duoshot-site-preview.webp", alt: "Page d'accueil de DuoShot" } },
  { title: "Cast Loop", kicker: "SaaS multi-tenant", description: "Planifier et publier sur plusieurs réseaux sociaux, pour plusieurs entreprises clientes, depuis un cockpit unique.", url: "https://cast-loop-web.vercel.app", image: { src: "/assets/cast-loop-site-preview.webp", alt: "Page d'accueil de Cast Loop" } },
];

export const iosApps: Project[] = [
  { title: "Oru 折る", kicker: "SwiftUI · iPhone, iPad, Duo", description: "L'origami guidé pli par pli.", url: "https://spocsk.github.io/oru/" },
  { title: "Détour", kicker: "App iOS", description: "Des balades en boucle, à checkpoints.", url: "https://spocsk.github.io/detour/" },
  { title: "Vita", kicker: "SwiftUI · Apple Watch", description: "Santé 100 % locale : assistant IA sur l'appareil, journal, entraînement course à pied.", status: "En développement" },
  { title: "PoseLock", kicker: "SwiftUI", description: "Pose. Score. Lock.", url: "https://poselock.vercel.app" },
];

export const courses: Project[] = [
  { title: "Latent", kicker: "IA", description: "Comprendre comment fonctionnent les LLM, en manipulant.", url: "https://latent-eta-wheat.vercel.app" },
  { title: "Correspondance", kicker: "Architecture", description: "Apprendre l'architecture logicielle et le system design.", url: "https://correspondance-two.vercel.app" },
  { title: "System Design Quest", kicker: "Jeu", description: "Plateau isométrique, simulation de trafic, révision espacée.", url: "https://system-design-quest-sigma.vercel.app" },
  { title: "Le Cabinet du Quai", kicker: "SQL · Bachelor 2", description: "Le SQL avancé en classant des dossiers sur un tableau de liège.", url: "https://le-cabinet-du-quai.vercel.app" },
  { title: "GO/NO-GO", kicker: "Quiz live", description: "Une question, quatre réponses, des sessions avec callsign pour réviser.", url: "https://gonogo-sooty.vercel.app" },
  { title: "Full-Stack Quest", kicker: "Mastère 2", description: "Cinq jeux et un contrat d'intégration pour apprendre à coordonner front et back." },
];

export const clientSites: Project[] = [
  { title: "Artisan Couto", kicker: "Artisan", description: "Le site vitrine d'une entreprise artisanale.", url: "https://www.artisan-couto.fr", image: { src: "/assets/artisan-code-site-preview.webp", alt: "Page d'accueil du site Artisan Couto" } },
  { title: "HP Sonorisation", kicker: "Sonorisation", description: "Le portfolio d'une entreprise de sonorisation.", url: "https://www.hpsonorisation.fr", image: { src: "/assets/hp-sonorisation-site-preview.webp", alt: "Page d'accueil du site HP Sonorisation" } },
];

export const funProjects: Project[] = [
  { title: "MakeItGueznet", kicker: "Jeu de soirée", description: "Un jeu de soirée entre amis.", url: "https://makeitgueznet.vercel.app", image: { src: "/assets/makeitgueznet-site-preview.webp", alt: "Écran d'accueil de MakeItGueznet" } },
  { title: "Is new Grok model available?", kicker: "Veille", description: "Une seule question, une seule réponse.", url: "https://www.isnewgrokmodelavailable.xyz" },
];

export function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export const skills = {
  langages: ["TypeScript", "JavaScript", "SQL", "Python", "Java", "PHP", "Swift"],
  frameworks: ["Angular", "NestJS", "Node.js", "RxJS", "NgRx", "React", "Next.js", "Vue.js", "Symfony", "SwiftUI"],
  bases: ["PostgreSQL", "MongoDB", "MySQL"],
  ops: ["AWS", "Docker", "Kubernetes", "Grafana"],
  outils: ["Git", "GitLab CI", "GitHub Actions", "Jenkins", "Scrum"],
};
