import Link from "next/link";

import { projects } from "../lib/projects";
import ProjectCarousel from "./project-carousel";

export default function PortfolioPage() {
  return (
    <>
      <section className="pf-hero" id="home">
        <p className="pf-hero-eyebrow">
          Dylan Couto de Oliveira — Développeur web &amp; mobile senior, France
        </p>
        <h1 className="pf-hero-title">
          Développeur web <span className="pf-hero-soft">& mobile.</span>
          <br />
          Interfaces produit,<br />soignées jusqu&apos;au pixel.
        </h1>
        <div className="pf-hero-cta">
          <Link href="#work" className="pf-link-arrow">
            Voir les projets
          </Link>
          <Link href="#contact" className="pf-link-arrow pf-link-muted">
            Me contacter
          </Link>
        </div>
      </section>

      <section className="pf-about" id="about">
        <p className="pf-about-lead">
          Je conçois et développe des produits web et mobiles —
          <span className="pf-about-dim">
            {" "}TypeScript, React, Angular, Nest.js.
          </span>
        </p>
      </section>

      <section className="pf-work" id="work">
        <div className="pf-work-head">
          <span className="pf-label">Travaux</span>
          <h2 className="pf-section-title">Sélection.</h2>
        </div>

        <ProjectCarousel projects={projects} />
      </section>

      <section className="pf-contact" id="contact">
        <span className="pf-label">Contact</span>
        <h2 className="pf-contact-title">
          Un projet, un poste,<br />
          <span className="pf-contact-dim">une conversation ?</span>
        </h2>
        <a
          href="mailto:dylan.coutodeoliveira@protonmail.com"
          className="pf-contact-mail"
        >
          dylan.coutodeoliveira@protonmail.com
        </a>
      </section>
    </>
  );
}
