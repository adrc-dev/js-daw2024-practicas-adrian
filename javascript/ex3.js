/*
3. Crea el siguiente array:
  let data = [
  {name: "Nacho", telephone: "966112233", age: 40},
  {name: "Ana", telephone: "911223344", age: 35},
  {name: "Mario", phone: "611998877", age: 15},
  {name: "Laura", telephone: "633663366", age: 17}
  ];
  a) Añade dos elementos al final:
  {name: "Pedro", telephone: "611944444", age: 25},
  {name: "Julia", phone: "633232323", age: 37}
  b) Comprueba con console.log (data) que se han añadido.
  c) Ordena el vector por edad, comprueba el resultado.
  d) Ordena el vector por nombre, comprueba el resultado.
  e) Crea y muestra un nuevo vector que contenga solo los mayores de 30 años.
*/

let data = [
  { name: "Nacho", telephone: "966112233", age: 40 },
  { name: "Ana", telephone: "911223344", age: 35 },
  { name: "Mario", phone: "611998877", age: 15 },
  { name: "Laura", telephone: "633663366", age: 17 },
];

console.log("JSON original");
console.log(data);

// a)
data.push(
  { name: "Pedro", telephone: "611944444", age: 25 },
  { name: "Julia", phone: "633232323", age: 37 }
);

// b)
console.log("JSON agregado");
console.log(data);

// c)
data.sort(function (n1, n2) {
  return n1.age - n2.age
});
console.log("JSON ordenado por edad");
console.log(data);

// d)
data.sort((a, b) => a.name.localeCompare(b.name));
console.log("JSON ordenado por nombre");
console.log(data);

// e)
let dataMas30 = [];
data.forEach(element => {
  if (element.age > 30) {
    dataMas30.push(element);
  }
});
console.log("JSON de mayores de 30");
console.log(dataMas30);