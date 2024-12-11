document.addEventListener("DOMContentLoaded", () => {
  const locationFilter = document.getElementById("location-filter");
  const fixtures = document.querySelectorAll(".fixture");

  // Filtrado por local/visitante
  if (locationFilter) {
    locationFilter.addEventListener("change", (e) => {
      const selectedLocation = e.target.value;

      fixtures.forEach((fixture) => {
        const homeTeam = fixture.querySelector(".home-team").textContent.trim();
        const awayTeam = fixture.querySelector(".away-team").textContent.trim();

        if (selectedLocation === "all") {
          fixture.style.display = "flex";
        } else if (selectedLocation === "local" && homeTeam === "Manchester City") {
          fixture.style.display = "flex";
        } else if (selectedLocation === "visitante" && awayTeam === "Manchester City") {
          fixture.style.display = "flex";
        } else {
          fixture.style.display = "none";
        }
      });
    });
  } else {
    console.error("No se encontró el elemento con id 'location-filter'.");
  }

  // Mostrar/ocultar estadísticas históricas
  fixtures.forEach(fixture => {
    const btn = fixture.querySelector('.show-stats-btn');
    const stats = fixture.querySelector('.historical-stats');

    if (btn && stats) {
      btn.addEventListener('click', () => {
        fixture.classList.toggle('showing');
        if (fixture.classList.contains('showing')) {
          btn.textContent = 'Ocultar estadísticas';
        } else {
          btn.textContent = 'Ver estadísticas históricas';
        }
      });
    }
  });
});
