import { notFound } from "next/navigation";

import ProjectDetail from "../../../components/project-detail";
import SiteFrame from "../../../components/site-frame";
import { getDictionary } from "../../../lib/i18n";
import { getProjectBySlug, projects } from "../../../lib/projects";
import { breadcrumbSchema, createPageMetadata, projectCreativeWorkSchema } from "../../../lib/site";

const locale = "fr";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, locale);
  const copy = getDictionary(locale).project;
  if (!project) return createPageMetadata({ title: copy.notFoundTitle, description: copy.notFoundDescription, path: `/projets/${slug}`, locale });
  return createPageMetadata({ title: project.seoTitle, description: project.seoDescription, path: `/projets/${project.slug}`, image: project.previewImage, locale });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, locale);
  if (!project) notFound();
  const copy = getDictionary(locale).project;
  const jsonLd = [
    projectCreativeWorkSchema(project, locale),
    breadcrumbSchema([{ name: copy.homeBreadcrumb, path: "/" }, { name: copy.projectsBreadcrumb, path: "/#work" }, { name: project.title, path: `/projets/${project.slug}` }], locale),
  ];
  return (
    <SiteFrame locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetail project={project} locale={locale} />
    </SiteFrame>
  );
}
