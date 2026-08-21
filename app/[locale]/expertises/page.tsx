import { notFound } from "next/navigation";

import { ExpertisesContent } from "../../../components/content-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { createPageMetadata } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.expertises, path: "/expertises", locale });
}

export default async function LocalizedExpertisesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <SiteFrame locale={locale}><ExpertisesContent locale={locale} /></SiteFrame>;
}
