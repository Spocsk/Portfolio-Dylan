import { notFound } from "next/navigation";

import { ContactContent } from "../../../components/content-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { createPageMetadata } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.contact, path: "/contact", locale });
}

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <SiteFrame locale={locale}><ContactContent locale={locale} /></SiteFrame>;
}
