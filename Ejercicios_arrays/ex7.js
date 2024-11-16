/*
7. Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las
combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que no se pueden
repetir los números en una misma combinación.
*/

for (let i = 1; i <= 50; i++) {
  console.log(`Ronda Numero ${i}:`)
  let loteria = new Set();
  while (loteria.size < 6) {
    let num = Math.floor(Math.random() * 50) + 1;
    loteria.add(num); 
  }
  let numeros = [...loteria];
  numeros.sort((a, b) => a - b);
  console.log(numeros.join("-"));
}
