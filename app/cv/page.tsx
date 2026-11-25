import Image from "next/image";

import { Button, Chips, Tile } from "../../components/bento";
import PrintButton from "../../components/print-button";
import { experiences, formation, references } from "../../lib/content";
import { createPageMetadata, siteConfig } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "CV · Dylan Couto de Oliveira",
  description: "CV de Dylan Couto de Oliveira, développeur full-stack TypeScript sénior : Angular & NestJS, React & Next.js. Campbell Scientific, Operis, Citizens.",
  path: "/cv",
  ogType: "profile",
});

export default function CvPage() {
  return (
    <>
      <section className="cv-top" aria-labelledby="titre">
        <div className="col" style={{ gap: 8 }}>
          <span className="bt-label">Curriculum vitæ · mis à jour le 30/09/2026</span>
          <h1 id="titre" className="cv-h" style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1 }}>Mon CV</h1>
        </div>
        <div className="buttons no-print">
          <PrintButton>Imprimer ou enregistrer en PDF</PrintButton>
          <Button variant="secondary" href="/contact">Me contacter</Button>
        </div>
      </section>

      <section className="row" style={{ alignItems: "flex-start" }}>
        <Tile tone="ink" className="w-std" as="section">
          <div className="cv-side">
            <div className="col" style={{ gap: 14 }}>
              <div className="cv-avatar"><Image src="/portrait.jpg" alt="Portrait de Dylan Couto de Oliveira" fill sizes="224px" /></div>
              <h2 className="cv-h" style={{ fontSize: 30, lineHeight: 1.1 }}>Dylan Couto<br />de Oliveira</h2>
            </div>
            <div className="cv-side__group">
              <span className="bt-label">Contact</span>
              <a href={`mailto:${siteConfig.email}`} style={{ wordBreak: "break-all" }}>{siteConfig.email}</a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/dylan-cdo</a>
              <span>{siteConfig.location}</span>
              <span>Français · Anglais professionnel</span>
            </div>
            <div className="cv-side__group" style={{ gap: 12 }}>
              <span className="bt-label">Formation</span>
              {formation.map((item) => (
                <div key={item.title}>
                  <p style={{ fontWeight: 600, fontSize: 16 }}>{item.title}</p>
                  <p style={{ marginTop: 2, color: "var(--on-inverse-soft)" }}>{item.detail} · {item.years.replace(" — ", "-")}</p>
                </div>
              ))}
            </div>
            <div className="cv-side__group">
              <span className="bt-label">Savoir-être</span>
              <Chips items={["Pédagogie", "Autonomie", "Esprit d'équipe"]} />
            </div>
            <div className="cv-side__group">
              <span className="bt-label">Outils</span>
              <Chips items={["Angular", "React / Next.js", "NestJS / Node.js", "Docker / Kubernetes", "GitLab CI / GitHub Actions / Jenkins", "PostgreSQL / MongoDB / MySQL", "AWS / Grafana"]} />
            </div>
            <div className="cv-side__group" style={{ gap: 6 }}>
              <span className="bt-label">Business</span>
              <span style={{ lineHeight: 1.6 }}>Secteur public et collectivités · Éditeur SaaS · Formation</span>
            </div>
          </div>
        </Tile>

        <div className="col w-wide">
          <Tile>
            <div className="cv-block" style={{ gap: 6 }}>
              <h2 className="cv-h" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>Développeur Full-Stack TypeScript Sénior</h2>
              <p style={{ margin: 0, fontSize: 18, color: "var(--ink-soft)" }}>Angular &amp; NestJS / React &amp; Next</p>
            </div>
          </Tile>

          <Tile as="section">
            <div className="cv-block" style={{ gap: 32 }}>
              <h2 className="cv-h" style={{ fontSize: 28 }}>Expériences</h2>
              {experiences.map((job) => (
                <article key={job.company} className="cv-job">
                  <span className="bt-label">{job.company}</span>
                  <h3 className="cv-h" style={{ fontSize: 22 }}>{job.role}</h3>
                  <span className="date">{job.period}</span>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55 }}><strong>Contexte :</strong> {job.cv.context}</p>
                  <ul className="list" style={{ gap: 6, lineHeight: 1.5, color: "var(--ink-soft)" }}>
                    {job.cv.missions.map((mission) => <li key={mission}>{mission}</li>)}
                  </ul>
                  <Chips label={`Stack ${job.company}`} items={job.cv.stack} />
                </article>
              ))}
            </div>
          </Tile>

          <Tile as="section">
            <div className="cv-block">
              <h2 className="cv-h" style={{ fontSize: 28 }}>Références</h2>
              <p className="note" style={{ fontSize: 14 }}>Informations de contact disponibles sur demande</p>
              <ul className="plain-list">
                {references.map((ref) => <li key={ref.name}><strong>{ref.name}</strong> ({ref.company}) : {ref.role}</li>)}
              </ul>
            </div>
          </Tile>
        </div>
      </section>
    </>
  );
}
