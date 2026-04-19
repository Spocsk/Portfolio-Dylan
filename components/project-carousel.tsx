"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Project } from "../lib/projects";

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

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const cards = track.querySelectorAll<HTMLElement>(".pf-carousel-card");
    if (cards.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    let nearest = 0;
    let minDelta = Infinity;
    cards.forEach((card, i) => {
      const delta = Math.abs(card.getBoundingClientRect().left - trackRect.left);
      if (delta < minDelta) {
        minDelta = delta;
        nearest = i;
      }
    });
    setActiveIndex(nearest);
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateState();
    track.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      track.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [updateState]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".pf-carousel-card");
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="pf-carousel" role="region" aria-label="Projets">
      <div className="pf-carousel-track" ref={trackRef}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projets/${project.slug}`}
            className="pf-carousel-card"
          >
            <div className="pf-carousel-media">
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
            <div className="pf-carousel-body">
              <p className="pf-card-eyebrow">{project.eyebrow}</p>
              <h3 className="pf-card-title">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="pf-carousel-controls">
        <div className="pf-carousel-dots" role="tablist" aria-label="Aller au projet">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={`pf-carousel-dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Aller au projet ${project.title}`}
              aria-selected={index === activeIndex}
              role="tab"
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>

        <div className="pf-carousel-arrows">
          <button
            type="button"
            className="pf-carousel-arrow"
            aria-label="Projet précédent"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={!canPrev}
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
            aria-label="Projet suivant"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={!canNext}
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
