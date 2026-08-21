import { notFound } from "next/navigation";

import PortfolioPage from "../../components/portfolio-page";
import SiteFrame from "../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../lib/i18n";
import { createPageMetadata } from "../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.home, path: "/", locale });
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return <SiteFrame locale={locale}><PortfolioPage locale={locale} /></SiteFrame>;
}
