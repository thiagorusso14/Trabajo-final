const carousel = document.querySelector('.carousel');

let isDragging = false;
let startX, scrollLeft;

// Inicio del arrastre
carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;

  // Prevenir el desplazamiento vertical mientras se arrastra
  e.preventDefault();
});

carousel.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

// Fin del arrastre
const stopDragging = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

carousel.addEventListener('mouseleave', stopDragging);
carousel.addEventListener('mouseup', stopDragging);
carousel.addEventListener('touchend', stopDragging);

// Movimiento mientras se arrastra
carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevenir el scroll vertical
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;

  // Prevenir el desplazamiento vertical
  e.preventDefault();
});
const playersInfo = {
    "ederson": {
      name: "Ederson",
      position: "Arquero",
      age: 29,
      nationality: "Brasil",
      stats: "Goles: 0, Asistencias: 0",
      video: "https://www.youtube.com/embed/0BwFaKJRiKs?si=jO55eiMICDH6T54-"
    },
    "ruben-dias": {
      name: "Ruben Dias",
      position: "Defensor",
      age: 26,
      nationality: "Portugal",
      stats: "Goles: 2, Asistencias: 1",
      video: "https://www.youtube.com/embed/KAt8yqKidxg?si=VZ26UNpmXGCqZP-f"
    },
    "josko-gvardiol": {
      name: "Josko Gvardiol",
      position: "Defensor",
      age: 21,
      nationality: "Croacia",
      stats: "Goles: 3, Asistencias: 2",
      video: "https://www.youtube.com/embed/MFHHdA5l8y0?si=bLjsCF_e3lRagAX3"
    },
    "nathan-ake": {
      name: "Nathan Ake",
      position: "Defensor",
      age: 28,
      nationality: "Países Bajos",
      stats: "Goles: 2, Asistencias: 2",
      video: "https://www.youtube.com/embed/yamll4MJKU4?si=Md37lkeRBOy8aNle"
    },
    "manuel-akanji": {
      name: "Manuel Akanji",
      position: "Defensor",
      age: 27,
      nationality: "Suiza",
      stats: "Goles: 1, Asistencias: 0",
      video: "https://www.youtube.com/embed/BbAenuJf3HQ?si=SKF_PWdC3h-M76x1"
    },
    "kyle-walker": {
      name: "Kyle Walker",
      position: "Defensor",
      age: 32,
      nationality: "Inglaterra",
      stats: "Goles: 0, Asistencias: 2",
      video: "https://www.youtube.com/embed/fFU2YkPK5t4?si=utKbtP2_sg36rtb6"
    },
    "john-stones": {
      name: "John Stones",
      position: "Defensor",
      age: 29,
      nationality: "Inglaterra",
      stats: "Goles: 3, Asistencias: 1",
      video: "https://www.youtube.com/embed/lgLvBn9YbN0?si=pEgCrQibiUN1lxDx"
    },
    "kevin-de-bruyne": {
      name: "Kevin De Bruyne",
      position: "Mediocampista",
      age: 31,
      nationality: "Bélgica",
      stats: "Goles: 10, Asistencias: 18",
      video: "https://www.youtube.com/embed/tzP2DTbTsDA?si=zGJ6IcyXZFOUgmr_"
    },
    "mateo-kovacic": {
      name: "Mateo Kovacic",
      position: "Mediocampista",
      age: 28,
      nationality: "Croacia",
      stats: "Goles: 1, Asistencias: 3",
      video: "https://www.youtube.com/embed/hn73zciMeuo?si=PsAbH1L6vKJHwSLo"
    },
    "jack-grealish": {
      name: "Jack Grealish",
      position: "Mediocampista",
      age: 27,
      nationality: "Inglaterra",
      stats: "Goles: 8, Asistencias: 12",
      video: "https://www.youtube.com/embed/sWFeOsdwndU?si=Iagn7lkEdQYeN4kH"
    },
    "phil-foden": {
      name: "Phil Foden",
      position: "Mediocampista",
      age: 23,
      nationality: "Inglaterra",
      stats: "Goles: 7, Asistencias: 8",
      video: "https://www.youtube.com/embed/9Z8u8BHbOiA?si=AGwcIpwglgLqtdug"
    },
    "gundogan": {
      name: "Gundogan",
      position: "Mediocampista",
      age: 32,
      nationality: "Alemania",
      stats: "Goles: 5, Asistencias: 7",
      video: "https://www.youtube.com/embed/MLvO9eLjmOA?si=eCYiitN3mI-uaxuj"
    },
    "rodri": {
      name: "Rodri",
      position: "Mediocampista",
      age: 27,
      nationality: "España",
      stats: "Goles: 6, Asistencias: 3",
      video: "https://www.youtube.com/embed/iXJHCNVT9zI?si=gq2vTuHXvpkSDahL"
    },
    "bernardo-silva": {
      name: "Bernardo Silva",
      position: "Mediocampista",
      age: 29,
      nationality: "Portugal",
      stats: "Goles: 4, Asistencias: 9",
      video: "https://www.youtube.com/embed/ECXNqYrNou4?si=LOyHItIc3UU10Krq"
    },
    "erling-haaland": {
      name: "Erling Haaland",
      position: "Delantero",
      age: 22,
      nationality: "Noruega",
      stats: "Goles: 36, Asistencias: 8",
      video: "https://www.youtube.com/embed/ZDLE2d1dwZs?si=nR7_KKXi-Hu6-iCl"
    },
    "savinho": {
      name: "Savinho",
      position: "Delantero",
      age: 19,
      nationality: "Brasil",
      stats: "Goles: 1, Asistencias: 1",
      video: "https://www.youtube.com/embed/o9BlILl5aoI?si=gzJ8fdKLfdd9fv3V"
    },
  };
  // Agrega el resto de jugadores con sus respectivos videos aquí

// Elementos del DOM
const playerDetails = document.getElementById("player-details");
const playerName = document.getElementById("player-name");
const playerPosition = document.getElementById("player-position");
const playerAge = document.getElementById("player-age");
const playerNationality = document.getElementById("player-nationality");
const playerStats = document.getElementById("player-stats");
const playerVideo = document.getElementById("player-video");
const playerCards = document.querySelectorAll(".player-card");

// Evento para cada tarjeta (mostrar contenido al pasar el mouse)
playerCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const playerId = card.getAttribute("data-player");
    const player = playersInfo[playerId];

    if (player) {
      // Actualiza el contenido con la información del jugador
      playerName.textContent = `Nombre: ${player.name}`;
      playerPosition.textContent = `Posición: ${player.position}`;
      playerAge.textContent = `Edad: ${player.age}`;
      playerNationality.textContent = `Nacionalidad: ${player.nationality}`;
      playerStats.textContent = `Estadísticas: ${player.stats}`;

      // Actualiza el video del jugador
      playerVideo.src = player.video; // Inserta el enlace del video

      // Muestra el contenedor de detalles
      playerDetails.style.display = "flex";
    }
  });

  // Oculta el contenedor cuando el mouse sale de la tarjeta
  card.addEventListener("mouseout", () => {
    
     // Limpia el enlace del video
  });
});

// Control del himno
const playAnthemButton = document.getElementById("play-anthem");
const anthemAudio = document.getElementById("anthem-audio");

playAnthemButton.addEventListener("click", () => {
  if (anthemAudio.paused) {
    anthemAudio.play();
    playAnthemButton.textContent = "⏸ Pausar Himno";
  } else {
    anthemAudio.pause();
    playAnthemButton.textContent = "🎵 Reproducir Himno";
  }
});
