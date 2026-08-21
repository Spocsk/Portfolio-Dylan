import { ExpertisesContent } from "../../components/content-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { createPageMetadata } from "../../lib/site";

const locale = "fr";
const metadataCopy = getDictionary(locale).metadata.expertises;
export const metadata = createPageMetadata({ ...metadataCopy, path: "/expertises", locale });

export default function ExpertisesPage() {
  return <SiteFrame locale={locale}><ExpertisesContent locale={locale} /></SiteFrame>;
}
