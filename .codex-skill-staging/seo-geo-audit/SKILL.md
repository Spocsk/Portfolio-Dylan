---
name: seo-geo-audit
description: Audit SEO technique, on-page, contenu, données structurées et GEO d'un projet web local ou d'un site identifiable depuis le repo. Use when Codex needs to review a Next.js/React site, landing page, portfolio, documentation site, or small business website for crawlability, indexation signals, semantic clarity, entity signals, retrievability in AI search, and prioritized actions split between code changes and off-site web actions.
---

# SEO GEO Audit

## Overview

Audit a web project on two linked axes: classic SEO fundamentals and GEO readiness for AI search experiences. Favor verified observations, separate absent from inferred signals, and end with a prioritized action plan split between code and web actions.

## Guardrails

- Treat GEO as an extension of SEO fundamentals, not a separate magical discipline.
- Prefer official and recent sources when guidance may have changed.
- Never invent rankings, traffic, backlinks, citations, or indexation status.
- Never recommend keyword stuffing or structured data that does not match visible content.
- Mention `llms.txt` only as an optional low-priority experiment after fundamentals are covered.
- Adapt recommendations to the project goal: acquisition site, local business, documentation, or personal hiring portfolio.

## Workflow

### 1. Build Context

- Detect the framework, routing model, and deployment clues.
- Run `scripts/repo_inventory.py` first when auditing a local repo.
- Read only the files most likely to contain routing, metadata, structured data, redirects, and public assets.
- If a live domain is identifiable from code, metadata, config, README, or env files, audit public presence as a second pass. If not, stop at local verification and list missing data.

### 2. Inventory the Site

For local audits, determine:

- Site type: one-page, multi-page, hybrid, docs, app shell, marketing site.
- Main routes and indexable pages.
- Metadata sources: `app/layout.*`, `app/**/page.*`, `generateMetadata`, head utilities, manifest, OG assets, Twitter assets.
- SEO artifacts: `robots.*`, `sitemap.*`, redirects, rewrites, canonical handling, hreflang if present, structured data, public images.
- Content-bearing components versus decorative or client-only components.

For Next.js, inspect first:

- `app/layout.*`
- `app/page.*`
- `app/**/page.*`
- `app/robots.*`
- `app/sitemap.*`
- `app/manifest.*`
- `app/opengraph-image.*`
- `app/twitter-image.*`
- `next.config.*`
- `public/`

### 3. Evaluate Core SEO

Check and report on:

- Indexation signals: crawlable routes, anchors with real `href`, robots handling, sitemap presence, canonical consistency, duplicate routes, redirect behavior.
- Metadata quality: title, meta description, `metadataBase`, canonical, OG, Twitter, site name, favicon, language, viewport.
- Semantic structure: `main`, `header`, `nav`, `footer`, heading hierarchy, text actually rendered in HTML, descriptive anchors.
- Content fit: services, proof pages, case studies, about page, contact page, editorial FAQs, localized pages if relevant.
- Media fit: image purpose, `alt` quality, OG image coverage, screenshots paired with meaningful text.
- Structured data: `Person`, `Organization`, `WebSite`, `ProfilePage`, `BreadcrumbList`, `Article`, `LocalBusiness` only when appropriate and visible.
- Evidence and trust: bio, experience, named expertise, projects, testimonials, certifications, external profiles, mentions.

### 4. Evaluate GEO

Assess whether the site clearly answers:

- Who is the person or organization?
- What exact services or outputs are offered?
- For whom?
- In what geography, if geography matters?
- What proof is available and verifiable?
- Which pages could realistically be cited by AI systems?
- Which user questions are answered directly in plain text?
- Which entity links are missing between the site and external profiles?

Flag weak GEO when the site is visually strong but textually vague, overly one-page, missing entity markup, lacking proof pages, or relying mostly on outbound portfolio links.

### 5. Evaluate Public Presence

If a live domain is identifiable, verify only what can actually be observed:

- Whether key pages appear indexable and consistent.
- Whether snippets, titles, and social cards look coherent.
- Whether the entity is consistent across LinkedIn, GitHub, X, Google Business Profile, or other cited profiles.
- Whether citations, directories, or knowledge-graph style corroboration opportunities exist.

Use browsing only for unstable facts, live snippets, current guidance, or explicit verification requests.

### 6. Produce the Audit

Always output these sections in order:

1. `Résumé exécutif`
2. `Scorecard`
3. `Findings`
4. `Actions dans le code`
5. `Actions sur le web`
6. `Quick wins / Chantiers structurants / Expérimentations`
7. `Données manquantes pour compléter l'audit` when needed

Keep findings prioritized as `P0` to `P3`:

- `P0`: severe blocking issue affecting indexation, canonicalization, or business-critical trust signals.
- `P1`: high-impact issue hurting discoverability, matching of intent, or entity clarity.
- `P2`: meaningful improvement with moderate impact.
- `P3`: nice-to-have polish or experiment.

For each finding, include:

- `Observation`
- `Pourquoi c'est un problème`
- `Impact SEO/GEO`
- `Correctif recommandé`
- `Fichier / ligne` when localizable

Use the scorecard categories and rate each on 10:

- SEO technique
- SEO on-page
- Contenu & intent
- Données structurées
- Autorité & preuves
- GEO / retrievability IA
- Présence externe

## Heuristics

### One-Page Portfolio

Push hard toward internal pages when the site is trying to acquire traffic or leads:

- service pages
- case-study pages
- about page with entity detail
- contact page with explicit offer
- FAQ pages answering target queries

If the goal is hiring rather than lead generation, weight recommendations toward:

- entity clarity
- author credibility
- project proof
- profile consistency
- discoverability for name-based and expertise-based queries

### Next.js Notes

Treat these absences as likely high-priority findings when relevant:

- no `metadataBase`
- no canonical strategy
- no OG or Twitter metadata
- no `robots` or `sitemap`
- no JSON-LD
- no crawlable internal depth beyond `/`
- client-heavy UI with little explicit body copy
- generic headings that do not map to target queries

## Resources

- Read [references/audit-checklist.md](references/audit-checklist.md) for the detailed checklist and Next.js file map.
- Read [references/report-template.md](references/report-template.md) when you need the exact report structure and wording pattern.
- Run `python3 scripts/repo_inventory.py [path]` to inventory routes, metadata files, SEO artifacts, and candidate domains before reading the repo manually.
