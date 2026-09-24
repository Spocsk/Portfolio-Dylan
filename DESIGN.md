---
name: Dylan CDO
description: An editorial operations portfolio where code, teaching, and automation become visible systems.
colors:
  mineral-ivory: "#f1efe8"
  strong-paper: "#faf9f4"
  graphite-ink: "#151719"
  muted-ink: "#656862"
  hairline: "rgba(21, 23, 25, 0.16)"
  graphite: "#181a1e"
  graphite-raised: "#202329"
  graphite-deep: "#101215"
  on-dark: "#f5f4ee"
  action-cobalt: "#224dff"
  action-cobalt-dark: "#183ad0"
  completion-green: "#58e19d"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(4rem, 6.7vw, 6rem)"
    fontWeight: 570
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5vw, 5.4rem)"
    fontWeight: 540
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 570
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(1.02rem, 1.35vw, 1.27rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  action:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 640
    lineHeight: 1
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.62rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.09em"
rounded:
  action: "4px"
  control: "6px"
  message: "7px"
  board: "9px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "7px"
  sm: "10px"
  md: "14px"
  lg: "20px"
  xl: "32px"
  section-compact: "clamp(45px, 6vw, 84px)"
  section: "clamp(80px, 11vw, 165px)"
components:
  button-primary:
    backgroundColor: "{colors.action-cobalt}"
    textColor: "#ffffff"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "43px"
  button-primary-hover:
    backgroundColor: "{colors.action-cobalt-dark}"
    textColor: "#ffffff"
  button-dark:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "#ffffff"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0 17px"
    height: "43px"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.action}"
    rounded: "0"
    padding: "9px 0"
    height: "44px"
  chip-technical:
    backgroundColor: "transparent"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
  operations-board:
    backgroundColor: "{colors.graphite-deep}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.board}"
---

# Design System: Dylan CDO

## Overview

**Creative North Star: "The Living Operations Dossier"**

This system turns a technical portfolio into an editorial operations document: calm mineral paper carries the argument, while graphite work surfaces reveal systems in motion. The composition feels authored and precise rather than assembled from interchangeable SaaS cards.

Every expressive decision serves credibility. Cobalt marks the one decisive action or active state; green confirms completion; structured demonstrations expose how information moves from trigger to treatment, human validation, and result. Motion clarifies that progression without becoming the proof itself.

**Key Characteristics:**

- Mineral-ivory editorial pages interrupted by focused graphite operating surfaces.
- Uneven grids, hairline rules, and indexed sequences instead of generic card collections.
- One cobalt action accent, with green reserved for completed system state.
- Geist for the narrative voice and Geist Mono for labels, records, status, and system data.
- Stable four-stage workflow topology whose meaning survives reduced motion.

## Colors

The palette behaves like an annotated technical dossier: warm paper for reading, graphite for operations, cobalt for agency, and green for verified completion.

### Primary

- **Action Cobalt:** The only action color. Use it for primary calls to action, selected navigation, active workflow rows, focus rings, and decisive phrases.
- **Action Cobalt Dark:** The pressed or hover continuation of Action Cobalt; it is not a second accent.

### Secondary

- **Completion Green:** Reserved for successful validation, completed workflow steps, live-ready status, and checked outcomes.

### Neutral

- **Mineral Ivory:** The default page field and reading surface.
- **Strong Paper:** A slightly cleaner paper layer for selected-work sections, compact overlays, and mobile navigation.
- **Graphite Ink:** Primary text on paper and the darkest paper-side action surface.
- **Muted Ink:** Supporting prose, section indices, and quiet metadata.
- **Hairline:** The structural divider for editorial sections and lists.
- **Graphite:** The main operational field for demonstrations and technical methods.
- **Graphite Raised:** A raised record or row within a graphite field.
- **Graphite Deep:** The deepest workflow stage and destination surface.
- **On Dark:** Primary text on graphite surfaces.

### Named Rules

**The One Action Color Rule.** Cobalt indicates action or active state; do not introduce a competing accent.

**The Completion Means Completion Rule.** Green appears only when the interface can honestly communicate live, ready, approved, checked, or completed state.

## Typography

**Display Font:** Geist (with Arial and sans-serif fallbacks)  
**Body Font:** Geist (with Arial and sans-serif fallbacks)  
**Label/Mono Font:** Geist Mono (with monospace fallback)

**Character:** Geist keeps the portfolio direct and contemporary while its low, tightly tracked display setting gives large statements editorial authority. Geist Mono turns process labels and records into operational evidence without making the entire experience feel like a developer console.

### Hierarchy

- **Display:** Tight, compact page and hero statements; preserve the short line lengths and allow responsive clamping rather than shrinking into a conventional heading scale.
- **Headline:** Major section arguments and workflow chapter titles; use the same tight tracking with slightly more breathing room than Display.
- **Title:** Topic and record headings that must remain quickly scannable inside structured sequences.
- **Body:** Explanatory copy with comfortable leading; keep long reading lines near 65–75 characters.
- **Action:** Compact, firm labels for buttons and text actions.
- **Label:** Uppercase mono metadata for indices, states, columns, timestamps, and disclosure labels; it supports a readable heading and never replaces one.

### Named Rules

**The Two Voices Rule.** Geist explains and persuades; Geist Mono identifies, indexes, and reports system state.

## Layout

The page field caps at 1440px and relies on asymmetry rather than equal card grids. Hero surfaces pair uneven columns, major section headings use a one-to-two label/content relationship, and service or workflow sections shift between approximately one-third/two-thirds and balanced halves according to the density of the material. Hairline rules create continuity between sequences.

Desktop navigation remains sticky at 72px. At 1050px the primary navigation collapses and large two-column areas begin stacking; at 760px the header becomes 64px, offers and service heroes become single-column, indexed content reduces its leading rail, and the workflow stage changes from a sticky scene to three inline replayable demonstrations. Major vertical rhythm uses the Section spacing token, while denser records use the compact scale.

**The Stable Topology Rule.** Workflow illustrations always preserve four semantic stages—message or trigger, structured data, human validation, and planned action—even when the layout changes across viewports.

## Elevation & Depth

Paper surfaces are flat and separated by hairlines. Depth is concentrated inside operational demonstrations: graphite layers step darker or lighter to clarify source, processing, and destination, while broad ambient shadows lift only the complete board or media frame. The result reads as one composed instrument, not a stack of floating cards.

### Shadow Vocabulary

- **Operations Float:** A deep, diffuse shadow beneath the complete operations board.
- **Workflow Float:** A quieter diffuse shadow beneath desktop workflow and demo canvases.
- **Media Float:** A restrained paper-side shadow reserved for project imagery.
- **Active Inset:** A two-pixel cobalt inset on the active or final workflow row.

### Named Rules

**The Flat Paper, Lifted Instrument Rule.** Keep editorial content flat; reserve elevation for the visual apparatus that demonstrates work.

## Shapes

The default language is rectilinear and editorial. Large sections, lists, split layouts, and project frames stay square; compact controls use gently rounded corners, operations boards use a restrained larger radius, conversational bubbles use directional corners, and pills or circles are limited to tags, indicators, replay controls, and carousel navigation. Borders are hairline and structural, never decorative frames around arbitrary content.

## Components

Components feel compact, decisive, and instrument-like. Their states use color, rules, and small transforms rather than decorative effects.

### Buttons

- **Shape:** Compact controls use the Control radius and a minimum touch height of 43–44px.
- **Primary:** White type on Action Cobalt with measured horizontal padding; hover darkens the cobalt and lifts by two pixels.
- **Hover / Focus:** Hover changes only background and vertical position. Keyboard focus uses a visible cobalt outline with offset.
- **Dark:** Header booking actions use Graphite Ink so cobalt remains available for the primary page decision.
- **Text:** Secondary actions remain transparent with a single underline and no container.

### Chips

- **Style:** Technical tags are transparent pills with a Hairline border and mono label type.
- **State:** Selected carousel controls replace their muted rail with Action Cobalt instead of filling the whole chip.

### Cards / Containers

- **Corner Style:** Editorial containers stay square; operational boards use the Board radius and compact records use the Control or Message radius.
- **Background:** Paper containers use Mineral Ivory or Strong Paper. Operational containers use the Graphite family.
- **Shadow Strategy:** Only complete instruments and project media receive ambient lift.
- **Border:** Hairlines partition real records, rules, messages, and process steps.
- **Internal Padding:** Compact records use the medium-to-large spacing steps; major sections use the responsive Section token.

### Navigation

The sticky paper header uses the wordmark at left, compact route labels at center, and language plus booking actions at right. The active route receives a short cobalt underline. On mobile, a bordered menu control opens a Strong Paper list of indexed destinations followed by a full-width cobalt booking action.

### Operations Board

The signature board is a labelled, fictional mini-interface with a stable four-stage rail, message or source content, a human-control step, a prepared result, and a replay control. Its columns remain structurally stable while data, active state, and destination change. Every demonstration must remain understandable when static.

Motion uses GSAP for opacity and transform only, generally with `power2.out` or `power3.out` easing and short staggered sequences. Route transitions and component reveals move by 8–24px, and scale changes stay subtle. Inline `prefers-reduced-motion` checks prevent timelines from starting; CSS simultaneously reveals each workflow chapter, removes sticky staging, and disables nonessential transitions.

## Do's and Don'ts

### Do:

- **Do** use cobalt sparingly for the next meaningful action, current route, or active workflow state.
- **Do** reserve green for a state that is demonstrably complete, approved, checked, or ready.
- **Do** preserve the four-stage workflow topology across desktop, mobile, animation, and reduced-motion layouts.
- **Do** label scenarios as demonstrations with fictional data and keep human validation visible where it matters.
- **Do** use uneven editorial grids, indexed rows, and hairline divisions to structure dense material.
- **Do** make every animated sequence fully legible as a static interface.

### Don't:

- **Don't** add a second action accent, gradients, or decorative color fields that dilute cobalt's role.
- **Don't** turn offers, claims, or sections into a uniform grid of generic rounded cards.
- **Don't** use green for decoration, hover, branding, or unfinished progress.
- **Don't** let mono labels replace readable headings or body copy.
- **Don't** animate layout properties when opacity and transforms can communicate the same change.
- **Don't** imply that fictional workflow data is a client case, testimonial, or measured result.
