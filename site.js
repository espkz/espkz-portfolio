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

  document.querySelectorAll("[data-profile]").forEach((element) => {
    const key = element.dataset.profile;
    if (data.profile[key]) element.textContent = data.profile[key];
  });

  const contactLinks = data.profile.contact.map((item) => {
    const href = safeLink(item.href);
    if (!href) return "";
    const external = /^https?:\/\//i.test(item.href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.text)} <span aria-hidden="true">↗</span></a>`;
  }).join("");
  document.getElementById("hero-socials").innerHTML = contactLinks;
  document.getElementById("footer-links").innerHTML = contactLinks;

  document.getElementById("impact-strip").innerHTML = data.highlights.map((item, index) => `
    <div class="impact-item section-shell-item">
      <span class="impact-number">${escapeHtml(item.value)}</span>
      <span class="impact-label">${escapeHtml(item.label)}</span>
      <span class="impact-index">0${index + 1}</span>
    </div>`).join("");

  document.getElementById("experience-list").innerHTML = data.experience.map((item, index) => `
    <article class="experience-item">
      <div class="experience-date"><span>${escapeHtml(item.period)}</span><span class="experience-location">${escapeHtml(item.location)}</span></div>
      <div class="experience-body">
        <div class="experience-title-row"><div><h3>${escapeHtml(item.role)}</h3><p class="organization">${escapeHtml(item.organization)}</p></div><span class="entry-number">0${index + 1}</span></div>
        <ul>${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul>
      </div>
    </article>`).join("");

  document.getElementById("project-grid").innerHTML = data.projects.map((project, index) => {
    const href = safeLink(project.link);
    const title = href
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.name)} <span aria-hidden="true">↗</span></a>`
      : escapeHtml(project.name);
    return `
      <article class="project-card project-${escapeHtml(project.accent || "coral")}">
        <div class="project-top"><span class="project-index">PROJECT / 0${index + 1}</span>${project.period ? `<span>${escapeHtml(project.period)}</span>` : ""}</div>
        <div class="project-art project-art-${escapeHtml(project.accent || "coral")}" aria-hidden="true"><span class="project-art-word">${escapeHtml(project.name)}</span><span class="project-art-mark">${index === 0 ? "♫" : "◉"}</span></div>
        <div class="project-copy"><h3>${title}</h3><p>${escapeHtml(project.summary)}</p>${project.details ? `<p class="project-detail">${escapeHtml(project.details)}</p>` : ""}<ul class="tag-list">${project.technologies.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul></div>
      </article>`;
  }).join("");

  document.getElementById("publication-list").innerHTML = data.publications.map((publication, index) => {
    const href = safeLink(publication.link);
    const title = href
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(publication.title)} <span aria-hidden="true">↗</span></a>`
      : escapeHtml(publication.title);
    return `
      <article class="publication-item">
        <span class="publication-index">0${index + 1}</span>
        <div class="publication-main"><h3>${title}</h3><p>${escapeHtml(publication.venue)} <span aria-hidden="true">·</span> ${escapeHtml(publication.year)}</p></div>
      </article>`;
  }).join("");

  document.getElementById("education-list").innerHTML = data.education.map((item) => `
    <article class="education-item">
      <div class="education-top"><h4>${escapeHtml(item.institution)}</h4><span>${escapeHtml(item.period)}</span></div>
      <p class="education-location">${escapeHtml(item.location)}</p>
      <ul class="degree-list">${item.degrees.map((degree) => `<li>${escapeHtml(degree)}</li>`).join("")}</ul>
      ${item.detail ? `<p class="education-detail">${escapeHtml(item.detail)}</p>` : ""}
    </article>`).join("");

  document.getElementById("skills-list").innerHTML = data.skills.map((group) => `
    <div class="skill-group"><h4>${escapeHtml(group.category)}</h4><ul class="tag-list">${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("");
})();
