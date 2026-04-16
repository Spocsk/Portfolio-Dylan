# Audit Checklist

Use this file only when the main `SKILL.md` is not enough.

## Local Repo Checklist

### Framework and Routing

- Detect package manager and framework from `package.json`.
- Detect App Router versus Pages Router in Next.js.
- List likely indexable routes from `app/**/page.*` or `pages/**`.
- Note whether the site is one-page, multi-page, or hybrid.

### Metadata and Search Appearance

- `title`
- `description`
- `metadataBase`
- canonical
- Open Graph
- Twitter cards
- favicon and touch icons
- `lang`
- viewport
- site name

### Crawl and Indexation

- `robots.txt` or `robots.ts`
- `sitemap.xml` or `sitemap.ts`
- redirect rules
- duplicate route risks
- hash-link dependence on a one-page site
- crawlable anchor links

### Semantic and Content Signals

- `main`, `header`, `nav`, `footer`
- heading hierarchy
- indexable copy in hero and section bodies
- service descriptions
- case studies
- contact page
- about page
- FAQs
- local landing pages if the business is geographically scoped

### Media and Structured Data

- image `alt`
- OG image
- screenshots with explanatory copy
- `Person`
- `Organization`
- `WebSite`
- `ProfilePage`
- `BreadcrumbList`
- `Article`
- `LocalBusiness`

Only recommend schema that matches visible content.

### Evidence and Entity Signals

- named individual or company
- exact role or offer
- years of experience when visible
- client names or project proofs when visible
- social profiles
- sameAs opportunities
- trust pages and proof assets

## GEO Checklist

Ask:

- Can an AI system tell who this site is about in one pass?
- Can it extract the exact services or expertise without guessing?
- Are important claims backed by visible proof?
- Is the site rich in explicit text or mostly visual?
- Are there pages that answer a whole user question well enough to cite?
- Does the site connect clearly to external profiles and corroborating sources?

Common weak signals:

- generic hero copy
- beautiful one-page portfolio with minimal text
- projects only as outbound links
- no case-study pages
- no FAQ or problem-solution content
- no entity schema
- inconsistent naming across profiles

## Next.js File Map

Check these files first when they exist:

- `app/layout.*`
- `app/page.*`
- `app/**/page.*`
- `app/**/layout.*`
- `app/robots.*`
- `app/sitemap.*`
- `app/manifest.*`
- `app/opengraph-image.*`
- `app/twitter-image.*`
- `next.config.*`
- `middleware.*`
- `public/**`

Then inspect:

- shared content components
- content collections
- CMS adapters
- markdown or MDX pages
- route handlers that may expose feed or metadata files

## Public Web Checklist

Verify only what can actually be observed:

- indexed pages or snippet presence
- current title/snippet quality
- profile consistency
- business-listing consistency
- visible citation opportunities
- Search Console and Bing Webmaster setup if the user confirms access

Do not infer backlinks or traffic from thin evidence.
