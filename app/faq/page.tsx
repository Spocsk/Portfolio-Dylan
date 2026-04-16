import SiteFrame from "../../components/site-frame";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqEntries,
  faqPageSchema,
} from "../../lib/site";

export const metadata = createPageMetadata({
  title: "FAQ — Dylan COUTO DE OLIVEIRA",
  description:
    "FAQ sur Dylan COUTO DE OLIVEIRA: profil, stack TypeScript, type de projets, rôle produit et moyens de contact.",
  path: "/faq",
});

const faqJsonLd = [
  faqPageSchema(faqEntries),
  breadcrumbSchema([
    { name: "Accueil", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]),
];

export default function FaqPage() {
  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="pf-page">
        <section className="pf-page-hero">
          <span className="pf-label">FAQ</span>
          <h1>Questions fréquentes.</h1>
        </section>

        <section className="pf-section">
          <div className="pf-faq">
            {faqEntries.map((entry) => (
              <article key={entry.question} className="pf-faq-item">
                <h2>{entry.question}</h2>
                <p>{entry.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
