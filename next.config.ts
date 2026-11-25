import type { NextConfig } from "next";

// Old case studies, replaced by the /projets index (only /projets/dmt has its own page now).
const retiredProjectSlugs = [
  "campbell-scientific",
  "operis",
  "duoshot",
  "makeitgueznet",
  "poselock",
  "pas-envoye",
  "cast-loop",
  "victor-couto",
  "hp-sonorisation",
  "bibliflow",
  "swift-2048",
  "allocator-cpp",
  "portfolio-dylan",
];

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // The English version was retired: send each page to its French equivalent.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/:path*", permanent: true },
      { source: "/interventions-ecoles", destination: "/a-propos", permanent: true },
      { source: "/agents-automatisations-ia", destination: "/projets", permanent: true },
      { source: "/expertises", destination: "/a-propos", permanent: true },
      { source: "/faq", destination: "/contact", permanent: true },
      { source: "/portfolio.html", destination: "/", permanent: true },
      ...retiredProjectSlugs.map((slug) => ({ source: `/projets/${slug}`, destination: "/projets", permanent: true })),
    ];
  },
};

export default nextConfig;
