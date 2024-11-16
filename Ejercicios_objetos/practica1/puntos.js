function Punto(coordX, coordY) {
  // constructor
  this.x = comprobarInt(coordX);
  this.y = comprobarInt(coordY);

  // metodo mostrar coordenadas
  this.mostrarCoordenadas = () => `(${this.x},${this.y})`;

  // metodo cambiar coordenadas
  this.cambiar = (newX, newY) => {
    this.x = comprobarInt(newX);
    this.y = comprobarInt(newY);
  };

  // metodo copiar objeto
  this.copia = () => {
    return new Punto(this.x, this.y);
  }

  // metodo suma 
  this.suma = (newPunto) => {
    return new Punto(this.x + newPunto.x, this.y + newPunto.y);
  }
}

function comprobarInt(num) {
  return Number.isInteger(num) ? num : 0;
}

let a = new Punto('aa',20);
console.log(a.mostrarCoordenadas());

a.cambiar(20,-8);
console.log(a.mostrarCoordenadas());

let b = a.copia();
console.log(b.mostrarCoordenadas());

let sumado = b.suma(a);
console.log(sumado.mostrarCoordenadas());