import { notFound } from "next/navigation";

import { AutomationPage } from "../../../components/service-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { getServiceCopy } from "../../../lib/service-content";
import { createPageMetadata, offerCrumbs, offerJsonLd } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.automation, path: "/agents-automatisations-ia", locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const crumbs = offerCrumbs("automation", locale);
  const jsonLd = offerJsonLd("automation", locale, getServiceCopy(locale).automation.faq);
  return <SiteFrame locale={locale} crumbs={crumbs}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><AutomationPage locale={locale} /></SiteFrame>;
}
