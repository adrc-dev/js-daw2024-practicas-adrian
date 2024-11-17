// agregamos el metodo media a todos los arrays
Array.prototype.media = function () {
  let suma = this.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  return suma / this.length;
};

// creamos el array de prueba
let array1 = [1, 2, 3, 4];
let array2 = [0, 10];

// verificamos el prototipo que hemos creado
console.log(array1.__proto__.media);

// probamos si funciona correctamente
console.log(array1.media()); // 10/4=2.5
console.log(array2.media()); // 10/2=5
