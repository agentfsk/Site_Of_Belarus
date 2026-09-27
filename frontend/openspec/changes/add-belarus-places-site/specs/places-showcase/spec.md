# Spec Delta

## Purpose

Renders a single-page, read-only showcase of notable places to visit in Belarus, where every landmark entry carries exactly one photo, a three-sentence description in simple English, and the photo's required attribution.

## ADDED Requirements

### Requirement: Single-page presentation of all landmarks

The site SHALL present every landmark it knows about on one page, with no navigation to additional pages.

#### Scenario: Visitor opens the site

- **WHEN** a visitor loads the site
- **THEN** a single document renders containing an entry for all 8 landmarks of the site

#### Scenario: Visitor looks for other pages

- **WHEN** a visitor scans the rendered page for links to further pages or sections to navigate to
- **THEN** no such navigation links are present

### Requirement: Fixed set of landmarks

The site SHALL present exactly this set of 8 Belarusian landmarks: Nesvizh Castle, Lida Castle, Old Castle (Grodno), New Castle (Grodno), Brest Fortress, National Library of Belarus, Kamenets Tower, and Belovezhskaya Pushcha.

#### Scenario: Landmarks are listed

- **WHEN** the set of landmark entries is enumerated
- **THEN** the result is exactly the 8 named landmarks, with no additional and no missing entries

### Requirement: Exactly one photo per landmark

Each landmark entry SHALL display exactly one photograph of that landmark.

#### Scenario: Counting photos in an entry

- **WHEN** a visitor inspects a single landmark entry
- **THEN** the entry contains exactly one photograph, with no gallery, carousel, or additional image

#### Scenario: Each photo depicts its own landmark

- **WHEN** each landmark entry's photo is examined
- **THEN** the photo shows the landmark named in that same entry, not another landmark or an unrelated scene

### Requirement: Exactly three sentences of simple English

Each landmark entry SHALL display a description consisting of exactly three sentences, written in simple English suitable for a school language assignment.

#### Scenario: Counting sentences

- **WHEN** a description for any landmark is read
- **THEN** it consists of exactly three sentences

#### Scenario: Only the description prose is counted

- **WHEN** the sentence count is taken
- **THEN** the landmark name, the city name, the photo credit line, and other interface text are not counted as description sentences

#### Scenario: Reading level

- **WHEN** a language reviewer reads a description
- **THEN** the sentences use short structure and common vocabulary, avoiding idioms, complex subordinate clauses, and jargon

### Requirement: Landmark identity is stated

Each landmark entry SHALL state the landmark's name and the city it is located in.

#### Scenario: Entry identifies its subject

- **WHEN** a visitor reads a landmark entry
- **THEN** the landmark's name and its city are both visible in that entry

### Requirement: Photo attribution is displayed

Each landmark entry SHALL display the photograph's author and licence, and SHALL link to the source page of the photograph, because the photographs' licences require attribution.

#### Scenario: Attribution is present on an entry

- **WHEN** a visitor reads a landmark entry with a photo
- **THEN** the entry shows the photo's author, the photo's licence name, and a link that opens the photo's source page

#### Scenario: Attribution identifies the licence

- **WHEN** the attribution line is inspected
- **THEN** it names a specific licence rather than stating only that the image is free to use

### Requirement: Photographs are described for assistive technology

Each photograph SHALL carry alternative text that identifies the photographed landmark.

#### Scenario: Landmark photo with an image

- **WHEN** a photograph of a landmark is displayed
- **THEN** the photo exposes alternative text naming that landmark

#### Scenario: Landmark photo without an image

- **WHEN** a landmark entry shows a photo, that photo
- **THEN** it does not present as an unlabelled or missing image to assistive technology

### Requirement: Readable without photographs

If a photograph cannot be loaded, the page SHALL remain fully readable by substituting a placeholder that shows the landmark's name, and SHALL NOT leave a broken or empty image area.

#### Scenario: Photograph fails to load

- **WHEN** a photograph fails to load
- **THEN** the entry shows a placeholder bearing the landmark's name, and the landmark's name, city, three-sentence description, and attribution remain readable

#### Scenario: All photographs fail to load

- **WHEN** every photograph on the page fails to load
- **THEN** all 8 landmark entries still show their name, city, and three-sentence description, and the page remains usable

### Requirement: Light visual presentation

The site SHALL use a light visual presentation, with a light page background and text that stays legible against it.

#### Scenario: Rendering the page

- **WHEN** the page renders
- **THEN** the page background is light and body text is dark enough to be legible on it

#### Scenario: Reading text on cards

- **WHEN** a visitor reads a landmark's name and description inside its card
- **THEN** that text is legible against the card's own background

### Requirement: Responsive card layout

The landmark entries SHALL be laid out as a grid that reflows with viewport width, showing 3 entries per row on wide viewports, 2 per row at intermediate widths, and 1 per row on narrow viewports.

#### Scenario: Wide viewport

- **WHEN** the page renders at a wide viewport width
- **THEN** the grid shows 3 entries per row

#### Scenario: Intermediate viewport

- **WHEN** the page renders at an intermediate viewport width
- **THEN** the grid shows 2 entries per row

#### Scenario: Narrow viewport

- **WHEN** the page renders at a narrow viewport width such as a phone
- **THEN** the grid shows 1 entry per row and no entry is clipped or overflowing

### Requirement: Static output with no application backend

The site SHALL build to a set of static files that require no server-side application runtime, and SHALL request no data from any application API.

#### Scenario: Serving the build

- **WHEN** the built site is served by a plain static file host
- **THEN** the page renders fully without any application server, database, or API

#### Scenario: Network requests at runtime

- **WHEN** the page is inspected for outgoing requests
- **THEN** the only external requests are for the landmark photographs and no request is made to an application API

### Requirement: Content is held in data, not markup

The landmark content SHALL be held in a single structured data source, so that entries are rendered from data rather than written out individually in page markup.

#### Scenario: Adding the landmark data

- **WHEN** a landmark's name, city, photograph, licence, and description are provided to the data source
- **THEN** the entry appears on the page without any change to the page's own structure

#### Scenario: No per-landmark markup

- **WHEN** the page's own markup is inspected
- **THEN** landmark entries are not hardcoded as individual repeated blocks of markup
