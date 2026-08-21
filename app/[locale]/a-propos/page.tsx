import { notFound } from "next/navigation";

import { AboutContent } from "../../../components/content-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { breadcrumbSchema, createPageMetadata, profilePageSchema } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.about, path: "/a-propos", locale });
}

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const jsonLd = [profilePageSchema("/a-propos", locale), breadcrumbSchema([{ name: dictionary.project.homeBreadcrumb, path: "/" }, { name: dictionary.navigation.about, path: "/a-propos" }], locale)];
  return <SiteFrame locale={locale}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><AboutContent locale={locale} /></SiteFrame>;
}
