import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
