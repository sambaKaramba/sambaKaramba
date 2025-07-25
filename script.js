
// Funktionalität für die "Zurück"-Schaltfläche
document.addEventListener("DOMContentLoaded", function () {
  const backButtons = document.querySelectorAll(".back-btn");

  backButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    e.preventDefault(); // verhindert Standard-Linkverhalten
    window.history.back(); // geht zur vorherigen Seite im Verlauf
    });
  });
});

// Passwortschutz für die Seite


