# Ellie Paek — Portfolio

A responsive, single-page portfolio built with plain HTML, CSS, and JavaScript. It has no build step or third-party runtime dependencies and is ready for GitHub Pages.

## Update the content

Edit [`content.js`](content.js). The page reads its profile, experience, projects, publications, education, and skills from that file.

- Add an experience by copying one object in `experience` and filling in the organization, role, period, location, and highlights.
- Add a project by copying one object in `projects`; include a `link` when there is a public project URL.
- Add a publication by copying one object in `publications`; add a `link` for its paper or proceedings page.
- Add education or skills by copying the corresponding object.
- Keep experience and publication entries in newest-first order.
- The phone number is not shown in the site contact links. The linked PDF is the original resume and still contains the phone number; replace it with a redacted copy later if you prefer.

The resume link expects a PDF at `assets/ellie-paek-resume.pdf`. The deploy workflow copies only the files listed in its “Assemble static site” step, so the original resume PDF at the project root and the README are not published. If you add another static asset (such as a photo), add it to that step as well.
