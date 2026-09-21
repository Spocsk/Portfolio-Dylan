import { AboutPageContent } from "../../components/service-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { breadcrumbSchema, createPageMetadata, profilePageSchema } from "../../lib/site";

const locale = "fr";
const dictionary = getDictionary(locale);
export const metadata = createPageMetadata({ ...dictionary.metadata.about, path: "/a-propos", locale, ogType: "profile" });

export default function AboutPage() {
  const crumbs = [{ name: dictionary.project.homeBreadcrumb, path: "/" }, { name: dictionary.navigation.about, path: "/a-propos" }];
  const jsonLd = [
    profilePageSchema("/a-propos", locale),
    breadcrumbSchema(crumbs, locale),
  ];
  return (
    <SiteFrame locale={locale} crumbs={crumbs}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutPageContent locale={locale} />
    </SiteFrame>
  );
}
