import { notFound } from "next/navigation";

import { ProjectsIndexContent } from "../../../components/content-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { breadcrumbSchema, createPageMetadata } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.projects, path: "/projets", locale });
}

export default async function LocalizedProjectsIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const crumbs = [
    { name: dictionary.project.homeBreadcrumb, path: "/" },
    { name: dictionary.project.projectsBreadcrumb, path: "/projets" },
  ];
  const jsonLd = breadcrumbSchema(crumbs, locale);

  return (
    <SiteFrame locale={locale} crumbs={crumbs}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsIndexContent locale={locale} />
    </SiteFrame>
  );
}
