import SiteFrame from "../../components/site-frame";
import { createPageMetadata, siteConfig, socialLinks } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Contact — Dylan COUTO DE OLIVEIRA",
  description:
    "Contacter Dylan COUTO DE OLIVEIRA pour une opportunité, un échange produit ou une discussion autour d'un poste en développement web ou mobile.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteFrame>
      <div className="pf-page">
        <section className="pf-page-hero">
          <span className="pf-label">Contact</span>
          <h1>Entrer en contact.</h1>
          <p className="pf-page-lead">
            L&apos;email reste le canal le plus direct. LinkedIn et GitHub
            complètent le profil.
          </p>
        </section>

        <section className="pf-section">
          <a
            href={`mailto:${siteConfig.email}`}
            className="pf-contact-mail"
            style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
          >
            {siteConfig.email}
          </a>

          <div className="pf-page-footnav" style={{ paddingTop: "3rem", paddingBottom: 0 }}>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pf-text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
