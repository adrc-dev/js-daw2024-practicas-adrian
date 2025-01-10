// elemento video
const video = document.getElementById("mainVideo");

// evento para pausar/despausar
video.addEventListener("click", () => {
  !video.paused ? video.pause() : video.play();
});

// evento para aparecer el tiempo
video.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // cancela el efecto del boton derecho
  let msg = document.getElementById("msg"); // cazamos el elemento msg
  let minutos = Math.floor(video.currentTime / 60); // calculamos los minutos
  let segundos = Math.floor(video.currentTime % 60); // calculamos los segundos
  let tiempo = `Duracion: ${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`; // mostramos siempre en formato MM:SS
  msg.textContent = tiempo; // mostramos el mensaje
});

video.play(); // iniciamos el video
video.loop = true; // ponemos en modo loop
video.playbackRate = 16; // velocidad rapida
