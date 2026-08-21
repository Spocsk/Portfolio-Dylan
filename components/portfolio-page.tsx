import Link from "next/link";

import { getDictionary, localizePath, type Locale } from "../lib/i18n";
import { getProjects } from "../lib/projects";
import ProjectCarousel from "./project-carousel";

export default function PortfolioPage({ locale = "fr" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;
  const projects = getProjects(locale);

  return (
    <>
      <section className="pf-hero" id="home">
        <p className="pf-hero-eyebrow">
          {copy.eyebrow}
        </p>
        <h1 className="pf-hero-title">
          {copy.titleLead} <span className="pf-hero-soft">{copy.titleSoft}</span>
          <br />
          {copy.titleLine2}
          <br />
          {copy.titleLine3}
        </h1>
        <div className="pf-hero-cta">
          <Link href={localizePath("/#work", locale)} className="pf-link-arrow">
            {copy.projectsCta}
          </Link>
          <Link href={localizePath("/#contact", locale)} className="pf-link-arrow pf-link-muted">
            {copy.contactCta}
          </Link>
        </div>
      </section>

      <section className="pf-about" id="about">
        <p className="pf-about-lead">
          {copy.aboutLead}
          <span className="pf-about-dim">
            {" "}
            {copy.aboutStack}
          </span>
        </p>
      </section>

      <section className="pf-work" id="work">
        <div className="pf-work-head">
          <span className="pf-label">{copy.workLabel}</span>
          <h2 className="pf-section-title">{copy.workTitle}</h2>
        </div>

        <ProjectCarousel projects={projects} locale={locale} />
      </section>

      <section className="pf-contact" id="contact">
        <span className="pf-label">{copy.contactLabel}</span>
        <h2 className="pf-contact-title">
          {copy.contactTitle}
          <br />
          <span className="pf-contact-dim">{copy.contactTitleSoft}</span>
        </h2>
        <a href="mailto:contact@dylan-cdo.fr" className="pf-contact-mail">
          contact@dylan-cdo.fr
        </a>
      </section>
    </>
  );
}
