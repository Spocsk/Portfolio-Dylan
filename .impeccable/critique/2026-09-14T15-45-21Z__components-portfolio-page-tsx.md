---
target: homepage carousel and case studies
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 5
target_identity: "file:/Users/dylancoutodeoliveira/Documents/Portfolio/Dylan/components/portfolio-page.tsx"
target_fingerprint: "sha256:827e5f8082b2f4a8462e1c038fe225bee839d0596db962a9eb3abc0a3b99ad61"
target_path: /Users/dylancoutodeoliveira/Documents/Portfolio/Dylan/components/portfolio-page.tsx
timestamp: 2026-09-14T15-45-21Z
slug: components-portfolio-page-tsx
---
Method: dual-agent (A: 5e5ff935-d581-4315-af09-c4e0778ac971 · B: fad2b1ca-a74b-4405-b2e9-7a1f4abe9054)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | `01 / 06` is aria-hidden; /projets not in primary nav |
| 2 | Match System / Real World | 3 | Recruiter French; DuoShot lead is product jargon |
| 3 | User Control and Freedom | 3 | Arrows, peek, theme, locale |
| 4 | Consistency and Standards | 2 | TypeScript offer vs iOS featured; mosaic vs screenshot |
| 5 | Error Prevention | 3 | Static surface |
| 6 | Recognition Rather Than Recall | 2 | Mosaic does not identify Campbell / PoseLock |
| 7 | Flexibility and Efficiency | n/a | Experience surface |
| 8 | Aesthetic and Minimalist Design | 2 | Type holds; mosaics and duplicate SSR index |
| 9 | Error Recovery | 2 | Empty media has no recovery |
| 10 | Help and Documentation | n/a | Experience surface |
| **Total** | | **19/32** | **Acceptable** |

#### Design Specificity Verdict

**LLM assessment**: Copy and terracotta/Geist/980px identity are authored for Dylan. The carousel chassis (numbered rail, peek card, mosaic seed) is category-interchangeable. DuoShot is the exception: the artifact leads.

**Deterministic scan**: `impeccable detect --json` on the five TSX files and style.css returned 0 findings (exit 0). Browser overlay on `/` found 6 hits; 5 treated as false positives (single-font world, editorial `.pf-label` kickers, `.portfolio-bg` overflow). True positive: `.pf-carousel-peek-label` « Suivant » at 8.8px.

**Visual overlays**: Injection succeeded on `/` and `/projets` (live-server :8401). `/projets/duoshot` and `/projets/poselock` 500'd from a React 19.2.5 / 19.3.0 mismatch in the running `next dev` process.

#### Overall Impression

The hero knows who Dylan is. The first “Preuves.” slide does not: Campbell is a gray mosaic. DuoShot proves the site can show real work. PoseLock / Pas envoyé as featured iOS apps are a product decision already locked; the visual hole is the missing stills, not the lineup.

#### What's Working

- Nominative hero, terracotta Accueil pill, Geist, 980px.
- DuoShot case study: preview, problem / solution / results, live URL.
- FAQ / about still sell TypeScript while naming shipped Swift apps.

#### Priority Issues

- **[P1] PixelPlaceholder on Campbell, Operis, PoseLock, Pas envoyé** — recruiter sees a grid, not the product. Fix: real stills when they exist; honest captioned empty state until then. Suggested: `/impeccable bolder`
- **[P1] Fixed nav vs carousel** — titles and media pass under the pill, worse on ~390px with a giant `01`. Suggested: `/impeccable layout`
- **[P1] `--pf-ink-faint` contrast** — 2.0–2.7:1 on dim hero/contact and inactive chips. Suggested: `/impeccable colorize`
- **[P1] Carousel ARIA** — `tablist` without tabpanels; slide `Link` is `display:contents`. Suggested: `/impeccable harden`
- **[P1] Incomplete `prefers-reduced-motion`** — hover translate/filter and smooth scroll remain. Suggested: `/impeccable animate`
- **[P2] Duplicate SSR project list under the rail** — 12 targets for 6 projects. Suggested: `/impeccable distill`
- **[P2] Peek label 8.8px and 40×40 arrows** — Suggested: `/impeccable typeset` / `/impeccable adapt`

#### Persona Red Flags

**Recruiter**: first proof slide is a mosaic; Projets only in the footer.
**First-timer (mobile)**: seven chrome controls, giant index, Campbell title clipped.
**Hiring manager**: hero is Angular/NestJS; chips 05–06 are SwiftUI — lineup is intentional; empty iOS media is not.

#### Minor Observations

- Stack chips `aria-hidden`.
- Theme toggle icon-only (labelled).
- MakeItGueznet truncated in peek.
- Case studies: h1 only, section labels not headings.

#### Questions to Consider

- If Campbell is the hiring proof, why is the first pixel of “Preuves.” not a Campbell UI?
- Is the SSR row a no-JS net, or a leftover left visible?
