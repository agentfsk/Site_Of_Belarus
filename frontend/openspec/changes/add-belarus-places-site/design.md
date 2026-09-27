# Design

## Context

The repository holds no application code. `frontend/` is the OpenSpec root and contains only `openspec/`, `.opencode/`, and `.github/`; `backend/` is an empty directory the user confirmed is not needed. Nothing has been scaffolded, and the repository is not yet under version control.

Environment facts established while planning, which shape the approach:

- `git` 2.34.1 is present, but the GitHub CLI is not. SSH authentication to GitHub as `agentfsk` succeeds, so all GitHub interaction goes through plain `git` over SSH.
- `agentfsk/Site_Of_Belarus` exists, is private, and is empty (zero refs). No `gh` is needed to push to it.
- The OpenSpec root is `frontend/`, but the Git root will be `Site_Of_Belarus/`. A root-level `.gitignore` therefore has to cover build output produced one level down.
- The user wants **simplified English**, because the project is a school English assignment. The writing level is a content constraint, not a code concern, but it is the reason a "one photo, three sentences" shape was chosen at all.

An image-sourcing investigation was completed during planning, and its result is a hard constraint:

- Unsplash is unusable. `unsplash.com` search pages return `401`, and the legacy `source.unsplash.com` random endpoint returns `503`. Real `images.unsplash.com` CDN IDs for Belarusian landmarks could not be obtained from search results, and inventing IDs would produce broken images.
- Wikimedia Commons works. The MediaWiki API returns real, correctly-titled files for all 8 landmarks, and `upload.wikimedia.org` serves them as `image/jpeg`. All 8 selected URLs were fetched and confirmed `200` with real payloads (203 KB to 1.19 MB), not error pages.

## Goals / Non-Goals

**Goals:**

- One page, no routing, no runtime data fetching.
- The "exactly three sentences" and "exactly one photo" requirements are enforced by the type system and the data shape, not by reviewer discipline.
- Zero runtime dependencies beyond the photographs themselves: no API calls, no web fonts, no analytics.
- A photo host outage degrades gracefully instead of breaking the page.
- A reviewer can rebuild and host the site with `npm ci && npm run build`.

**Non-Goals:**

- Search, filtering, sorting, or detail pages. One page, eight entries, decided with the user.
- Dark mode. The user chose a light theme explicitly.
- Bundling images into the repository. Deliberate; see Decisions.
- A backend, an API, or any persistence. `backend/` is not created.
- Deployment automation. The build output is produced and hosting is left as a later step.
- Testing infrastructure. This is a school project with a handful of assertions; see the decision on verification below.

## Decisions

### Scaffolding: Vite + React + TypeScript

Chosen by the user, and appropriate here. It gives typed data and typed components, which is what makes the sentence-count guarantee cheap, and `vite build` emits a plain static directory with no server runtime.

Alternatives considered: Next.js with `output: 'export'` (heavier, and its value is SEO and routing, neither of which a single page of eight cards needs); Astro (excellent fit for a content-only site, but adds a second templating model over React for no gain at this size); plain HTML/CSS/JS (zero build, but no type checking, and the data-shape guarantee below would be unenforceable).

### Descriptions typed as a 3-tuple, not a string

The description is stored as a fixed three-element tuple, `[string, string, string]`, and rendered as three separate sentences.

This makes the spec's "exactly three sentences" requirement a compile-time guarantee: a two- or four-sentence entry does not typecheck, and there is no string-splitting on periods, which would miscount decimals and abbreviations.

Alternatives considered: a single prose string plus a test that counts sentence terminators (fragile, and adds test infrastructure); free-form `string[]` (allows two or four sentences, so it enforces nothing).

### Images referenced externally, not bundled

Photographs are referenced by `upload.wikimedia.org` URL and requested by the browser at runtime.

This was chosen because the licensing is permissive, the subjects are genuinely correct (these are photographs of Mir-class real Belarusian landmarks, not generic European scenery), and the eight URLs are already verified. It also keeps image binaries out of the repository, which matters for a repository a student pushes from a laptop.

Alternatives considered: downloading the files into `public/images/` (dodges the runtime network dependency, but requires eight manual downloads before the page is complete, and adds several megabytes of binaries to a teaching repository); Unsplash (ruled out above — the URLs cannot be obtained reliably).

Trade-off accepted: the site needs a network to show photographs. Mitigated by the placeholder behaviour below, and noted in the proposal as a known external dependency.

### Attribution data collected at authoring time, not runtime

Each entry stores the photograph's author, licence short name, and source page URL, harvested once from the Commons API's `extmetadata` and hardcoded alongside the entry.

The licence obligations are real (mostly CC BY-SA), and rendering "Photo: X / Wikimedia Commons (CC BY-SA 3.0)" with a link satisfies them. Fetching that metadata from the browser at runtime would be an extra external request and would break the "no API calls at runtime" goal for data that never changes.

### Image failure falls back to a titled placeholder

Each image declares a fixed `aspect-ratio` and a `loading="lazy"` hint, and handles load failure by replacing itself with a placeholder bearing the landmark's name.

`aspect-ratio` reserves the box before the bytes arrive, which prevents layout shift as images load. The failure handler satisfies the "readable without photographs" requirement: the name, city, description, and attribution are never part of the image, so nothing else is lost.

Alternatives considered: a CSS gradient background as a permanent backdrop under every image (cheap, but it looks unfinished on a healthy load and hides the problem rather than handling it); leaving broken images native (fails the requirement).

### Grid uses explicit breakpoints, not `auto-fit`

The card grid is `repeat(3, 1fr)` and steps down to 2 columns and then 1 via media queries.

`auto-fit` with `minmax()` was rejected: it is less CSS and more fluid, but it yields a column count that depends on container width and gaps, so it cannot guarantee exactly 3 / 2 / 1 as the spec states. Since the column count is a testable requirement here, determinism wins over fluidity.

### Styling: CSS custom properties, no framework

A small set of custom properties (light background, dark text, one accent, spacing, radius) plus a system font stack. Headings use a serif from the system stack; body uses the system sans-serif.

No CSS framework and no component library: the page is a header, a grid, and a footer, and a framework would add a large dependency for a few dozen declarations. No web fonts either — a Google Fonts link would add a second runtime external dependency and would break the offline-readability goal, and the system stack is perfectly good for this content.

### Git root at `Site_Of_Belarus/`, push over SSH

Git is initialised at the parent of the OpenSpec root, matching the repository name and the existing `frontend/` layout, on branch `main`, with a root `.gitignore` covering `node_modules/` and `dist/`. The remote is `git@github.com:agentfsk/Site_Of_Belarus.git`.

Chosen by the user over initialising inside `frontend/`. The empty `backend/` directory is not a problem: Git does not track empty directories, so it will not appear in the commit.

Note that the OpenSpec root being `frontend/` while the Git root is one level up is intentional and not corrected here; `.gitignore` rules written at the repository root apply recursively, so build output is still ignored.

### Verification: a build-time assertion, not a test framework

The data module asserts at module load that every entry has exactly three description sentences, a non-empty photo URL, and a non-empty licence. `npm run lint` and `npm run build` must both pass, and the dev server is used for a visual check at desktop, tablet, and phone widths.

This is proportionate to the deliverable. A test framework would be more machinery than the project warrants; the failure modes that matter here (a malformed entry, a missing credit, a broken build) are all caught by types, the assertion, and the build.

## Risks / Trade-offs

- **Photographs fail to load on a network-blocked or school-filtered network** → The page still renders every name, city, description, and credit; each photo degrades to a titled placeholder. The eight URLs were verified to return `200` with real image payloads, so this is a degraded view rather than a broken site.
- **`upload.wikimedia.org` rate-limits or changes URL shapes** → Links point at stable `File:` pages in the footer and in each credit, so a reader can always reach the source even if the thumbnail URL stops resolving. No runtime API call is made, so rate limiting cannot break the page itself.
- **Some of the chosen Commons photographs are archival (2004-era Grodno castle shots)** → They are the strongest verified available for those two subjects, and they are genuine photographs of the correct buildings. Worth flagging in review rather than silently swapping in a weaker image.
- **The "exactly three sentences" rule is enforced by a tuple, so a sentence with a full stop inside it (an abbreviation or a decimal) still counts as one slot** → The rule is about structure, and the content is written to avoid mid-sentence terminators. The authoring check is a read-through, not a parser.
- **A photo whose aspect ratio differs from the reserved box will be letterboxed or cropped** → `object-fit: cover` with a fixed card image height keeps the grid uniform; the photographs selected are all landscape.
- **`npm run build` output is unversioned, so a broken build cannot be deployed** → Nothing is deployed by this change. Rolling back means reverting the commit, and the site is static so there is no state to unwind.

## Migration Plan

Not applicable in the migration sense: there is no existing system, no data to migrate, and no live deployment to move traffic from.

Delivery order is: scaffold, add data, add components and styles, verify locally, then commit and push. The commit is the rollback point; because the repository is empty, revert or force-push back to no commits is always available.

## Open Questions

- **Where the built site will be hosted.** GitHub Pages, a static host, or the student's own machine for a class presentation. This affects only deployment steps, not the specs, the approach, or the task breakdown.
- **Whether an automated deploy workflow is wanted later.** `.github/` currently holds OpenSpec skill definitions and no workflows. A Pages deploy job would be a follow-up change if the hosting answer is GitHub Pages.
