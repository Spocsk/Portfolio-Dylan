"use client";

import { useEffect, useRef, useState } from "react";

import { projects, type Project, type ProjectTheme } from "../lib/projects";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

function clampIndex(index: number, max: number) {
  return Math.min(Math.max(index, 0), max);
}

function resolveTheme(theme?: ProjectTheme): ProjectTheme {
  return theme ?? "graphite";
}

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

function isInteractiveTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    target.closest("a, button, input, select, textarea, summary") !== null
  );
}

function getSlideOffsets(
  slides: HTMLElement[],
  viewport: HTMLElement,
): number[] {
  return slides.map(
    (slide) =>
      slide.offsetLeft + slide.offsetWidth / 2 - viewport.clientWidth / 2,
  );
}

function ProjectSlide({
  index,
  total,
  project,
  isActive,
  isPrev,
  isNext,
  isBefore,
  isAfter,
  registerSlide,
  onMediaSettled,
}: {
  index: number;
  total: number;
  project: Project;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  isBefore: boolean;
  isAfter: boolean;
  registerSlide: (node: HTMLDivElement | null) => void;
  onMediaSettled: () => void;
}) {
  const theme = resolveTheme(project.theme);

  return (
    <div
      ref={registerSlide}
      className={[
        "project-slide",
        isActive ? "is-active" : "",
        isPrev ? "is-prev" : "",
        isNext ? "is-next" : "",
        isBefore ? "is-before" : "",
        isAfter ? "is-after" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-index={index}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} sur ${total}`}
      aria-hidden={!isActive}
    >
      <article className={`project-showcase-card theme-${theme}`}>
        <div
          className={`project-showcase-visual${project.previewImage ? " has-preview" : ""}`}
          aria-hidden="true"
        >
          {project.previewImage ? (
            <>
              <img
                className="project-preview-image"
                src={project.previewImage}
                alt={project.previewAlt ?? project.title}
                loading="lazy"
                onLoad={onMediaSettled}
                onError={onMediaSettled}
              />
              <span className="project-preview-overlay" />
            </>
          ) : null}
          <span className="project-orb project-orb-primary" />
          <span className="project-orb project-orb-secondary" />
          <span className="project-glass-panel" />
        </div>

        <div className="project-showcase-content">
          <p className="project-eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-showcase-footer">
            <a
              className="project-cta"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.ctaLabel ?? "Découvrir le projet"}
            </a>
            <span className="project-index">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

function ProjectsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentTranslateRef = useRef(0);
  const dragStartXRef = useRef(0);
  const baseTranslateRef = useRef(0);
  const activeIndexRef = useRef(0);
  const offsetsRef = useRef<number[]>([]);
  const isDraggingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const layoutSyncFrameRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const setTranslate = (value: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;

    currentTranslateRef.current = value;
    track.classList.toggle("is-snapping", animate);
    track.style.transform = `translate3d(${value}px, 0, 0)`;
  };

  const syncLayout = (animate = false) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const slides = slideRefs.current.filter(
      (slide): slide is HTMLDivElement => slide instanceof HTMLDivElement,
    );

    if (!viewport || !track || slides.length === 0) {
      return;
    }

    const slideWidth = slides[0]?.offsetWidth ?? 0;
    if (viewport.clientWidth === 0 || slideWidth === 0) {
      return;
    }

    const sidePadding = Math.max((viewport.clientWidth - slideWidth) / 2, 0);
    const nextOffsets = getSlideOffsets(slides, viewport);

    if (nextOffsets.some((offset) => !Number.isFinite(offset))) {
      return;
    }

    track.style.paddingLeft = `${sidePadding}px`;
    track.style.paddingRight = `${sidePadding}px`;
    offsetsRef.current = nextOffsets;
    setTranslate(-(nextOffsets[activeIndexRef.current] ?? 0), animate);
  };

  const queueLayoutSync = (animate = false) => {
    if (layoutSyncFrameRef.current !== null) {
      window.cancelAnimationFrame(layoutSyncFrameRef.current);
    }

    layoutSyncFrameRef.current = window.requestAnimationFrame(() => {
      layoutSyncFrameRef.current = null;
      syncLayout(animate);
    });
  };

  const moveToIndex = (index: number) => {
    setActiveIndex(clampIndex(index, projects.length - 1));
  };

  const getClosestIndex = () => {
    const target = -currentTranslateRef.current;
    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    offsetsRef.current.forEach((offset, index) => {
      const distance = Math.abs(offset - target);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const stopDragging = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    setIsDragging(false);
    moveToIndex(getClosestIndex());

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
    setTranslate(-(offsetsRef.current[activeIndex] ?? 0), true);
  }, [activeIndex]);

  useEffect(() => {
    const handlePrev = () => {
      moveToIndex(activeIndexRef.current - 1);
    };

    const handleNext = () => {
      moveToIndex(activeIndexRef.current + 1);
    };

    window.addEventListener("portfolio:projects-prev", handlePrev);
    window.addEventListener("portfolio:projects-next", handleNext);

    return () => {
      window.removeEventListener("portfolio:projects-prev", handlePrev);
      window.removeEventListener("portfolio:projects-next", handleNext);
    };
  }, []);

  useEffect(() => {
    queueLayoutSync(false);

    const handleResize = () => {
      queueLayoutSync(false);
    };

    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && viewportRef.current) {
      resizeObserver = new ResizeObserver(() => {
        queueLayoutSync(false);
      });

      resizeObserver.observe(viewportRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();

      if (layoutSyncFrameRef.current !== null) {
        window.cancelAnimationFrame(layoutSyncFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      id="projects-carousel"
      className="projects-carousel"
      aria-label={`Carrousel de projets, élément ${activeIndex + 1} sur ${projects.length}`}
      aria-roledescription="carousel"
    >
      <div
        id="projects-viewport"
        ref={viewportRef}
        className={`projects-viewport${isDragging ? " is-dragging" : ""}`}
        tabIndex={0}
        aria-label="Liste des projets"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveToIndex(activeIndex - 1);
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            moveToIndex(activeIndex + 1);
          }
        }}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          if (isInteractiveTarget(event.target)) return;

          isDraggingRef.current = true;
          suppressClickRef.current = false;
          dragStartXRef.current = event.clientX;
          baseTranslateRef.current = currentTranslateRef.current;
          setIsDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!isDraggingRef.current) return;

          const dragDelta = event.clientX - dragStartXRef.current;
          suppressClickRef.current = Math.abs(dragDelta) > 6;
          setTranslate(baseTranslateRef.current + dragDelta, false);
        }}
        onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }

          stopDragging();
        }}
        onPointerCancel={stopDragging}
        onLostPointerCapture={stopDragging}
        onClickCapture={(event) => {
          if (!suppressClickRef.current) return;
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div id="projects-track" ref={trackRef} className="projects-track">
          {projects.map((project, index) => (
            <ProjectSlide
              key={project.title}
              index={index}
              total={projects.length}
              project={project}
              isActive={index === activeIndex}
              isPrev={index === activeIndex - 1}
              isNext={index === activeIndex + 1}
              isBefore={index < activeIndex}
              isAfter={index > activeIndex}
              registerSlide={(node) => {
                slideRefs.current[index] = node;
              }}
              onMediaSettled={() => {
                queueLayoutSync(false);
              }}
            />
          ))}
        </div>
      </div>

      <div
        id="projects-pagination"
        className="projects-pagination"
        aria-label="Pagination des projets"
      >
        {projects.map((project, index) => (
          <button
            key={project.title}
            className={`projects-dot${index === activeIndex ? " is-active" : ""}`}
            type="button"
            aria-label={`Aller au projet ${index + 1}`}
            aria-controls="projects-viewport"
            aria-current={index === activeIndex ? "true" : "false"}
            onClick={() => {
              moveToIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const navRef = useRef<HTMLElement>(null);
  const preferredThemeRef = useRef<ThemeMode | null>(null);
  const [activeSection, setActiveSection] = useState("home");
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
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const topEntry = visibleEntries[0];
        if (!(topEntry?.target instanceof HTMLElement)) return;

        setActiveSection(topEntry.target.id);
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-20% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

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

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setIsMenuOpen(false);
      }
    };

    mobileQuery.addEventListener("change", handleChange);

    return () => {
      mobileQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const isDark = activeTheme === "dark";

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projets" },
    { id: "about", label: "À propos" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-bg">
      <nav ref={navRef} className="main-nav" aria-label="Navigation principale">
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
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`nav-btn${isActive ? " active" : ""}`}
                    data-section-link={link.id}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      handleNavClick(link.id);
                    }}
                  >
                    {link.label}
                  </a>
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
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`nav-btn mobile-nav-btn${isActive ? " active" : ""}`}
                  data-section-link={link.id}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    handleNavClick(link.id);
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div id="dots-container" className="dots-container" />

        <div className="hero-content">
          <p className="hero-kicker">Portfolio</p>
          <h1 className="hero-title">
            Je suis <span className="highlight">Dylan COUTO DE OLIVEIRA</span>
          </h1>
          <p className="hero-role">Développeur Web & Mobiles</p>
          <p className="hero-offer">
            Je réalise vos projets{" "}
            <span className="marker-highlight">web</span> &{" "}
            <span className="marker-highlight">marketing</span>.
          </p>
          <p className="hero-subtitle">
            Création d&apos;expériences digitales modernes, performantes et
            élégantes, avec une approche simple, exigeante et premium.
          </p>
          <div className="cta-row">
            <a href="#projects" className="cta">
              Voir mes projets
            </a>
            <a href="#contact" className="cta primary">
              Discuter
            </a>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-shell">
          <div className="section-divider" />
          <div className="projects-header">
            <div className="projects-copy">
              <p className="projects-kicker">Sélection</p>
              <h2>
                Quelques projets
                <br />
                réalisés ou collaborés
              </h2>
            </div>

            <div className="projects-controls" aria-label="Navigation des projets">
              <button
                id="projects-prev"
                className="projects-nav"
                type="button"
                aria-label="Projet précédent"
                onClick={() => {
                  const event = new CustomEvent("portfolio:projects-prev");
                  window.dispatchEvent(event);
                }}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                id="projects-next"
                className="projects-nav"
                type="button"
                aria-label="Projet suivant"
                onClick={() => {
                  const event = new CustomEvent("portfolio:projects-next");
                  window.dispatchEvent(event);
                }}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <ProjectsCarousel />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <div className="section-divider" />
          <h2>À propos</h2>
          <p>
            Je suis un développeur passionné, sénior sur la stack TypeScript
            avec une expertise en{" "}
            Angular, Nest.js et TypeScript. Je me forme actuellement à Swift.
            Je conçois des applications web et mobiles modernes, performantes
            et esthétiques, avec une attention particulière portée à
            l&apos;expérience utilisateur, à la qualité du code et à la gestion de
            données avec MongoDB et PostgreSQL.
          </p>
          <p>
            Avec plusieurs années d&apos;expérience, j&apos;aime transformer les idées en
            produits digitaux innovants et je suis toujours en quête de nouveaux
            défis techniques.
          </p>
          <div className="skills">
            <span className="skill-tag">Swift</span>
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Web Design</span>
            <span className="skill-tag">Mobile Apps</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="section-divider" />
          <h2>Entrer en contact</h2>
          <p>
            Vous avez un projet ou une question ? N&apos;hésitez pas à me contacter.
          </p>
          <div className="contact-links">
            <a href="mailto:dylan.coutodeoliveira@protonmail.com" className="contact-btn">
              <span className="contact-btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25zm1.8-.25L12 11.55l7.2-5.05zM19.5 8.2l-6.92 4.85a1 1 0 0 1-1.16 0L4.5 8.2v9.05c0 .14.11.25.25.25h14.5c.14 0 .25-.11.25-.25z" />
                </svg>
              </span>
              <span className="contact-btn-label">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-cdo/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <span className="contact-btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1M5.6 10h2.68v8.4H5.6zm4.35 0h2.57v1.15h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.77 3.2 4.08v4.57H15.6v-4.05c0-.97-.02-2.2-1.34-2.2-1.35 0-1.56 1.05-1.56 2.14v4.11H9.95z" />
                </svg>
              </span>
              <span className="contact-btn-label">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Spocsk"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <span className="contact-btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M12 2C6.48 2 2 6.6 2 12.27c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .08 1.52 1.05 1.52 1.05.88 1.56 2.32 1.11 2.89.85.09-.66.34-1.11.62-1.36-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.08.36.32.68.93.68 1.88 0 1.36-.01 2.46-.01 2.8 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.27C22 6.6 17.52 2 12 2" />
                </svg>
              </span>
              <span className="contact-btn-label">GitHub</span>
            </a>
            <a
              href="https://x.com/Spocsk"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <span className="contact-btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M18.9 3H21l-6.53 7.46L22.15 21h-6.02l-4.71-6.18L6 21H3.9l6.99-7.99L2 3h6.17l4.26 5.63zm-1.05 16.2h1.16L7.54 4.74H6.3z" />
                </svg>
              </span>
              <span className="contact-btn-label">X (Twitter)</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 Dylan Couto de Oliveira</footer>
    </div>
  );
}
