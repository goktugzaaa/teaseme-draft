/* Sticky CTA — show after hero scrolls off-screen, hide near buy/final CTA. */
(function () {
  const sticky = document.getElementById("stickyCta");
  const nav = document.getElementById("nav");
  const hero = document.querySelector(".hero");
  const buy = document.getElementById("buy");
  const finalCta = document.querySelector(".final-cta");

  if (!sticky || !hero) return;

  function update() {
    const scrollY = window.scrollY;

    /* Nav scrolled state */
    if (nav) nav.setAttribute("data-scrolled", scrollY > 40 ? "true" : "false");

    /* Sticky CTA visibility */
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const buyTop = buy ? buy.offsetTop : Infinity;
    const buyBottom = buy ? buy.offsetTop + buy.offsetHeight : Infinity;
    const finalTop = finalCta ? finalCta.offsetTop : Infinity;
    const viewportBottom = scrollY + window.innerHeight;

    const pastHero = scrollY > heroBottom - 200;
    const inBuy = viewportBottom > buyTop && scrollY < buyBottom;
    const inFinal = viewportBottom > finalTop;

    sticky.setAttribute("data-visible", (pastHero && !inBuy && !inFinal) ? "true" : "false");
  }

  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", update);
  update();
})();
