export const locales = ["fr", "en"] as const;
export const prefixedLocales = ["en"] as const;
export const localeCookieName = "portfolio-locale";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

const localizedPagePaths = new Set([
  "/",
  "/a-propos",
  "/agents-automatisations-ia",
  "/contact",
  "/interventions-ecoles",
  "/projets",
]);

export type Locale = (typeof locales)[number];

type PageMetadataCopy = {
  title: string;
  description: string;
};

export type Dictionary = {
  languageName: string;
  languageCode: string;
  languageFlag: string;
  htmlLang: string;
  ogLocale: string;
  navigation: {
    label: string;
    home: string;
    projects: string;
    expertises: string;
    about: string;
    faq: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    mobileMenu: string;
    languageSelector: string;
    chooseLanguage: string;
    switchTo: string;
    lightMode: string;
    darkMode: string;
  };
  footer: {
    faq: string;
    expertises: string;
    profile: string;
    projects: string;
    location: string;
  };
  home: {
    eyebrow: string;
    titleLead: string;
    titleSoft: string;
    titleLine2: string;
    titleLine3: string;
    projectsCta: string;
    contactCta: string;
    aboutLead: string;
    aboutStack: string;
    workLabel: string;
    workTitle: string;
    contactLabel: string;
    contactTitle: string;
    contactTitleSoft: string;
  };
  carousel: {
    label: string;
    openProject: string;
    caseStudy: string;
    next: string;
    nextProject: string;
    previousProject: string;
    noPreview: string;
    slideOf: string;
  };
  expertises: {
    label: string;
    title: string;
    lead: string;
    areaLabel: string;
    projectsCta: string;
    contactCta: string;
    areas: Array<{ title: string; description: string; items: string[] }>;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    journeyLabel: string;
    journeyTitle: string;
    journeyItems: Array<{ period: string; title: string; description: string }>;
    methodLabel: string;
    methodTitle: string;
    methodItems: string[];
    explorationsLabel: string;
    explorationsTitle: string;
    explorationsText: string;
    contactCta: string;
    expertisesCta: string;
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    lookingFor: string;
    location: string;
    availability: string;
  };
  faq: {
    label: string;
    title: string;
    entries: Array<{ question: string; answer: string }>;
  };
  project: {
    role: string;
    angle: string;
    viewOnline: string;
    problem: string;
    solution: string;
    results: string;
    noPreview: string;
    otherProjects: string;
    contact: string;
    homeBreadcrumb: string;
    projectsBreadcrumb: string;
    indexLabel: string;
    indexTitle: string;
    indexLead: string;
    featuredLabel: string;
    moreLabel: string;
    notFoundTitle: string;
    notFoundDescription: string;
  };
  metadata: {
    home: PageMetadataCopy;
    expertises: PageMetadataCopy;
    about: PageMetadataCopy;
    contact: PageMetadataCopy;
    faq: PageMetadataCopy;
    projects: PageMetadataCopy;
    education: PageMetadataCopy;
    automation: PageMetadataCopy;
  };
  schema: {
    jobTitle: string;
    description: string;
    country: string;
    contactType: string;
    availableLanguages: string[];
  };
};

const fr: Dictionary = {
  languageName: "Français",
  languageCode: "FR",
  languageFlag: "🇫🇷",
  htmlLang: "fr-FR",
  ogLocale: "fr_FR",
  navigation: {
    label: "Navigation principale",
    home: "Accueil",
    projects: "Projets",
    expertises: "Expertises",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mobileMenu: "Menu mobile",
    languageSelector: "Sélecteur de langue",
    chooseLanguage: "Choisir une langue",
    switchTo: "Passer en",
    lightMode: "Activer le mode clair",
    darkMode: "Activer le mode sombre",
  },
  footer: {
    faq: "FAQ",
    expertises: "Expertises",
    profile: "Profil",
    projects: "Projets",
    location: "Basé en Normandie, France",
  },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Full-stack TypeScript, Normandie · Open to work",
    titleLead: "Full-stack",
    titleSoft: "TypeScript.",
    titleLine2: "Angular, NestJS,",
    titleLine3: "produits qui tiennent.",
    projectsCta: "Voir les projets",
    contactCta: "Me contacter",
    aboutLead: "Plus de 5 ans à concevoir des applications web —",
    aboutStack: "Angular, NestJS, Node.js. React en complément.",
    workLabel: "Travaux",
    workTitle: "Preuves.",
    contactLabel: "Contact",
    contactTitle: "Un poste, une mission,",
    contactTitleSoft: "une conversation ?",
  },
  carousel: {
    label: "Projets",
    openProject: "Ouvrir le projet",
    caseStudy: "Voir l’étude de cas",
    next: "Suivant",
    nextProject: "Projet suivant",
    previousProject: "Projet précédent",
    noPreview: "Capture d’interface à venir.",
    slideOf: "Projet {current} sur {total}",
  },
  expertises: {
    label: "Expertises",
    title: "Angular, NestJS, et des livraisons qui tiennent.",
    lead: "Socle TypeScript. Frontend Angular au quotidien, APIs NestJS, industrialisation Docker / CI/CD. React et Next.js en complément.",
    areaLabel: "Domaine",
    projectsCta: "Voir les projets",
    contactCta: "Me contacter",
    areas: [
      { title: "Frontend Angular", description: "Interfaces TypeScript pour du SaaS, des collectivités et de la data industrielle : lisibilité, accessibilité et composants réutilisables.", items: ["Angular / TypeScript", "Parcours métier", "Accessibilité"] },
      { title: "Backend NestJS", description: "APIs Node.js structurées autour de la logique métier, des données fiables et de l’intégration produit.", items: ["NestJS", "REST / GraphQL", "MongoDB / PostgreSQL"] },
      { title: "DevOps", description: "Industrialiser les livraisons : containers, pipelines, qualité. Aussi transmis via un projet fil rouge Docker et qualité logicielle, sans citer d’établissement.", items: ["Docker", "Kubernetes", "CI/CD · AWS"] },
      { title: "Mobile", description: "React Native pour du multi-plateforme. Swift pour des apps iOS livrées (PoseLock, Pas envoyé), pas l’offre recrutement TypeScript.", items: ["React Native", "SwiftUI livré", "Logique d’application"] },
    ],
  },
  about: {
    label: "Profil",
    title: "Full-stack TypeScript, 5+ ans, basé en Normandie.",
    lead: "Développeur full-stack TypeScript en Normandie. Je conçois des produits, je transmets le métier et je construis des automatisations utiles.",
    journeyLabel: "Parcours",
    journeyTitle: "Des preuves nominatives.",
    journeyItems: [
      { period: "2024 —", title: "Ingénieur logiciel · Campbell Scientific", description: "Applications web industrielles Angular / NestJS utilisées dans plus de 30 pays pour de l’acquisition de données critique : météo, hydrologie, énergie." },
      { period: "2023 — 2024", title: "Développeur front-end · Operis", description: "Interfaces Angular pour des SaaS collectivités (urbanisme, foncier, scolaire). Plateformes jusqu’à 15 000 utilisateurs/jour, couverture d’environ 60 % des métropoles." },
      { period: "2022 — 2023", title: "Ingénieur consultant · Extia", description: "Missions web full-stack en agile, dont du front Angular / Next.js chez Operis. Qualité, revues, livraison courte." },
      { period: "2020 — 2022", title: "Concepteur développeur · Citizens", description: "Symfony 5, Vue.js, Docker, CI/CD, Linux. Lead d’une équipe de deux développeurs en Scrum." },
      { period: "2024 —", title: "Interventions en école", description: "Full-stack et DevOps : Node, Angular, MongoDB, Docker et qualité logicielle. Projet fil rouge BibliFlow. Établissements non cités." },
      { period: "2022 —", title: "Freelance · Granville", description: "Produits livrés en parallèle des missions : DuoShot, MakeItGueznet, PoseLock, Pas envoyé, Cast Loop et vitrines clients." },
    ],
    methodLabel: "Méthode",
    methodTitle: "Ce que je regarde d’abord.",
    methodItems: ["Fiabilité des données et des APIs.", "Lisibilité Angular / TypeScript.", "CI/CD et qualité avant la démo.", "Friction réelle du parcours utilisateur."],
    explorationsLabel: "Explorations",
    explorationsTitle: "Hors de l’offre principale.",
    explorationsText: "Clone 2048 en SwiftUI et un allocateur C++ : curiosité système, hors du carousel.",
    contactCta: "Me contacter",
    expertisesCta: "Voir les expertises",
  },
  contact: {
    label: "Contact",
    title: "Open to work.",
    lead: "Je cherche un poste ou une mission full-stack TypeScript — Angular / NestJS, avec une vraie exigence de livraison.",
    lookingFor: "CDI ou freelance. Web, APIs, industrialisation. Remote ou Normandie / France.",
    location: "Granville · Normandie · France",
    availability: "Disponible pour échanger. Email d’abord, LinkedIn ensuite.",
  },
  faq: {
    label: "FAQ",
    title: "Questions fréquentes.",
    entries: [
      { question: "Qui es-tu ?", answer: "Je suis Dylan COUTO DE OLIVEIRA, développeur full-stack TypeScript senior basé en Normandie. Plus de 5 ans d’expérience, open to work." },
      { question: "Quelle est ta stack principale ?", answer: "Angular, NestJS, Node.js et TypeScript au quotidien. React et Next.js en complément. Mobile : React Native. DevOps : Docker, Kubernetes, CI/CD, AWS." },
      { question: "Quelles preuves concrètes peux-tu montrer ?", answer: "Chez Campbell Scientific, des applications Angular / NestJS utilisées dans plus de 30 pays. Chez Operis, des SaaS collectivités jusqu’à 15 000 utilisateurs/jour. Produits livrés : DuoShot, MakeItGueznet, PoseLock, Pas envoyé. Aussi Cast Loop et BibliFlow." },
      { question: "Quel rôle prends-tu dans une équipe ?", answer: "Full-stack TypeScript, plutôt Angular + NestJS, avec un œil DevOps sur la CI/CD. Je peux aussi intervenir en front seul ou animer des modules en école, sans citer les établissements." },
      { question: "Tu fais du Swift ou du React Native ?", answer: "React Native est le mobile de production pour l’offre TypeScript. Swift, je le livre aussi : PoseLock et Pas envoyé sont des apps iOS shipped, pas seulement une exploration 2048." },
      { question: "Comment te contacter ?", answer: "Le plus direct : contact@dylan-cdo.fr. LinkedIn pour le recrutement : https://www.linkedin.com/in/dylan-cdo/" },
    ],
  },
  project: {
    role: "Rôle", angle: "Angle", viewOnline: "Voir en ligne", problem: "Problème", solution: "Solution", results: "Résultats", noPreview: "Capture d’interface à venir.", otherProjects: "Tous les projets", contact: "Me contacter", homeBreadcrumb: "Accueil", projectsBreadcrumb: "Projets", indexLabel: "Projets", indexTitle: "Études de cas et preuves.", indexLead: "Trois axes : produits web, systèmes complexes et pédagogie. Les études de cas complètes restent accessibles.", featuredLabel: "À retenir", moreLabel: "Autres projets", notFoundTitle: "Projet introuvable — Dylan COUTO DE OLIVEIRA", notFoundDescription: "La page projet demandée n’existe pas.",
  },
  metadata: {
    home: { title: "Dylan CDO — Développement, enseignement & automatisation IA", description: "Dylan CDO conçoit des produits TypeScript, intervient auprès des écoles de développement et crée des automatisations IA pour les PME." },
    expertises: { title: "Expertises — Dylan COUTO DE OLIVEIRA", description: "Angular, NestJS, DevOps (Docker, Kubernetes, CI/CD, AWS) et React Native. Preuves chez Campbell Scientific et Operis." },
    about: { title: "À propos — Dylan CDO", description: "Le parcours et la méthode de Dylan Couto de Oliveira : développement full-stack, transmission et automatisation IA." },
    contact: { title: "Contact — Dylan CDO", description: "Prendre rendez-vous avec Dylan CDO pour une intervention en école, un projet d’automatisation IA ou une opportunité TypeScript." },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "FAQ : stack Angular / NestJS, preuves Campbell et Operis, DevOps, React Native vs Swift, contact." },
    projects: { title: "Projets — Dylan COUTO DE OLIVEIRA", description: "Études de cas : Campbell Scientific, Operis, DuoShot, MakeItGueznet, PoseLock, Pas envoyé, Cast Loop, vitrines, BibliFlow." },
    education: { title: "Interventions en école de développement | Dylan CDO", description: "Modules, workshops, jurys et projets fil rouge en développement web, DevOps, mobile et IA pour les cursus Bac+2 à Bac+5." },
    automation: { title: "Agents & automatisations IA pour PME | Dylan CDO", description: "Conception de workflows IA sur mesure avec TypeScript, APIs, n8n et Make, sous contrôle humain, de l’audit au déploiement." },
  },
  schema: { jobTitle: "Développeur, intervenant et concepteur d’automatisations", description: "Dylan Couto de Oliveira conçoit des produits TypeScript, intervient auprès des écoles de développement et crée des automatisations IA pour les PME, depuis la Normandie.", country: "France", contactType: "professionnel", availableLanguages: ["Français", "Anglais"] },
};

const en: Dictionary = {
  languageName: "English",
  languageCode: "EN",
  languageFlag: "🇬🇧",
  htmlLang: "en-US",
  ogLocale: "en_US",
  navigation: {
    label: "Main navigation", home: "Home", projects: "Projects", expertises: "Expertise", about: "About", faq: "FAQ", contact: "Contact", openMenu: "Open menu", closeMenu: "Close menu", mobileMenu: "Mobile menu", languageSelector: "Language selector", chooseLanguage: "Choose a language", switchTo: "Switch to", lightMode: "Enable light mode", darkMode: "Enable dark mode",
  },
  footer: { faq: "FAQ", expertises: "Expertise", profile: "Profile", projects: "Projects", location: "Based in Normandy, France" },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Full-stack TypeScript, Normandy · Open to work", titleLead: "Full-stack", titleSoft: "TypeScript.", titleLine2: "Angular, NestJS,", titleLine3: "software that lasts.", projectsCta: "View projects", contactCta: "Contact me", aboutLead: "Five-plus years building web applications —", aboutStack: "Angular, NestJS, Node.js. React as a complement.", workLabel: "Work", workTitle: "Proof.", contactLabel: "Contact", contactTitle: "A role, a brief,", contactTitleSoft: "a conversation?",
  },
  carousel: { label: "Projects", openProject: "Open project", caseStudy: "View case study", next: "Next", nextProject: "Next project", previousProject: "Previous project", noPreview: "Interface still to come.", slideOf: "Project {current} of {total}" },
  expertises: {
    label: "Expertise",     title: "Angular, NestJS, and deliveries that hold up.", lead: "TypeScript at the core. Angular day to day, NestJS APIs, Docker / CI/CD to ship. React and Next.js as a complement.", areaLabel: "Area", projectsCta: "View projects", contactCta: "Contact me",
    areas: [
      { title: "Angular frontend", description: "TypeScript interfaces for SaaS, local government and industrial data: readable journeys, accessibility and reusable components.", items: ["Angular / TypeScript", "Business journeys", "Accessibility"] },
      { title: "NestJS backend", description: "Node.js APIs structured around business logic, reliable data and product integration.", items: ["NestJS", "REST / GraphQL", "MongoDB / PostgreSQL"] },
      { title: "DevOps", description: "Shipping with containers, pipelines and quality gates. Also taught through the BibliFlow Docker and software-quality project, without naming a school.", items: ["Docker", "Kubernetes", "CI/CD · AWS"] },
      { title: "Mobile", description: "React Native for cross-platform work. Swift for shipped iOS apps (PoseLock, Pas envoyé), not the TypeScript hiring offer.", items: ["React Native", "Shipped SwiftUI", "Application logic"] },
    ],
  },
  about: {
    label: "Profile", title: "Full-stack TypeScript, 5+ years, based in Normandy.", lead: "I design TypeScript products, teach the craft and build useful automations from Normandy.", journeyLabel: "Journey", journeyTitle: "Named proof.",
    journeyItems: [
      { period: "2024 —", title: "Software engineer · Campbell Scientific", description: "Industrial Angular / NestJS web apps used in 30+ countries for critical data acquisition: weather, hydrology, energy." },
      { period: "2023 — 2024", title: "Front-end developer · Operis", description: "Angular interfaces for local-government SaaS (planning, land, schools). Platforms of up to 15,000 users/day, covering about 60% of French metropolitan areas." },
      { period: "2022 — 2023", title: "Consulting engineer · Extia", description: "Agile full-stack web assignments, including Angular / Next.js at Operis. Reviews, quality, short delivery cycles." },
      { period: "2020 — 2022", title: "Application developer · Citizens", description: "Symfony 5, Vue.js, Docker, CI/CD, Linux. Led a two-developer Scrum team." },
      { period: "2024 —", title: "Teaching engagements", description: "Full-stack and DevOps: Node, Angular, MongoDB, Docker and software quality. Fil-rouge project: BibliFlow. Schools stay unnamed." },
      { period: "2022 —", title: "Freelance · Granville", description: "Shipped products alongside employed roles: DuoShot, MakeItGueznet, PoseLock, Pas envoyé, Cast Loop and client sites." },
    ],
    methodLabel: "Method", methodTitle: "What I look at first.", methodItems: ["Reliability of data and APIs.", "Angular / TypeScript readability.", "CI/CD and quality before the demo.", "Real friction in the user journey."],
    explorationsLabel: "Explorations", explorationsTitle: "Outside the hiring offer.", explorationsText: "A 2048 clone in SwiftUI and a C++ allocator: systems curiosity, outside the carousel.",
    contactCta: "Contact me", expertisesCta: "View expertise",
  },
  contact: { label: "Contact", title: "Open to work.", lead: "I am looking for a full-stack TypeScript role or assignment — Angular / NestJS, with a real delivery bar.", lookingFor: "Permanent or freelance. Web, APIs, industrialisation. Remote or Normandy / France.", location: "Granville · Normandy · France", availability: "Available to talk. Email first, LinkedIn second." },
  faq: {
    label: "FAQ", title: "Frequently asked questions.", entries: [
      { question: "Who are you?", answer: "I am Dylan COUTO DE OLIVEIRA, a senior full-stack TypeScript developer based in Normandy. Five-plus years of experience, open to work." },
      { question: "What is your main stack?", answer: "Angular, NestJS, Node.js and TypeScript day to day. React and Next.js as a complement. Mobile: React Native. DevOps: Docker, Kubernetes, CI/CD, AWS." },
      { question: "What proof can you show?", answer: "At Campbell Scientific, Angular / NestJS apps used in 30+ countries. At Operis, local-government SaaS with up to 15,000 users/day. Shipped products: DuoShot, MakeItGueznet, PoseLock, Pas envoyé. Also Cast Loop and BibliFlow." },
      { question: "What role do you take in a team?", answer: "Full-stack TypeScript, usually Angular + NestJS, with a DevOps eye on CI/CD. I can also work front-end only or teach, without naming schools." },
      { question: "Swift or React Native?", answer: "React Native is the production mobile stack for the TypeScript offer. I also ship Swift: PoseLock and Pas envoyé are iOS apps, not only a 2048 exploration." },
      { question: "How can I contact you?", answer: "The most direct channel is contact@dylan-cdo.fr. LinkedIn for recruiting: https://www.linkedin.com/in/dylan-cdo/" },
    ],
  },
  project: { role: "Role", angle: "Approach", viewOnline: "View online", problem: "Problem", solution: "Solution", results: "Results", noPreview: "Interface still to come.", otherProjects: "All projects", contact: "Contact me", homeBreadcrumb: "Home", projectsBreadcrumb: "Projects", indexLabel: "Projects", indexTitle: "Case studies and proof.", indexLead: "Three axes: web products, complex systems and teaching. Full case studies stay available.", featuredLabel: "Featured", moreLabel: "Other projects", notFoundTitle: "Project not found — Dylan COUTO DE OLIVEIRA", notFoundDescription: "The requested project page does not exist." },
  metadata: {
    home: { title: "Dylan CDO — Development, teaching & AI automation", description: "Dylan CDO builds TypeScript products, teaches software development and creates AI automation for SMEs." },
    expertises: { title: "Expertise — Dylan COUTO DE OLIVEIRA", description: "Angular, NestJS, DevOps (Docker, Kubernetes, CI/CD, AWS) and React Native. Proof at Campbell Scientific and Operis." },
    about: { title: "About — Dylan CDO", description: "Dylan Couto de Oliveira’s background and method across full-stack development, teaching and AI automation." },
    contact: { title: "Contact — Dylan CDO", description: "Book a call with Dylan CDO about teaching, AI automation or a TypeScript development opportunity." },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "FAQ: Angular / NestJS stack, Campbell and Operis proof, DevOps, React Native vs Swift, contact." },
    projects: { title: "Projects — Dylan COUTO DE OLIVEIRA", description: "Case studies: Campbell Scientific, Operis, DuoShot, MakeItGueznet, PoseLock, Pas envoyé, Cast Loop, client sites, BibliFlow." },
    education: { title: "Software development teaching | Dylan CDO", description: "Practical modules, workshops, juries and capstone projects for higher education programmes in France." },
    automation: { title: "AI agents & automation for SMEs | Dylan CDO", description: "Custom AI workflows built with TypeScript, APIs, n8n and Make, under human control from audit to deployment." },
  },
  schema: { jobTitle: "Developer, instructor and automation designer", description: "Dylan Couto de Oliveira designs TypeScript products, teaches software development and builds AI automation for SMEs, from Normandy.", country: "France", contactType: "professional", availableLanguages: ["French", "English"] },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function parseLocale(value: string | null | undefined): Locale | null {
  return value && isLocale(value) ? value : null;
}

export function isPrefixedLocale(value: string): value is Exclude<Locale, "fr"> {
  return prefixedLocales.includes(value as Exclude<Locale, "fr">);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  return stripped || "/";
}

export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/")) return path;
  const normalized = stripLocalePrefix(path);
  if (locale === "fr") return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isPrefixedLocale(segment) ? segment : "fr";
}

export function isLocalizablePath(pathname: string): boolean {
  const normalized = stripLocalePrefix(pathname).replace(/\/$/, "") || "/";
  return localizedPagePaths.has(normalized) || /^\/projets\/[^/]+$/.test(normalized);
}

export function localeFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "fr";

  const preferences = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [languageRange, ...parameters] = entry.trim().toLowerCase().split(";");
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const parsedQuality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;

      return {
        language: languageRange.split("-")[0],
        quality: Number.isFinite(parsedQuality) ? parsedQuality : 0,
        index,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const preference of preferences) {
    if (isLocale(preference.language)) return preference.language;
  }

  return "fr";
}
