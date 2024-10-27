/*
5. Crea un array llamado valores que contenga números, algunos de los cuales son duplicados. Utiliza un Set para crear un nuevo array que contenga solo los números únicos y luego imprímelo.
*/

let valores = [3, 3, 3, 6, 6, 7, 7, 7];

let lista = new Set(valores);
console.log(lista);
