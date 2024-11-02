// funcion pedir palabras
function pedirPalabras() {
  let palabras = [];
  let palabra = "";
  do {
    palabra = prompt("Dime una palabra");
    if (palabra) {
      palabras.push(palabra);
    }
  } while (palabra);
  return palabras;
}

//funcion ordenar a la inversa y sin repetirse
function ordenInversa(palabras) {
  // ordenamos las palabras en orden inversa en español
  palabras.sort((a,b)=>b.localeCompare(a, "es"));

  // hacemos un Set para eliminar las repetidas
  let sinRepetidas = new Set(palabras);
  
  // convertimos el Set en Array
  palabras = [...sinRepetidas];
  return palabras;
}

// funcion contar palabras
function contarPalabras(palabras) {
  contador = new Map();

  // bucle forEach que verifica si tenemos la palabra en el Map
  palabras.forEach((palabra) => {
    if (contador.has(palabra)) {
      // caso la tengamos agrega uno a la clave palabra
      contador.set(palabra, contador.get(palabra) + 1);
    }
    // caso no la tengamos agrega la palabra al map con el valor 1
    else {
      contador.set(palabra, 1);
    }
  });
  return contador;
}
