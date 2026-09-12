export const locales = ["fr", "en", "es"] as const;
export const prefixedLocales = ["en", "es"] as const;
export const localeCookieName = "portfolio-locale";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

const localizedPagePaths = new Set([
  "/",
  "/a-propos",
  "/contact",
  "/expertises",
  "/faq",
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
      { title: "DevOps", description: "Industrialiser les livraisons : containers, pipelines, qualité. Enseigné aussi à Nexa via un projet fil rouge Docker / Jenkins / SonarQube.", items: ["Docker", "Kubernetes", "CI/CD · AWS"] },
      { title: "Mobile", description: "React Native pour du multi-plateforme. Swift reste une exploration personnelle, pas l’offre principale.", items: ["React Native", "Swift en exploration", "Logique d’application"] },
    ],
  },
  about: {
    label: "Profil",
    title: "Full-stack TypeScript, 5+ ans, basé en Normandie.",
    lead: "Open to work. Angular et NestJS au quotidien, React en complément, DevOps pour livrer proprement. Intervenant à Nexa et à la Normandie Web School.",
    journeyLabel: "Parcours",
    journeyTitle: "Des preuves nominatives.",
    journeyItems: [
      { period: "2024 —", title: "Ingénieur logiciel · Campbell Scientific", description: "Applications web industrielles Angular / NestJS utilisées dans plus de 30 pays pour de l’acquisition de données critique : météo, hydrologie, énergie." },
      { period: "2023 — 2024", title: "Développeur front-end · Operis", description: "Interfaces Angular pour des SaaS collectivités (urbanisme, foncier, scolaire). Plateformes jusqu’à 15 000 utilisateurs/jour, couverture d’environ 60 % des métropoles." },
      { period: "2022 — 2023", title: "Ingénieur consultant · Extia", description: "Missions web full-stack en agile, dont du front Angular / Next.js chez Operis. Qualité, revues, livraison courte." },
      { period: "2020 — 2022", title: "Concepteur développeur · Citizens", description: "Symfony 5, Vue.js, Docker, CI/CD, Linux. Lead d’une équipe de deux développeurs en Scrum." },
      { period: "2024 —", title: "Intervenant · Nexa & Normandie Web School", description: "Full-stack et DevOps : Node, Angular, MongoDB, Docker, Jenkins, SonarQube. Projet fil rouge BibliFlow." },
      { period: "2022 —", title: "Freelance · Granville", description: "Web, mobile et industrialisation pour des produits et des vitrines, en parallèle des missions salariées." },
    ],
    methodLabel: "Méthode",
    methodTitle: "Ce que je regarde d’abord.",
    methodItems: ["Fiabilité des données et des APIs.", "Lisibilité Angular / TypeScript.", "CI/CD et qualité avant la démo.", "Friction réelle du parcours utilisateur."],
    explorationsLabel: "Explorations",
    explorationsTitle: "Hors de l’offre principale.",
    explorationsText: "Swift / SwiftUI (2048, PoseLock) et un allocateur C++ : curiosité système, pas le positionnement recrutement.",
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
      { question: "Quelles preuves concrètes peux-tu montrer ?", answer: "Chez Campbell Scientific, des applications Angular / NestJS utilisées dans plus de 30 pays. Chez Operis, des SaaS collectivités jusqu’à 15 000 utilisateurs/jour. Côté perso : Cast Loop, et BibliFlow pour l’enseignement DevOps." },
      { question: "Quel rôle prends-tu dans une équipe ?", answer: "Full-stack TypeScript, plutôt Angular + NestJS, avec un œil DevOps sur la CI/CD. Je peux aussi intervenir en front seul ou former (Nexa, Normandie Web School)." },
      { question: "Tu fais du Swift ou du React Native ?", answer: "React Native est le mobile de production. Swift est une exploration personnelle, visible dans 2048 et PoseLock, pas l’offre que je vends." },
      { question: "Comment te contacter ?", answer: "Le plus direct : contact@dylan-cdo.fr. LinkedIn pour le recrutement : https://www.linkedin.com/in/dylan-cdo/" },
    ],
  },
  project: {
    role: "Rôle", angle: "Angle", viewOnline: "Voir en ligne", problem: "Problème", solution: "Solution", results: "Résultats", otherProjects: "Tous les projets", contact: "Me contacter", homeBreadcrumb: "Accueil", projectsBreadcrumb: "Projets", indexLabel: "Projets", indexTitle: "Études de cas et preuves.", indexLead: "Missions nommées, produits livrés, et quelques explorations. Les six premiers sont ceux que je mets en avant.", featuredLabel: "À retenir", moreLabel: "Autres projets", notFoundTitle: "Projet introuvable — Dylan COUTO DE OLIVEIRA", notFoundDescription: "La page projet demandée n’existe pas.",
  },
  metadata: {
    home: { title: "Dylan COUTO DE OLIVEIRA — Full-stack TypeScript · Angular & NestJS", description: "Portfolio de Dylan COUTO DE OLIVEIRA, développeur full-stack TypeScript senior en Normandie. Angular, NestJS, Node.js. Open to work." },
    expertises: { title: "Expertises — Dylan COUTO DE OLIVEIRA", description: "Angular, NestJS, DevOps (Docker, Kubernetes, CI/CD, AWS) et React Native. Preuves chez Campbell Scientific, Operis, Nexa." },
    about: { title: "À propos — Dylan COUTO DE OLIVEIRA", description: "5+ ans en full-stack TypeScript : Campbell Scientific, Operis, Extia, Citizens. Intervenant Nexa et Normandie Web School. Basé en Normandie." },
    contact: { title: "Contact — Dylan COUTO DE OLIVEIRA", description: "Contacter Dylan COUTO DE OLIVEIRA : open to work, full-stack TypeScript Angular / NestJS. contact@dylan-cdo.fr" },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "FAQ : stack Angular / NestJS, preuves Campbell et Operis, DevOps, React Native vs Swift, contact." },
    projects: { title: "Projets — Dylan COUTO DE OLIVEIRA", description: "Études de cas : Campbell Scientific, Operis, Cast Loop, vitrines clients, BibliFlow, explorations Swift et C++." },
  },
  schema: { jobTitle: "Développeur full-stack TypeScript", description: "Développeur full-stack TypeScript senior, spécialisé Angular et NestJS, basé en Normandie.", country: "France", contactType: "professionnel", availableLanguages: ["Français", "Anglais"] },
};

const en: Dictionary = {
  languageName: "English",
  languageCode: "EN",
  languageFlag: "🇬🇧",
  htmlLang: "en-US",
  ogLocale: "en_US",
  navigation: {
    label: "Main navigation", home: "Home", expertises: "Expertise", about: "About", faq: "FAQ", contact: "Contact", openMenu: "Open menu", closeMenu: "Close menu", mobileMenu: "Mobile menu", languageSelector: "Language selector", chooseLanguage: "Choose a language", switchTo: "Switch to", lightMode: "Enable light mode", darkMode: "Enable dark mode",
  },
  footer: { faq: "FAQ", expertises: "Expertise", profile: "Profile", projects: "Projects", location: "Based in Normandy, France" },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Full-stack TypeScript, Normandy · Open to work", titleLead: "Full-stack", titleSoft: "TypeScript.", titleLine2: "Angular, NestJS,", titleLine3: "software that lasts.", projectsCta: "View projects", contactCta: "Contact me", aboutLead: "Five-plus years building web applications —", aboutStack: "Angular, NestJS, Node.js. React as a complement.", workLabel: "Work", workTitle: "Proof.", contactLabel: "Contact", contactTitle: "A role, a brief,", contactTitleSoft: "a conversation?",
  },
  carousel: { label: "Projects", openProject: "Open project", caseStudy: "View case study", next: "Next", nextProject: "Next project", previousProject: "Previous project" },
  expertises: {
    label: "Expertise",     title: "Angular, NestJS, and deliveries that hold up.", lead: "TypeScript at the core. Angular day to day, NestJS APIs, Docker / CI/CD to ship. React and Next.js as a complement.", areaLabel: "Area", projectsCta: "View projects", contactCta: "Contact me",
    areas: [
      { title: "Angular frontend", description: "TypeScript interfaces for SaaS, local government and industrial data: readable journeys, accessibility and reusable components.", items: ["Angular / TypeScript", "Business journeys", "Accessibility"] },
      { title: "NestJS backend", description: "Node.js APIs structured around business logic, reliable data and product integration.", items: ["NestJS", "REST / GraphQL", "MongoDB / PostgreSQL"] },
      { title: "DevOps", description: "Shipping with containers, pipelines and quality gates. Also taught at Nexa through the BibliFlow Docker / Jenkins / SonarQube project.", items: ["Docker", "Kubernetes", "CI/CD · AWS"] },
      { title: "Mobile", description: "React Native for cross-platform work. Swift is a personal exploration, not the hiring offer.", items: ["React Native", "Swift as exploration", "Application logic"] },
    ],
  },
  about: {
    label: "Profile", title: "Full-stack TypeScript, 5+ years, based in Normandy.", lead: "Open to work. Angular and NestJS day to day, React as a complement, DevOps to ship cleanly. Lecturer at Nexa and Normandie Web School.", journeyLabel: "Journey", journeyTitle: "Named proof.",
    journeyItems: [
      { period: "2024 —", title: "Software engineer · Campbell Scientific", description: "Industrial Angular / NestJS web apps used in 30+ countries for critical data acquisition: weather, hydrology, energy." },
      { period: "2023 — 2024", title: "Front-end developer · Operis", description: "Angular interfaces for local-government SaaS (planning, land, schools). Platforms of up to 15,000 users/day, covering about 60% of French metropolitan areas." },
      { period: "2022 — 2023", title: "Consulting engineer · Extia", description: "Agile full-stack web assignments, including Angular / Next.js at Operis. Reviews, quality, short delivery cycles." },
      { period: "2020 — 2022", title: "Application developer · Citizens", description: "Symfony 5, Vue.js, Docker, CI/CD, Linux. Led a two-developer Scrum team." },
      { period: "2024 —", title: "Lecturer · Nexa & Normandie Web School", description: "Full-stack and DevOps: Node, Angular, MongoDB, Docker, Jenkins, SonarQube. Fil-rouge project: BibliFlow." },
      { period: "2022 —", title: "Freelance · Granville", description: "Web, mobile and delivery work alongside employed roles." },
    ],
    methodLabel: "Method", methodTitle: "What I look at first.", methodItems: ["Reliability of data and APIs.", "Angular / TypeScript readability.", "CI/CD and quality before the demo.", "Real friction in the user journey."],
    explorationsLabel: "Explorations", explorationsTitle: "Outside the hiring offer.", explorationsText: "Swift / SwiftUI (2048, PoseLock) and a C++ allocator: systems curiosity, not the role I am targeting.",
    contactCta: "Contact me", expertisesCta: "View expertise",
  },
  contact: { label: "Contact", title: "Open to work.", lead: "I am looking for a full-stack TypeScript role or assignment — Angular / NestJS, with a real delivery bar.", lookingFor: "Permanent or freelance. Web, APIs, industrialisation. Remote or Normandy / France.", location: "Granville · Normandy · France", availability: "Available to talk. Email first, LinkedIn second." },
  faq: {
    label: "FAQ", title: "Frequently asked questions.", entries: [
      { question: "Who are you?", answer: "I am Dylan COUTO DE OLIVEIRA, a senior full-stack TypeScript developer based in Normandy. Five-plus years of experience, open to work." },
      { question: "What is your main stack?", answer: "Angular, NestJS, Node.js and TypeScript day to day. React and Next.js as a complement. Mobile: React Native. DevOps: Docker, Kubernetes, CI/CD, AWS." },
      { question: "What proof can you show?", answer: "At Campbell Scientific, Angular / NestJS apps used in 30+ countries. At Operis, local-government SaaS with up to 15,000 users/day. Personally: Cast Loop, and BibliFlow for DevOps teaching." },
      { question: "What role do you take in a team?", answer: "Full-stack TypeScript, usually Angular + NestJS, with a DevOps eye on CI/CD. I can also work front-end only or teach (Nexa, Normandie Web School)." },
      { question: "Swift or React Native?", answer: "React Native is the production mobile stack. Swift is a personal exploration, visible in 2048 and PoseLock, not what I am hiring for." },
      { question: "How can I contact you?", answer: "The most direct channel is contact@dylan-cdo.fr. LinkedIn for recruiting: https://www.linkedin.com/in/dylan-cdo/" },
    ],
  },
  project: { role: "Role", angle: "Approach", viewOnline: "View online", problem: "Problem", solution: "Solution", results: "Results", otherProjects: "All projects", contact: "Contact me", homeBreadcrumb: "Home", projectsBreadcrumb: "Projects", indexLabel: "Projects", indexTitle: "Case studies and proof.", indexLead: "Named missions, shipped products, and a few explorations. The first six are the ones I put forward.", featuredLabel: "Featured", moreLabel: "Other projects", notFoundTitle: "Project not found — Dylan COUTO DE OLIVEIRA", notFoundDescription: "The requested project page does not exist." },
  metadata: {
    home: { title: "Dylan COUTO DE OLIVEIRA — Full-stack TypeScript · Angular & NestJS", description: "Portfolio of Dylan COUTO DE OLIVEIRA, a senior full-stack TypeScript developer in Normandy. Angular, NestJS, Node.js. Open to work." },
    expertises: { title: "Expertise — Dylan COUTO DE OLIVEIRA", description: "Angular, NestJS, DevOps (Docker, Kubernetes, CI/CD, AWS) and React Native. Proof at Campbell Scientific, Operis and Nexa." },
    about: { title: "About — Dylan COUTO DE OLIVEIRA", description: "5+ years in full-stack TypeScript: Campbell Scientific, Operis, Extia, Citizens. Lecturer at Nexa and Normandie Web School. Based in Normandy." },
    contact: { title: "Contact — Dylan COUTO DE OLIVEIRA", description: "Contact Dylan COUTO DE OLIVEIRA: open to work, full-stack TypeScript Angular / NestJS. contact@dylan-cdo.fr" },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "FAQ: Angular / NestJS stack, Campbell and Operis proof, DevOps, React Native vs Swift, contact." },
    projects: { title: "Projects — Dylan COUTO DE OLIVEIRA", description: "Case studies: Campbell Scientific, Operis, Cast Loop, client sites, BibliFlow, Swift and C++ explorations." },
  },
  schema: { jobTitle: "Full-stack TypeScript developer", description: "Senior full-stack TypeScript developer specializing in Angular and NestJS, based in Normandy.", country: "France", contactType: "professional", availableLanguages: ["French", "English"] },
};

const es: Dictionary = {
  languageName: "Español",
  languageCode: "ES",
  languageFlag: "🇪🇸",
  htmlLang: "es-ES",
  ogLocale: "es_ES",
  navigation: {
    label: "Navegación principal", home: "Inicio", expertises: "Especialidades", about: "Sobre mí", faq: "FAQ", contact: "Contacto", openMenu: "Abrir el menú", closeMenu: "Cerrar el menú", mobileMenu: "Menú móvil", languageSelector: "Selector de idioma", chooseLanguage: "Elegir un idioma", switchTo: "Cambiar a", lightMode: "Activar el modo claro", darkMode: "Activar el modo oscuro",
  },
  footer: { faq: "FAQ", expertises: "Especialidades", profile: "Perfil", projects: "Proyectos", location: "Con base en Normandía, Francia" },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Full-stack TypeScript, Normandía · Open to work", titleLead: "Full-stack", titleSoft: "TypeScript.", titleLine2: "Angular, NestJS,", titleLine3: "software que aguanta.", projectsCta: "Ver proyectos", contactCta: "Contactarme", aboutLead: "Más de 5 años construyendo aplicaciones web —", aboutStack: "Angular, NestJS, Node.js. React como complemento.", workLabel: "Trabajos", workTitle: "Pruebas.", contactLabel: "Contacto", contactTitle: "¿Un puesto, un encargo,", contactTitleSoft: "una conversación?",
  },
  carousel: { label: "Proyectos", openProject: "Abrir el proyecto", caseStudy: "Ver el caso de estudio", next: "Siguiente", nextProject: "Proyecto siguiente", previousProject: "Proyecto anterior" },
  expertises: {
    label: "Especialidades", title: "Angular, NestJS y entregas que se sostienen.", lead: "TypeScript como base. Angular en el día a día, APIs NestJS, Docker / CI/CD para entregar. React y Next.js como complemento.", areaLabel: "Área", projectsCta: "Ver proyectos", contactCta: "Contactarme",
    areas: [
      { title: "Frontend Angular", description: "Interfaces TypeScript para SaaS, administraciones locales y datos industriales: recorridos legibles, accesibilidad y componentes reutilizables.", items: ["Angular / TypeScript", "Recorridos de negocio", "Accesibilidad"] },
      { title: "Backend NestJS", description: "APIs Node.js estructuradas alrededor de la lógica de negocio, datos fiables e integración de producto.", items: ["NestJS", "REST / GraphQL", "MongoDB / PostgreSQL"] },
      { title: "DevOps", description: "Entregar con contenedores, pipelines y calidad. También lo enseño en Nexa con BibliFlow: Docker, Jenkins, SonarQube.", items: ["Docker", "Kubernetes", "CI/CD · AWS"] },
      { title: "Móvil", description: "React Native para multiplataforma. Swift es una exploración personal, no la oferta de contratación.", items: ["React Native", "Swift como exploración", "Lógica de aplicación"] },
    ],
  },
  about: {
    label: "Perfil", title: "Full-stack TypeScript, más de 5 años, con base en Normandía.", lead: "Open to work. Angular y NestJS en el día a día, React como complemento, DevOps para entregar limpio. Docente en Nexa y Normandie Web School.", journeyLabel: "Trayectoria", journeyTitle: "Pruebas con nombre.",
    journeyItems: [
      { period: "2024 —", title: "Ingeniero de software · Campbell Scientific", description: "Aplicaciones web industriales Angular / NestJS usadas en más de 30 países para adquisición de datos crítica: meteorología, hidrología, energía." },
      { period: "2023 — 2024", title: "Desarrollador front-end · Operis", description: "Interfaces Angular para SaaS de administraciones locales (urbanismo, suelo, escolar). Hasta 15.000 usuarios/día, cobertura de alrededor del 60 % de las metrópolis francesas." },
      { period: "2022 — 2023", title: "Ingeniero consultor · Extia", description: "Misiones web full-stack en agile, incluido Angular / Next.js en Operis. Revisiones, calidad, ciclos cortos." },
      { period: "2020 — 2022", title: "Desarrollador · Citizens", description: "Symfony 5, Vue.js, Docker, CI/CD, Linux. Lead de un equipo de dos desarrolladores en Scrum." },
      { period: "2024 —", title: "Docente · Nexa y Normandie Web School", description: "Full-stack y DevOps: Node, Angular, MongoDB, Docker, Jenkins, SonarQube. Proyecto fil rouge: BibliFlow." },
      { period: "2022 —", title: "Freelance · Granville", description: "Web, móvil e industrialización en paralelo a los puestos asalariados." },
    ],
    methodLabel: "Método", methodTitle: "En qué me fijo primero.", methodItems: ["Fiabilidad de los datos y las APIs.", "Legibilidad Angular / TypeScript.", "CI/CD y calidad antes de la demo.", "Fricción real del recorrido."],
    explorationsLabel: "Exploraciones", explorationsTitle: "Fuera de la oferta principal.", explorationsText: "Swift / SwiftUI (2048, PoseLock) y un asignador C++: curiosidad de sistemas, no el puesto que busco.",
    contactCta: "Contactarme", expertisesCta: "Ver especialidades",
  },
  contact: { label: "Contacto", title: "Open to work.", lead: "Busco un puesto o una misión full-stack TypeScript — Angular / NestJS, con un listón de entrega real.", lookingFor: "CDI o freelance. Web, APIs, industrialización. Remoto o Normandía / Francia.", location: "Granville · Normandía · Francia", availability: "Disponible para hablar. Email primero, LinkedIn después." },
  faq: {
    label: "FAQ", title: "Preguntas frecuentes.", entries: [
      { question: "¿Quién eres?", answer: "Soy Dylan COUTO DE OLIVEIRA, desarrollador full-stack TypeScript sénior con base en Normandía. Más de 5 años de experiencia, open to work." },
      { question: "¿Cuál es tu stack principal?", answer: "Angular, NestJS, Node.js y TypeScript en el día a día. React y Next.js como complemento. Móvil: React Native. DevOps: Docker, Kubernetes, CI/CD, AWS." },
      { question: "¿Qué pruebas concretas puedes mostrar?", answer: "En Campbell Scientific, aplicaciones Angular / NestJS usadas en más de 30 países. En Operis, SaaS para administraciones con hasta 15.000 usuarios/día. En personal: Cast Loop, y BibliFlow para la enseñanza DevOps." },
      { question: "¿Qué papel ocupas en un equipo?", answer: "Full-stack TypeScript, sobre todo Angular + NestJS, con ojo DevOps en la CI/CD. También puedo ir de front o formar (Nexa, Normandie Web School)." },
      { question: "¿Swift o React Native?", answer: "React Native es el móvil de producción. Swift es una exploración personal, visible en 2048 y PoseLock, no la oferta que vendo." },
      { question: "¿Cómo te contacto?", answer: "Lo más directo: contact@dylan-cdo.fr. LinkedIn para contratación: https://www.linkedin.com/in/dylan-cdo/" },
    ],
  },
  project: { role: "Rol", angle: "Enfoque", viewOnline: "Ver en línea", problem: "Problema", solution: "Solución", results: "Resultados", otherProjects: "Todos los proyectos", contact: "Contactarme", homeBreadcrumb: "Inicio", projectsBreadcrumb: "Proyectos", indexLabel: "Proyectos", indexTitle: "Casos de estudio y pruebas.", indexLead: "Misiones con nombre, productos entregados y algunas exploraciones. Los seis primeros son los que pongo delante.", featuredLabel: "Destacados", moreLabel: "Otros proyectos", notFoundTitle: "Proyecto no encontrado — Dylan COUTO DE OLIVEIRA", notFoundDescription: "La página de proyecto solicitada no existe." },
  metadata: {
    home: { title: "Dylan COUTO DE OLIVEIRA — Full-stack TypeScript · Angular y NestJS", description: "Portfolio de Dylan COUTO DE OLIVEIRA, desarrollador full-stack TypeScript sénior en Normandía. Angular, NestJS, Node.js. Open to work." },
    expertises: { title: "Especialidades — Dylan COUTO DE OLIVEIRA", description: "Angular, NestJS, DevOps (Docker, Kubernetes, CI/CD, AWS) y React Native. Pruebas en Campbell Scientific, Operis y Nexa." },
    about: { title: "Sobre mí — Dylan COUTO DE OLIVEIRA", description: "Más de 5 años en full-stack TypeScript: Campbell Scientific, Operis, Extia, Citizens. Docente en Nexa y Normandie Web School. Con base en Normandía." },
    contact: { title: "Contacto — Dylan COUTO DE OLIVEIRA", description: "Contacta con Dylan COUTO DE OLIVEIRA: open to work, full-stack TypeScript Angular / NestJS. contact@dylan-cdo.fr" },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "FAQ: stack Angular / NestJS, pruebas Campbell y Operis, DevOps, React Native vs Swift, contacto." },
    projects: { title: "Proyectos — Dylan COUTO DE OLIVEIRA", description: "Casos de estudio: Campbell Scientific, Operis, Cast Loop, sitios de clientes, BibliFlow, exploraciones Swift y C++." },
  },
  schema: { jobTitle: "Desarrollador full-stack TypeScript", description: "Desarrollador full-stack TypeScript sénior, especializado en Angular y NestJS, con base en Normandía.", country: "Francia", contactType: "profesional", availableLanguages: ["Francés", "Inglés"] },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en, es };

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
