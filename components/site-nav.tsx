"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Expériences", href: "/experiences" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact", cta: true },
] as const;

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <nav className="bt-nav" aria-label="Navigation principale">
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={"cta" in item ? "bt-nav__cta" : undefined}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
