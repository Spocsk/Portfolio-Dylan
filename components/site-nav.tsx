import Link from "next/link";

const items = [
  { label: "Expériences", href: "/experiences" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact", cta: true },
] as const;

export default function SiteNav() {
  return (
    <nav className="bt-nav" aria-label="Navigation principale">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className={"cta" in item ? "bt-nav__cta" : undefined}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
