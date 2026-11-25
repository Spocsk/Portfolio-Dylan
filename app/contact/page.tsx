import { Button, ProjectTile, Tile } from "../../components/bento";
import { references } from "../../lib/content";
import { createPageMetadata, siteConfig } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Contact · Dylan Couto de Oliveira",
  description: `Écrire à Dylan Couto de Oliveira, développeur full-stack TypeScript : ${siteConfig.email}, LinkedIn ou GitHub.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="row" aria-labelledby="titre">
        <Tile tone="ink" className="w-wide">
          <div style={{ padding: "clamp(0px, 3vw, 32px)", minHeight: 420, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
            <span className="bt-label">Contact</span>
            <h1 id="titre" className="cta-title cta-title--xl" style={{ fontSize: "clamp(48px, 7vw, 104px)" }}>Parlons<br />de ton projet.</h1>
            <div className="col" style={{ gap: 14 }}>
              <a className="contact-email" href={`mailto:${siteConfig.email}`} data-umami-event="contact_email_click" data-umami-event-placement="contact">{siteConfig.email}</a>
              <div className="buttons">
                <Button variant="inverse" href={`mailto:${siteConfig.email}`} event="contact_email_click">M&apos;écrire</Button>
                <Button variant="inverse-ghost" href="/cv">Voir mon CV</Button>
              </div>
            </div>
          </div>
        </Tile>
        <div className="col w-std">
          <ProjectTile className="grow" href={siteConfig.social.linkedin} kicker="LinkedIn" title="dylan-cdo" description="Mon parcours et mes recommandations." />
          <ProjectTile className="grow" href={siteConfig.social.github} kicker="GitHub" title="Spocsk" description="Le code de mes projets publics." />
        </div>
      </section>

      <section className="row section--tight" aria-label="Informations pratiques">
        <Tile tone="highlight" className="w-std"><span className="bt-label">Ce que je fais</span><span className="h-tile">Full-stack TypeScript, Angular × NestJS, et des cours de développement.</span></Tile>
        <Tile className="w-std"><span className="bt-label">Où</span><span className="h-tile">{siteConfig.location}</span></Tile>
        <Tile className="w-std">
          <span className="bt-label">Références</span>
          <span style={{ fontSize: 16, lineHeight: 1.6 }}>{references.map((ref) => `${ref.role} (${ref.company})`).join(", ")}.</span>
          <span className="note" style={{ fontSize: 14 }}>Coordonnées sur demande.</span>
        </Tile>
      </section>
    </>
  );
}
