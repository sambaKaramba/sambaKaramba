// script.js
document.addEventListener("DOMContentLoaded", function () {
  const backButtons = document.querySelectorAll(".back-btn");

  backButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // verhindert Standard-Linkverhalten
      window.location.href = 'index.html'     // geht zur vorherigen Seite im Verlauf
    });
  });
});
