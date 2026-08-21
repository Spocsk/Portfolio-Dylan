"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Project } from "../lib/projects";
import { getDictionary, localizePath, type Locale } from "../lib/i18n";

function PixelPlaceholder({ seed }: { seed: string }) {
  const cells = Array.from({ length: 154 }, (_, index) => {
    const code = seed.charCodeAt(index % seed.length) || 65;
    const tier = (code + index * 7) % 6;
    return (
      <span
        key={`${seed}-${index}`}
        className={`pf-pixel pf-pixel-${tier}`}
        aria-hidden="true"
      />
    );
  });
  return <div className="pf-pixel-matrix">{cells}</div>;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectCarousel({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const copy = getDictionary(locale).carousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const total = projects.length;

  const goTo = useCallback(
    (next: number) => {
      const bounded = (next + total) % total;
      setDirection((prev) => {
        if (bounded === activeIndex) return prev;
        return bounded > activeIndex ||
          (activeIndex === total - 1 && bounded === 0)
          ? 1
          : -1;
      });
      setActiveIndex(bounded);
    },
    [activeIndex, total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      else if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goTo]);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      goTo(activeIndex + (dx < 0 ? 1 : -1));
    }
  };

  const project = projects[activeIndex];
  const nextProject = projects[(activeIndex + 1) % total];

  return (
    <div
      className="pf-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.label}
    >
      <div
        className="pf-carousel-stage"
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        data-dir={direction === 1 ? "forward" : "backward"}
      >
        <div className="pf-carousel-index" aria-hidden="true">
          <span className="pf-carousel-index-num">{pad(activeIndex + 1)}</span>
          <span className="pf-carousel-index-sep">/</span>
          <span className="pf-carousel-index-tot">{pad(total)}</span>
        </div>

        <Link
          key={project.slug}
          href={localizePath(`/projets/${project.slug}`, locale)}
          className="pf-carousel-slide"
          aria-label={`${copy.openProject} ${project.title}`}
        >
          <div className="pf-carousel-media" data-theme={project.theme ?? "graphite"}>
            <div className="pf-carousel-media-frame">
              {project.previewImage ? (
                <img
                  src={project.previewImage}
                  alt={project.previewAlt ?? project.title}
                  loading="lazy"
                />
              ) : (
                <PixelPlaceholder seed={project.slug} />
              )}
            </div>
            <span className="pf-carousel-media-ring" aria-hidden="true" />
          </div>

          <div className="pf-carousel-copy">
            <p className="pf-carousel-eyebrow">
              <span className="pf-carousel-dot-mark" aria-hidden="true" />
              {project.eyebrow}
            </p>
            <h3 className="pf-carousel-title">{project.title}</h3>
            <p className="pf-carousel-summary">{project.summary}</p>
            <div className="pf-carousel-stack" aria-hidden="true">
              {project.stack.slice(0, 3).map((tag) => (
                <span key={tag} className="pf-carousel-chip">
                  {tag}
                </span>
              ))}
            </div>
            <span className="pf-carousel-cta">
              {copy.caseStudy}
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="pf-carousel-peek"
          onClick={() => goTo(activeIndex + 1)}
          aria-label={`${copy.nextProject} : ${nextProject.title}`}
        >
          <span className="pf-carousel-peek-label">{copy.next}</span>
          <span className="pf-carousel-peek-title">{nextProject.title}</span>
          <span className="pf-carousel-peek-media" aria-hidden="true">
            {nextProject.previewImage ? (
              <img src={nextProject.previewImage} alt="" loading="lazy" />
            ) : (
              <PixelPlaceholder seed={nextProject.slug} />
            )}
          </span>
        </button>
      </div>

      <div className="pf-carousel-rail">
        <ol className="pf-carousel-list" role="tablist" aria-label={copy.label}>
          {projects.map((p, i) => (
            <li key={p.slug}>
              <button
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                className={`pf-carousel-chip-btn${
                  i === activeIndex ? " is-active" : ""
                }`}
                onClick={() => goTo(i)}
              >
                <span className="pf-carousel-chip-num">{pad(i + 1)}</span>
                <span className="pf-carousel-chip-name">{p.title}</span>
                <span className="pf-carousel-chip-bar" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ol>

        <div className="pf-carousel-arrows">
          <button
            type="button"
            className="pf-carousel-arrow"
            aria-label={copy.previousProject}
            onClick={() => goTo(activeIndex - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="pf-carousel-arrow"
            aria-label={copy.nextProject}
            onClick={() => goTo(activeIndex + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
