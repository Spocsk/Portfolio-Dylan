import Link from "next/link";

import { getDictionary, localizePath, type Locale } from "../lib/i18n";
import { getFeaturedProjects, getProjects } from "../lib/projects";
import { siteConfig, socialLinks } from "../lib/site";

export function ExpertisesContent({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).expertises;
  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{copy.label}</span>
        <h1>{copy.title}</h1>
        <p className="pf-page-lead">{copy.lead}</p>
      </section>
      <section className="pf-section">
        <div className="pf-split">
          {copy.areas.map((area) => (
            <div key={area.title} className="pf-block">
              <span className="pf-label">{copy.areaLabel}</span>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
              <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="pf-page-footnav">
          <Link href={localizePath("/projets", locale)} className="pf-text-link">{copy.projectsCta}</Link>
        <Link href={localizePath("/contact", locale)} className="pf-text-link" data-umami-event="contact_section_click" data-umami-event-placement="expertises_footer" data-umami-event-locale={locale}>{copy.contactCta}</Link>
      </section>
    </div>
  );
}

export function AboutContent({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).about;
  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{copy.label}</span>
        <h1>{copy.title}</h1>
        <p className="pf-page-lead">{copy.lead}</p>
      </section>
      <section className="pf-section">
        <div className="pf-split">
          <div className="pf-block">
            <span className="pf-label">{copy.journeyLabel}</span>
            <h2>{copy.journeyTitle}</h2>
            <ol className="pf-timeline">
              {copy.journeyItems.map((item) => (
                <li key={item.title}>
                  <span className="pf-timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="pf-block">
            <span className="pf-label">{copy.methodLabel}</span>
            <h2>{copy.methodTitle}</h2>
            <ul>{copy.methodItems.map((item) => <li key={item}>{item}</li>)}</ul>
            <span className="pf-label">{copy.explorationsLabel}</span>
            <h2>{copy.explorationsTitle}</h2>
            <p>{copy.explorationsText}</p>
          </div>
        </div>
      </section>
      <section className="pf-page-footnav">
        <Link href={localizePath("/contact", locale)} className="pf-text-link" data-umami-event="contact_section_click" data-umami-event-placement="about_footer" data-umami-event-locale={locale}>{copy.contactCta}</Link>
        <Link href={localizePath("/expertises", locale)} className="pf-text-link">{copy.expertisesCta}</Link>
      </section>
    </div>
  );
}

export function ContactContent({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).contact;
  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{copy.label}</span>
        <h1>{copy.title}</h1>
        <p className="pf-page-lead">{copy.lead}</p>
        <p className="pf-page-lead">{copy.lookingFor}</p>
        <p className="pf-contact-meta">{copy.location} · {copy.availability}</p>
      </section>
      <section className="pf-section">
        <a href={`mailto:${siteConfig.email}`} className="pf-contact-mail" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }} data-umami-event="contact_email_click" data-umami-event-placement="contact_page" data-umami-event-locale={locale}>{siteConfig.email}</a>
        <div className="pf-page-footnav" style={{ paddingTop: "3rem", paddingBottom: 0 }}>
          {socialLinks.map((link) => <a key={link.href} href={link.href} className="pf-text-link" target="_blank" rel="me noopener noreferrer" data-umami-event="social_click" data-umami-event-network={link.label.toLowerCase()} data-umami-event-placement="contact_page" data-umami-event-locale={locale}>{link.label}</a>)}
        </div>
      </section>
    </div>
  );
}

export function FaqContent({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).faq;
  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{copy.label}</span>
        <h1>{copy.title}</h1>
      </section>
      <section className="pf-section">
        <div className="pf-faq">
          {copy.entries.map((entry) => (
            <article key={entry.question} className="pf-faq-item">
              <h2>{entry.question}</h2>
              <p>{entry.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ProjectsIndexContent({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).project;
  const featured = getFeaturedProjects(locale);
  const more = getProjects(locale).filter((project) => !project.featured);

  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{copy.indexLabel}</span>
        <h1>{copy.indexTitle}</h1>
        <p className="pf-page-lead">{copy.indexLead}</p>
      </section>
      <section className="pf-section">
        <span className="pf-label">{copy.featuredLabel}</span>
        <ul className="pf-project-index">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link href={localizePath(`/projets/${project.slug}`, locale)} className="pf-project-index-link">
                <span className="pf-project-index-eyebrow">{project.eyebrow}</span>
                <strong>{project.title}</strong>
                <span>{project.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="pf-section">
        <span className="pf-label">{copy.moreLabel}</span>
        <ul className="pf-project-index">
          {more.map((project) => (
            <li key={project.slug}>
              <Link href={localizePath(`/projets/${project.slug}`, locale)} className="pf-project-index-link">
                <span className="pf-project-index-eyebrow">{project.eyebrow}</span>
                <strong>{project.title}</strong>
                <span>{project.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
