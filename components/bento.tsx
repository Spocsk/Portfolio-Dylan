import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Tone = "surface" | "ink" | "accent" | "highlight";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

function SmartLink({ href, className, children, style }: { href: string; className?: string; children: ReactNode; style?: CSSProperties }) {
  if (isExternal(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={className} style={style} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className} style={style}>{children}</Link>;
}

export function Tile({ tone = "surface", href, className, children, as = "div" }: { tone?: Tone; href?: string; className?: string; children: ReactNode; as?: "div" | "article" | "section" }) {
  const classes = cx("bt-tile", tone !== "surface" && `bt-tile--${tone}`, className);
  if (href) return <SmartLink href={href} className={classes}>{children}</SmartLink>;
  const Tag = as;
  return <Tag className={classes}>{children}</Tag>;
}

export function Label({ children, as = "span" }: { children: ReactNode; as?: "span" | "p" | "h2" | "h3" }) {
  const Tag = as;
  return <Tag className="bt-label" style={as !== "span" ? { margin: 0 } : undefined}>{children}</Tag>;
}

export function StatTile({ tone = "accent", label, value, note, className }: { tone?: Tone; label: string; value: string; note?: string; className?: string }) {
  return (
    <Tile tone={tone} className={cx("bt-stat", className)}>
      <span className="bt-label">{label}</span>
      <span className="bt-stat__value">{value}</span>
      {note ? <span className="bt-stat__note">{note}</span> : null}
    </Tile>
  );
}

function Arrow() {
  return (
    <span className="bt-arrow" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 14L14 6M7 6h7v7" />
      </svg>
    </span>
  );
}

export type ProjectTileProps = {
  title: string;
  description?: string;
  kicker?: string;
  href?: string;
  featured?: boolean;
  tone?: Tone;
  image?: { src: string; alt: string };
  className?: string;
  children?: ReactNode;
};

export function ProjectTile({ title, description, kicker, href, featured, tone, image, className, children }: ProjectTileProps) {
  const resolvedTone: Tone = featured ? "ink" : tone ?? "surface";
  const media = image ? (
    <div className="bt-project__media">
      <Image src={image.src} alt={image.alt} fill sizes={featured ? "(max-width: 900px) 100vw, 840px" : "(max-width: 900px) 100vw, 600px"} />
    </div>
  ) : null;
  const body = (
    <div className="bt-project__body">
      {kicker ? <span className="bt-label">{kicker}</span> : null}
      <span className="bt-project__title">{title}</span>
      {description ? <span className="bt-project__text">{description}</span> : null}
      {children}
    </div>
  );
  const content = (
    <>
      {media}
      {featured ? <div className="bt-project__foot">{body}<Arrow /></div> : body}
    </>
  );
  return <Tile tone={resolvedTone} href={href} className={className} as="article">{content}</Tile>;
}

export function Button({ href, variant = "primary", children, event }: { href: string; variant?: "primary" | "secondary" | "inverse" | "inverse-ghost"; children: ReactNode; event?: string }) {
  const className = `bt-btn bt-btn--${variant}`;
  if (isExternal(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={className} data-umami-event={event} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className} data-umami-event={event}>{children}</Link>;
}

export function Chip({ tone = "neutral", children }: { tone?: "neutral" | "skill" | "status" | "good" | "warn" | "bad"; children: ReactNode }) {
  return (
    <span className={cx("bt-chip", tone !== "neutral" && `bt-chip--${tone}`)}>
      {tone === "status" ? <span className="bt-chip__dot" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

export function Chips({ items, tone = "skill", label }: { items: readonly string[]; tone?: "skill" | "neutral"; label?: string }) {
  return (
    <ul className="chips" aria-label={label} style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((item) => <li key={item}><Chip tone={tone}>{item}</Chip></li>)}
    </ul>
  );
}

export type TimelineItem = { years: string; title: string; detail?: string };

export function Timeline({ items, className }: { items: readonly TimelineItem[]; className?: string }) {
  return (
    <ol className={cx("bt-timeline", className)}>
      {items.map((item) => (
        <li key={item.title} className="bt-timeline__item">
          <span className="bt-timeline__years">{item.years}</span>
          <span className="bt-timeline__body">
            <span className="bt-timeline__title">{item.title}</span>
            {item.detail ? <span className="bt-timeline__detail">{item.detail}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function Mark() {
  return (
    <Link href="/" className="bt-mark" aria-label="Dylan Couto de Oliveira, accueil">
      <span className="bt-mark__tile" aria-hidden="true">DC</span>
      Dylan.
    </Link>
  );
}

export function ContactBlock({ title, xl, children }: { title: ReactNode; xl?: boolean; children: ReactNode }) {
  return (
    <div className="section">
      <Tile tone="ink" as="section">
        <div className="cta-inner">
          <h2 className={cx("cta-title", xl && "cta-title--xl")}>{title}</h2>
          <div className="buttons">{children}</div>
        </div>
      </Tile>
    </div>
  );
}
