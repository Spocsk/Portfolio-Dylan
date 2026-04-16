import type { Metadata } from "next";

export const siteConfig = {
  name: "Dylan COUTO DE OLIVEIRA",
  siteName: "dylan-cdo.fr",
  url: "https://www.dylan-cdo.fr",
  title: "Dylan COUTO DE OLIVEIRA — Développeur Web & Mobile Senior",
  description:
    "Portfolio de Dylan COUTO DE OLIVEIRA, développeur web et mobile senior spécialisé TypeScript, Angular, Nest.js et React.",
  locale: "fr_FR",
  email: "dylan.coutodeoliveira@protonmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/dylan-cdo/",
    github: "https://github.com/Spocsk",
    x: "https://x.com/Spocsk",
  },
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "X", href: siteConfig.social.x },
] as const;

export const expertiseAreas = [
  {
    title: "Frontend produit",
    description:
      "Interfaces React et Angular pensées pour la clarté, la performance et la qualité perçue.",
    items: ["Design systems légers", "Accessibilité", "Performance web"],
  },
  {
    title: "Applications TypeScript",
    description:
      "Conception d'applications web maintenables avec un niveau d'exigence élevé sur la lisibilité et l'architecture.",
    items: ["TypeScript strict", "Composants robustes", "Architecture modulaire"],
  },
  {
    title: "Backend Node.js",
    description:
      "APIs et services Nest.js orientés logique métier, données propres et intégration produit.",
    items: ["Nest.js", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Ouverture mobile",
    description:
      "Montée en compétence Swift pour élargir le spectre produit vers l'écosystème Apple.",
    items: ["Swift", "UIKit", "Logique d'application"],
  },
] as const;

export const faqEntries = [
  {
    question: "Qui est Dylan COUTO DE OLIVEIRA ?",
    answer:
      "Dylan COUTO DE OLIVEIRA est un développeur web et mobile senior basé en France. Son cœur d'expertise est la stack TypeScript, avec une expérience forte sur Angular, Nest.js et React, et un intérêt concret pour Swift.",
  },
  {
    question: "Quelles technologies maîtrise-t-il principalement ?",
    answer:
      "Son socle principal repose sur TypeScript, Angular, React, Nest.js, MongoDB et PostgreSQL. Il s'intéresse aussi à Swift pour étendre son champ d'action côté mobile.",
  },
  {
    question: "Sur quel type de projets intervient-il ?",
    answer:
      "Il intervient sur des interfaces produit, des vitrines premium, des applications métier et des projets où l'expérience utilisateur, la structure du code et la qualité perçue comptent réellement.",
  },
  {
    question: "Quel rôle prend-il dans une équipe ?",
    answer:
      "Il peut intervenir comme développeur frontend ou full-stack TypeScript, avec une sensibilité forte pour l'UX, la performance, la clarté produit et la qualité globale de l'exécution.",
  },
  {
    question: "Comment le contacter ?",
    answer:
      "Le moyen le plus direct est l'email, complété par LinkedIn pour les échanges liés au recrutement, aux projets ou aux opportunités produit.",
  },
] as const;

export const hiringSignals = [
  "Profil senior orienté TypeScript, Angular, Nest.js et React.",
  "Sensibilité produit et exigence visuelle sur les interfaces.",
  "Travail aussi bien sur la clarté du code que sur la qualité perçue.",
] as const;

export const siteLastModified = new Date().toISOString();

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

function resolveImage(image?: string) {
  if (!image) return absoluteUrl("/opengraph-image");
  if (image.startsWith("http")) return image;
  return absoluteUrl(image);
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = resolveImage(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Spocsk",
      images: [imageUrl],
    },
  };
}

export const siteSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    givenName: "Dylan",
    familyName: "COUTO DE OLIVEIRA",
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    jobTitle: "Développeur web et mobile senior",
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    knowsLanguage: ["fr", "en"],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "React",
      "Next.js",
      "Nest.js",
      "Node.js",
      "Swift",
      "UIKit",
      "MongoDB",
      "PostgreSQL",
      "Architecture frontend",
      "Design systems",
      "Accessibilité",
      "Performance web",
      "Core Web Vitals",
      "UX",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    nationality: {
      "@type": "Country",
      name: "France",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional",
      email: siteConfig.email,
      availableLanguage: ["French", "English"],
      areaServed: "FR",
    },
    sameAs: Object.values(siteConfig.social),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    inLanguage: "fr-FR",
    dateModified: siteLastModified,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
  },
];

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(
  entries: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}

export function profilePageSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(path),
    inLanguage: "fr-FR",
    dateModified: siteLastModified,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
    about: { "@id": `${siteConfig.url}/#person` },
  };
}

export function projectCreativeWorkSchema(project: {
  slug: string;
  title: string;
  description: string;
  summary: string;
  stack: readonly string[] | string[];
  previewImage?: string;
  externalUrl?: string;
}) {
  const url = absoluteUrl(`/projets/${project.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: project.title,
    headline: project.title,
    description: project.description,
    abstract: project.summary,
    url,
    inLanguage: "fr-FR",
    dateModified: siteLastModified,
    keywords: Array.from(project.stack).join(", "),
    image: project.previewImage ? absoluteUrl(project.previewImage) : undefined,
    sameAs: project.externalUrl,
    author: { "@id": `${siteConfig.url}/#person` },
    creator: { "@id": `${siteConfig.url}/#person` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };
}
