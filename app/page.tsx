import Link from "next/link";

import { Button, Chip, Chips, ContactBlock, ProjectTile, StatTile, Tile, Timeline } from "../components/bento";
import { timeline } from "../lib/content";
import { siteConfig } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <section className="row" aria-labelledby="titre">
        <Tile className="w-wide">
          <div className="hero-inner hero-inner--home">
            <div className="chips"><Chip tone="skill">{siteConfig.location}</Chip></div>
            <h1 id="titre" className="h-display" style={{ fontSize: "clamp(44px, 5.6vw, 84px)" }}>
              Fullstack TypeScript,<br />Angular <span className="accent">×</span> NestJS.
            </h1>
            <p className="lead">Dylan Couto de Oliveira, développeur full-stack sénior. Six ans à concevoir des micro-frontends, des microservices et leurs pipelines, du SaaS pour les collectivités au monitoring environnemental. Aussi React, Next.js, et des apps iOS en SwiftUI.</p>
          </div>
        </Tile>
        <div className="col w-std">
          <StatTile className="grow" tone="accent" label="Pipelines GitLab CI" value="−30 %" note="de temps de build chez Campbell Scientific" />
          <StatTile className="grow" tone="highlight" label="Tests" value="80 %+" note="de couverture unitaire, intégration et E2E, chez Campbell comme chez Operis" />
        </div>
      </section>

      <section className="row section--tight" aria-label="Chiffres clés">
        <Tile className="w-sm"><span className="bt-label">Micro-frontends</span><span className="big-number">~10 + 10</span><span className="small">micro-frontends Angular et microservices NestJS conçus chez Campbell</span></Tile>
        <Tile className="w-sm"><span className="bt-label">Utilisateurs</span><span className="big-number">15 000 / jour</span><span className="small">sur les écrans SaaS livrés aux collectivités avec Operis</span></Tile>
        <Tile className="w-sm"><span className="bt-label">Encadrement</span><span className="big-number">5 devs</span><span className="small">accompagnés : 3 chez Operis, 2 chez Citizens</span></Tile>
      </section>

      <section className="section" aria-labelledby="projets">
        <div className="section-head">
          <h2 id="projets" className="h-section h-section--xl">Projets</h2>
          <Link href="/projets" className="link-strong">Voir tous les projets →</Link>
        </div>
        <div className="row">
          <ProjectTile featured className="w-wide" href="/projets/dmt" title="DMT" description="Ma médiathèque auto-hébergée, en production : recherche, téléchargements suivis en direct, lecteur intégré, alertes push. Angular 20, NestJS 11, PostgreSQL." />
          <ProjectTile className="w-std" href="/projets" kicker="Outil · MCP" title="Cartable" description="Prospection d'écoles et rentabilité des contrats pour formateur indépendant.">
            <span className="chips" style={{ marginTop: "var(--space-2)" }}>
              <Chip tone="good">rentable</Chip><Chip tone="warn">limite</Chip><Chip tone="bad">à refuser</Chip>
            </span>
          </ProjectTile>
          <ProjectTile className="w-std" href="/projets" kicker="Produit · Next.js" title="DuoShot" description="Les captures App Store de l'iPhone Duo, en trois minutes, sans appareil." />
          <ProjectTile className="w-std" href="/projets" kicker="App iOS · SwiftUI" title="Oru" description="L'origami guidé pli par pli, pour iPhone, iPad et iPhone Duo." />
          <ProjectTile className="w-std" tone="highlight" href="/projets" kicker="Pédagogie" title="Latent" description="Une plateforme interactive pour comprendre comment fonctionnent les LLM." />
        </div>
      </section>

      <section className="section row" aria-labelledby="parcours">
        <div className="col w-std">
          <h2 id="parcours" className="h-section h-section--xl">Parcours</h2>
          <Chips label="Compétences principales" items={["Angular", "NestJS", "React · Next.js", "RxJS · NgRx", "PostgreSQL", "Docker · Kubernetes", "GitLab CI", "Grafana"]} />
          <Link href="/experiences" className="link-strong">Le détail de chaque mission →</Link>
        </div>
        <Timeline className="w-wide" items={timeline} />
      </section>

      <ContactBlock xl title={<>Parlons<br />de ton projet.</>}>
        <Button variant="inverse" href="/contact">Me contacter</Button>
        <Button variant="inverse-ghost" href="/cv">Mon CV</Button>
        <Button variant="inverse-ghost" href={siteConfig.social.linkedin}>LinkedIn</Button>
        <Button variant="inverse-ghost" href={siteConfig.social.github}>GitHub</Button>
      </ContactBlock>
    </>
  );
}
