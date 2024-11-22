// creamos el eventListener de teclado y llamamos a la funcion de generar imagen
document.addEventListener('keydown', generarImagen);

// funcion de generar imagen que recarga una nueva imagen cada vez que se apretan las teclas
function generarImagen(evento) {
  if(evento.altKey && evento.key === "F12") {
    document.getElementById('imagen').style.backgroundImage = `url('https://picsum.photos/1080/960?random=${Math.random()}')`;
  }
}