/*
8. Se desea validar hasta qué punto la función Math.random es realmente aleatoria. Para tal fin, calcularemos 10.000 veces números aleatorios del 1 al 10. Por consola mostraremos cada número del 1 al 10 y a continuación el número de veces que ha salido ese número.
*/

let frec = new Array(11);

frec.fill(0);

for (let i = 0; i < 10000; i++) {
  let number = Math.floor(Math.random() * 10) + 1;
  frec[number]++;  
}

console.log("Frecuencias");
for (let i = 1; i <= 10; i++) {
  console.log(`Número ${i}: ${frec[i]}`);
}