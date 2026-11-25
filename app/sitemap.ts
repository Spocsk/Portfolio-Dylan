import type { MetadataRoute } from "next";

import { absoluteUrl, siteLastModified } from "../lib/site";

const routes = ["/", "/experiences", "/projets", "/projets/dmt", "/a-propos", "/contact", "/cv"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteLastModified);
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
