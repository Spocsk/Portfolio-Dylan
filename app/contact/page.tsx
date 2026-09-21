import { ContactPageContent } from "../../components/service-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { getServiceCopy } from "../../lib/service-content";
import { breadcrumbSchema, createPageMetadata, faqPageSchema } from "../../lib/site";

const locale = "fr";
const dictionary = getDictionary(locale);
export const metadata = createPageMetadata({ ...dictionary.metadata.contact, path: "/contact", locale });

export default function ContactPage() {
  const copy = getServiceCopy(locale);
  const crumbs = [
    { name: dictionary.project.homeBreadcrumb, path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  const jsonLd = [
    breadcrumbSchema(crumbs, locale),
    faqPageSchema(copy.contact.faq, locale),
  ];
  return (
    <SiteFrame locale={locale} crumbs={crumbs}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactPageContent locale={locale} />
    </SiteFrame>
  );
}
