import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { localizePath, type Locale } from "../lib/i18n";
import { getFeaturedProjects } from "../lib/projects";
import { bookingUrl, getServiceCopy } from "../lib/service-content";
import { OperationsBoard } from "./automation-visuals";
import HomeMotion from "./home-motion";
import ProjectCarousel from "./project-carousel";

export default function PortfolioPage({ locale = "fr" }: { locale?: Locale }) {
  const copy = getServiceCopy(locale);
  const projects = getFeaturedProjects(locale);

  return (
    <HomeMotion>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="hero-topline">
            <span>{copy.home.signature}</span>
            <span>{copy.home.place}</span>
          </p>
          <h1>
            {copy.home.title.map((line, index) => (
              <span className="hero-line" key={line}>
                <span data-hero-line className={index === 2 ? "is-accent" : ""}>{line}</span>
              </span>
            ))}
          </h1>
          <ul className="hero-facets">
            {copy.home.facets.map((facet) => <li key={facet} data-hero-facet>{facet}</li>)}
          </ul>
          <div data-hero-rest>
            <p>{copy.home.lead}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={localizePath("/agents-automatisations-ia", locale)}>{copy.home.primary}<ArrowUpRight /></Link>
              <Link className="text-action" href={localizePath("/projets", locale)}>{copy.home.secondary}<ArrowDown /></Link>
            </div>
          </div>
        </div>
        <div className="home-hero-visual"><OperationsBoard locale={locale} /></div>
      </section>

      <section className="statement-section" data-reveal>
        <span className="section-index">{copy.home.pathsLabel}</span>
        <h2>{copy.home.pathsTitle}</h2>
      </section>

      <section className="offer-paths" data-reveal>
        <Link className="offer-path" href={localizePath("/interventions-ecoles", locale)}>
          <span>01</span><div><small>{copy.nav.education}</small><h3>{copy.home.educationTitle}</h3><p>{copy.home.educationText}</p></div><ArrowUpRight />
        </Link>
        <Link className="offer-path is-dark" href={localizePath("/agents-automatisations-ia", locale)}>
          <span>02</span><div><small>{copy.nav.automation}</small><h3>{copy.home.automationTitle}</h3><p>{copy.home.automationText}</p></div><ArrowUpRight />
        </Link>
      </section>

      <section className="selected-work" id="projets" data-reveal>
        <div className="section-heading"><span>{copy.home.selectedLabel}</span><h2>{copy.home.selectedTitle}</h2></div>
        <ProjectCarousel projects={projects} locale={locale} />
      </section>

      <section className="closing-cta" data-reveal>
        <span>Contact</span>
        <h2>{copy.home.closing}</h2>
        <div>
          <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer" data-umami-event="calendar_click" data-umami-event-context="accueil" data-umami-event-placement="home_closing">{copy.common.book}<ArrowUpRight /></a>
          <a className="text-action" href={`mailto:${copy.common.email}`} data-umami-event="contact_email_click" data-umami-event-context="accueil" data-umami-event-placement="home_closing">{copy.common.email}</a>
        </div>
      </section>
    </HomeMotion>
  );
}
