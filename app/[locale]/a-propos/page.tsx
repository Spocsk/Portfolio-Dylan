import { notFound } from "next/navigation";

import { AboutPageContent } from "../../../components/service-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { breadcrumbSchema, createPageMetadata, profilePageSchema } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.about, path: "/a-propos", locale, ogType: "profile" });
}

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const crumbs = [{ name: dictionary.project.homeBreadcrumb, path: "/" }, { name: dictionary.navigation.about, path: "/a-propos" }];
  const jsonLd = [profilePageSchema("/a-propos", locale), breadcrumbSchema(crumbs, locale)];
  return <SiteFrame locale={locale} crumbs={crumbs}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><AboutPageContent locale={locale} /></SiteFrame>;
}
