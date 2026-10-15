# Portfolio

A four-page portfolio built with plain HTML, CSS, and JavaScript. It uses a restrained pastel blue and silver palette and has no local build step or third-party runtime dependencies.

## Pages

- `index.html` — Home, with a profile overview, education, skills, and resume links.
- `experience.html` — work history.
- `projects.html` — projects grouped by school, work, and personal categories.
- `publications.html` — publications.

The top navigation links between pages. Shared styles are in `styles.css`; `site.js` renders entries from `content.js` and highlights the current page in the navigation.

## Add new content

Edit `content.js` and copy a nearby object in the matching list. The profile, experience, project, publication, education, and skill details are kept there so new entries can be added without changing the page templates.

- Add experience entries to `experience`, with organization, role, dates, location, and highlights.
- Add projects to `projects`, with `category` set to `School`, `Work`, or `Personal`; include a public URL in `link` when available.
- Add publications to `publications`; include a paper or proceedings URL in `link` when available. Thesis entries can also include `kind`, `recognition`, and a `summary`.
- Add education or skills in their corresponding lists.

Keep experience and publication entries newest-first. The resume links expect `assets/resume.pdf`. The phone number is omitted from the site contact links; the linked resume PDF still contains it. The shared favicon is `fronticon.png`.

## GitHub Pages

The included Jekyll workflow builds and deploys the static pages on pushes to `main`. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the deployment source. New root-level HTML pages are included automatically; add them to the navigation in each page header and set their `data-page` value to enable the active tab styling.
