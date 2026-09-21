import { notFound } from "next/navigation";

import { ContactPageContent } from "../../../components/service-pages";
import SiteFrame from "../../../components/site-frame";
import { getDictionary, isPrefixedLocale } from "../../../lib/i18n";
import { getServiceCopy } from "../../../lib/service-content";
import { breadcrumbSchema, createPageMetadata, faqPageSchema } from "../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  return createPageMetadata({ ...getDictionary(locale).metadata.contact, path: "/contact", locale });
}

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const copy = getServiceCopy(locale);
  const crumbs = [
    { name: dictionary.project.homeBreadcrumb, path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  const jsonLd = [
    breadcrumbSchema(crumbs, locale),
    faqPageSchema(copy.contact.faq, locale),
  ];
  return (
    <SiteFrame locale={locale} crumbs={crumbs}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ContactPageContent locale={locale} />
    </SiteFrame>
  );
}
