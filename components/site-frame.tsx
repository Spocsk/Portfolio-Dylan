"use client";

import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect, useState } from "react";

import { trackUmami } from "../lib/analytics";
import { localizePath, stripLocalePrefix, type Locale } from "../lib/i18n";
import { bookingUrl, getServiceCopy } from "../lib/service-content";
import { siteConfig, socialLinks, type BreadcrumbItem } from "../lib/site";
import Breadcrumbs from "./breadcrumbs";
import RouteReveal from "./route-reveal";

export default function SiteFrame({ children, locale = "fr", crumbs }: PropsWithChildren<{ locale?: Locale; crumbs?: BreadcrumbItem[] }>) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const copy = getServiceCopy(locale);
  const currentPath = stripLocalePrefix(pathname);
  const links = [
    ["/projets", copy.nav.projects],
    ["/interventions-ecoles", copy.nav.education],
    ["/agents-automatisations-ia", copy.nav.automation],
    ["/a-propos", copy.nav.about],
  ] as const;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}>
          <Link href={localizePath("/", locale)} className="wordmark" aria-label={locale === "fr" ? "Dylan CDO, accueil" : "Dylan CDO, home"}>
            Dylan <span>CDO</span>
          </Link>

          <div className="desktop-nav">
            {links.map(([href, label]) => {
              const active = currentPath === href || currentPath.startsWith(`${href}/`);
              return <Link key={href} href={localizePath(href, locale)} aria-current={active ? "page" : undefined}>{label}</Link>;
            })}
          </div>

          <div className="nav-actions">
            <Link
              href={localizePath(currentPath, locale === "fr" ? "en" : "fr")}
              className="language-link"
              aria-label={locale === "fr" ? "View the English version" : "Voir la version française"}
              onClick={() => trackUmami("language_change", { from: locale, to: locale === "fr" ? "en" : "fr", path: pathname })}
            >
              {locale === "fr" ? "EN" : "FR"}
            </Link>
            <a className="nav-book" href={bookingUrl} target="_blank" rel="noreferrer" data-umami-event="calendar_click" data-umami-event-context="navigation" data-umami-event-placement="header">
              {copy.nav.book}<ArrowUpRight />
            </a>
            <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? copy.nav.close : copy.nav.menu} onClick={() => setOpen((value) => !value)}>
              {open ? <X /> : <List />}
            </button>
          </div>
        </nav>

        <div className="mobile-navigation" id="mobile-navigation" hidden={!open}>
          {links.map(([href, label], index) => <Link key={href} href={localizePath(href, locale)}><span>0{index + 1}</span>{label}</Link>)}
          <a href={bookingUrl} target="_blank" rel="noreferrer" data-umami-event="calendar_click" data-umami-event-context="navigation" data-umami-event-placement="mobile_nav">{copy.nav.book}<ArrowUpRight /></a>
        </div>
      </header>

      {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} locale={locale} /> : null}
      <main><RouteReveal path={pathname}>{children}</RouteReveal></main>

      <footer className="site-footer">
        <div className="footer-statement">
          <span>Dylan CDO</span>
          <p>{locale === "fr" ? "Conception, transmission et automatisation depuis la Normandie." : "Design, teaching and automation from Normandy."}</p>
        </div>
        <div className="footer-navigation">
          {links.map(([href, label]) => <Link key={href} href={localizePath(href, locale)}>{label}</Link>)}
          <Link href={localizePath("/contact", locale)}>Contact</Link>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${siteConfig.email}`} data-umami-event="contact_email_click" data-umami-event-context="footer" data-umami-event-placement="footer">{siteConfig.email}</a>
          <div>{socialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
          <small>© {new Date().getFullYear()} Dylan Couto de Oliveira</small>
        </div>
      </footer>
    </div>
  );
}
