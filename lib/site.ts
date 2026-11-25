import type { Metadata } from "next";

export const siteConfig = {
  name: "Dylan Couto de Oliveira",
  siteName: "dylan-cdo.fr",
  url: "https://www.dylan-cdo.fr",
  email: "contact@dylan-cdo.fr",
  location: "Normandie / Paris",
  jobTitle: "Développeur full-stack TypeScript sénior",
  description: "Développeur full-stack TypeScript sénior, Angular × NestJS. Six ans de micro-frontends, de microservices et de pipelines, du SaaS pour les collectivités au monitoring environnemental.",
  social: {
    linkedin: "https://www.linkedin.com/in/dylan-cdo/",
    github: "https://github.com/Spocsk",
  },
} as const;

export const siteLastModified = "2026-11-25T12:00:00.000Z";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "profile";
}): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl("/opengraph-image");
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: "fr_FR",
      type: ogType,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Spocsk",
      images: [image],
    },
  };
}

export function getSiteSchema() {
  const homepage = absoluteUrl("/");
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${homepage}#person`,
      name: siteConfig.name,
      givenName: "Dylan",
      familyName: "Couto de Oliveira",
      url: homepage,
      image: absoluteUrl("/portrait.jpg"),
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      email: `mailto:${siteConfig.email}`,
      knowsLanguage: ["fr", "en"],
      knowsAbout: ["TypeScript", "Angular", "NestJS", "Node.js", "React", "Next.js", "RxJS", "NgRx", "PostgreSQL", "Docker", "Kubernetes", "GitLab CI", "SwiftUI"],
      address: { "@type": "PostalAddress", addressCountry: "FR", addressRegion: "Normandie" },
      sameAs: Object.values(siteConfig.social),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${homepage}#website`,
      url: homepage,
      name: siteConfig.siteName,
      inLanguage: "fr-FR",
      dateModified: siteLastModified,
      publisher: { "@id": `${homepage}#person` },
    },
  ];
}

export function profilePageSchema(path: string) {
  const homepage = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl(path),
    inLanguage: "fr-FR",
    dateModified: siteLastModified,
    mainEntity: { "@id": `${homepage}#person` },
  };
}
