import { AboutContent } from "../../components/content-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { breadcrumbSchema, createPageMetadata, profilePageSchema } from "../../lib/site";

const locale = "fr";
const dictionary = getDictionary(locale);
export const metadata = createPageMetadata({ ...dictionary.metadata.about, path: "/a-propos", locale });

export default function AboutPage() {
  const jsonLd = [
    profilePageSchema("/a-propos", locale),
    breadcrumbSchema([{ name: dictionary.project.homeBreadcrumb, path: "/" }, { name: dictionary.navigation.about, path: "/a-propos" }], locale),
  ];
  return (
    <SiteFrame locale={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutContent locale={locale} />
    </SiteFrame>
  );
}
