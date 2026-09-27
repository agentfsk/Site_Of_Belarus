# Tasks

## 1. Repository Setup

- [x] 1.1 Initialise git at the repository root with `git init -b main` run in `Site_Of_Belarus/` (not in `frontend/`), and verify `git rev-parse --show-toplevel` prints `Site_Of_Belarus`
- [x] 1.2 Add a root `.gitignore` covering `node_modules/`, `dist/`, `dist-ssr/`, `*.local`, `.DS_Store`, and editor directories; verify with `git check-ignore -v frontend/node_modules frontend/dist` that both paths resolve to the root rule
- [x] 1.3 Add the remote with `git remote add origin git@github.com:agentfsk/Site_Of_Belarus.git` and verify `git ls-remote origin` exits 0 (empty output is expected and correct for a repository with no commits)
- [x] 1.4 Confirm git identity is configured and run `git config user.name` / `git config user.email`; verify both return `agentfsk` and the configured email, since the commit will be rejected without them

## 2. Application Scaffold

- [x] 2.1 Scaffold Vite with the React TypeScript template into the existing non-empty `frontend/` directory (`npm create vite@latest . -- --template react-ts`), and verify `frontend/package.json`, `frontend/index.html`, and `frontend/src/main.tsx` exist
- [x] 2.2 Install dependencies with `npm install` in `frontend/`, and verify `node_modules/` exists and `npm ls react` reports a single resolved React version
- [x] 2.3 Remove the template's demo assets and demo component files that the site does not use (`frontend/src/App.css`, `frontend/src/assets/react.svg`, and the sample `App.tsx` body), and verify `npm run build` still succeeds afterward

## 3. Photograph Attribution Metadata

- [x] 3.1 Query the Wikimedia Commons API with `action=query&prop=imageinfo&iiprop=url|size|extmetadata` for the 8 verified files below, requesting `iiurlwidth=1920`, and verify the response returns an entry for each of the 8 titles: `Belarus_Nesvizh_Castle_7259_2050.jpg`, `2024.07.17_LIDA_CASTLE_Lidski_zamak.jpg`, `005b 274 Гродно, Старый замок, 22-05-2004.jpg`, `005b 177 Гродно, Новый замок, 22-05-2004.jpg`, `Brest_Fortress_Barracks_Ruin_2023-02-18_2821.jpg`, `5 50_64_2f - Belarus National Library, Minsk 2009 (3901618837).jpg`, `Museum_Kamenets_tower-28-07-2007_1.jpg`, `Belovezhskaya_Pushcha_N.P.jpg`
- [x] 3.2 Record the `Artist` and `LicenseShortName` from `extmetadata` for each of the 8 files, and verify every file has a non-empty author and a specific licence name (licences such as CC BY-SA 3.0), since attribution is a licence obligation rather than a courtesy
- [x] 3.3 Build each entry's image URL from the API's `thumburl` (rewriting the host to `upload.wikimedia.org`) and its source page as `https://commons.wikimedia.org/wiki/File:<name>`, then verify every one of the 8 URLs returns HTTP `200` with `content-type: image/jpeg` and a payload above 100 KB
- [x] 3.4 Confirm the two Grodno photographs (`005b 274` and `005b 177`) depict the Old Castle and the New Castle respectively rather than being swapped or generic Grodno streetscapes, and verify visually before wiring them in

## 4. Landmark Data

- [x] 4.1 Create `frontend/src/data/places.ts` exporting a `Place` type whose `sentences` field is the fixed 3-tuple `[string, string, string]`, and verify the project still typechecks (`npm run build`)
- [x] 4.2 Populate all 8 entries in `places.ts` with name, city, image URL, source page URL, photo author, and licence from task 3, and verify the exported array has exactly 8 elements with no duplicates
- [x] 4.3 Fill each entry's three sentences with the agreed simplified-English copy, preserving the tuple order: Nesvizh — "The Radziwill family built Nesvizh Castle in the late 1500s." / "The castle stands in Nesvizh, not far from Minsk." / "In 2005, UNESCO put the castle and the church next to it on the World Heritage List."; Lida — "German knights built Lida Castle in the 1300s." / "Its red brick walls are a fine example of Gothic style." / "For many years the castle was a prison, but today it is a museum."; Old Castle Grodno — "The Old Castle stands on a high bank of the Neman River." / "It is one of the oldest castles in Belarus." / "The first wooden castle on this site was built in the 11th century."; New Castle Grodno — "The New Castle is a royal palace in Grodno." / "It was built in the 1700s for the Polish kings." / "The last Polish king left his throne in this castle in 1795."; Brest Fortress — "Brest Fortress was built in the 1830s and 1840s." / "In 1941, a small group of soldiers defended it for almost one month." / "Today it is a memorial, and a fire burns there for the soldiers who died."; National Library — "The National Library of Belarus is in Minsk." / "It keeps about ten million books." / "The new building opened in 2006 and has the shape of a big diamond."; Kamenets Tower — "Kamenets Tower is a round stone tower in the west of Belarus." / "It was built in the 1200s, between the years 1276 and 1288." / "People also call it the White Tower, and it gave Belovezhskaya Pushcha its name."; Belovezhskaya Pushcha — "Belovezhskaya Pushcha is a very old forest in the west of Belarus." / "It has been a UNESCO World Heritage Site since 1979." / "The European bison lives there, and three countries signed an important agreement in this forest in 1991."
- [x] 4.4 Add a module-load assertion in `places.ts` that every entry has exactly 3 sentences, a non-empty image URL, and a non-empty licence, and verify it passes on import while a deliberately truncated entry makes `npm run build` fail
- [x] 4.5 Proofread all 24 sentences in simple English, checking for idioms, complex subordinate clauses, jargon, and any mid-sentence full stops that would confuse a sentence count; verify the content matches the spec's simple-English requirement on a read-through

## 5. Components

- [x] 5.1 Create `frontend/src/components/PlaceCard.tsx` rendering name, city, the three sentences, the photo, and the credit line, and verify one card renders with all five parts present
- [x] 5.2 Render exactly one `<img>` per card with no gallery or carousel, and verify each card's DOM contains a single `img` element
- [x] 5.3 Give each photo `alt` text naming its landmark, a fixed `aspect-ratio`, and `loading="lazy"`, and verify alt text is present and non-empty for all 8
- [x] 5.4 Implement the load-failure fallback in `PlaceCard` so a failed photo is replaced by a placeholder showing the landmark's name, and verify by pointing one entry's URL at an unreachable host and confirming the placeholder appears with the name, city, sentences, and credit still readable
- [x] 5.5 Render the credit as author, licence name, and a link to the photo's source page opening in a new tab, and verify the link's `href` matches the `File:` page and its visible text names a specific licence
- [x] 5.6 Create `frontend/src/components/Header.tsx` with the site title and a short introduction, and `frontend/src/components/Footer.tsx` with an overall Wikimedia Commons credit plus the source links, and verify both render and the footer contains no duplicate or missing entries
- [x] 5.7 Assemble `frontend/src/App.tsx` to map over the data array into cards so no landmark is hardcoded in markup, and verify `App.tsx` contains no landmark names and that adding a 9th entry to the data renders a 9th card with no change to `App.tsx`

## 6. Styling

- [x] 6.1 Define the light theme as CSS custom properties in `frontend/src/index.css` (light background, dark legible text, one accent colour, spacing, radius), and verify the page background renders light and body text is dark on it
- [ ] 6.2 Style the card grid as `repeat(3, 1fr)` on wide viewports and verify 3 cards sit per row at roughly 1280 px
- [ ] 6.3 Add a media query stepping the grid to 2 columns and verify 2 cards sit per row at roughly 768 px
- [ ] 6.4 Add a media query stepping the grid to 1 column and verify 1 card per row, with no clipping or horizontal overflow, at roughly 375 px
- [ ] 6.5 Style card imagery with `object-fit: cover` at a fixed height, and verify all 8 photographs render without distortion or inconsistent card heights
- [ ] 6.6 Style the placeholder and the credit line so the credit is legible but visually secondary, and verify the credit remains readable on a low-contrast screen and does not overflow narrow cards
- [x] 6.7 Use a system font stack with no web-font link, and verify `frontend/index.html` requests no external stylesheet or font
- [x] 6.8 Set `lang="en"`, a descriptive `title`, and a `meta description` in `frontend/index.html`, and verify the rendered document declares English and the title and description name the site

## 7. Verification

- [x] 7.1 Run `npm run lint` and fix every reported issue, and verify it exits 0
- [x] 7.2 Run `npm run build` and verify it exits 0 and produces a `frontend/dist/` directory containing `index.html` and bundled assets
- [ ] 7.3 Serve the production build with `npm run preview` and verify the page renders with all 8 cards, then confirm the only external requests are image requests and no application API is contacted
- [ ] 7.4 Check the full page in a browser at 1280, 768, and 375 px widths, verifying column counts, no overflow, no layout shift as images load, and correct title/city/three-sentence/credit content on every card
- [x] 7.5 Verify the page remains fully readable with photographs unavailable, by blocking `upload.wikimedia.org` in devtools and confirming all 8 entries still show name, city, and three sentences

## 8. Commit and Push

- [x] 8.1 Review with `git status` and `git diff --cached`, stage the site source, OpenSpec artifacts, and root `.gitignore`, and verify no `node_modules/`, no `dist/`, and no credentials are staged
- [x] 8.2 Commit with a message matching conventional commits style and verify `git log --oneline` shows exactly one commit
- [x] 8.3 Push with `git push -u origin main` and verify `git status` reports the branch is up to date with `origin/main`
- [x] 8.4 Confirm the push landed by running `git ls-remote origin`, and verify `refs/heads/main` now resolves to the same SHA as the local `main`
