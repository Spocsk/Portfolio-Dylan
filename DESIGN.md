---
name: Portfolio Bento
description: A flat bento grid of tiles — one brand blue, one yellow highlight, near-black frames and plenty of air.
colors:
  canvas: "#ededea"
  surface: "#ffffff"
  surface-sunken: "#ededea"
  ink: "#0e0e0e"
  ink-soft: "#3d3d3a"
  muted: "#5e5e59"
  line: "#e2e2de"
  accent: "#2d3bff"
  on-accent: "#ffffff"
  accent-text: "#2d3bff"
  highlight: "#ffd43b"
  on-highlight: "#0e0e0e"
  inverse: "#0e0e0e"
  on-inverse: "#ffffff"
  on-inverse-soft: "#c9c9c4"
  inverse-raised: "#232323"
  inverse-line: "#4a4a47"
  success: "#1e8e4e"
  verdict-good: "#d7f5e1"
  verdict-warn: "#fff1c2"
  verdict-bad: "#ffe0d6"
  focus: "#2d3bff"
colors-dark:
  canvas: "#111112"
  surface: "#1b1b1d"
  surface-sunken: "#111112"
  ink: "#f2f2ee"
  ink-soft: "#c4c4be"
  muted: "#9a9a94"
  line: "#2c2c2e"
  accent: "#4f5bff"
  accent-text: "#8c95ff"
  inverse: "#f2f2ee"
  on-inverse: "#0e0e0e"
  on-inverse-soft: "#3d3d3a"
  inverse-raised: "#dcdcd6"
  inverse-line: "#b5b5af"
  success: "#3dbe74"
  focus: "#8c95ff"
typography:
  display:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(44px, 6vw, 88px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  stat:
    fontFamily: "Space Grotesk"
    fontSize: "80px"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  heading-xl:
    fontFamily: "Space Grotesk"
    fontSize: "clamp(40px, 5vw, 64px)"
    fontWeight: 700
    letterSpacing: "-0.03em"
  heading-section:
    fontFamily: "Space Grotesk"
    fontSize: "clamp(36px, 4.5vw, 56px)"
    fontWeight: 700
    letterSpacing: "-0.03em"
  heading-tile:
    fontFamily: "Space Grotesk"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.2
  body-l:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "12px"
  md: "18px"
  lg: "28px"
  full: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "56px"
  "8": "72px"
layout:
  container-max: "1280px"
  tile-basis-wide: "560px"
  tile-basis: "300px"
  measure: "520px"
components:
  tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.6}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    height: "52px"
  button-inverse:
    backgroundColor: "{colors.on-inverse}"
    textColor: "{colors.inverse}"
    rounded: "{rounded.full}"
    height: "52px"
  nav-pill:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.1}"
  chip-skill:
    backgroundColor: "{colors.surface-sunken}"
    rounded: "{rounded.full}"
    padding: "10px 16px"
---

# Design System: Portfolio Bento

The reference is the "Portfolio — Bento" page of the design canvas (Accueil, Expériences, Projets, Projet DMT, À propos, Contact, CV, plus their dark and 390px variants). The site follows it closely; any departure should be deliberate and written down here.

## Overview

**North star: a flat bento grid.** Every section is a wrapping row of tiles. Tiles stand out from the canvas by colour alone — no shadows, no borders. Two families, one blue, one yellow, a near-black frame at the top and bottom of the story, and a lot of air.

**Key characteristics**

- Wrapping rows of flat tiles separated by 16px, inside a 1280px container.
- Two tile widths only: wide (basis 560px, flex 2) and standard (basis 300px, flex 1).
- Blue is the brand, yellow is the single highlight of a screen, near-black frames the page.
- Space Grotesk for headings, numbers and the mark; Inter for text.
- Identical structure in light and dark themes.

## Colors

Colours are assigned by role, never by mood.

- **Canvas / Surface** carry about 80% of the page. Canvas is the page field, Surface is the default tile.
- **Accent** (`#2D3BFF`) is the brand: the `DC` mark, the key-figure tile, the "×" in the home title. Never a button background, never a gradient.
- **Highlight** (yellow) appears on one tile per screen at most.
- **Inverse** (near-black) frames the page: the featured project, the closing contact block, résumé sidebar.
- **Verdicts** (`verdict-good`, `-warn`, `-bad`) exist only for the Cartable chips.
- **Success** green is reserved for the status dot of a `status` chip.

### Dark theme

Same structure. Canvas and Surface go deep grey, Inverse turns light so it stays the most contrasted tile, and the accent lightens (`accent-text`) whenever it is used as a text colour.

### Theme selection

Three modes, chosen in the footer switch (`Clair` / `Sombre` / `Système`):

- **Système** (default): no `data-theme` on `<html>`; dark tokens apply through `prefers-color-scheme: dark`.
- **Clair / Sombre**: `data-theme="light" | "dark"` on `<html>`, saved in `localStorage` under `theme`.
- An inline script in `<head>` (`lib/theme.ts`) applies the saved choice before first paint, so there is no flash.

## Typography

- **Space Grotesk** 400/500/700: titles, numbers, logo. Tight tracking (−0.02 to −0.04em), line-height 0.9 to 1.1.
- **Inter** 400/500/600: running text at 16–18px, line-height 1.55–1.6, measure capped at 520px.
- Large titles are fluid: display `clamp(44px, 6vw, 88px)`, section `clamp(36px, 4.5vw, 56px)`, home section `clamp(40px, 5vw, 64px)`. Stat values are a fixed 80px.
- Labels are 14px Inter 600 in `muted` (inherit the tile colour on accent and highlight tiles).
- Both families load through `next/font/google` (`--font-space-grotesk`, `--font-inter`).

## Layout

- Container 1280px max, side gutter `clamp(16px, 4vw, 40px)`.
- 72px between sections, 16px between tiles, 24px between media and text, 8–12px between label, title and text.
- Tiles share the row width and drop to one column on phones on their own — no breakpoints needed for the grid.

### Page structure

1. Header: `Mark` left, `NavPill` right (Expériences, Projets, À propos, Contact as the dark CTA).
2. Top: a wide Surface tile (label or location chip, display title, lead) beside a column of two stat tiles (accent then highlight).
3. Content rows of tiles; at most one yellow tile per row of projects.
4. Closing contact block: full-width Inverse tile, large title, `inverse` and `inverse-ghost` buttons.
5. Footer: "© 2026 Dylan Couto de Oliveira" and the theme switch.

## Elevation & Depth

None. Tiles are flat: radius 28px, padding 32px, no shadow, no border. Media inside a tile uses radius 18px. The only motion is a 2px lift on clickable tiles, disabled under `prefers-reduced-motion`.

## Components

All live in `components/bento.tsx`; styles in `style.css` read only the tokens.

- **Tile**: `surface` (default), `ink`, `accent`, `highlight`. With `href` it becomes a link and lifts on hover.
- **StatTile**: label, 80px value, note; accent or highlight.
- **ProjectTile**: optional media (4:3, or 16:8 on the featured tile), kicker, title, one-sentence description, optional children (URL, chips). `featured` makes it Inverse and wide with a round arrow.
- **Button**: `primary`, `secondary`, `inverse`, `inverse-ghost`; pill, 52px tall.
- **NavPill**: pill of links on Surface; Contact is the filled CTA. At 560px and below it spans the full width without wrapping.
- **Chip**: `skill`, `status` (with green dot), `good` / `warn` / `bad`.
- **Timeline**: ordered list on a Surface tile, years in `accent-text`, hairline separators.
- **Mark**: blue 40px square with "DC", then "Dylan.". No logo file.
- **ContactBlock**: the closing Inverse tile.
- **Theme switch**: pill like the NavPill, three buttons with `aria-pressed`; the selected one is filled with `ink`.

## Iconography & Brand

- Stroke icons, 2px, sharp corners, in `currentColor` (the ↗ of the featured project). No filled icons, no emoji.
- Favicon: the `DC` mark on a `#2D3BFF` rounded square, drawn from Space Grotesk 700 outlines (`favicon.svg`, 16/32 PNG, ICO, 180px Apple touch icon).
- Project captures are real screenshots, cropped to their tile ratio, with an `alt` describing the screen.

## Do's and Don'ts

### Do

- Build every section as a wrapping row of wide and standard tiles.
- Keep one yellow tile per screen and one blue key-figure tile at the top.
- Frame the page with Inverse tiles: featured project near the top, contact block at the end.
- Check every new colour pairing at 4.5:1 in both themes.

### Don't

- Don't add shadows, borders, gradients or a second accent colour.
- Don't use accent as a button background.
- Don't add skill gauges, stars or mastery percentages.
- Don't ship bracketed placeholders; leave the tile out until the content exists.
- Don't depart from the canvas without noting it here.
