/* =========================================================
   Portfolio — interactions
   ========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------
     1. Build the "My Work & Certificate" cards
     --------------------------------------------------- */
  const grid = document.getElementById("workGrid");

  if (grid && typeof PROJECTS !== "undefined") {
    const arrow =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    grid.innerHTML = PROJECTS.map(function (p, i) {
      return (
        '<li class="work-card" style="transition-delay:' + (i * 90) + 'ms">' +
        '<a href="project-detail.html?project=' + encodeURIComponent(p.slug) + '">' +
        '<div class="work-thumb">' +
        '<img src="' + p.image + '" alt="' + p.alt + '" loading="lazy" />' +
        '</div>' +
        '<div class="work-body">' +
        '<h3>' + p.title + '</h3>' +
        '<p>' + p.blurb + '</p>' +
        '<span class="work-more">View More ' + arrow + '</span>' +
        '</div>' +
        '</a>' +
        '</li>'
      );
    }).join("");
  }

  /* ---------------------------------------------------
     2. Typewriter for the professional titles
     --------------------------------------------------- */
  const roles = [
    "Sign Language Interpreter",
    "Content Writer",
    "Special Educator",
    "Junior Software Engineer",
    "Educational Game Designer",
    "Edtech Creator"
  ];

  const typed = document.getElementById("typedRole");

  if (typed) {
    if (reduceMotion) {
      typed.textContent = roles[0];
    } else {
      let roleIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const TYPE_SPEED = 85;
      const DELETE_SPEED = 40;
      const HOLD = 1500;

      function tick() {
        const word = roles[roleIndex];

        if (!deleting) {
          charIndex++;
          typed.textContent = word.slice(0, charIndex);

          if (charIndex === word.length) {
            deleting = true;
            return setTimeout(tick, HOLD);
          }
          return setTimeout(tick, TYPE_SPEED);
        }

        charIndex--;
        typed.textContent = word.slice(0, charIndex);

        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          return setTimeout(tick, 350);
        }
        return setTimeout(tick, DELETE_SPEED);
      }

      setTimeout(tick, 600);
    }
  }

  /* ---------------------------------------------------
     3. Scroll-triggered animations
     --------------------------------------------------- */
  const animated = document.querySelectorAll(
    ".reveal-left, .reveal-right, .bloom, .work-card"
  );

  if (reduceMotion || !("IntersectionObserver" in window)) {
    animated.forEach(function (el) { el.classList.add("is-in"); });
    const q = document.getElementById("quote");
    if (q) q.classList.add("is-on");
  } else {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-in", entry.isIntersecting);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    animated.forEach(function (el) { observer.observe(el); });

    // Quotation: three groups, staggered by CSS delays
    // Quotation: three groups, staggered by CSS delays
    const quote = document.getElementById("quote");
    if (quote) {
      const qObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-on");
            void entry.target.offsetWidth; // force reflow so the animation can restart
            entry.target.classList.add("is-on");
          } else {
            entry.target.classList.remove("is-on");
          }
        });
      }, { threshold: 0.3 });
      qObserver.observe(quote);
    }
  }

  /* ---------------------------------------------------
     4. Mobile navigation
     --------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      const open = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    primaryNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------
     5. Active link while scrolling
     --------------------------------------------------- */
  const sections = Array.prototype.slice.call(
    document.querySelectorAll("main section[id]")
  );
  const navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === "#" + id
          );
        });
      });
    }, { threshold: 0.4, rootMargin: "-80px 0px -40% 0px" });

    sections.forEach(function (s) { spy.observe(s); });
  }
})();
