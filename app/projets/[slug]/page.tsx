import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFrame from "../../../components/site-frame";
import { getProjectBySlug, projects } from "../../../lib/projects";
import {
  breadcrumbSchema,
  createPageMetadata,
  projectCreativeWorkSchema,
} from "../../../lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata({
      title: "Projet introuvable — Dylan COUTO DE OLIVEIRA",
      description: "La page projet demandée n'existe pas.",
      path: `/projets/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projets/${project.slug}`,
    image: project.previewImage,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = [
    projectCreativeWorkSchema(project),
    breadcrumbSchema([
      { name: "Accueil", path: "/" },
      { name: "Projets", path: "/projets" },
      { name: project.title, path: `/projets/${project.slug}` },
    ]),
  ];

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pf-page">
        <section className="pf-page-hero">
          <span className="pf-label">{project.eyebrow}</span>
          <h1>{project.title}.</h1>
          <p className="pf-page-lead">{project.description}</p>

          <div className="pf-tags">
            {project.stack.map((item) => (
              <span key={item} className="pf-tag">
                {item}
              </span>
            ))}
          </div>

          {project.previewImage ? (
            <div className="pf-hero-media">
              <img
                src={project.previewImage}
                alt={project.previewAlt ?? project.title}
              />
            </div>
          ) : null}
        </section>

        <section className="pf-section">
          <div className="pf-split">
            <div className="pf-block">
              <span className="pf-label">Rôle</span>
              <p>{project.role}</p>
            </div>
            <div className="pf-block">
              <span className="pf-label">Angle</span>
              <p>{project.summary}</p>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  className="pf-text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir en ligne
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="pf-section">
          <div className="pf-split">
            <div className="pf-block">
              <span className="pf-label">Problème</span>
              <p>{project.problem}</p>
            </div>
            <div className="pf-block">
              <span className="pf-label">Solution</span>
              <p>{project.solution}</p>
            </div>
          </div>
        </section>

        <section className="pf-section">
          <div className="pf-block">
            <span className="pf-label">Résultats</span>
            <ul>
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pf-page-footnav">
          <Link href="/#work" className="pf-text-link">
            Autres projets
          </Link>
          <Link href="/contact" className="pf-text-link">
            Me contacter
          </Link>
        </section>
      </div>
    </SiteFrame>
  );
}
