"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";

import { siteConfig, socialLinks } from "../lib/site";
import {
  getDictionary,
  localeCookieMaxAge,
  localeCookieName,
  localizePath,
  locales,
  stripLocalePrefix,
  type Locale,
} from "../lib/i18n";

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

export default function SiteFrame({ children, locale = "fr" }: PropsWithChildren<{ locale?: Locale }>) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const preferredThemeRef = useRef<ThemeMode | null>(null);
  const [activeTheme, setActiveTheme] = useState<ThemeMode>("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const dictionary = getDictionary(locale);
  const navCopy = dictionary.navigation;
  const navLinks = [
    { href: "/", label: navCopy.home },
    { href: "/expertises", label: navCopy.expertises },
    { href: "/a-propos", label: navCopy.about },
    { href: "/contact", label: navCopy.contact },
  ];
  const footerLinks = [
    { href: "/faq", label: dictionary.footer.faq },
    { href: "/expertises", label: dictionary.footer.expertises },
    { href: "/a-propos", label: dictionary.footer.profile },
    { href: "/#work", label: dictionary.footer.projects },
  ];

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
    setIsLanguageOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!isMenuOpen && !isLanguageOpen) return;
      if (event.target instanceof Node && navRef.current?.contains(event.target)) {
        return;
      }

      setIsMenuOpen(false);
      setIsLanguageOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      setIsLanguageOpen(false);
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLanguageOpen, isMenuOpen]);

  const isDark = activeTheme === "dark";

  return (
    <div className="portfolio-bg">
      <nav
        ref={navRef}
        className="main-nav"
        aria-label={navCopy.label}
        data-menu-open={isMenuOpen}
      >
        <div className="main-nav-inner">
          <div className="main-nav-links-wrap">
            <button
              id="nav-burger"
              className="nav-burger"
              type="button"
              aria-label={isMenuOpen ? navCopy.closeMenu : navCopy.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={(event) => {
                event.stopPropagation();
                setIsMenuOpen((current) => !current);
                setIsLanguageOpen(false);
              }}
            >
              <span className="nav-burger-line" />
              <span className="nav-burger-line" />
              <span className="nav-burger-line" />
            </button>

            <div className="main-nav-links">
              {navLinks.map((link) => {
                const isActive = stripLocalePrefix(pathname) === link.href;
                return (
                  <Link
                    key={link.href}
                    href={localizePath(link.href, locale)}
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
            <div className="language-switcher">
              <button
                id="language-toggle"
                className="language-toggle"
                type="button"
                aria-label={`${navCopy.languageSelector} : ${dictionary.languageName}`}
                aria-haspopup="menu"
                aria-expanded={isLanguageOpen}
                aria-controls="language-menu"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsLanguageOpen((current) => !current);
                  setIsMenuOpen(false);
                }}
              >
                <span className="language-flag" aria-hidden="true">
                  {dictionary.languageFlag}
                </span>
                <span>{dictionary.languageCode}</span>
                <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                  <path d="m2.5 4.5 3.5 3 3.5-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                id="language-menu"
                className="language-menu"
                role="menu"
                aria-label={navCopy.chooseLanguage}
                hidden={!isLanguageOpen}
              >
                {locales.map((targetLocale) => {
                  const targetDictionary = getDictionary(targetLocale);
                  const href = localizePath(pathname, targetLocale);
                  const isActive = targetLocale === locale;
                  return (
                    <button
                      key={targetLocale}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      aria-label={`${navCopy.switchTo} ${targetDictionary.languageName}`}
                      className={`language-option${isActive ? " is-active" : ""}`}
                      onClick={() => {
                        const suffix = `${window.location.search}${window.location.hash}`;
                        const secure = window.location.protocol === "https:" ? "; Secure" : "";
                        document.cookie = `${localeCookieName}=${targetLocale}; Max-Age=${localeCookieMaxAge}; Path=/; SameSite=Lax${secure}`;
                        setIsLanguageOpen(false);
                        window.location.assign(`${href}${suffix}`);
                      }}
                    >
                      <span className="language-option-label">
                        <span className="language-flag" aria-hidden="true">
                          {targetDictionary.languageFlag}
                        </span>
                        <span>{targetDictionary.languageName}</span>
                      </span>
                      <span className="language-option-code">{targetDictionary.languageCode}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              id="theme-toggle"
              className="theme-toggle"
              type="button"
              aria-label={isDark ? navCopy.lightMode : navCopy.darkMode}
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
          aria-label={navCopy.mobileMenu}
          hidden={!isMenuOpen}
        >
          <div className="mobile-nav-links">
            {navLinks.map((link) => {
              const isActive = stripLocalePrefix(pathname) === link.href;
              return (
                <Link
                  key={link.href}
                  href={localizePath(link.href, locale)}
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
              <Link key={link.href} href={localizePath(link.href, locale)} className="footer-link">
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
        <p className="footer-legal">© 2026 — Dylan Couto de Oliveira · {dictionary.footer.location}</p>
      </footer>
    </div>
  );
}
