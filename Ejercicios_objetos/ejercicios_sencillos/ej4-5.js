class Coche {
  
  constructor(marca, modelo, anyo) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
  }

  detalles() {
    return `Marca: ${this.marca}\n
    Modelo: ${this.modelo}\n
    Año: ${this.anyo}`;
  }

  encender() {
    return `El coche ${this.marca} ${this.modelo} ha sido encendido.`;
  }

}

let coche1 = new Coche("Nissan", "Primastar", 2006);
let coche2 = new Coche("BMW", "318D", 2016);

console.log(coche1.detalles());
console.log(coche2.detalles());

console.log(coche1.encender());
console.log(coche2.encender());