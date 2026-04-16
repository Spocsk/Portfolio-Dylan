import Link from "next/link";

import SiteFrame from "../../components/site-frame";
import { createPageMetadata, expertiseAreas } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Expertises — Dylan COUTO DE OLIVEIRA",
  description:
    "Expertises de Dylan COUTO DE OLIVEIRA: frontend produit, applications TypeScript, backend Nest.js et progression mobile en Swift.",
  path: "/expertises",
});

export default function ExpertisesPage() {
  return (
    <SiteFrame>
      <div className="pf-page">
        <section className="pf-page-hero">
          <span className="pf-label">Expertises</span>
          <h1>Construire des produits lisibles et cohérents.</h1>
          <p className="pf-page-lead">
            Stack TypeScript, clarté des interfaces, qualité du code — un
            équilibre entre exigence technique et lecture produit.
          </p>
        </section>

        <section className="pf-section">
          <div className="pf-split">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="pf-block">
                <span className="pf-label">Domaine</span>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-page-footnav">
          <Link href="/#work" className="pf-text-link">
            Voir les projets
          </Link>
          <Link href="/contact" className="pf-text-link">
            Me contacter
          </Link>
        </section>
      </div>
    </SiteFrame>
  );
}
