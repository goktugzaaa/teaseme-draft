/* FAQ accordion — single-open behavior. <details> handles toggle natively. */
(function () {
  const items = document.querySelectorAll(".faq__item");
  items.forEach(function (el) {
    el.addEventListener("toggle", function () {
      if (el.open) {
        items.forEach(function (other) {
          if (other !== el) other.open = false;
        });
      }
    });
  });

  /* Variant pill toggle on product block */
  const pills = document.querySelectorAll(".variant-pill");
  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) {
        p.setAttribute("data-active", "false");
        p.setAttribute("aria-checked", "false");
      });
      pill.setAttribute("data-active", "true");
      pill.setAttribute("aria-checked", "true");
    });
  });
})();
