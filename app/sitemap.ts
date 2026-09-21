import type { MetadataRoute } from "next";

import { projects } from "../lib/projects";
import { localizePath, locales } from "../lib/i18n";
import { absoluteUrl, siteLastModified } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(siteLastModified);
  const staticRoutes = ["/", "/interventions-ecoles", "/agents-automatisations-ia", "/a-propos", "/contact", "/projets"];

  const routes = [
    ...staticRoutes,
    ...projects.map((project) => `/projets/${project.slug}`),
  ];

  return locales.flatMap((locale) => routes.map((route) => ({
      url: absoluteUrl(localizePath(route, locale)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    })));
}
