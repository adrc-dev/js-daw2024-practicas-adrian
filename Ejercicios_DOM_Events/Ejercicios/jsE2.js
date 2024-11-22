document.addEventListener('mouseover', mostrarCordenadas);

function mostrarCordenadas(evento) {
  document.getElementById('position').innerHTML = "(" + evento.clientX + "," + evento.clientY + ")";
}