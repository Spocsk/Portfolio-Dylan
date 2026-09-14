import Link from "next/link";

import { getDictionary, localizePath, type Locale } from "../lib/i18n";
import { getFeaturedProjects } from "../lib/projects";
import ProjectCarousel from "./project-carousel";

export default function PortfolioPage({ locale = "fr" }: { locale?: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.home;
  const projects = getFeaturedProjects(locale);

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
          <Link
            href={localizePath("/contact", locale)}
            className="pf-link-arrow pf-link-muted"
            data-umami-event="contact_section_click"
            data-umami-event-placement="home_hero"
            data-umami-event-locale={locale}
          >
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
        <nav className="pf-project-ssr" aria-hidden="true">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={localizePath(`/projets/${project.slug}`, locale)}
              className="pf-project-ssr-link"
            >
              {project.title}
            </Link>
          ))}
        </nav>
      </section>

      <section className="pf-contact" id="contact">
        <span className="pf-label">{copy.contactLabel}</span>
        <h2 className="pf-contact-title">
          {copy.contactTitle}
          <br />
          <span className="pf-contact-dim">{copy.contactTitleSoft}</span>
        </h2>
        <a
          href="mailto:contact@dylan-cdo.fr"
          className="pf-contact-mail"
          data-umami-event="contact_email_click"
          data-umami-event-placement="home_section"
          data-umami-event-locale={locale}
        >
          contact@dylan-cdo.fr
        </a>
      </section>
    </>
  );
}
