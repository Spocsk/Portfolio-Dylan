import Link from "next/link";

import { Chips, Tile } from "../../../components/bento";
import JsonLd from "../../../components/json-ld";
import { absoluteUrl, createPageMetadata } from "../../../lib/site";

export const metadata = createPageMetadata({
  title: "DMT, médiathèque auto-hébergée · Dylan Couto de Oliveira",
  description: "Étude de cas : une médiathèque familiale en production, Angular 20, NestJS 11 et PostgreSQL. Recherche, suivi en direct par SSE, lecteur HLS, alertes Web Push.",
  path: "/projets/dmt",
  ogType: "article",
});

const features = [
  { label: "Recherche", title: "Le bon fichier, du premier coup", text: "Tri, filtres par genre, décennie et note. Un badge « Meilleur choix » marque la source qu'un clic prendrait, et les sources hors sujet sont écartées." },
  { label: "Suivi en direct", title: "Le téléchargement, seconde par seconde", text: "Flux SSE pour la progression et le débit, puis l'arrivée sur le serveur, détectée par webhook et indexée à la volée." },
  { label: "Lecteur intégré", title: "Regarder sans quitter l'app", text: "Flux HLS relayé par l'API, jeton signé limité à un seul titre, reprise de lecture synchronisée.", tone: "accent" as const },
  { label: "Deux modes", title: "Simple ou Expert", text: "Le mode Simple donne un bouton par titre à ceux qui ne veulent pas réfléchir ; le mode Expert montre toutes les sources." },
  { label: "Alertes", title: "« Me prévenir »", text: "Notifications Web Push et cloche intégrée : fin de téléchargement, sortie d'un titre suivi, version française disponible." },
  { label: "Recommandations", title: "« Quoi regarder ? »", text: "Un paquet de cartes tiré selon les goûts de chacun, alimenté par les « J'aime » et les swipes.", tone: "highlight" as const },
];

export default function DmtPage() {
  const homepage = absoluteUrl("/");
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "DMT",
        description: "Médiathèque auto-hébergée familiale : recherche, téléchargements suivis en direct, lecteur intégré, alertes push.",
        url: absoluteUrl("/projets/dmt"),
        inLanguage: "fr-FR",
        keywords: "Angular 20, NestJS 11, PostgreSQL, Docker, GitHub Actions",
        author: { "@id": `${homepage}#person` },
      }} />
      <Link href="/projets" className="back-link">← Tous les projets</Link>

      <section className="row" aria-labelledby="titre">
        <Tile tone="ink" className="w-wide">
          <div className="hero-inner" style={{ gap: 22 }}>
            <span className="bt-label">Projet personnel · en production</span>
            <h1 id="titre" className="dmt-title">DMT</h1>
            <p className="lead" style={{ fontSize: 19, color: "var(--on-inverse-soft)" }}>Une médiathèque auto-hébergée pour toute la famille : on cherche un film ou une série, on le récupère en un clic, on suit le téléchargement en direct et on le regarde dans le navigateur.</p>
          </div>
        </Tile>
        <div className="col w-std">
          <Tile className="grow"><span className="bt-label">Rôle</span><span style={{ fontSize: 17, lineHeight: 1.5 }}>Seul de bout en bout : produit, design, front, back, infra, déploiement.</span></Tile>
          <Tile className="grow"><span className="bt-label">Stack</span><Chips label="Stack DMT" items={["Angular 20", "NestJS 11", "PostgreSQL", "Docker", "GitHub Actions"]} /></Tile>
        </div>
      </section>

      <section className="section" aria-labelledby="fonctions">
        <h2 id="fonctions" className="h-section">Ce que fait l&apos;app</h2>
        <div className="row">
          {features.map((feature) => (
            <Tile key={feature.label} tone={feature.tone} className="w-std" as="article">
              <span className="bt-label">{feature.label}</span>
              <h3 className="h-tile">{feature.title}</h3>
              <p className="text">{feature.text}</p>
            </Tile>
          ))}
        </div>
      </section>

      <section className="section row" aria-labelledby="archi">
        <Tile className="w-wide">
          <span className="bt-label">Architecture</span>
          <h2 id="archi" className="h-tile" style={{ fontSize: 36, letterSpacing: "-0.03em", lineHeight: 1.1 }}>Un front, une API, une base, et tout ce qu&apos;il faut autour</h2>
          <ul className="list" style={{ color: "var(--ink-soft)" }}>
            <li>Front Angular 20 et Angular Material, routes protégées, mode Simple par garde de route.</li>
            <li>API NestJS 11 sur Express 5, TypeORM et PostgreSQL, authentification Authentik et JWT.</li>
            <li>Intégrations Sonarr, Radarr, Jellyfin, TMDB ; file de 8 appels simultanés avec reprise après un 429.</li>
            <li>Contrat OpenAPI exporté et types front générés, vérifiés par la CI.</li>
            <li>Docker Compose, image multi-étapes non-root avec healthcheck.</li>
          </ul>
        </Tile>
        <Tile tone="ink" className="w-std">
          <span className="bt-label">Qualité et livraison</span>
          <ul className="list">
            <li>CI sur chaque PR : lint, typecheck, tests, build.</li>
            <li>Tests e2e Playwright sur une API simulée.</li>
            <li>Budgets Lighthouse et code mort (knip) bloquants.</li>
            <li>Déploiement continu sur runner auto-hébergé, sauvegarde PostgreSQL avant chaque mise en production.</li>
          </ul>
        </Tile>
      </section>

      <section className="section row" aria-label="Suite">
        <Tile href="/projets" className="w-std next-tile">
          <span className="bt-label">Projet suivant</span>
          <span className="bt-project__title">Cartable et les autres →</span>
        </Tile>
        <Tile href="/contact" tone="accent" className="w-std next-tile">
          <span className="bt-label">Une question sur DMT ?</span>
          <span className="bt-project__title">Parlons-en →</span>
        </Tile>
      </section>
    </>
  );
}
