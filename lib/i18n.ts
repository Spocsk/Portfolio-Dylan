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
    journeyParagraphs: string[];
    methodLabel: string;
    methodTitle: string;
    methodItems: string[];
    contactCta: string;
    expertisesCta: string;
  };
  contact: {
    label: string;
    title: string;
    lead: string;
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
    notFoundTitle: string;
    notFoundDescription: string;
  };
  metadata: {
    home: PageMetadataCopy;
    expertises: PageMetadataCopy;
    about: PageMetadataCopy;
    contact: PageMetadataCopy;
    faq: PageMetadataCopy;
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
    location: "Basé en France",
  },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Développeur web & mobile senior, France",
    titleLead: "Développeur web",
    titleSoft: "& mobile.",
    titleLine2: "Interfaces produit,",
    titleLine3: "soignées jusqu’au pixel.",
    projectsCta: "Voir les projets",
    contactCta: "Me contacter",
    aboutLead: "Je conçois et développe des produits web et mobiles —",
    aboutStack: "TypeScript, React, Angular, Nest.js.",
    workLabel: "Travaux",
    workTitle: "Sélection.",
    contactLabel: "Contact",
    contactTitle: "Un projet, un poste,",
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
    title: "Construire des produits lisibles et cohérents.",
    lead: "Stack TypeScript, clarté des interfaces, qualité du code — un équilibre entre exigence technique et lecture produit.",
    areaLabel: "Domaine",
    projectsCta: "Voir les projets",
    contactCta: "Me contacter",
    areas: [
      { title: "Frontend produit", description: "Interfaces React et Angular pensées pour la clarté, la performance et la qualité perçue.", items: ["Design systems légers", "Accessibilité", "Performance web"] },
      { title: "Applications TypeScript", description: "Conception d’applications web maintenables avec un niveau d’exigence élevé sur la lisibilité et l’architecture.", items: ["TypeScript strict", "Composants robustes", "Architecture modulaire"] },
      { title: "Backend Node.js", description: "APIs et services Nest.js orientés logique métier, données propres et intégration produit.", items: ["Nest.js", "MongoDB", "PostgreSQL"] },
      { title: "Ouverture mobile", description: "Montée en compétence Swift pour élargir le spectre produit vers l’écosystème Apple.", items: ["Swift", "UIKit", "Logique d’application"] },
    ],
  },
  about: {
    label: "Profil",
    title: "Développeur orienté produit et qualité d’exécution.",
    lead: "TypeScript en socle, Angular, React et Nest.js au quotidien. Attention portée à l’UX, à la structure du code et à la cohérence de l’ensemble.",
    journeyLabel: "Parcours",
    journeyTitle: "Du frontend à la logique produit.",
    journeyParagraphs: ["J’aime les produits où la qualité d’interface ne masque pas la dette technique. Mon approche articule lisibilité, structure et logique métier.", "Base frontend exigeante, puis ouverture progressive vers Nest.js, les APIs et Swift."],
    methodLabel: "Méthode",
    methodTitle: "Ce que je regarde d’abord.",
    methodItems: ["Hiérarchie et message de l’interface.", "Qualité des abstractions et du typage.", "Friction dans le parcours utilisateur.", "Cohérence entre intention et exécution."],
    contactCta: "Me contacter",
    expertisesCta: "Voir les expertises",
  },
  contact: {
    label: "Contact",
    title: "Entrer en contact.",
    lead: "L’email reste le canal le plus direct. LinkedIn et GitHub complètent le profil.",
  },
  faq: {
    label: "FAQ",
    title: "Questions fréquentes.",
    entries: [
      { question: "Qui est Dylan COUTO DE OLIVEIRA ?", answer: "Dylan COUTO DE OLIVEIRA est un développeur web et mobile senior basé en France. Son cœur d’expertise est la stack TypeScript, avec une expérience forte sur Angular, Nest.js et React, et un intérêt concret pour Swift." },
      { question: "Quelles technologies maîtrise-t-il principalement ?", answer: "Son socle principal repose sur TypeScript, Angular, React, Nest.js, MongoDB et PostgreSQL. Il s’intéresse aussi à Swift pour étendre son champ d’action côté mobile." },
      { question: "Sur quel type de projets intervient-il ?", answer: "Il intervient sur des interfaces produit, des vitrines premium, des applications métier et des projets où l’expérience utilisateur, la structure du code et la qualité perçue comptent réellement." },
      { question: "Quel rôle prend-il dans une équipe ?", answer: "Il peut intervenir comme développeur frontend ou full-stack TypeScript, avec une sensibilité forte pour l’UX, la performance, la clarté produit et la qualité globale de l’exécution." },
      { question: "Comment le contacter ?", answer: "Le moyen le plus direct est l’email, complété par LinkedIn pour les échanges liés au recrutement, aux projets ou aux opportunités produit." },
    ],
  },
  project: {
    role: "Rôle", angle: "Angle", viewOnline: "Voir en ligne", problem: "Problème", solution: "Solution", results: "Résultats", otherProjects: "Autres projets", contact: "Me contacter", homeBreadcrumb: "Accueil", projectsBreadcrumb: "Projets", notFoundTitle: "Projet introuvable — Dylan COUTO DE OLIVEIRA", notFoundDescription: "La page projet demandée n’existe pas.",
  },
  metadata: {
    home: { title: "Dylan COUTO DE OLIVEIRA — Développeur Web & Mobile Senior", description: "Portfolio de Dylan COUTO DE OLIVEIRA, développeur web et mobile senior spécialisé TypeScript, Angular, Nest.js et React." },
    expertises: { title: "Expertises — Dylan COUTO DE OLIVEIRA", description: "Expertises de Dylan COUTO DE OLIVEIRA : frontend produit, applications TypeScript, backend Nest.js et progression mobile en Swift." },
    about: { title: "À propos — Dylan COUTO DE OLIVEIRA", description: "Profil de Dylan COUTO DE OLIVEIRA : développeur web et mobile senior, stack TypeScript, sens produit, exigence frontend et intérêt croissant pour Swift." },
    contact: { title: "Contact — Dylan COUTO DE OLIVEIRA", description: "Contacter Dylan COUTO DE OLIVEIRA pour une opportunité, un échange produit ou une discussion autour d’un poste en développement web ou mobile." },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "FAQ sur Dylan COUTO DE OLIVEIRA : profil, stack TypeScript, type de projets, rôle produit et moyens de contact." },
  },
  schema: { jobTitle: "Développeur web et mobile senior", description: "Développeur web et mobile senior spécialisé TypeScript, Angular, Nest.js et React.", country: "France", contactType: "professionnel", availableLanguages: ["Français", "Anglais", "Espagnol"] },
};

const en: Dictionary = {
  languageName: "English",
  languageCode: "EN",
  languageFlag: "🇬🇧",
  htmlLang: "en-US",
  ogLocale: "en_US",
  navigation: {
    label: "Main navigation", home: "Home", expertises: "Expertise", about: "About", contact: "Contact", openMenu: "Open menu", closeMenu: "Close menu", mobileMenu: "Mobile menu", languageSelector: "Language selector", chooseLanguage: "Choose a language", switchTo: "Switch to", lightMode: "Enable light mode", darkMode: "Enable dark mode",
  },
  footer: { faq: "FAQ", expertises: "Expertise", profile: "Profile", projects: "Projects", location: "Based in France" },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Senior web & mobile developer, France", titleLead: "Web developer", titleSoft: "& mobile.", titleLine2: "Product interfaces,", titleLine3: "crafted down to the pixel.", projectsCta: "View projects", contactCta: "Contact me", aboutLead: "I design and build web and mobile products —", aboutStack: "TypeScript, React, Angular, Nest.js.", workLabel: "Work", workTitle: "Selected.", contactLabel: "Contact", contactTitle: "A project, a role,", contactTitleSoft: "a conversation?",
  },
  carousel: { label: "Projects", openProject: "Open project", caseStudy: "View case study", next: "Next", nextProject: "Next project", previousProject: "Previous project" },
  expertises: {
    label: "Expertise", title: "Building clear, consistent products.", lead: "A TypeScript stack, clear interfaces and clean code — balancing technical standards with product thinking.", areaLabel: "Area", projectsCta: "View projects", contactCta: "Contact me",
    areas: [
      { title: "Product frontend", description: "React and Angular interfaces designed for clarity, performance and perceived quality.", items: ["Lean design systems", "Accessibility", "Web performance"] },
      { title: "TypeScript applications", description: "Maintainable web applications with high standards for readability and architecture.", items: ["Strict TypeScript", "Robust components", "Modular architecture"] },
      { title: "Node.js backend", description: "Nest.js APIs and services built around business logic, reliable data and product integration.", items: ["Nest.js", "MongoDB", "PostgreSQL"] },
      { title: "Growing into mobile", description: "Developing Swift expertise to extend product work into the Apple ecosystem.", items: ["Swift", "UIKit", "Application logic"] },
    ],
  },
  about: {
    label: "Profile", title: "A developer focused on product and quality execution.", lead: "TypeScript at the core, with Angular, React and Nest.js in daily use. A close eye on UX, code structure and overall consistency.", journeyLabel: "Journey", journeyTitle: "From frontend to product logic.", journeyParagraphs: ["I value products where interface quality does not hide technical debt. My approach connects readability, structure and business logic.", "A demanding frontend foundation, followed by a steady expansion into Nest.js, APIs and Swift."], methodLabel: "Method", methodTitle: "What I look at first.", methodItems: ["Interface hierarchy and message.", "Quality of abstractions and typing.", "Friction in the user journey.", "Consistency between intent and execution."], contactCta: "Contact me", expertisesCta: "View expertise",
  },
  contact: { label: "Contact", title: "Get in touch.", lead: "Email is the most direct channel. LinkedIn and GitHub complete the picture." },
  faq: {
    label: "FAQ", title: "Frequently asked questions.", entries: [
      { question: "Who is Dylan COUTO DE OLIVEIRA?", answer: "Dylan COUTO DE OLIVEIRA is a senior web and mobile developer based in France. His core expertise is the TypeScript stack, with strong experience in Angular, Nest.js and React, and a growing focus on Swift." },
      { question: "Which technologies does he mainly work with?", answer: "His main toolkit includes TypeScript, Angular, React, Nest.js, MongoDB and PostgreSQL. He is also building Swift expertise to expand his mobile capabilities." },
      { question: "What kind of projects does he work on?", answer: "He works on product interfaces, premium showcase websites, business applications and projects where user experience, code structure and perceived quality genuinely matter." },
      { question: "What role does he take within a team?", answer: "He can contribute as a frontend or full-stack TypeScript developer, with a strong focus on UX, performance, product clarity and overall execution quality." },
      { question: "How can I contact him?", answer: "Email is the most direct option, while LinkedIn is ideal for conversations about recruitment, projects or product opportunities." },
    ],
  },
  project: { role: "Role", angle: "Approach", viewOnline: "View online", problem: "Problem", solution: "Solution", results: "Results", otherProjects: "Other projects", contact: "Contact me", homeBreadcrumb: "Home", projectsBreadcrumb: "Projects", notFoundTitle: "Project not found — Dylan COUTO DE OLIVEIRA", notFoundDescription: "The requested project page does not exist." },
  metadata: {
    home: { title: "Dylan COUTO DE OLIVEIRA — Senior Web & Mobile Developer", description: "Portfolio of Dylan COUTO DE OLIVEIRA, a senior web and mobile developer specializing in TypeScript, Angular, Nest.js and React." },
    expertises: { title: "Expertise — Dylan COUTO DE OLIVEIRA", description: "Dylan COUTO DE OLIVEIRA’s expertise: product frontend, TypeScript applications, Nest.js backend and growing mobile experience with Swift." },
    about: { title: "About — Dylan COUTO DE OLIVEIRA", description: "Profile of Dylan COUTO DE OLIVEIRA: senior web and mobile developer, TypeScript specialist, product-minded frontend engineer and Swift learner." },
    contact: { title: "Contact — Dylan COUTO DE OLIVEIRA", description: "Contact Dylan COUTO DE OLIVEIRA about an opportunity, a product conversation or a web and mobile development role." },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "Frequently asked questions about Dylan COUTO DE OLIVEIRA, his TypeScript stack, projects, product role and contact details." },
  },
  schema: { jobTitle: "Senior web and mobile developer", description: "Senior web and mobile developer specializing in TypeScript, Angular, Nest.js and React.", country: "France", contactType: "professional", availableLanguages: ["French", "English", "Spanish"] },
};

const es: Dictionary = {
  languageName: "Español",
  languageCode: "ES",
  languageFlag: "🇪🇸",
  htmlLang: "es-ES",
  ogLocale: "es_ES",
  navigation: {
    label: "Navegación principal", home: "Inicio", expertises: "Especialidades", about: "Sobre mí", contact: "Contacto", openMenu: "Abrir el menú", closeMenu: "Cerrar el menú", mobileMenu: "Menú móvil", languageSelector: "Selector de idioma", chooseLanguage: "Elegir un idioma", switchTo: "Cambiar a", lightMode: "Activar el modo claro", darkMode: "Activar el modo oscuro",
  },
  footer: { faq: "FAQ", expertises: "Especialidades", profile: "Perfil", projects: "Proyectos", location: "Con base en Francia" },
  home: {
    eyebrow: "Dylan Couto de Oliveira — Desarrollador web y móvil sénior, Francia", titleLead: "Desarrollador web", titleSoft: "y móvil.", titleLine2: "Interfaces de producto,", titleLine3: "cuidadas hasta el último píxel.", projectsCta: "Ver proyectos", contactCta: "Contactarme", aboutLead: "Diseño y desarrollo productos web y móviles —", aboutStack: "TypeScript, React, Angular, Nest.js.", workLabel: "Trabajos", workTitle: "Selección.", contactLabel: "Contacto", contactTitle: "¿Un proyecto, un puesto,", contactTitleSoft: "una conversación?",
  },
  carousel: { label: "Proyectos", openProject: "Abrir el proyecto", caseStudy: "Ver el caso de estudio", next: "Siguiente", nextProject: "Proyecto siguiente", previousProject: "Proyecto anterior" },
  expertises: {
    label: "Especialidades", title: "Crear productos claros y coherentes.", lead: "Stack TypeScript, interfaces claras y código de calidad: un equilibrio entre exigencia técnica y visión de producto.", areaLabel: "Área", projectsCta: "Ver proyectos", contactCta: "Contactarme",
    areas: [
      { title: "Frontend de producto", description: "Interfaces React y Angular diseñadas para ofrecer claridad, rendimiento y calidad percibida.", items: ["Sistemas de diseño ligeros", "Accesibilidad", "Rendimiento web"] },
      { title: "Aplicaciones TypeScript", description: "Aplicaciones web mantenibles con un alto nivel de exigencia en legibilidad y arquitectura.", items: ["TypeScript estricto", "Componentes robustos", "Arquitectura modular"] },
      { title: "Backend Node.js", description: "APIs y servicios Nest.js orientados a la lógica de negocio, datos fiables e integración de producto.", items: ["Nest.js", "MongoDB", "PostgreSQL"] },
      { title: "Evolución hacia móvil", description: "Desarrollo de competencias en Swift para ampliar el trabajo de producto al ecosistema Apple.", items: ["Swift", "UIKit", "Lógica de aplicación"] },
    ],
  },
  about: {
    label: "Perfil", title: "Desarrollador orientado al producto y a la calidad de ejecución.", lead: "TypeScript como base, con Angular, React y Nest.js en el día a día. Atención especial a la UX, la estructura del código y la coherencia del conjunto.", journeyLabel: "Trayectoria", journeyTitle: "Del frontend a la lógica de producto.", journeyParagraphs: ["Me interesan los productos donde la calidad de la interfaz no oculta la deuda técnica. Mi enfoque conecta legibilidad, estructura y lógica de negocio.", "Una base frontend exigente, seguida de una apertura progresiva hacia Nest.js, las APIs y Swift."], methodLabel: "Método", methodTitle: "En qué me fijo primero.", methodItems: ["Jerarquía y mensaje de la interfaz.", "Calidad de las abstracciones y del tipado.", "Fricción en el recorrido del usuario.", "Coherencia entre intención y ejecución."], contactCta: "Contactarme", expertisesCta: "Ver especialidades",
  },
  contact: { label: "Contacto", title: "Hablemos.", lead: "El correo electrónico sigue siendo el canal más directo. LinkedIn y GitHub completan el perfil." },
  faq: {
    label: "FAQ", title: "Preguntas frecuentes.", entries: [
      { question: "¿Quién es Dylan COUTO DE OLIVEIRA?", answer: "Dylan COUTO DE OLIVEIRA es un desarrollador web y móvil sénior con base en Francia. Su principal especialidad es el stack TypeScript, con amplia experiencia en Angular, Nest.js y React, además de un interés concreto por Swift." },
      { question: "¿Con qué tecnologías trabaja principalmente?", answer: "Su base tecnológica incluye TypeScript, Angular, React, Nest.js, MongoDB y PostgreSQL. También está desarrollando sus competencias en Swift para ampliar su experiencia móvil." },
      { question: "¿En qué tipo de proyectos participa?", answer: "Trabaja en interfaces de producto, sitios corporativos premium, aplicaciones empresariales y proyectos donde la experiencia de usuario, la estructura del código y la calidad percibida son realmente importantes." },
      { question: "¿Qué papel desempeña en un equipo?", answer: "Puede trabajar como desarrollador frontend o full-stack TypeScript, con una fuerte sensibilidad por la UX, el rendimiento, la claridad del producto y la calidad global de la ejecución." },
      { question: "¿Cómo puedo contactarlo?", answer: "El correo electrónico es la vía más directa; LinkedIn es ideal para conversaciones relacionadas con contratación, proyectos u oportunidades de producto." },
    ],
  },
  project: { role: "Rol", angle: "Enfoque", viewOnline: "Ver en línea", problem: "Problema", solution: "Solución", results: "Resultados", otherProjects: "Otros proyectos", contact: "Contactarme", homeBreadcrumb: "Inicio", projectsBreadcrumb: "Proyectos", notFoundTitle: "Proyecto no encontrado — Dylan COUTO DE OLIVEIRA", notFoundDescription: "La página de proyecto solicitada no existe." },
  metadata: {
    home: { title: "Dylan COUTO DE OLIVEIRA — Desarrollador Web y Móvil Sénior", description: "Portfolio de Dylan COUTO DE OLIVEIRA, desarrollador web y móvil sénior especializado en TypeScript, Angular, Nest.js y React." },
    expertises: { title: "Especialidades — Dylan COUTO DE OLIVEIRA", description: "Especialidades de Dylan COUTO DE OLIVEIRA: frontend de producto, aplicaciones TypeScript, backend Nest.js y desarrollo móvil con Swift." },
    about: { title: "Sobre mí — Dylan COUTO DE OLIVEIRA", description: "Perfil de Dylan COUTO DE OLIVEIRA: desarrollador web y móvil sénior, especialista en TypeScript, orientado al producto y con interés en Swift." },
    contact: { title: "Contacto — Dylan COUTO DE OLIVEIRA", description: "Contacta con Dylan COUTO DE OLIVEIRA para una oportunidad, una conversación de producto o un puesto de desarrollo web y móvil." },
    faq: { title: "FAQ — Dylan COUTO DE OLIVEIRA", description: "Preguntas frecuentes sobre Dylan COUTO DE OLIVEIRA, su stack TypeScript, sus proyectos, su papel de producto y sus datos de contacto." },
  },
  schema: { jobTitle: "Desarrollador web y móvil sénior", description: "Desarrollador web y móvil sénior especializado en TypeScript, Angular, Nest.js y React.", country: "Francia", contactType: "profesional", availableLanguages: ["Francés", "Inglés", "Español"] },
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
