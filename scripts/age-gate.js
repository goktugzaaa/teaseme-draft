/* Age gate — show once per session, store in localStorage. */
(function () {
  const KEY = "tease_age_ok";
  const gate = document.getElementById("ageGate");
  const confirmBtn = document.getElementById("ageConfirm");
  const denyBtn = document.getElementById("ageDeny");

  if (!gate) return;

  const passed = localStorage.getItem(KEY) === "1";
  if (!passed) {
    gate.setAttribute("data-open", "true");
    document.body.style.overflow = "hidden";
  }

  confirmBtn?.addEventListener("click", function () {
    localStorage.setItem(KEY, "1");
    gate.setAttribute("data-open", "false");
    document.body.style.overflow = "";
  });

  denyBtn?.addEventListener("click", function () {
    window.location.href = "https://www.google.com";
  });
})();
