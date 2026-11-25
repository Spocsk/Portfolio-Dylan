import Image from "next/image";

import { Button, Chips, ContactBlock, Tile, Timeline } from "../../components/bento";
import JsonLd from "../../components/json-ld";
import { formation, skills } from "../../lib/content";
import { createPageMetadata, profilePageSchema } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "À propos · Dylan Couto de Oliveira",
  description: "Développeur full-stack TypeScript sénior entre la Normandie et Paris : Angular, NestJS, Kubernetes. Parcours, compétences, formation et enseignement.",
  path: "/a-propos",
  ogType: "profile",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profilePageSchema("/a-propos")} />
      <section className="row" aria-labelledby="titre">
        <div className="portrait w-std">
          <Image src="/portrait.jpg" alt="Portrait de Dylan Couto de Oliveira" fill priority sizes="(max-width: 900px) 100vw, 420px" />
        </div>
        <Tile className="w-wide">
          <div className="hero-inner" style={{ gap: 22 }}>
            <span className="bt-label">À propos</span>
            <h1 id="titre" className="h-display" style={{ fontSize: "clamp(44px, 6vw, 84px)" }}>Développeur full-stack TypeScript sénior.</h1>
            <p className="lead" style={{ maxWidth: 600, lineHeight: 1.65 }}>Je suis basé entre la Normandie et Paris. J&apos;ai commencé par l&apos;électronique (DUT GEII), je suis passé au web en alternance, et depuis six ans je conçois des applications Angular et NestJS, de l&apos;écran jusqu&apos;au cluster Kubernetes. J&apos;enseigne aussi le développement, et je code mes cours comme des jeux.</p>
            <Chips label="Savoir-être" items={["Autonomie", "Esprit d'équipe", "Pédagogie"]} />
          </div>
        </Tile>
      </section>

      <section className="section" aria-labelledby="savoir-faire">
        <h2 id="savoir-faire" className="h-section">Savoir-faire</h2>
        <div className="row">
          <Tile tone="ink" className="w-std"><span className="bt-label">Architecture distribuée</span><span className="h-tile">Micro-frontends Angular et microservices NestJS / Node.js</span></Tile>
          <Tile tone="accent" className="w-std"><span className="bt-label">Qualité logicielle</span><span className="h-tile">Tests unitaires, d&apos;intégration et E2E au-delà de 80 % de couverture</span></Tile>
          <Tile className="w-std"><span className="bt-label">Intégration et delivery</span><span className="h-tile">PostgreSQL, GitLab CI, GitHub Actions, Docker, Kubernetes</span></Tile>
        </div>
      </section>

      <section className="section" aria-labelledby="competences">
        <h2 id="competences" className="h-section">Compétences techniques</h2>
        <div className="row">
          <Tile className="w-std"><h3 className="bt-label" style={{ margin: 0 }}>Langages</h3><Chips items={skills.langages} /></Tile>
          <Tile className="w-wide"><h3 className="bt-label" style={{ margin: 0 }}>Frameworks</h3><Chips items={skills.frameworks} /></Tile>
          <Tile className="w-std"><h3 className="bt-label" style={{ margin: 0 }}>Bases de données</h3><Chips items={skills.bases} /></Tile>
          <Tile className="w-std"><h3 className="bt-label" style={{ margin: 0 }}>Cloud et ops</h3><Chips items={skills.ops} /></Tile>
          <Tile className="w-std"><h3 className="bt-label" style={{ margin: 0 }}>Outils et méthode</h3><Chips items={skills.outils} /></Tile>
        </div>
      </section>

      <section className="section row">
        <div className="col w-wide" style={{ gap: 20 }}>
          <h2 className="h-section">Formation</h2>
          <Timeline items={formation} />
        </div>
        <div className="col w-std" style={{ paddingTop: 4 }}>
          <Tile tone="highlight" className="grow"><span className="bt-label">J&apos;enseigne</span><span className="h-tile">Bachelor et Mastère, depuis 2022</span><span className="small">Angular, Node.js, SQL, Docker, architecture logicielle, coordination front et back.</span></Tile>
          <Tile className="grow">
            <span className="bt-label">Langues</span><span style={{ fontSize: 17, lineHeight: 1.6 }}>Français natif · Anglais professionnel</span>
            <span className="bt-label" style={{ marginTop: 8 }}>Secteurs</span><span style={{ fontSize: 17, lineHeight: 1.6 }}>Secteur public et collectivités · Éditeur SaaS · Formation</span>
          </Tile>
        </div>
      </section>

      <ContactBlock title="On se rencontre ?">
        <Button variant="inverse" href="/contact">Me contacter</Button>
        <Button variant="inverse-ghost" href="/cv">Mon CV</Button>
      </ContactBlock>
    </>
  );
}
