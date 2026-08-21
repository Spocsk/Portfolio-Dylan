import Link from "next/link";

import { getDictionary, localizePath, type Locale } from "../lib/i18n";
import type { Project } from "../lib/projects";

export default function ProjectDetail({ project, locale }: { project: Project; locale: Locale }) {
  const copy = getDictionary(locale).project;
  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <span className="pf-label">{project.eyebrow}</span>
        <h1>{project.title}.</h1>
        <p className="pf-page-lead">{project.description}</p>
        <div className="pf-tags">{project.stack.map((item) => <span key={item} className="pf-tag">{item}</span>)}</div>
        {project.previewImage ? <div className="pf-hero-media"><img src={project.previewImage} alt={project.previewAlt ?? project.title} /></div> : null}
      </section>
      <section className="pf-section">
        <div className="pf-split">
          <div className="pf-block"><span className="pf-label">{copy.role}</span><p>{project.role}</p></div>
          <div className="pf-block">
            <span className="pf-label">{copy.angle}</span><p>{project.summary}</p>
            {project.externalUrl ? <a href={project.externalUrl} className="pf-text-link" target="_blank" rel="noopener noreferrer">{copy.viewOnline}</a> : null}
          </div>
        </div>
      </section>
      <section className="pf-section">
        <div className="pf-split">
          <div className="pf-block"><span className="pf-label">{copy.problem}</span><p>{project.problem}</p></div>
          <div className="pf-block"><span className="pf-label">{copy.solution}</span><p>{project.solution}</p></div>
        </div>
      </section>
      <section className="pf-section">
        <div className="pf-block"><span className="pf-label">{copy.results}</span><ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul></div>
      </section>
      <section className="pf-page-footnav">
        <Link href={localizePath("/#work", locale)} className="pf-text-link">{copy.otherProjects}</Link>
        <Link href={localizePath("/contact", locale)} className="pf-text-link">{copy.contact}</Link>
      </section>
    </div>
  );
}
