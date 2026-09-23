import Image from "next/image";
import Link from "next/link";

import { getDictionary, localizePath, type Locale } from "../lib/i18n";
import type { Project } from "../lib/projects";
import CampbellVisual from "./campbell-visual";
import PixelPlaceholder from "./pixel-placeholder";

export default function ProjectDetail({ project, locale }: { project: Project; locale: Locale }) {
  const copy = getDictionary(locale).project;
  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{project.eyebrow}</span>
        <h1>{project.title}.</h1>
        <p className="pf-page-lead">{project.description}</p>
        <div className="pf-tags">{project.stack.map((item) => <span key={item} className="pf-tag">{item}</span>)}</div>
        {project.slug === "campbell-scientific" ? (
          <div className="pf-hero-media pf-hero-media-campbell"><CampbellVisual locale={locale} /></div>
        ) : project.previewImage ? (
          <div className="pf-hero-media">
            <Image
              src={project.previewImage}
              alt={project.previewAlt ?? project.title}
              fill
              sizes="(max-width: 980px) 100vw, 980px"
              priority
            />
          </div>
        ) : (
          <div className="pf-hero-media pf-hero-media-empty" data-theme={project.theme ?? "graphite"}>
            <PixelPlaceholder seed={project.slug} />
            <p className="pf-hero-media-caption">{copy.noPreview}</p>
          </div>
        )}
      </section>
      <section className="pf-section">
        <div className="pf-split">
          <div className="pf-block"><h2 className="pf-label">{copy.role}</h2><p>{project.role}</p></div>
          <div className="pf-block">
            <h2 className="pf-label">{copy.angle}</h2><p>{project.summary}</p>
            {project.externalUrl ? <a href={project.externalUrl} className="pf-text-link" target="_blank" rel="noopener noreferrer" data-umami-event="project_external_click" data-umami-event-slug={project.slug} data-umami-event-locale={locale}>{copy.viewOnline}</a> : null}
          </div>
        </div>
      </section>
      <section className="pf-section">
        <div className="pf-split">
          <div className="pf-block"><h2 className="pf-label">{copy.problem}</h2><p>{project.problem}</p></div>
          <div className="pf-block"><h2 className="pf-label">{copy.solution}</h2><p>{project.solution}</p></div>
        </div>
      </section>
      <section className="pf-section">
        <div className="pf-block"><h2 className="pf-label">{copy.results}</h2><ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul></div>
      </section>
      <section className="pf-page-footnav">
        <Link href={localizePath("/projets", locale)} className="pf-text-link">{copy.otherProjects}</Link>
        <Link href={localizePath("/contact", locale)} className="pf-text-link" data-umami-event="contact_section_click" data-umami-event-placement="project_footer" data-umami-event-locale={locale}>{copy.contact}</Link>
      </section>
    </div>
  );
}
