import { ProjectsIndexContent } from "../../components/content-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { breadcrumbSchema, createPageMetadata } from "../../lib/site";

const locale = "fr";
const dictionary = getDictionary(locale);
export const metadata = createPageMetadata({
  ...dictionary.metadata.projects,
  path: "/projets",
  locale,
});

export default function ProjectsIndexPage() {
  const jsonLd = breadcrumbSchema(
    [
      { name: dictionary.project.homeBreadcrumb, path: "/" },
      { name: dictionary.project.projectsBreadcrumb, path: "/projets" },
    ],
    locale,
  );

  return (
    <SiteFrame locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectsIndexContent locale={locale} />
    </SiteFrame>
  );
}
