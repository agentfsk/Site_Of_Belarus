# Proposal

## Why

A school English project needs a website that presents notable places to visit in Belarus. The audience is a teacher evaluating the student's English, so the writing must stay in simple English, and every landmark must be described with exactly one photo and exactly three sentences. There is no backend and no user-generated content, so the site should be a single static page that builds to plain files and can be hosted anywhere.

The project currently contains no application code at all, so this change also establishes the frontend toolchain for the repository.

## What Changes

- Add a Vite + React + TypeScript single-page application under `frontend/`.
- Present 8 Belarusian landmarks as cards on one page: Nesvizh Castle, Lida Castle, Old Castle (Grodno), New Castle (Grodno), Brest Fortress, National Library of Belarus, Kamenets Tower, and Belovezhskaya Pushcha.
- Each landmark shows exactly one photo and exactly three sentences of simple English, plus its city and the photo's author and licence.
- Use a light visual theme with a responsive card grid (3 / 2 / 1 columns).
- Load photos from Wikimedia Commons as external URLs rather than bundling image files, and fall back to a titled placeholder if an image fails to load, so the page stays readable without a network.
- Add attribution for every photo, since the Commons licences require it.
- Build to a static `dist/` directory; no server, no API, no database.

## Capabilities

### New Capabilities

- `places-showcase`: Rendering a single-page, read-only showcase of Belarusian landmarks, where each landmark entry carries one photo, a three-sentence simple-English description, and its photo attribution.

### Modified Capabilities

None. The repository has no existing specs.

## Impact

- **New code**: all application source under `frontend/src/`, plus Vite/React/TypeScript configuration and `frontend/package.json`.
- **New repository infrastructure**: git initialised at the `Site_Of_Belarus/` directory root, a root `.gitignore`, and a first commit pushed to the existing private repository `agentfsk/Site_Of_Belarus` over SSH. The empty `backend/` directory is not required and stays out of version control.
- **Dependencies**: Vite, React, React DOM, TypeScript, and the ESLint tooling the Vite template ships with. No UI component library, no CSS framework, no router, and no HTTP client.
- **External dependency**: images are fetched from `upload.wikimedia.org` at runtime. The site renders and remains readable if that host is unreachable, but photographs will not appear.
- **No API or data schema changes** exist yet, since there is no backend.
