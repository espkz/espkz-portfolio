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
    return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.text)} <span aria-hidden="true">↗</span></a>`;
  }).join("");
  render("hero-socials", contactLinks);
  render("footer-links", contactLinks);

  render("impact-grid", data.highlights.map((item, index) => `
    <article class="highlight-card">
      <span class="impact-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="impact-number">${escapeHtml(item.value)}</span>
      <span class="impact-label">${escapeHtml(item.label)}</span>
    </article>`).join(""));

  render("experience-list", data.experience.map((item, index) => `
    <article class="experience-item">
      <div class="experience-date"><span>${escapeHtml(item.period)}</span><span class="experience-location">${escapeHtml(item.location)}</span></div>
      <div class="experience-body">
        <div class="experience-title-row"><div><h2>${escapeHtml(item.role)}</h2><p class="organization">${escapeHtml(item.organization)}</p></div><span class="entry-number">${String(index + 1).padStart(2, "0")}</span></div>
        <ul>${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul>
      </div>
    </article>`).join(""));

  render("project-grid", data.projects.map((project, index) => {
    const href = safeLink(project.link);
    const title = href
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.name)} <span aria-hidden="true">↗</span></a>`
      : escapeHtml(project.name);
    const accent = ["blue", "silver"].includes(project.accent) ? project.accent : "blue";
    return `
      <article class="project-card">
        <div class="project-top"><span class="project-index">PROJECT / ${String(index + 1).padStart(2, "0")}</span>${project.period ? `<span>${escapeHtml(project.period)}</span>` : ""}</div>
        <div class="project-art project-art-${accent}" aria-hidden="true"><span class="project-art-word">${escapeHtml(project.name)}</span><span class="project-art-mark">${index === 0 ? "♫" : "◉"}</span></div>
        <div class="project-copy"><h2>${title}</h2><p>${escapeHtml(project.summary)}</p>${project.details ? `<p class="project-detail">${escapeHtml(project.details)}</p>` : ""}<ul class="tag-list">${project.technologies.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul></div>
      </article>`;
  }).join(""));

  render("publication-list", data.publications.map((publication, index) => {
    const href = safeLink(publication.link);
    const title = href
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(publication.title)} <span aria-hidden="true">↗</span></a>`
      : escapeHtml(publication.title);
    return `
      <article class="publication-item">
        <span class="publication-index">${String(index + 1).padStart(2, "0")}</span>
        <div class="publication-main"><h2>${title}</h2><p>${escapeHtml(publication.venue)} <span aria-hidden="true">·</span> ${escapeHtml(publication.year)}</p></div>
      </article>`;
  }).join(""));

  render("education-list", data.education.map((item) => `
    <article class="education-item">
      <div class="education-top"><h3>${escapeHtml(item.institution)}</h3><span>${escapeHtml(item.period)}</span></div>
      <p class="education-location">${escapeHtml(item.location)}</p>
      <ul class="degree-list">${item.degrees.map((degree) => `<li>${escapeHtml(degree)}</li>`).join("")}</ul>
      ${item.detail ? `<p class="education-detail">${escapeHtml(item.detail)}</p>` : ""}
    </article>`).join(""));

  render("skills-list", data.skills.map((group) => `
    <div class="skill-group"><h3>${escapeHtml(group.category)}</h3><ul class="tag-list">${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join(""));
})();
