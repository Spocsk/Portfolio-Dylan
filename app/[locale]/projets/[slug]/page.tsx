import { notFound } from "next/navigation";

import ProjectDetail from "../../../../components/project-detail";
import SiteFrame from "../../../../components/site-frame";
import { getDictionary, isPrefixedLocale, prefixedLocales } from "../../../../lib/i18n";
import { getProjectBySlug, projects } from "../../../../lib/projects";
import { breadcrumbSchema, createPageMetadata, projectCreativeWorkSchema } from "../../../../lib/site";

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const project = getProjectBySlug(slug, locale);
  const copy = getDictionary(locale).project;
  if (!project) return createPageMetadata({ title: copy.notFoundTitle, description: copy.notFoundDescription, path: `/projets/${slug}`, locale });
  return createPageMetadata({ title: project.seoTitle, description: project.seoDescription, path: `/projets/${project.slug}`, image: project.previewImage, locale, ogType: "article" });
}

export default async function LocalizedProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();
  const copy = getDictionary(locale).project;
  const crumbs = [{ name: copy.homeBreadcrumb, path: "/" }, { name: copy.projectsBreadcrumb, path: "/projets" }, { name: project.title, path: `/projets/${project.slug}` }];
  const jsonLd = [projectCreativeWorkSchema(project, locale), breadcrumbSchema(crumbs, locale)];
  return <SiteFrame locale={locale} crumbs={crumbs}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><ProjectDetail project={project} locale={locale} /></SiteFrame>;
}
