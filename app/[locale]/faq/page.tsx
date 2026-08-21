import { notFound } from "next/navigation";

import { FaqContent } from "../../../components/content-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { breadcrumbSchema, createPageMetadata, faqPageSchema } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.faq, path: "/faq", locale });
}

export default async function LocalizedFaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const jsonLd = [faqPageSchema(dictionary.faq.entries, locale), breadcrumbSchema([{ name: dictionary.project.homeBreadcrumb, path: "/" }, { name: dictionary.faq.label, path: "/faq" }], locale)];
  return <SiteFrame locale={locale}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><FaqContent locale={locale} /></SiteFrame>;
}
