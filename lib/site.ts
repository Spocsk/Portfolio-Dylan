import type { Metadata } from "next";

import { getDictionary, localizePath, locales, type Locale } from "./i18n";
import { bookingUrl } from "./service-content";

export const siteConfig = {
  name: "Dylan COUTO DE OLIVEIRA",
  siteName: "dylan-cdo.fr",
  url: "https://www.dylan-cdo.fr",
  email: "contact@dylan-cdo.fr",
  bookingUrl,
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

export const siteLastModified = "2026-09-14T16:00:00.000Z";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serviceSchema(kind: "education" | "automation", locale: Locale = "fr") {
  const isFrench = locale === "fr";
  const path = kind === "education" ? "/interventions-ecoles" : "/agents-automatisations-ia";
  const name = kind === "education"
    ? (isFrench ? "Interventions en école de développement" : "Software development teaching")
    : (isFrench ? "Agents et automatisations IA pour PME" : "AI agents and automation for SMEs");
  const description = kind === "education"
    ? (isFrench ? "Modules, workshops, jurys et projets fil rouge pour les cursus Bac+2 à Bac+5." : "Practical modules, workshops, juries and capstone projects for higher education.")
    : (isFrench ? "Conception et déploiement de workflows IA sur mesure, documentés et sous contrôle humain." : "Design and delivery of custom, documented AI workflows under human control.");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: localizedAbsoluteUrl(path, locale),
    provider: { "@id": `${localizedAbsoluteUrl("/", locale)}#person` },
    areaServed: { "@type": "Country", name: "France" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: bookingUrl,
      availableLanguage: ["fr", "en"],
    },
  };
}

export function localizedAbsoluteUrl(path: string, locale: Locale) {
  return absoluteUrl(localizePath(path, locale));
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
  locale = "fr",
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: Locale;
  ogType?: "website" | "article" | "profile";
}): Metadata {
  const dictionary = getDictionary(locale);
  const url = localizedAbsoluteUrl(path, locale);
  const imageUrl = resolveImage(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "x-default": localizedAbsoluteUrl(path, "fr"),
        ...Object.fromEntries(locales.map((alternateLocale) => [
          getDictionary(alternateLocale).htmlLang,
          localizedAbsoluteUrl(path, alternateLocale),
        ])),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: dictionary.ogLocale,
      alternateLocale: locales
        .filter((alternateLocale) => alternateLocale !== locale)
        .map((alternateLocale) => getDictionary(alternateLocale).ogLocale),
      type: ogType,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
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

export function getSiteSchema(locale: Locale) {
  const dictionary = getDictionary(locale);
  const homepage = localizedAbsoluteUrl("/", locale);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${homepage}#person`,
      name: siteConfig.name,
      givenName: "Dylan",
      familyName: "COUTO DE OLIVEIRA",
      url: homepage,
      image: {
        "@type": "ImageObject",
        url: absoluteUrl("/portrait.png"),
        caption: siteConfig.name,
      },
      jobTitle: dictionary.schema.jobTitle,
      description: dictionary.schema.description,
      email: `mailto:${siteConfig.email}`,
      knowsLanguage: ["fr", "en"],
      knowsAbout: [
        "TypeScript",
        "Angular",
        "NestJS",
        "Node.js",
        "React",
        "Next.js",
        "React Native",
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD",
        "PostgreSQL",
        "MongoDB",
        "Artificial intelligence automation",
        "n8n",
        "Make",
        "Software development education",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
        addressRegion: "Normandie",
      },
      nationality: { "@type": "Country", name: dictionary.schema.country },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: dictionary.schema.contactType,
        email: siteConfig.email,
        availableLanguage: dictionary.schema.availableLanguages,
        areaServed: "FR",
      },
      sameAs: Object.values(siteConfig.social),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${homepage}#website`,
      url: homepage,
      name: siteConfig.siteName,
      inLanguage: dictionary.htmlLang,
      dateModified: siteLastModified,
      publisher: { "@id": `${homepage}#person` },
    },
  ];
}

export type BreadcrumbItem = { name: string; path: string };

export function offerCrumbs(kind: "education" | "automation", locale: Locale): BreadcrumbItem[] {
  const dictionary = getDictionary(locale);
  const path = kind === "education" ? "/interventions-ecoles" : "/agents-automatisations-ia";
  const label = kind === "education"
    ? (locale === "fr" ? "Interventions en école" : "Teaching")
    : (locale === "fr" ? "Agents & automatisations IA" : "AI agents & automation");
  return [
    { name: dictionary.project.homeBreadcrumb, path: "/" },
    { name: label, path },
  ];
}

export function breadcrumbSchema(items: BreadcrumbItem[], locale: Locale = "fr") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localizedAbsoluteUrl(item.path, locale),
    })),
  };
}

export function offerJsonLd(kind: "education" | "automation", locale: Locale, faq: readonly { question: string; answer: string }[]) {
  return [
    serviceSchema(kind, locale),
    breadcrumbSchema(offerCrumbs(kind, locale), locale),
    faqPageSchema(faq, locale),
  ];
}

export function faqPageSchema(entries: readonly { question: string; answer: string }[], locale: Locale = "fr") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: getDictionary(locale).htmlLang,
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

export function profilePageSchema(path: string, locale: Locale = "fr") {
  const homepage = localizedAbsoluteUrl("/", locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: localizedAbsoluteUrl(path, locale),
    inLanguage: getDictionary(locale).htmlLang,
    dateModified: siteLastModified,
    mainEntity: { "@id": `${homepage}#person` },
    about: { "@id": `${homepage}#person` },
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
}, locale: Locale = "fr") {
  const url = localizedAbsoluteUrl(`/projets/${project.slug}`, locale);
  const homepage = localizedAbsoluteUrl("/", locale);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#creativework`,
    name: project.title,
    headline: project.title,
    description: project.description,
    abstract: project.summary,
    url,
    inLanguage: getDictionary(locale).htmlLang,
    dateModified: siteLastModified,
    keywords: Array.from(project.stack).join(", "),
    image: project.previewImage ? absoluteUrl(project.previewImage) : undefined,
    sameAs: project.externalUrl,
    author: { "@id": `${homepage}#person` },
    creator: { "@id": `${homepage}#person` },
    isPartOf: { "@id": `${homepage}#website` },
  };
}
