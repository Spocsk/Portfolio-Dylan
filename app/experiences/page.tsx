import Link from "next/link";

import { Button, Chips, ContactBlock, StatTile, Tile } from "../../components/bento";
import { experiences, references } from "../../lib/content";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Expériences · Dylan Couto de Oliveira",
  description: "Six ans, trois équipes : Campbell Scientific, Operis, Citizens. Micro-frontends Angular, microservices NestJS, tests au-delà de 80 % et pipelines GitLab CI −30 %.",
  path: "/experiences",
});

const asides: Record<string, "usage"> = { Operis: "usage" };

export default function ExperiencesPage() {
  return (
    <>
      <section className="row" aria-labelledby="titre">
        <Tile className="w-wide">
          <div className="hero-inner">
            <span className="bt-label">Expériences</span>
            <h1 id="titre" className="h-display">Six ans, trois équipes, du code en production.</h1>
            <p className="lead">Du SaaS pour les collectivités au monitoring environnemental : des architectures distribuées, des tests qui tiennent et des pipelines rapides.</p>
          </div>
        </Tile>
        <div className="col w-std">
          <StatTile className="grow" tone="accent" label="Build" value="−30 %" note="sur les pipelines GitLab CI de Campbell Scientific" />
          <StatTile className="grow" tone="highlight" label="Portée" value="≈ 60 %" note="des métropoles françaises équipées des plateformes livrées avec Operis" />
        </div>
      </section>

      {experiences.map((job, index) => (
        <section key={job.company} className={`row ${index === 0 ? "section" : "section--tight"}`} aria-labelledby={`job-${index}`}>
          <Tile className="w-wide" as="article">
            <div className="col" style={{ gap: 18 }}>
              <div className="section-head" style={{ gap: "8px 16px" }}>
                <span className="date">{job.period}</span>
                <span className="bt-label">{job.sector}</span>
              </div>
              <h2 id={`job-${index}`} className="h-company">{job.company}</h2>
              <p style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>{job.role}</p>
              <p className="text">{job.context}</p>
              <ul className="list">{job.missions.map((mission) => <li key={mission}>{mission}</li>)}</ul>
              {job.team ? <p className="note">{job.team}</p> : null}
            </div>
          </Tile>
          <div className="col w-std">
            {asides[job.company] === "usage" ? <StatTile className="grow" tone="accent" label="Usage" value="15 000" note="utilisateurs par jour sur les solutions SaaS" /> : null}
            <Tile tone="ink" className="grow"><span className="bt-label">Résultat</span><span className="h-tile">{job.result}</span></Tile>
            <Tile className="grow"><span className="bt-label">Environnement</span><Chips label={`Stack ${job.company}`} items={job.stack} /></Tile>
          </div>
        </section>
      ))}

      <section className="section row">
        <Tile tone="highlight" className="w-std">
          <span className="bt-label">En parallèle, depuis 2022</span>
          <h2 className="h-tile" style={{ fontSize: 32, letterSpacing: "-0.02em" }}>Formateur</h2>
          <span className="text">Cours de développement en Bachelor et Mastère (Ynov, CESI, Tech Master). Je code mes cours comme des jeux.</span>
          <Link href="/projets" style={{ fontWeight: 600, color: "var(--on-highlight)" }}>Voir les plateformes de cours →</Link>
        </Tile>
        <Tile className="w-wide">
          <span className="bt-label">Références</span>
          <span style={{ fontSize: 18, lineHeight: 1.6 }}>{references.map((ref) => `${ref.role} chez ${ref.company}`).join(" · ")}.</span>
          <span className="note">Coordonnées disponibles sur demande.</span>
        </Tile>
      </section>

      <ContactBlock title={<>La prochaine ligne,<br />on l&apos;écrit ensemble ?</>}>
        <Button variant="inverse" href="/contact">Me contacter</Button>
        <Button variant="inverse-ghost" href="/cv">Mon CV</Button>
      </ContactBlock>
    </>
  );
}
