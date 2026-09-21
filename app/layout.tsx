import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";

import { getDictionary, isLocale } from "../lib/i18n";
import { createPageMetadata, getSiteSchema, siteConfig } from "../lib/site";
import "../style.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "portfolio",
  ...createPageMetadata({
    ...getDictionary("fr").metadata.home,
    path: "/",
    locale: "fr",
  }),
  appleWebApp: {
    title: "Dylan CDO",
  },
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
  themeColor: "#faf9f7",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-portfolio-locale") ?? "fr";
  const locale = isLocale(localeHeader) ? localeHeader : "fr";
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={dictionary.htmlLang}
      className={`${geist.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteSchema(locale)),
          }}
        />
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
        {children}
      </body>
    </html>
  );
}
