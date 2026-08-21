import type { MetadataRoute } from "next";

import { projects } from "../lib/projects";
import { localizePath, locales } from "../lib/i18n";
import { absoluteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/expertises", "/a-propos", "/contact", "/faq"];

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
