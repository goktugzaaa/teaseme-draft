/* Scroll-triggered reveal animations via IntersectionObserver.
   Vanilla JS, no deps. Safe to drop into Shopify Liquid theme.
   Respects prefers-reduced-motion. */
(function () {
  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduce) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.setAttribute("data-revealed", "true"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.setAttribute("data-revealed", "true"));
    return;
  }

  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.revealDelay || "0", 10);
          setTimeout(function () {
            el.setAttribute("data-revealed", "true");
          }, delay);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
})();

/* Parallax for [data-parallax] elements (light, transform only) */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.innerWidth < 768) return;

  const items = Array.from(document.querySelectorAll("[data-parallax]"));
  if (!items.length) return;

  let ticking = false;

  function update() {
    items.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const speed = parseFloat(el.dataset.parallax || "0.15");
      const center = rect.top + rect.height / 2 - vh / 2;
      const offset = center * speed * -1;
      el.style.transform = "translate3d(0, " + offset.toFixed(1) + "px, 0)";
    });
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
})();
