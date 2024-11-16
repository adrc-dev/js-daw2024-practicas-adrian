/* 
1. Crea un array llamado paises que contenga: "España", "Francia", "Alemania", "Italia".
Recorre el array e imprime el nombre de cada país. Después, elimina el primer país del
array y vuelve a recorrerlo e imprimir el array de nuevo. 
*/

let paises = ["España", "Francia", "Alemania", "Italia"];

console.log("LISTA PAISES");
for (let i of paises) {
  console.log(i);
}

delete paises[0];

console.log("LISTA PAISES");
for (let i in paises) {
  console.log(paises[i]);
}
