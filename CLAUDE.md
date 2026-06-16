# CLAUDE.md

Guidance for AI assistants (and humans) working in this repository.

## Project Overview

**Vaughn Price Limited** marketing website — a single-page, content-driven
marketing site for a digital/systems consultancy. It is a statically-rendered
Next.js App Router site with no backend, database, or authentication. The home
page is a stack of section components; a handful of additional routes
(legal pages and dynamically-generated "build type" / "system layer" detail
pages) round out the site.

The visual language is a dark, "systems-engineering" aesthetic: deep navy
backgrounds, cyan/violet accents, glass panels, subtle grain, scroll-reveal
animations, and a custom cursor dot.

## Tech Stack

- **Framework:** Next.js `16.0.7` (App Router, Turbopack)
- **UI:** React `19.2.0` / React DOM `19.2.0`
- **Language:** TypeScript `^5` (strict mode)
- **Styling:** Tailwind CSS `^3.4` + a large set of custom CSS variables and
  component classes in `src/app/globals.css`
- **Linting:** ESLint `^9` via `eslint-config-next` (flat config)
- **Fonts:** `next/font/google` — IBM Plex Sans (body) + Space Grotesk (display)
- **Deployment target:** Vercel (per `.gitignore` / README)

No test framework is configured. There is no API layer, server actions, or
runtime data fetching — all content is hard-coded in components and data files.

## Commands

```bash
npm run dev     # Start the dev server (Turbopack) at http://localhost:3000
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

There is no test or typecheck script. To typecheck manually, run
`npx tsc --noEmit`. Always run `npm run lint` before committing.

## Project Structure

```
src/app/                      # Next.js App Router root
├── layout.tsx                # Root layout: fonts, global <Metadata>, skip-link, grain overlay
├── page.tsx                  # Home page — composes the section components + JSON-LD
├── globals.css               # Design tokens (CSS vars) + custom component/utility classes
├── sitemap.ts                # Generates sitemap.xml (includes all footer pages)
├── robots.ts                 # Generates robots.txt
├── icon.png / favicon.ico    # App icons
├── components/               # All UI components (see below)
├── lib/
│   └── footerLinks.ts        # Source of truth for build-type & system-layer page content
├── build-types/[slug]/       # Dynamic detail pages, data from buildTypePages
├── system-layers/[slug]/     # Dynamic detail pages, data from systemLayerPages
├── privacy/                  # Static legal page
└── terms/                    # Static legal page

public/                       # Static assets — logos, OG images, SVGs
└── icons/                    # Technology-stack logos (referenced by TechnologyStack.tsx)
```

### Components (`src/app/components/`)

Home-page sections, composed in order by `page.tsx`:

- `Navigation.tsx` — sticky nav (**client component**, scroll state + mobile menu)
- `Hero.tsx` — hero with layered system cards
- `Services.tsx`, `Stats.tsx`, `FeaturedWork.tsx`, `Process.tsx`,
  `TechnologyStack.tsx`, `FinalCTA.tsx` — content sections
- `Footer.tsx` — footer with links driven by `lib/footerLinks.ts`
- `Cursor.tsx` — custom cursor dot (**client component**)

Shared / reused:

- `Reveal.tsx` — **client component** wrapper that fades + slides children in via
  `IntersectionObserver`; respects `prefers-reduced-motion`. Accepts `delay`
  (seconds) for staggering. Use this for scroll-reveal animations.
- `BrandMark.tsx` — logo image
- `FooterPageTemplate.tsx` — shared layout for the dynamic build-type/system-layer pages

## Key Conventions

### Server vs. Client Components

Default to **server components** (no directive). Only add `'use client';` when a
component needs browser APIs, state, or effects. Currently only `Navigation`,
`Cursor`, and `Reveal` are client components. Keep interactivity isolated to
small client components rather than making whole sections client-side.

### Styling

- **Design tokens live in `globals.css`** as CSS custom properties under
  `:root` (colors like `--ink`, `--cyan`, `--bg`; radii `--radius-*`; durations
  `--dur-*`; easings `--ease-*`). Reference them with Tailwind's arbitrary-value
  syntax, e.g. `text-[var(--ink-soft)]`, `rounded-[var(--radius-xl)]`,
  `border-[var(--line)]`.
- **Reusable component classes** are also defined in `globals.css`. Prefer these
  over re-inventing styles: `container-grid` (page width container),
  `section-gap` / `section-gap-lg` (vertical section spacing), `eyebrow`
  (small uppercase label), `display-title`, `panel`, `system-card`,
  `system-card-interactive`, `btn-primary`, `btn-ghost`, `reveal`, `hero-radial`,
  `neon-outline`, `scanline`.
- `tailwind.config.js` defines extra brand tokens (`vp-navy`, `vp-cyan`, custom
  spacing, `maxWidth.container`, display font sizes). Note these `vp-*` Tailwind
  colors and the `globals.css` CSS variables are two parallel palettes — most
  components use the CSS-variable palette via arbitrary values.
- The site is **dark-mode only** (`color-scheme: dark`).
- Always respect `prefers-reduced-motion` for any new animation (see `Reveal`
  and the media query at the bottom of `globals.css`).

### Content / Data

- The dynamic detail pages are driven entirely by **`src/app/lib/footerLinks.ts`**.
  It exports `buildTypePages`, `systemLayerPages`, and `allFooterPages`, each an
  array of `FooterPage` objects (`slug`, `label`, `title`, `category`, `summary`,
  `sections[]`). To add/edit a detail page, edit this file — the routes,
  `generateStaticParams`, footer links, and sitemap all derive from it.
- The two dynamic routes (`build-types/[slug]`, `system-layers/[slug]`) are
  near-identical: they look up the slug, call `notFound()` if missing, and render
  `FooterPageTemplate`. Keep them in sync when changing patterns.
- `params` is a `Promise` in these routes (Next.js 16) — `await params` before use.
- Technology-stack logos are hard-coded in `TechnologyStack.tsx` and live in
  `public/icons/`. Add the SVG to `public/icons/` and reference it as `/icons/x.svg`.

### SEO & Metadata

- Global metadata + Open Graph / Twitter cards are set in `layout.tsx`
  (`metadataBase` is `https://vaughnprice.com`).
- Per-page metadata is exported via `metadata` (static pages) or
  `generateMetadata` (dynamic pages).
- Organization JSON-LD structured data is injected in `page.tsx`.
- `sitemap.ts` and `robots.ts` generate `sitemap.xml` / `robots.txt`. When adding
  a new route, add it to `sitemap.ts` (footer pages are already auto-included).

### Images

- Use `next/image`. Remote image hosts must be whitelisted in
  `next.config.ts` under `images.remotePatterns` (currently jsdelivr, GitHub
  avatars, datadoghq, unsplash).

### Imports

- Path alias `@/*` maps to `./src/*` (see `tsconfig.json`), though most current
  components use relative imports.

## Git & Workflow

- Default/integration branch: `main`.
- Match the existing code style: small, focused components; data-driven
  rendering via `.map()`; TypeScript types co-located with the data they
  describe; semantic HTML with accessibility attributes (`aria-*`, labelled
  headings, skip-to-content link).
- Run `npm run lint` (and ideally `npx tsc --noEmit`) before committing.
