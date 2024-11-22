let elementos = document.querySelectorAll(".elemento");

elementos.forEach((element) => {
  element.addEventListener("click", ocultarBorrar);
  element.addEventListener("dblclick", ocultarBorrar);
});

function ocultarBorrar(evento) {
  if (evento.type == "click") {
    setTimeout(() => {
      evento.target.style.display = 'none';
    }, 300);
  }
  if (evento.type == "dblclick") {
    evento.target.remove();
  }
}


reaparece = document.getElementById('reaparecer');

function reaparecer(evento) {
  elementos.forEach(element => {
    if (element.style.display == 'none') {
      element.style.display = "block";  
    }
    
  });
}

reaparece.addEventListener('click', reaparecer);