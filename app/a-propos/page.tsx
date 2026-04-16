import Link from "next/link";

import SiteFrame from "../../components/site-frame";
import {
  breadcrumbSchema,
  createPageMetadata,
  profilePageSchema,
} from "../../lib/site";

export const metadata = createPageMetadata({
  title: "À propos — Dylan COUTO DE OLIVEIRA",
  description:
    "Profil de Dylan COUTO DE OLIVEIRA: développeur web et mobile senior, stack TypeScript, sens produit, exigence frontend et intérêt croissant pour Swift.",
  path: "/a-propos",
});

const aboutJsonLd = [
  profilePageSchema("/a-propos"),
  breadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
  ]),
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="pf-page">
        <section className="pf-page-hero">
          <span className="pf-label">Profil</span>
          <h1>Développeur orienté produit et qualité d&apos;exécution.</h1>
          <p className="pf-page-lead">
            TypeScript en socle, Angular, React et Nest.js au quotidien.
            Attention portée à l&apos;UX, à la structure du code et à la
            cohérence de l&apos;ensemble.
          </p>
        </section>

        <section className="pf-section">
          <div className="pf-split">
            <div className="pf-block">
              <span className="pf-label">Parcours</span>
              <h2>Du frontend à la logique produit.</h2>
              <p>
                J&apos;aime les produits où la qualité d&apos;interface ne
                masque pas la dette technique. Mon approche articule
                lisibilité, structure et logique métier.
              </p>
              <p>
                Base frontend exigeante, puis ouverture progressive vers
                Nest.js, les APIs et Swift.
              </p>
            </div>

            <div className="pf-block">
              <span className="pf-label">Méthode</span>
              <h2>Ce que je regarde d&apos;abord.</h2>
              <ul>
                <li>Hiérarchie et message de l&apos;interface.</li>
                <li>Qualité des abstractions et du typage.</li>
                <li>Friction dans le parcours utilisateur.</li>
                <li>Cohérence entre intention et exécution.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pf-page-footnav">
          <Link href="/contact" className="pf-text-link">
            Me contacter
          </Link>
          <Link href="/expertises" className="pf-text-link">
            Voir les expertises
          </Link>
        </section>
      </div>
    </SiteFrame>
  );
}
