type ProjectTheme = "sunset" | "aurora" | "graphite";
type ThemeMode = "light" | "dark";

const artisanCodePreview = new URL(
  "./assets/artisan-code-site-preview.png",
  import.meta.url,
).href;
const hpSonorisationPreview = new URL(
  "./assets/hp-sonorisation-site-preview.png",
  import.meta.url,
).href;

interface Project {
  title: string;
  description: string;
  link: string;
  eyebrow: string;
  theme?: ProjectTheme;
  previewImage?: string;
  previewAlt?: string;
  ctaLabel?: string;
}

const DEFAULT_THEME: ProjectTheme = "graphite";
const THEME_STORAGE_KEY = "portfolio-theme";

export const projects: Project[] = [
  {
    title: "Victor COUTO",
    eyebrow: "Site vitrine",
    theme: "sunset",
    description:
      "Une landing page pour l'entreprise de Victor COUTO. Un premium pour un artisan normand, avec direction artistique sobre, hiérarchie forte et conversion orientée prise de contact.",
    link: "https://www.artisan-couto.fr",
    ctaLabel: "Voir le projet",
    previewImage: artisanCodePreview,
    previewAlt: "Aperçu du site",
  },
  {
    title: "HP Sonorisation",
    eyebrow: "Event & Booking",
    theme: "graphite",
    description:
      "Une vitrine immersive pour un prestataire son et animation, pensée autour d'un univers nocturne, d'un CTA fort et d'un hero visuel spectaculaire.",
    link: "https://www.hpsonorisation.fr",
    ctaLabel: "Voir le projet",
    previewImage: hpSonorisationPreview,
    previewAlt: "Aperçu du site HP Sonorisation",
  },
  {
    title: "2048 Swift Game",
    eyebrow: "iOS Game",
    theme: "sunset",
    description:
      "Un clone du célèbre puzzle, écrit en Swift, avec des animations fluides et une logique de jeu entièrement personnalisée.",
    link: "https://github.com/tonprofil/2048-swift",
  },
  {
    title: "Progressive Running Planner",
    eyebrow: "Health Tech",
    theme: "aurora",
    description:
      "Un planificateur progressif web et iOS pensé pour créer des programmes de course personnalisés connectés à Apple Health et Bevel.",
    link: "https://github.com/tonprofil/running-planner",
  },
  {
    title: "Jenkins CI/CD Manager",
    eyebrow: "DevOps",
    theme: "graphite",
    description:
      "Un gestionnaire d'automatisation pour piloter des workflows CI/CD web et mobile avec une expérience plus lisible et centralisée.",
    link: "https://github.com/tonprofil/jenkins-manager",
  },
];

// // Interactive dots system
// interface Dot {
//   element: HTMLElement;
//   x: number;
//   y: number;
//   targetX: number;
//   targetY: number;
//   velocity: number;
// }

// const dots: Dot[] = [];
// let mouseX = 0;
// let mouseY = 0;
// const REPEL_DISTANCE = 400;
// const NUM_DOTS = 350;

// function createDots() {
//   const container = document.getElementById("dots-container");
//   if (!container) return;

//   for (let i = 0; i < NUM_DOTS; i++) {
//     const dot = document.createElement("div");
//     dot.className = "dot";
//     container.appendChild(dot);

//     dots.push({
//       element: dot,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * (container.clientHeight || 600),
//       targetX: Math.random() * window.innerWidth,
//       targetY: Math.random() * (container.clientHeight || 600),
//       velocity: Math.random() * 0.5 + 0.2,
//     });
//   }
// }

// function updateDots() {
//   dots.forEach((dot) => {
//     const dx = dot.targetX - dot.x;
//     const dy = dot.targetY - dot.y;
//     const distance = Math.sqrt(dx * dx + dy * dy);

//     // Move towards target
//     if (distance > 1) {
//       dot.x += (dx / distance) * dot.velocity;
//       dot.y += (dy / distance) * dot.velocity;
//     } else {
//       // New random target
//       dot.targetX = Math.random() * window.innerWidth;
//       dot.targetY = Math.random() * 600;
//     }

//     // Repel from mouse
//     const mouseDistX = dot.x - mouseX;
//     const mouseDistY = dot.y - mouseY;
//     const mouseDistance = Math.sqrt(
//       mouseDistX * mouseDistX + mouseDistY * mouseDistY
//     );

//     if (mouseDistance < REPEL_DISTANCE && mouseDistance > 0) {
//       const force = (REPEL_DISTANCE - mouseDistance) / REPEL_DISTANCE;
//       dot.x += (mouseDistX / mouseDistance) * force * 3;
//       dot.y += (mouseDistY / mouseDistance) * force * 3;
//     }

//     // Keep dots within bounds
//     const container = document.getElementById("dots-container");
//     if (container) {
//       if (dot.x < 0) dot.x = 0;
//       if (dot.x > window.innerWidth) dot.x = window.innerWidth;
//       if (dot.y < 0) dot.y = 0;
//       if (dot.y > container.clientHeight) dot.y = container.clientHeight;
//     }

//     dot.element.style.left = dot.x + "px";
//     dot.element.style.top = dot.y + "px";
//   });

//   requestAnimationFrame(updateDots);
// }

function resolveTheme(theme?: ProjectTheme): ProjectTheme {
  return theme ?? DEFAULT_THEME;
}

function createProjectSlide(project: Project, index: number, total: number) {
  const theme = resolveTheme(project.theme);
  const slide = document.createElement("div");
  slide.className = "project-slide";
  slide.dataset.index = String(index);
  slide.setAttribute("role", "group");
  slide.setAttribute("aria-roledescription", "slide");
  slide.setAttribute("aria-label", `${index + 1} sur ${total}`);

  const card = document.createElement("article");
  card.className = `project-showcase-card theme-${theme}`;

  const visual = document.createElement("div");
  visual.className = "project-showcase-visual";
  if (project.previewImage) {
    visual.classList.add("has-preview");
  }
  visual.setAttribute("aria-hidden", "true");

  if (project.previewImage) {
    const previewImage = document.createElement("img");
    previewImage.className = "project-preview-image";
    previewImage.src = project.previewImage;
    previewImage.alt = project.previewAlt ?? project.title;
    previewImage.loading = "lazy";
    visual.appendChild(previewImage);

    const previewOverlay = document.createElement("span");
    previewOverlay.className = "project-preview-overlay";
    visual.appendChild(previewOverlay);
  }

  const glowPrimary = document.createElement("span");
  glowPrimary.className = "project-orb project-orb-primary";
  visual.appendChild(glowPrimary);

  const glowSecondary = document.createElement("span");
  glowSecondary.className = "project-orb project-orb-secondary";
  visual.appendChild(glowSecondary);

  const glassPanel = document.createElement("span");
  glassPanel.className = "project-glass-panel";
  visual.appendChild(glassPanel);

  const content = document.createElement("div");
  content.className = "project-showcase-content";

  const eyebrow = document.createElement("p");
  eyebrow.className = "project-eyebrow";
  eyebrow.textContent = project.eyebrow;
  content.appendChild(eyebrow);

  const title = document.createElement("h3");
  title.textContent = project.title;
  content.appendChild(title);

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;
  content.appendChild(description);

  const footer = document.createElement("div");
  footer.className = "project-showcase-footer";

  const cta = document.createElement("a");
  cta.className = "project-cta";
  cta.href = project.link;
  cta.target = "_blank";
  cta.rel = "noopener noreferrer";
  cta.textContent = project.ctaLabel ?? "Découvrir le projet";
  footer.appendChild(cta);

  const indexLabel = document.createElement("span");
  indexLabel.className = "project-index";
  indexLabel.textContent = `${String(index + 1).padStart(2, "0")} / ${String(
    total,
  ).padStart(2, "0")}`;
  footer.appendChild(indexLabel);

  content.appendChild(footer);
  card.appendChild(visual);
  card.appendChild(content);
  slide.appendChild(card);

  return slide;
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

function clampIndex(index: number, max: number) {
  return Math.min(Math.max(index, 0), max);
}

function isInteractiveTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    target.closest("a, button, input, select, textarea, summary") !== null
  );
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

function resolveActiveTheme(preferredTheme: ThemeMode | null): ThemeMode {
  return preferredTheme ?? getSystemTheme();
}

function updateThemeMeta(theme: ThemeMode) {
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (!(themeMeta instanceof HTMLMetaElement)) return;

  themeMeta.content = theme === "dark" ? "#0f1115" : "#faf9f7";
}

function updateThemeToggleButton(theme: ThemeMode) {
  const themeToggle = document.getElementById("theme-toggle");
  if (!(themeToggle instanceof HTMLButtonElement)) return;

  const isDark = theme === "dark";
  themeToggle.dataset.activeTheme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Activer le mode clair" : "Activer le mode sombre",
  );
}

function applyTheme(themePreference: ThemeMode | null) {
  const root = document.documentElement;

  if (themePreference) {
    root.dataset.theme = themePreference;
  } else {
    delete root.dataset.theme;
  }

  const activeTheme = resolveActiveTheme(themePreference);
  root.dataset.activeTheme = activeTheme;
  updateThemeMeta(activeTheme);
  updateThemeToggleButton(activeTheme);
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!(themeToggle instanceof HTMLButtonElement)) return;

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let preferredTheme = getStoredTheme();

  applyTheme(preferredTheme);

  themeToggle.addEventListener("click", () => {
    const activeTheme = resolveActiveTheme(preferredTheme);
    preferredTheme = activeTheme === "dark" ? "light" : "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, preferredTheme);
    applyTheme(preferredTheme);
  });

  mediaQuery.addEventListener("change", () => {
    preferredTheme = getStoredTheme();
    if (preferredTheme !== null) return;
    applyTheme(null);
  });
}

function setActiveNavLink(sectionId: string) {
  const links = document.querySelectorAll<HTMLAnchorElement>(".nav-btn");

  links.forEach((link) => {
    const isActive = link.dataset.sectionLink === sectionId;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function initSectionNavigation() {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".nav-btn[data-section-link]"),
  );
  const sections = links
    .map((link) => document.getElementById(link.dataset.sectionLink ?? ""))
    .filter(
      (section): section is HTMLElement => section instanceof HTMLElement,
    );

  if (links.length === 0 || sections.length === 0) return;

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.dataset.sectionLink;
      if (!targetId) return;
      setActiveNavLink(targetId);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      const topEntry = visibleEntries[0];
      if (!(topEntry?.target instanceof HTMLElement)) return;

      setActiveNavLink(topEntry.target.id);
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-20% 0px -45% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function initMobileNav() {
  const nav = document.querySelector(".main-nav");
  const burger = document.getElementById("nav-burger");
  const panel = document.getElementById("mobile-nav-panel");

  if (
    !(nav instanceof HTMLElement) ||
    !(burger instanceof HTMLButtonElement) ||
    !(panel instanceof HTMLElement)
  ) {
    return;
  }

  const mobileQuery = window.matchMedia("(max-width: 768px)");
  const menuLinks = Array.from(
    panel.querySelectorAll<HTMLAnchorElement>(".mobile-nav-btn"),
  );

  const closeMenu = () => {
    nav.dataset.menuOpen = "false";
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Ouvrir le menu");
    panel.hidden = true;
  };

  const openMenu = () => {
    nav.dataset.menuOpen = "true";
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Fermer le menu");
    panel.hidden = false;
  };

  const toggleMenu = () => {
    const isOpen = nav.dataset.menuOpen === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  closeMenu();

  burger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (panel.hidden) return;
    if (event.target instanceof Node && nav.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeMenu();
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMenu();
    }
  });
}

export function renderProjects(rootId = "projects-carousel") {
  const root = document.getElementById(rootId);
  const viewport = document.getElementById("projects-viewport");
  const track = document.getElementById("projects-track");
  const pagination = document.getElementById("projects-pagination");
  const prevButton = document.getElementById("projects-prev");
  const nextButton = document.getElementById("projects-next");

  if (
    !root ||
    !(viewport instanceof HTMLElement) ||
    !(track instanceof HTMLElement) ||
    !(pagination instanceof HTMLElement) ||
    !(prevButton instanceof HTMLButtonElement) ||
    !(nextButton instanceof HTMLButtonElement)
  ) {
    return;
  }

  track.innerHTML = "";
  pagination.innerHTML = "";

  if (projects.length === 0) {
    root.hidden = true;
    return;
  }

  const slides = projects.map((project, index) =>
    createProjectSlide(project, index, projects.length),
  );

  for (const slide of slides) {
    track.appendChild(slide);
  }

  const dots = projects.map((project, index) => {
    const dot = document.createElement("button");
    dot.className = "projects-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Aller au projet ${index + 1}`);
    dot.setAttribute("aria-controls", "projects-viewport");
    dot.dataset.index = String(index);
    pagination.appendChild(dot);
    return dot;
  });

  let activeIndex = 0;
  let offsets: number[] = [];
  let currentTranslate = 0;
  let dragStartX = 0;
  let dragDelta = 0;
  let baseTranslate = 0;
  let isDragging = false;
  let suppressClick = false;

  const setTranslate = (value: number, animate: boolean) => {
    currentTranslate = value;
    track.classList.toggle("is-snapping", animate);
    track.style.transform = `translate3d(${value}px, 0, 0)`;
  };

  const updateState = (animate: boolean) => {
    const maxIndex = slides.length - 1;
    activeIndex = clampIndex(activeIndex, maxIndex);

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeIndex);
      slide.classList.toggle("is-prev", index === activeIndex - 1);
      slide.classList.toggle("is-next", index === activeIndex + 1);
      slide.classList.toggle("is-before", index < activeIndex);
      slide.classList.toggle("is-after", index > activeIndex);
      slide.setAttribute(
        "aria-hidden",
        index === activeIndex ? "false" : "true",
      );
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    prevButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === maxIndex;
    root.setAttribute(
      "aria-label",
      `Carrousel de projets, élément ${activeIndex + 1} sur ${slides.length}`,
    );

    setTranslate(-offsets[activeIndex], animate);
  };

  const syncLayout = (animate = false) => {
    const slideWidth = slides[0]?.offsetWidth ?? 0;
    const sidePadding = Math.max((viewport.clientWidth - slideWidth) / 2, 0);
    track.style.paddingLeft = `${sidePadding}px`;
    track.style.paddingRight = `${sidePadding}px`;
    offsets = getSlideOffsets(slides, viewport);
    updateState(animate);
  };

  const moveToIndex = (index: number, animate = true) => {
    activeIndex = clampIndex(index, slides.length - 1);
    updateState(animate);
  };

  const getClosestIndex = () => {
    const target = -currentTranslate;
    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    offsets.forEach((offset, index) => {
      const distance = Math.abs(offset - target);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const stopDragging = () => {
    if (!isDragging) return;

    isDragging = false;
    viewport.classList.remove("is-dragging");
    moveToIndex(getClosestIndex(), true);

    window.setTimeout(() => {
      suppressClick = false;
    }, 0);
  };

  const onPointerDown = (event: PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (isInteractiveTarget(event.target)) return;

    isDragging = true;
    suppressClick = false;
    dragStartX = event.clientX;
    dragDelta = 0;
    baseTranslate = currentTranslate;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!isDragging) return;

    dragDelta = event.clientX - dragStartX;
    suppressClick = Math.abs(dragDelta) > 6;
    setTranslate(baseTranslate + dragDelta, false);
  };

  const onPointerUp = (event: PointerEvent) => {
    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }
    stopDragging();
  };

  prevButton.addEventListener("click", () => {
    moveToIndex(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    moveToIndex(activeIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      moveToIndex(index);
    });
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToIndex(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToIndex(activeIndex + 1);
    }
  });

  viewport.addEventListener("pointerdown", onPointerDown);
  viewport.addEventListener("pointermove", onPointerMove);
  viewport.addEventListener("pointerup", onPointerUp);
  viewport.addEventListener("pointercancel", stopDragging);
  viewport.addEventListener("lostpointercapture", stopDragging);

  viewport.addEventListener(
    "click",
    (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
    },
    true,
  );

  window.addEventListener("resize", () => {
    syncLayout(false);
  });

  syncLayout(false);
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initThemeToggle();
      initMobileNav();
      initSectionNavigation();
      renderProjects();
    });
  } else {
    initThemeToggle();
    initMobileNav();
    initSectionNavigation();
    renderProjects();
  }
}
