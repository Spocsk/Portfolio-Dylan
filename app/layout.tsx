import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";

import "../style.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const themeInitScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const activeTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : systemTheme;

    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.dataset.theme = storedTheme;
    }

    document.documentElement.dataset.activeTheme = activeTheme;
  } catch {}
})();
`;

export const metadata: Metadata = {
  title: "Dylan COUTO DE OLIVEIRA — Développeur Web & Mobile",
  description:
    "Portfolio de Dylan Couto de Oliveira — Développeur Web & Mobile, sénior TypeScript (Angular, Nest.js), en formation Swift",
  appleWebApp: {
    title: "Dylan Portfolio",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={geist.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
