import { ContactContent } from "../../components/content-pages";
import SiteFrame from "../../components/site-frame";
import { getDictionary } from "../../lib/i18n";
import { createPageMetadata } from "../../lib/site";

const locale = "fr";
const metadataCopy = getDictionary(locale).metadata.contact;
export const metadata = createPageMetadata({ ...metadataCopy, path: "/contact", locale });

export default function ContactPage() {
  return <SiteFrame locale={locale}><ContactContent locale={locale} /></SiteFrame>;
}
