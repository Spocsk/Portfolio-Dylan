import Link from "next/link";

import { localizePath, type Locale } from "../lib/i18n";
import type { BreadcrumbItem } from "../lib/site";

export default function Breadcrumbs({ items, locale }: { items: BreadcrumbItem[]; locale: Locale }) {
  return (
    <nav className="breadcrumbs" aria-label={locale === "fr" ? "Fil d’Ariane" : "Breadcrumb"}>
      <ol>
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`}>
              {current ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={localizePath(item.path, locale)}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
