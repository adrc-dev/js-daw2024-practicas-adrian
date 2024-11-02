/*
6. Crea un Map que almacene nombres como claves y edades como valores. Luego, agrega algunos nombres y edades, actualiza la edad de uno de ellos, y finalmente imprime todos los nombres con sus edades.
*/

let personas = new Map();

personas.set("Pedro", 23).set("Milena", 31).set("Laia", 18).set("Nymeria", 5);
console.log("Original");
for (let [nombre, edad] of personas) {
  console.log(`El alumno ${nombre} tiene ${edad} años`);
}

personas.set("Nymeria", 10);
console.log("Edad cambiada");
for (let [nombre, edad] of personas) {
  console.log(`El alumno ${nombre} tiene ${edad} años`);
}
