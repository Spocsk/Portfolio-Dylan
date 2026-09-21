import { AutomationPage } from "../../components/service-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { getServiceCopy } from "../../lib/service-content";
import { createPageMetadata, offerCrumbs, offerJsonLd } from "../../lib/site";

const locale = "fr" as const;

export const metadata = createPageMetadata({
  ...getDictionary(locale).metadata.automation,
  path: "/agents-automatisations-ia",
  locale,
});

export default function Page() {
  const crumbs = offerCrumbs("automation", locale);
  const jsonLd = offerJsonLd("automation", locale, getServiceCopy(locale).automation.faq);
  return <SiteFrame locale={locale} crumbs={crumbs}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><AutomationPage locale={locale} /></SiteFrame>;
}
