"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";

import { siteConfig, socialLinks } from "../lib/site";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

function getStoredTheme(): ThemeMode | null {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
}

function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(themePreference: ThemeMode | null): ThemeMode {
  const root = document.documentElement;
  const activeTheme = themePreference ?? getSystemTheme();

  if (themePreference) {
    root.dataset.theme = themePreference;
  } else {
    delete root.dataset.theme;
  }

  root.dataset.activeTheme = activeTheme;

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta instanceof HTMLMetaElement) {
    themeMeta.content = activeTheme === "dark" ? "#0f1115" : "#faf9f7";
  }

  return activeTheme;
}

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/expertises", label: "Expertises" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/faq", label: "FAQ" },
  { href: "/expertises", label: "Expertises" },
  { href: "/a-propos", label: "Profil" },
  { href: "/#projects", label: "Projets" },
];

export default function SiteFrame({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const preferredThemeRef = useRef<ThemeMode | null>(null);
  const [activeTheme, setActiveTheme] = useState<ThemeMode>("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    preferredThemeRef.current = storedTheme;
    setActiveTheme(applyTheme(storedTheme));

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = () => {
      if (preferredThemeRef.current !== null) return;
      setActiveTheme(applyTheme(null));
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!isMenuOpen) return;
      if (event.target instanceof Node && navRef.current?.contains(event.target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isDark = activeTheme === "dark";

  return (
    <div className="portfolio-bg">
      <nav
        ref={navRef}
        className="main-nav"
        aria-label="Navigation principale"
        data-menu-open={isMenuOpen}
      >
        <div className="main-nav-inner">
          <div className="main-nav-links-wrap">
            <button
              id="nav-burger"
              className="nav-burger"
              type="button"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={(event) => {
                event.stopPropagation();
                setIsMenuOpen((current) => !current);
              }}
            >
              <span className="nav-burger-line" />
              <span className="nav-burger-line" />
              <span className="nav-burger-line" />
            </button>

            <div className="main-nav-links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-btn${isActive ? " active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="main-nav-actions">
            <button
              id="theme-toggle"
              className="theme-toggle"
              type="button"
              aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
              aria-pressed={isDark}
              data-active-theme={activeTheme}
              onClick={() => {
                const nextTheme = isDark ? "light" : "dark";
                preferredThemeRef.current = nextTheme;
                window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
                setActiveTheme(applyTheme(nextTheme));
              }}
            >
              <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">
                ☀
              </span>
              <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">
                ☾
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-panel"
          className="mobile-nav-panel"
          aria-label="Menu mobile"
          hidden={!isMenuOpen}
        >
          <div className="mobile-nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-btn mobile-nav-btn${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="site-main">{children}</main>

      <footer className="footer footer-rich pf-footer">
        <div className="footer-inner">
          <p className="footer-title">{siteConfig.name}</p>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="footer-link"
              rel="me"
            >
              Email
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link"
                rel="me noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-legal">© 2026 — Dylan Couto de Oliveira · Basé en France</p>
      </footer>
    </div>
  );
}
