import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import JsonLd from "../components/json-ld";
import SiteFrame from "../components/site-frame";
import { createPageMetadata, getSiteSchema, siteConfig } from "../lib/site";
import "../style.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "portfolio",
  ...createPageMetadata({
    title: "Dylan Couto de Oliveira · Développeur full-stack TypeScript, Angular × NestJS",
    description: siteConfig.description,
    path: "/",
    ogType: "profile",
  }),
  appleWebApp: { title: "Dylan CDO" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ededea" },
    { media: "(prefers-color-scheme: dark)", color: "#111112" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr-FR" className={`${spaceGrotesk.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={getSiteSchema()} />
        <script
          defer
          src="https://analytics.dylan-cdo.fr/script.js"
          data-website-id="a17a490e-2af3-4ada-a912-8ca569cb554c"
          data-domains="dylan-cdo.fr,www.dylan-cdo.fr"
          data-exclude-hash="true"
          data-tag="tracking-v2"
          data-performance="true"
          data-do-not-track="true"
        />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
