import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { isPrefixedLocale, prefixedLocales } from "../../lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();
  return children;
}
