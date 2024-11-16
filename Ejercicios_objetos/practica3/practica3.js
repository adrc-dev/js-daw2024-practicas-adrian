// creamos la clase
class Ordenador {
  // constructor con valores predeterminados caso no reciban un numero
  constructor(marca = "", modelo = "", ram = 4, hd = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = !isNaN(ram) ? ram : 4;
    this.hd = !isNaN(hd) ? hd : 512;
    this.pulgadas = !isNaN(pulgadas) ? pulgadas : 17;
  }
  // sobrecargamos el metodo toString
  toString() {
    return `El ordenador de la marca ${this.marca} y modelo ${this.modelo} cuenta con ${this.ram} GB de RAM, ${this.hd} GB de disco duro, una pantalla de ${this.pulgadas} pulgadas`;
  }
}

// prueba con argumentos
let mac = new Ordenador("Apple", "Mac Studio", 32, 2048, 27);
console.log(mac.toString());

// prueba sin argumentos
let samsung = new Ordenador("Samsung", "R55F80S");
console.log(samsung.toString());

// creamos la clase portatil que hereda de ordenador
class Portatil extends Ordenador {
  constructor(marca, modelo, ram, hd = 256, pulgadas = 12, autonomia = 4) {
    super(marca, modelo, ram);
    this.hd = !isNaN(hd) ? hd : 256;
    this.pulgadas = !isNaN(pulgadas) ? pulgadas : 12;
    this.autonomia = !isNaN(autonomia) ? autonomia : 4;
  }

  // sobrecargamos el metodo toString de la clase padre
  toString() {
    return (
      super.toString() + " y una autonomia de " + this.autonomia + " horas"
    );
  }
}

// prueba portatil con argumentos
let macbook = new Portatil("Apple", "MacBook Air", 8, 128, 13.6, 18);
console.log(macbook.toString());

// prueba portatil sin argumentos
let surface = new Portatil("Microsoft", "Surface");
console.log(surface.toString());
