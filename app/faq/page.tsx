import { FaqContent } from "../../components/content-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { breadcrumbSchema, createPageMetadata, faqPageSchema } from "../../lib/site";

const locale = "fr";
const dictionary = getDictionary(locale);
export const metadata = createPageMetadata({ ...dictionary.metadata.faq, path: "/faq", locale });

export default function FaqPage() {
  const jsonLd = [
    faqPageSchema(dictionary.faq.entries, locale),
    breadcrumbSchema([{ name: dictionary.project.homeBreadcrumb, path: "/" }, { name: dictionary.faq.label, path: "/faq" }], locale),
  ];
  return (
    <SiteFrame locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FaqContent locale={locale} />
    </SiteFrame>
  );
}
