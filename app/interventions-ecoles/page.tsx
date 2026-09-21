import { EducationPage } from "../../components/service-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { getServiceCopy } from "../../lib/service-content";
import { createPageMetadata, offerCrumbs, offerJsonLd } from "../../lib/site";

const locale = "fr" as const;

export const metadata = createPageMetadata({
  ...getDictionary(locale).metadata.education,
  path: "/interventions-ecoles",
  locale,
});

export default function Page() {
  const crumbs = offerCrumbs("education", locale);
  const jsonLd = offerJsonLd("education", locale, getServiceCopy(locale).education.faq);
  return <SiteFrame locale={locale} crumbs={crumbs}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><EducationPage locale={locale} /></SiteFrame>;
}
