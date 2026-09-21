import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/es", destination: "/en", permanent: true },
      { source: "/es/:path*", destination: "/en/:path*", permanent: true },
      { source: "/expertises", destination: "/a-propos", permanent: true },
      { source: "/en/expertises", destination: "/en/a-propos", permanent: true },
      { source: "/faq", destination: "/contact", permanent: true },
      { source: "/en/faq", destination: "/en/contact", permanent: true },
      {
        source: "/portfolio.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
