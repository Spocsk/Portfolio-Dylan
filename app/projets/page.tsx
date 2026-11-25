import { Button, ContactBlock, ProjectTile, StatTile, Tile } from "../../components/bento";
import { clientSites, courses, displayUrl, funProjects, iosApps, products, type Project } from "../../lib/content";
import { createPageMetadata, siteConfig } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Projets · Dylan Couto de Oliveira",
  description: "Produits web, apps iOS en SwiftUI, plateformes de cours pour mes étudiants et sites clients. La plupart sont en ligne.",
  path: "/projets",
});

function Card({ project, className, tone }: { project: Project; className: string; tone?: "highlight" }) {
  return (
    <ProjectTile className={className} tone={tone} href={project.url} kicker={project.kicker} title={project.title} description={project.description} image={project.image}>
      {project.url ? <span className="url">{displayUrl(project.url)}</span> : null}
      {project.status ? <span className="url" style={{ color: "var(--muted)" }}>{project.status}</span> : null}
    </ProjectTile>
  );
}

export default function ProjectsPage() {
  const [cartable, ...otherProducts] = products;
  return (
    <>
      <section className="row" aria-labelledby="titre">
        <Tile className="w-wide">
          <div className="hero-inner">
            <span className="bt-label">Projets</span>
            <h1 id="titre" className="h-display">Ce que je construis quand personne ne me le demande.</h1>
            <p className="lead">Des produits web, des apps iOS, des plateformes pour mes étudiants et quelques sites pour des clients. La plupart sont en ligne.</p>
          </div>
        </Tile>
        <div className="col w-std">
          <StatTile className="grow" tone="accent" label="En ligne" value="15+" note="sites et apps déployés sur Vercel et GitHub Pages" />
          <Tile className="grow" href={siteConfig.social.github}>
            <span className="bt-label">Le code</span>
            <span className="h-tile" style={{ fontSize: 28 }}>github.com/Spocsk</span>
            <span style={{ fontWeight: 600 }}>Voir le profil →</span>
          </Tile>
        </div>
      </section>

      <section className="section" aria-labelledby="produits">
        <h2 id="produits" className="h-section">Produits</h2>
        <div className="col">
          <div className="row">
            <ProjectTile featured className="w-wide" href="/projets/dmt" title="DMT" description="Médiathèque auto-hébergée pour la famille : recherche, téléchargements en direct, lecteur intégré, alertes push, mode Simple. Lire l'étude de cas." />
            <Card className="w-std" project={cartable} />
          </div>
          <div className="row">
            {otherProducts.map((project) => <Card key={project.title} className="w-std" project={project} />)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ios">
        <h2 id="ios" className="h-section">Apps iOS</h2>
        <div className="row">
          {iosApps.map((project) => <Card key={project.title} className="w-sm" project={project} />)}
        </div>
      </section>

      <section className="section" id="cours" aria-labelledby="cours-titre">
        <div className="section-head">
          <h2 id="cours-titre" className="h-section">Plateformes de cours</h2>
          <span className="note">Construites pour mes étudiants de Bachelor et de Mastère</span>
        </div>
        <div className="row">
          {courses.map((project, index) => <Card key={project.title} className="w-std" project={project} tone={index === 0 ? "highlight" : undefined} />)}
        </div>
      </section>

      <div className="section row">
        <section className="col w-half" style={{ gap: 20 }} aria-labelledby="clients">
          <h2 id="clients" className="h-section">Sites clients</h2>
          <div className="row">{clientSites.map((project) => <Card key={project.title} className="w-xs" project={project} />)}</div>
        </section>
        <section className="col w-half" style={{ gap: 20 }} aria-labelledby="plaisir">
          <h2 id="plaisir" className="h-section">Pour le plaisir</h2>
          <div className="row">{funProjects.map((project) => <Card key={project.title} className="w-xs" project={project} />)}</div>
        </section>
      </div>

      <ContactBlock title="Un projet en tête ?">
        <Button variant="inverse" href="/contact">Me contacter</Button>
        <Button variant="inverse-ghost" href={siteConfig.social.github}>GitHub</Button>
      </ContactBlock>
    </>
  );
}
