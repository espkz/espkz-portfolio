(function () {
  "use strict";

  const data = window.portfolioContent;
  if (!data) return;

  const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  const safeLink = (value) => {
    const href = String(value || "");
    return /^(https?:\/\/|mailto:)/i.test(href) ? escapeHtml(href) : "";
  };

  const render = (id, html) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
  };

  document.querySelectorAll("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    if (data.profile[key]) element.textContent = data.profile[key];
  });

  const activePage = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === activePage) link.setAttribute("aria-current", "page");
  });

  const contactLinks = data.profile.contact.map((item) => {
    const href = safeLink(item.href);
    if (!href) return "";
    const external = /^https?:\/\//i.test(item.href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.text)}${external ? ' <span aria-hidden="true">↗</span>' : ""}</a>`;
  }).join("");
  render("hero-socials", contactLinks);
  render("footer-links", contactLinks);

  render("experience-list", data.experience.map((item) => `
    <article class="experience-item">
      <div class="experience-date"><span>${escapeHtml(item.period)}</span><span class="experience-location">${escapeHtml(item.location)}</span></div>
      <div class="experience-body">
        <div class="experience-title-row"><div><h2>${escapeHtml(item.role)}</h2><p class="organization">${escapeHtml(item.organization)}</p></div></div>
        <ul>${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul>
      </div>
    </article>`).join(""));

  const projectGroups = new Map();
  data.projects.forEach((project) => {
    const category = project.category || "Other";
    if (!projectGroups.has(category)) projectGroups.set(category, []);
    projectGroups.get(category).push(project);
  });

  const projectCards = (projects, category) => projects.map((project) => {
    const href = safeLink(project.link);
    return `
      <article class="project-card" data-category="${escapeHtml(category)}">
        <div class="project-copy">
          ${project.period ? `<p class="project-period">${escapeHtml(project.period)}</p>` : ""}
          <h3>${escapeHtml(project.name)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          ${Array.isArray(project.details)
            ? `<ul class="project-detail-list">${project.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>`
            : project.details ? `<p class="project-detail">${escapeHtml(project.details)}</p>` : ""}
          <div class="project-card-footer">
            <ul class="tag-list">${project.technologies.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
            ${href ? `<a class="project-link" href="${href}" target="_blank" rel="noopener noreferrer">GitHub repository <span aria-hidden="true">↗</span></a>` : ""}
          </div>
        </div>
      </article>`;
  }).join("");

  render("project-grid", [...projectGroups.entries()].map(([category, projects], index) => `
    <section class="project-category" aria-labelledby="project-category-${index}">
      <header class="project-category-heading">
        <h2 id="project-category-${index}">${escapeHtml(category)}</h2>
        <span>${projects.length} ${projects.length === 1 ? "project" : "projects"}</span>
      </header>
      <div class="project-grid">${projectCards(projects, category)}</div>
    </section>`).join(""));

  render("publication-list", data.publications.map((publication) => {
    const href = safeLink(publication.link);
    const title = href
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(publication.title)} <span aria-hidden="true">↗</span></a>`
      : escapeHtml(publication.title);
    return `
      <article class="publication-item${publication.kind ? " publication-item-featured" : ""}">
        <div class="publication-main">
          ${publication.kind || publication.recognition ? `<div class="publication-labels">
            ${publication.kind ? `<span class="publication-kind">${escapeHtml(publication.kind)}</span>` : ""}
            ${publication.recognition ? `<span class="publication-recognition">${escapeHtml(publication.recognition)}</span>` : ""}
          </div>` : ""}
          <h2>${title}</h2>
          <p>${escapeHtml(publication.venue)} <span aria-hidden="true">·</span> ${escapeHtml(publication.year)}</p>
          ${publication.summary ? `<p class="publication-summary">${escapeHtml(publication.summary)}</p>` : ""}
        </div>
      </article>`;
  }).join(""));

  render("education-list", data.education.map((item) => `
    <article class="education-item">
      <div class="education-top"><h3>${escapeHtml(item.institution)}</h3><span>${escapeHtml(item.period)}</span></div>
      <p class="education-location">${escapeHtml(item.location)}</p>
      <ul class="degree-list">${item.degrees.map((degree) => `<li>${escapeHtml(degree)}</li>`).join("")}</ul>
      ${item.coursework || item.thesis ? `<dl class="education-details">
        ${item.coursework ? `<div><dt>Relevant coursework</dt><dd>${escapeHtml(item.coursework)}</dd></div>` : ""}
        ${item.thesis ? `<div><dt>Thesis</dt><dd>${escapeHtml(item.thesis)}</dd></div>` : ""}
      </dl>` : ""}
    </article>`).join(""));

  render("skills-list", data.skills.map((group) => `
    <div class="skill-group"><h3>${escapeHtml(group.category)}</h3><ul class="tag-list">${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join(""));
})();
