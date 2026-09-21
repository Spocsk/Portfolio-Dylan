import Link from "next/link";

import { getDictionary, localizePath, type Locale } from "../lib/i18n";
import { getProjects, type ProjectAxis } from "../lib/projects";
import { getServiceCopy } from "../lib/service-content";

export function ProjectsIndexContent({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).project;
  const axes = getServiceCopy(locale).common.axes;
  const projects = getProjects(locale);
  const groups: ProjectAxis[] = ["web", "systems", "pedagogy"];

  return (
    <div className="pf-page">
      <section className="pf-page-hero">
        <h1>{copy.indexTitle}</h1>
        <p className="pf-page-lead">{copy.indexLead}</p>
      </section>
      {groups.map((axis) => (
        <section className="pf-section" key={axis}>
          <h2 className="axis-title">{axes[axis]}</h2>
          <ul className="pf-project-index">
            {projects.filter((project) => project.axis === axis).map((project) => (
              <li key={project.slug}>
                <Link href={localizePath(`/projets/${project.slug}`, locale)} className="pf-project-index-link" data-umami-event="project_open" data-umami-event-slug={project.slug} data-umami-event-locale={locale}>
                  <span className="pf-project-index-eyebrow">{project.eyebrow}</span>
                  <strong>{project.title}</strong>
                  <span>{project.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
