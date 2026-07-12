# MyValue

**MyValue** is the production codebase for the ValuXpert marketing website — an interactive product-film experience built for property valuation companies, engineered to the premium enterprise design standard specified in the ValuXpert Website Design & Experience Specification (v2).

> **Branding note:** `MyValue` is the internal project/repository name only. All user-facing UI, copy, and branding in the running application is **ValuXpert**.

---

## Tech Stack

This project is built exclusively on:

- **React 18** + **Vite** + **TypeScript** (strict mode)
- **Tailwind CSS** — design tokens extracted from the approved design specification
- **GSAP** + **ScrollTrigger** — all scroll-tied choreography and micro-interactions
- **Lenis** — smooth-scroll root, synced to GSAP's ticker
- **CSS/SVG visuals** — the hero hologram, "chaos to control", and "day in the life" scenes are built with plain CSS animations/transitions, no 3D engine

No other frontend framework, animation library, or 3D engine is used anywhere in this codebase.

---

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
npm run lint        # lint the codebase
```

No environment variables are required for local development — see `.env.example` for optional future integrations.

---

## Project Structure

```
MyValue/
├── public/                  # static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── visuals/          # CSS/SVG hero + scroll-scrubbed scene visuals
│   │   ├── ui/               # Container, SectionHeading, Icon — shared primitives
│   │   ├── Nav.tsx
│   │   ├── ContactModal.tsx
│   │   └── InlineCTA.tsx
│   ├── data/
│   │   └── content.ts       # all site copy/content in one place
│   ├── hooks/                # useReducedMotion, useCountUp, useInView
│   ├── lib/                   # SmoothScrollProvider (Lenis), ContactModalContext
│   ├── sections/             # one component per IA section (Hero, BeforeAfterSimulator, …)
│   ├── styles/globals.css
│   ├── App.tsx               # composes every section in page order
│   └── main.tsx
├── index.html
├── tailwind.config.ts        # design tokens (colors, type scale, spacing) from the spec
├── vite.config.ts
└── tsconfig.json
```

---

## Sections Implemented

Hero · Trust Bar · Problem Section · Before/After Simulator (role-tabbed) · Day in the Life (scroll-scrubbed cinematic) · SOP Blueprint & Comparison Table · Role-Based Infrastructure + Interactive Pipeline Map (wired together) · Active Desk Sandbox (Field Engineer / Draft Manager / LCTO simulators) · Optimized Valuation Lifecycle · Feature Ecosystem · Unified HR Operations · Proof Metrics · Testimonials · Pricing · Final CTA · Footer · Contact Modal.

---

## Performance & Accessibility

- Scroll-scrubbed visuals (`src/components/visuals/`) are pure CSS/SVG — no canvas, no lazy-loaded 3D bundle.
- `prefers-reduced-motion` swaps every orbiting/scrubbed animation for an instant static state (see `useReducedMotion`).
- All data reveals (timelines, tables, pipeline nodes) have a fully readable static DOM; nothing depends on JavaScript animation to be legible.
- Semantic landmarks, `aria-label`/`aria-expanded`/`aria-selected` on interactive controls, and keyboard-dismissible modal (`Escape` key) are implemented throughout.

---

## Design System

Colors, typography, spacing, and elevation are implemented as Tailwind tokens in `tailwind.config.ts`, extracted from Propbinder's design system and hue-rotated to ValuXpert's green identity (see the approved design specification, §1–§2). Key tokens:

- `surface-light1/2`, `surface-dark1/2` — background roles
- `brand-400/500/600` — primary brand green
- `accent-action` / `accent-actionDark` — the single reserved CTA color
- `signal-negative` / `signal-positive` — before/after semantic pair, used only in comparison moments

---

© ValuXpert Enterprise Systems. Internal project codename: **MyValue**.
