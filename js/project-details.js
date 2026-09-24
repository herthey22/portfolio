/* =========================================================
   PROJECT DATA
   ---------------------------------------------------------
   This is the ONLY file you edit to add, remove, reorder or
   rename a card in the "My Work & Certificate" section.

   slug   -> passed to product-detail.html?project=<slug>
   image  -> path inside assets/images/work/
   ========================================================= */

const PROJECTS = [
  {
    slug: "sign-language-interpreting",
    title: "Sign Language Interpreting",
    blurb: "Bridging communication gaps.",
    image: "assets/images/work/sign-language-interpreting.jpg",
    alt: "Hands forming letters in sign language"
  },
  {
    slug: "myself-and-my-pupils",
    title: "Myself and My Pupils",
    blurb: "Inclusive learning, brighter futures.",
    image: "assets/images/work/myself-and-my-pupils.jpg",
    alt: "Teacher working with a small group of pupils"
  },
  {
    slug: "content-write-up",
    title: "My Content Write Up",
    blurb: "Blogs, social media & motivational content.",
    image: "assets/images/work/content-write-up.jpg",
    alt: "Laptop and notebook on a writing desk"
  },
  {
    slug: "lesson-note-and-slides",
    title: "Lesson Note and Slides",
    blurb: "Structured, simple and effective.",
    image: "assets/images/work/lesson-note-and-slides.jpg",
    alt: "Stack of lesson notes and teaching files"
  },
  {
    slug: "project-portfolio",
    title: "Project Portfolio",
    blurb: "Web projects, design & development.",
    image: "assets/images/work/project-portfolio.jpg",
    alt: "Code editor open on a laptop screen"
  },
  {
    slug: "edugame",
    title: "Edugame",
    blurb: "Learning through play.",
    image: "assets/images/work/edugame.jpg",
    alt: "Game controller and colourful learning shapes"
  },
  {
    slug: "my-github",
    title: "My GitHub",
    blurb: "Code, contributions and repositories.",
    image: "assets/images/work/my-github.jpg",
    alt: "GitHub logo on a dark background"
  },
  {
    slug: "certificate-and-award",
    title: "Certificate and Award",
    blurb: "My journey, skills and recognition.",
    image: "assets/images/work/certificate-and-award.jpg",
    alt: "Framed certificate with an award medal"
  }
];



/* =========================================================
   Project Details — reusable renderer
   ========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project") || "";
  const project = (typeof PROJECT_DETAILS !== "undefined") ? PROJECT_DETAILS[projectId] : null;

  const root = document.getElementById("detailRoot");

  if (!project) {
    root.innerHTML =
      '<div class="detail-missing">' +
      '<h1>Project not found</h1>' +
      '<p>We couldn\'t find a project for "' + escapeHtml(projectId || "(none given)") + '".</p>' +
      '<a class="btn btn-gradient" href="index.html#work">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m0 0 5-5m-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      "Back to Projects" +
      "</a>" +
      "</div>";
    return;
  }

  document.title = project.title + " — Oyeniyi Adenike Adetutu";

  /* ---------------------------------------------------
     Small helpers
     --------------------------------------------------- */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  const ARROW =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const BACK_ARROW =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m0 0 5-5m-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const PLAY_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7-11-7Z" fill="currentColor"/></svg>';
  const EXTERNAL_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5m0-5L10 14M7 5H5v14h14v-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CODE_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-5 6 5 6M16 6l5 6-5 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const EYE_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
  const DOWNLOAD_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* =========================================================
     HERO
     ========================================================= */
  function renderHero() {
    const tagsHtml = (project.tags && project.tags.length)
      ? '<div class="detail-tags">' + project.tags.map(function (t) { return '<span class="detail-tag">' + escapeHtml(t) + "</span>"; }).join("") + "</div>"
      : "";

    const actions = buildHeroActions();

    return el(
      '<section class="detail-hero reveal-up">' +
      '<div class="detail-hero-icon"><img src="' + project.icon + '" alt="" onerror="this.style.display=\'none\'" /></div>' +
      '<div class="detail-hero-copy">' +
      "<h1>" + escapeHtml(project.title) + "</h1>" +
      (project.tagline ? '<p class="detail-tagline">' + escapeHtml(project.tagline) + "</p>" : "") +
      tagsHtml +
      '<p class="detail-desc">' + escapeHtml(project.description) + "</p>" +
      '<div class="detail-actions">' + actions + "</div>" +
      "</div>" +
      '<div class="detail-hero-image">' +
      '<img src="' + project.heroImage + '" alt="' + escapeHtml(project.title) + ' preview" />' +
      "</div>" +
      "</section>"
    );
  }

  function buildHeroActions() {
    const buttons = [];

    switch (project.type) {
      case "photo-video-gallery":
        buttons.push(actionBtn("View Full Gallery", EYE_ICON, "primary", { dataOpenGallery: "0" }));
        if (project.secondaryAction) buttons.push(actionBtn(project.secondaryAction.label, "", "ghost", { href: project.secondaryAction.href }));
        break;

      case "uiux-gallery":
        buttons.push(actionBtn("View Full UI/UX", EYE_ICON, "primary", { dataOpenGallery: "0" }));
        if (project.liveDemo) buttons.push(actionBtn("Live Demo", EXTERNAL_ICON, "ghost", { href: project.liveDemo, target: "_blank" }));
        else if (project.codeUrl) buttons.push(actionBtn("View Code", CODE_ICON, "ghost", { href: project.codeUrl, target: "_blank" }));
        break;

      case "content-grid":
        buttons.push(actionBtn("View Writeups", "", "primary", { dataScrollTo: "writeups" }));
        if (project.secondaryAction) buttons.push(actionBtn(project.secondaryAction.label, EXTERNAL_ICON, "ghost", { href: project.secondaryAction.href, target: "_blank" }));
        break;

      case "resources":
        buttons.push(actionBtn("View My Work", "", "primary", { dataScrollTo: "resources" }));
        break;

      case "game":
        buttons.push(actionBtn("View Games", PLAY_ICON, "primary", { dataScrollTo: "games" }));
        if (project.video) buttons.push(actionBtn("View Video", PLAY_ICON, "ghost", { dataOpenVideo: "hero" }));
        break;

      case "github":
        buttons.push(actionBtn("View My GitHub", EXTERNAL_ICON, "primary", { href: project.githubUrl, target: "_blank" }));
        buttons.push(actionBtn("View Details", "", "ghost", { dataScrollTo: "overview" }));
        break;

      case "certificates":
        buttons.push(actionBtn("View All Certificates", EYE_ICON, "primary", { dataScrollTo: "certificates" }));
        break;
    }

    return buttons.join("");
  }

  function actionBtn(label, icon, style, attrs) {
    attrs = attrs || {};
    const cls = "btn " + (style.indexOf("primary") > -1 ? "btn-gradient" : "btn-ghost") + (style.indexOf("disabled") > -1 ? " is-disabled" : "");
    const tag = attrs.href ? "a" : "button";
    let attrStr = "";
    if (attrs.href) attrStr += ' href="' + attrs.href + '"';
    if (attrs.target) attrStr += ' target="' + attrs.target + '" rel="noopener"';
    if (attrs.dataOpenGallery !== undefined) attrStr += ' data-open-gallery="' + attrs.dataOpenGallery + '"';
    if (attrs.dataOpenVideo !== undefined) attrStr += ' data-open-video="' + attrs.dataOpenVideo + '"';
    if (attrs.dataScrollTo !== undefined) attrStr += ' data-scroll-to="' + attrs.dataScrollTo + '"';
    if (style.indexOf("disabled") > -1) attrStr += " aria-disabled=\"true\" tabindex=\"-1\"";
    return "<" + tag + ' class="' + cls + '"' + attrStr + ">" + icon + "<span>" + escapeHtml(label) + "</span></" + tag + ">";
  }

  /* =========================================================
     OVERVIEW (shared 3-column block)
     ========================================================= */
  function renderOverview() {
    if (!project.overview) return null;

    const ov = project.overview;
    const techCol = (ov.technologies && ov.technologies.length)
      ? colBlock("gear", "Technologies Used", ov.technologies.map(plainLine))
      : "";
    const featCol = colBlock("star", ov.featuresLabel || "Key Features", ov.features.map(checkLine));

    return el(
      '<section class="detail-overview reveal-up" id="overview">' +
      '<div class="mini-head">' +
      '<span class="mini-icon icon-blue">' + iconSvg("image") + "</span>" +
      "<div><h2>Project Overview</h2><p>Here's a quick look at what this project is about and what it achieves.</p></div>" +
      "</div>" +
      '<div class="overview-grid">' +
      colBlock("image", "Project Description", [plainLine(ov.description)], true) +
      techCol +
      featCol +
      "</div>" +
      "</section>"
    );
  }

  function colBlock(iconName, title, lines, isText) {
    return (
      '<div class="overview-col">' +
      '<h3><span class="mini-icon icon-purple">' + iconSvg(iconName) + "</span>" + escapeHtml(title) + "</h3>" +
      (isText ? '<p class="overview-text">' + escapeHtml(lines[0]) + "</p>" : "<ul>" + lines.join("") + "</ul>") +
      "</div>"
    );
  }

  function plainLine(text) { return "<li>" + escapeHtml(text) + "</li>"; }
  function checkLine(text) {
    return '<li class="check-line">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5L20 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      escapeHtml(text) + "</li>";
  }

  function iconSvg(name) {
    if (name === "gear") return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2m10-10 2-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    if (name === "star") return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3-4.8-4.3 6.4-.6L12 3Z" fill="currentColor"/></svg>';
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="10" r="1.6" fill="currentColor"/><path d="m4 17 5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* =========================================================
     TYPE: photo-video-gallery  (masonry, ONE gallery)
     ========================================================= */
  function renderPhotoVideoGallery() {
    const items = project.media || [];

    const tiles = items.map(function (m, i) {
      if (m.type === "video") {
        return (
          '<li class="masonry-item is-video" data-index="' + i + '">' +
          '<img src="' + m.poster + '" alt="' + escapeHtml(m.alt || "") + '" loading="lazy" />' +
          '<span class="play-badge">' + PLAY_ICON + "</span>" +
          "</li>"
        );
      }
      return (
        '<li class="masonry-item" data-index="' + i + '">' +
        '<img src="' + m.src + '" alt="' + escapeHtml(m.alt || "") + '" loading="lazy" />' +
        "</li>"
      );
    }).join("");

    return el(
      '<section class="detail-gallery reveal-up" id="gallery">' +
      '<div class="mini-head">' +
      '<span class="mini-icon icon-teal">' + iconSvg("image") + "</span>" +
      "<div><h2>Gallery</h2><p>Photos and videos from this project — click any item to view it in full.</p></div>" +
      "</div>" +
      '<ul class="masonry-grid" data-gallery-grid>' + tiles + "</ul>" +
      "</section>"
    );
  }

  /* =========================================================
     TYPE: uiux-gallery
     ========================================================= */
  function renderUiuxGallery() {
    const galleries = project.galleries || [];
    const videos = project.videos || [];

    /* ---- Gallery cards ---- */
    const galleryCards = galleries.map(function (g, gi) {
      const tiles = (g.images || []).map(function (im, i) {
        return (
          '<li class="masonry-item" data-gallery="' + gi + '" data-index="' + i + '">' +
          '<img src="' + im.src + '" alt="' + escapeHtml(im.alt || "") + '" loading="lazy" />' +
          (im.label ? '<span class="masonry-label">' + escapeHtml(im.label) + "</span>" : "") +
          "</li>"
        );
      }).join("");

      const codeBtn = g.codeUrl
        ? '<a class="btn btn-ghost btn-sm" href="' + g.codeUrl + '" target="_blank" rel="noopener">' +
        CODE_ICON + "<span>Code</span></a>"
        : "";
      const demoBtn = g.liveDemo
        ? '<a class="btn btn-gradient btn-sm" href="' + g.liveDemo + '" target="_blank" rel="noopener">' +
        EXTERNAL_ICON + "<span>Live Demo</span></a>"
        : "";

      return (
        '<article class="portfolio-card">' +
        '<div class="portfolio-card-head">' +
        "<h3>" + escapeHtml(g.title) + "</h3>" +
        '<div class="portfolio-card-actions">' + codeBtn + demoBtn + "</div>" +
        "</div>" +
        '<p class="portfolio-card-label">Photos</p>' +
        '<ul class="masonry-grid portfolio-masonry">' + tiles + "</ul>" +
        "</article>"
      );
    }).join("");

    /* ---- Video cards ---- */
    const videoCards = videos.map(function (v, vi) {
      const demoBtn = v.liveDemo
        ? '<a class="btn btn-gradient btn-sm" href="' + v.liveDemo + '" target="_blank" rel="noopener">' +
        EXTERNAL_ICON + "<span>Live Demo</span></a>"
        : "";

      return (
        '<article class="portfolio-video-card">' +
        '<div class="portfolio-card-head">' +
        "<h3>" + escapeHtml(v.title) + "</h3>" +
        '<div class="portfolio-card-actions">' + demoBtn + "</div>" +
        "</div>" +
        '<button class="video-preview" data-open-video-index="' + vi + '" type="button" aria-label="Play ' + escapeHtml(v.title) + '">' +
        '<img src="' + v.poster + '" alt="" />' +
        '<span class="play-badge play-badge-lg">' + PLAY_ICON + "</span>" +
        "</button>" +
        "</article>"
      );
    }).join("");

    const wrap = document.createDocumentFragment();

    if (galleryCards) {
      wrap.appendChild(el(
        '<section class="detail-gallery reveal-up" id="gallery">' +
        '<div class="mini-head">' +
        '<span class="mini-icon icon-teal">' + iconSvg("image") + "</span>" +
        "<div><h2>UI/UX Project Galleries</h2><p>Each card is one project — photos in masonry, with code &amp; live demo.</p></div>" +
        "</div>" +
        '<div class="portfolio-cards">' + galleryCards + "</div>" +
        "</section>"
      ));
    }

    if (videoCards) {
      wrap.appendChild(el(
        '<section class="detail-video reveal-up" id="videos">' +
        '<div class="mini-head">' +
        '<span class="mini-icon icon-blue">' + PLAY_ICON + "</span>" +
        "<div><h2>Project Walkthroughs</h2><p>Video demos — click to play, use Live Demo to open the project.</p></div>" +
        "</div>" +
        '<div class="portfolio-video-cards">' + videoCards + "</div>" +
        "</section>"
      ));
    }

    return wrap;
  }




  /* =========================================================
     TYPE: content-grid
     ========================================================= */
  function renderContentGrid() {
    const cards = (project.items || []).map(function (item) {
      return (
        '<li class="content-card">' +
        '<div class="content-thumb"><img src="' + item.image + '" alt="' + escapeHtml(item.title) + '" loading="lazy" /></div>' +
        "<h3>" + escapeHtml(item.title) + "</h3>" +
        '<p>' + escapeHtml(item.description) + "</p>" +
        '<a class="content-more" href="' + item.href + '" target="_blank" rel="noopener">View Writeup ' + ARROW + "</a>" +
        "</li>"
      );
    }).join("");

    return el(
      '<section class="detail-gallery reveal-up" id="writeups">' +
      '<div class="mini-head">' +
      '<span class="mini-icon icon-teal">' + iconSvg("image") + "</span>" +
      "<div><h2>My Writeups</h2><p>Explore my articles, lesson notes and other written resources.</p></div>" +
      "</div>" +
      '<ul class="content-grid">' + cards + "</ul>" +
      "</section>"
    );
  }

  /* =========================================================
     TYPE: resources
     ========================================================= */
  function renderResources() {
    const groups = project.resourceGroups || [];

    const sections = groups.map(function (group, gi) {
      const cards = (group.items || []).map(function (r) {
        return (
          '<li class="resource-card">' +
          '<span class="resource-file-badge">' + r.fileType.toUpperCase() + "</span>" +
          "<h3>" + escapeHtml(r.title) + "</h3>" +
          '<p>' + escapeHtml(r.description) + "</p>" +
          '<a class="btn btn-gradient btn-sm" href="' + r.fileSrc + '" download>' + DOWNLOAD_ICON + "<span>" + escapeHtml(r.buttonLabel) + "</span></a>" +
          "</li>"
        );
      }).join("");

      return (
        '<section class="detail-gallery reveal-up"' + (gi === 0 ? ' id="resources"' : "") + '>' +
        '<div class="mini-head">' +
        '<span class="mini-icon icon-teal">' + iconSvg("image") + "</span>" +
        "<div><h2>" + escapeHtml(group.title) + "</h2><p>" + escapeHtml(group.description) + "</p></div>" +
        "</div>" +
        '<ul class="resource-grid">' + cards + "</ul>" +
        "</section>"
      );
    });

    const wrap = document.createDocumentFragment();
    sections.forEach(function (s) { wrap.appendChild(el(s)); });
    return wrap;
  }
  /* =========================================================
   TYPE: game  — one card per flyer (rows & columns, NO masonry)
   ========================================================= */
  function renderGame() {
    const games = project.games || [];

    const cards = games.map(function (g) {
      const btnLabel = escapeHtml(g.buttonLabel || "Start Game");
      const btnStyle = g.buttonColor
        ? ' style="background:' + g.buttonColor + ';"'
        : "";

      const btn = g.playUrl
        ? '<a class="game-card-btn" href="' + g.playUrl + '" target="_blank" rel="noopener"' + btnStyle + ">" +
        PLAY_ICON + "<span>" + btnLabel + "</span></a>"
        : '<span class="game-card-btn is-disabled" aria-disabled="true"' + btnStyle + ">" +
        PLAY_ICON + "<span>" + btnLabel + "</span></span>";

      return (
        '<li class="game-card">' +
        '<div class="game-card-flyer">' +
        '<img src="' + g.flyer + '" alt="' + escapeHtml(g.title || "") + '" loading="lazy" />' +
        btn +
        "</div>" +
        (g.title
          ? '<div class="game-card-title"><h3>' + escapeHtml(g.title) + "</h3>" +
          (g.subtitle ? "<p>" + escapeHtml(g.subtitle) + "</p>" : "") +
          "</div>"
          : "") +
        "</li>"
      );
    }).join("");

    return el(
      '<section class="game-cards-section reveal-up" id="games">' +
      '<div class="mini-head">' +
      '<span class="mini-icon icon-teal">' + PLAY_ICON + "</span>" +
      "<div><h2>Play &amp; Learn</h2><p>Pick a game below — each flyer is a different adventure!</p></div>" +
      "</div>" +
      '<ul class="game-cards">' + cards + "</ul>" +
      "</section>"
    );
  }
  /* =========================================================
     TYPE: github
     ========================================================= */
  function renderGithub() {
    return el(
      '<section class="detail-github reveal-up">' +
      '<div class="github-card">' +
      '<span class="github-badge">' + iconSvg("image") + "</span>" +
      "<div>" +
      "<h2>My GitHub Repository</h2>" +
      "<p>Explore my code, projects, and contributions on GitHub. See what I've built and how I'm growing as a developer.</p>" +
      "</div>" +
      '<a class="btn btn-gradient" href="' + project.githubUrl + '" target="_blank" rel="noopener">' + EXTERNAL_ICON + "<span>View My GitHub</span></a>" +
      "</div>" +
      "</section>"
    );
  }

  /* =========================================================
     TYPE: certificates
     ========================================================= */
  function renderCertificates() {
    const cards = (project.certificates || []).map(function (c, i) {
      const isPdf = c.fileType === "pdf";
      const preview = isPdf
        ? '<div class="cert-preview cert-preview-pdf">' +
        '<span class="cert-pdf-icon">PDF</span>' +
        '<span class="cert-pdf-name">' + escapeHtml(c.title) + '</span>' +
        '</div>'
        : '<div class="cert-preview"><img src="' + c.image + '" alt="' + escapeHtml(c.title) + '" loading="lazy" /></div>';

      const btnLabel = isPdf ? "View PDF" : "View Image";

      return (
        '<li class="cert-card" data-index="' + i + '">' +
        preview +
        '<div class="cert-body">' +
        '<h3>' + escapeHtml(c.title) + '</h3>' +
        '<span class="cert-tag">' + escapeHtml(c.tag) + '</span>' +
        '</div>' +
        '<button class="btn btn-ghost btn-sm" type="button" data-open-cert="' + i + '">' +
        EYE_ICON + '<span>' + btnLabel + '</span>' +
        '</button>' +
        '</li>'
      );
    }).join("");

    return el(
      '<section class="detail-gallery reveal-up" id="certificates">' +
      '<div class="mini-head">' +
      '<span class="mini-icon icon-teal">' + iconSvg("image") + '</span>' +
      '<div><h2>Certificates &amp; Awards Gallery</h2>' +
      '<p>Here are some of my certificates and awards.</p></div>' +
      '</div>' +
      '<ul class="cert-grid">' + cards + '</ul>' +
      '</section>'
    );
  }



  /* =========================================================
     LIGHTBOX (shared image/video viewer)
     ========================================================= */
  const lightbox = {
    overlay: null, stage: null, caption: null,
    items: [], index: 0, isCert: false, lastFocused: null,

    build: function () {
      this.overlay = el(
        '<div class="lightbox" hidden>' +
        '<div class="lightbox-backdrop" data-lb-close></div>' +
        '<div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Media viewer">' +
        '<button class="lb-close" type="button" data-lb-close aria-label="Close">&times;</button>' +
        '<button class="lb-nav lb-prev" type="button" aria-label="Previous">' + BACK_ARROW + "</button>" +
        '<div class="lb-stage"></div>' +
        '<button class="lb-nav lb-next" type="button" aria-label="Next">' + ARROW + "</button>" +
        '<p class="lb-caption"></p>' +
        "</div>" +
        "</div>"
      );
      document.body.appendChild(this.overlay);
      this.stage = this.overlay.querySelector(".lb-stage");
      this.caption = this.overlay.querySelector(".lb-caption");

      this.overlay.addEventListener("click", (function (e) {
        if (e.target.hasAttribute("data-lb-close")) this.close();
      }).bind(this));
      this.overlay.querySelector(".lb-prev").addEventListener("click", (function () { this.step(-1); }).bind(this));
      this.overlay.querySelector(".lb-next").addEventListener("click", (function () { this.step(1); }).bind(this));

      document.addEventListener("keydown", (function (e) {
        if (this.overlay.hasAttribute("hidden")) return;
        if (e.key === "Escape") this.close();
        if (e.key === "ArrowLeft") this.step(-1);
        if (e.key === "ArrowRight") this.step(1);
      }).bind(this));
    },

    open: function (items, startIndex) {
      this.items = items;
      this.index = startIndex || 0;
      this.lastFocused = document.activeElement;
      this.render();
      this.overlay.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      this.overlay.querySelector(".lb-close").focus();
    },

    close: function () {
      this.overlay.setAttribute("hidden", "");
      this.stage.innerHTML = "";
      document.body.style.overflow = "";
      if (this.lastFocused && this.lastFocused.focus) this.lastFocused.focus();
    },

    step: function (dir) {
      if (!this.items.length) return;
      this.index = (this.index + dir + this.items.length) % this.items.length;
      this.render();
    },

    render: function () {
      const item = this.items[this.index];
      const showNav = this.items.length > 1;
      this.overlay.querySelector(".lb-prev").style.display = showNav ? "" : "none";
      this.overlay.querySelector(".lb-next").style.display = showNav ? "" : "none";

      if (item.kind === "video") {
        this.stage.innerHTML = '<video controls autoplay playsinline src="' + item.src + '"' + (item.poster ? ' poster="' + item.poster + '"' : "") + "></video>";
      } else if (item.kind === "pdf") {
        this.stage.innerHTML = '<iframe title="' + escapeHtml(item.alt || "Document") + '" src="' + item.src + '"></iframe>';
      } else {
        this.stage.innerHTML = '<img src="' + item.src + '" alt="' + escapeHtml(item.alt || "") + '" />';
      }
      this.caption.textContent = item.alt || "";
    }
  };
  lightbox.build();

  /* =========================================================
     Wire up clicks (gallery tiles, hero buttons, certs, videos)
     ========================================================= */
  function galleryItemsFor(project) {
    if (project.type === "photo-video-gallery") {
      return project.media.map(function (m) {
        return m.type === "video"
          ? { kind: "video", src: m.src, poster: m.poster, alt: m.alt }
          : { kind: "image", src: m.src, alt: m.alt };
      });
    }
    if (project.type === "uiux-gallery") {
      /* handled per-card via data-gallery — fall back to first gallery */
      const g = (project.galleries || [])[0];
      return (g && g.images || []).map(function (im) {
        return { kind: "image", src: im.src, alt: im.label || im.alt };
      });
    }


    if (project.type === "game") {
      return (project.screenshots || []).map(function (s) { return { kind: "image", src: s.src, alt: s.alt }; });
    }
    return [];
  }

  document.addEventListener("click", function (e) {
    const scrollTrigger = e.target.closest("[data-scroll-to]");
    if (scrollTrigger) {
      e.preventDefault();
      const target = document.getElementById(scrollTrigger.getAttribute("data-scroll-to"));
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      return;
    }

    const galleryTrigger = e.target.closest("[data-open-gallery]");
    if (galleryTrigger) {
      e.preventDefault();
      lightbox.open(galleryItemsFor(project), parseInt(galleryTrigger.getAttribute("data-open-gallery"), 10) || 0);
      return;
    }

    const tile = e.target.closest(".masonry-item[data-index]");
    if (tile) {
      const gi = parseInt(tile.getAttribute("data-gallery"), 10);
      const idx = parseInt(tile.getAttribute("data-index"), 10) || 0;
      if (!isNaN(gi) && project.galleries && project.galleries[gi]) {
        const items = project.galleries[gi].images.map(function (im) {
          return { kind: "image", src: im.src, alt: im.label || im.alt };
        });
        lightbox.open(items, idx);
      } else {
        lightbox.open(galleryItemsFor(project), idx);
      }
      return;
    }


    /* UI/UX card photo → lightbox for that card only */
    const uiuxTile = e.target.closest(".uiux-item[data-gallery]");
    if (uiuxTile) {
      const gi = parseInt(uiuxTile.getAttribute("data-gallery"), 10) || 0;
      const idx = parseInt(uiuxTile.getAttribute("data-index"), 10) || 0;
      const g = (project.galleries || [])[gi];
      if (g && g.images) {
        const items = g.images.map(function (im) {
          return { kind: "image", src: im.src, alt: im.label || im.alt || "" };
        });
        lightbox.open(items, idx);
      }
      return;
    }

    /* Video card play */
    const videoIndexTrigger = e.target.closest("[data-open-video-index]");
    if (videoIndexTrigger) {
      e.preventDefault();
      const vi = parseInt(videoIndexTrigger.getAttribute("data-open-video-index"), 10) || 0;
      const v = (project.videos || [])[vi];
      if (v) lightbox.open([{ kind: "video", src: v.src, poster: v.poster, alt: v.title }], 0);
      return;
    }




    const certTrigger = e.target.closest("[data-open-cert]");
    if (certTrigger) {
      e.preventDefault();
      const i = parseInt(certTrigger.getAttribute("data-open-cert"), 10) || 0;
      const certs = project.certificates.map(function (c) {
        if (c.fileType === "pdf") {
          return { kind: "pdf", src: c.fileSrc || c.image, alt: c.title };
        }
        return { kind: "image", src: c.image, alt: c.title };
      });
      lightbox.open(certs, i);
      return;
    }
  });



  /* =========================================================
     Assemble the page
     ========================================================= */
  root.appendChild(renderHero());

  const typeRenderers = {
    "photo-video-gallery": renderPhotoVideoGallery,
    "uiux-gallery": renderUiuxGallery,
    "content-grid": renderContentGrid,
    "resources": renderResources,
    "game": renderGame,
    "github": renderGithub,
    "certificates": renderCertificates
  };

  if (project.overview) root.appendChild(renderOverview());

  const typeNode = typeRenderers[project.type] ? typeRenderers[project.type]() : null;
  if (typeNode) root.appendChild(typeNode);

  /* ---------------------------------------------------
     Scroll-reveal + masonry stagger (repeats on re-scroll)
     --------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal-up");
  const masonryTiles = document.querySelectorAll(".masonry-item, .content-card, .resource-card, .cert-card, .game-card");

  masonryTiles.forEach(function (t, i) { t.style.transitionDelay = Math.min(i * 60, 480) + "ms"; });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (elx) { elx.classList.add("is-in"); });
    masonryTiles.forEach(function (elx) { elx.classList.add("is-in"); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-in", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    revealEls.forEach(function (elx) { io.observe(elx); });
    masonryTiles.forEach(function (elx) { io.observe(elx); });
  }
})();
