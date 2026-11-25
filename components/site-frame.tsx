import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "../lib/site";
import { Mark } from "./bento";
import SiteNav from "./site-nav";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <div className="page">
        <header className="site-header">
          <Mark />
          <SiteNav />
        </header>
        <main id="contenu">{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Dylan Couto de Oliveira</span>
          <nav aria-label="Liens secondaires">
            <Link href="/cv">CV</Link>
            <a href={`mailto:${siteConfig.email}`} data-umami-event="contact_email_click" data-umami-event-placement="footer">{siteConfig.email}</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </footer>
      </div>
    </>
  );
}
