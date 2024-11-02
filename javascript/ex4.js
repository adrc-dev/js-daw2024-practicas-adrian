/*
4. Crea un array llamado numeros con al menos seis números. Usa desestructuración para obtener los primeros dos números en variables individuales y almacena el resto de los números en un array llamado resto.
*/

let numeros = [1, 2, 3, 4, 5, 6];

[num1, num2,...resto] = numeros;

console.log(num1);
console.log(num2);
console.log(resto);