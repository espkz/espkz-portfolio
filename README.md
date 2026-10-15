# Portfolio

A small, four-page portfolio built with plain HTML, CSS, and JavaScript. The pastel blue and silver visual system is shared across the pages, and the site has no local build step or third-party runtime dependencies.

## Pages

- `index.html` — Home, with a profile overview, selected outcomes, education, skills, and resume links.
- `experience.html` — work history.
- `projects.html` — project cards.
- `publications.html` — selected publications.

The top navigation links between pages. Shared styles are in `styles.css`; `site.js` renders entries from `content.js` and highlights the current page in the navigation.

## Add new content

Edit `content.js` and copy a nearby object in the matching list:

- Add experience entries to `experience`, with organization, role, dates, location, and highlights.
- Add projects to `projects`; include a public URL in `link` when available.
- Add publications to `publications`; include a paper or proceedings URL in `link` when available.
- Add education or skills in their corresponding lists.

Keep experience and publication entries newest-first. The resume links expect `assets/resume.pdf`. The phone number is omitted from the site contact links; the linked resume PDF still contains it.

## GitHub Pages

The included Jekyll workflow builds and deploys the static pages on pushes to `main`. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the deployment source. New root-level HTML pages are included automatically; add them to the navigation in each page header and set their `data-page` value to enable the active tab styling.
