class Persona {
  
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  presentarse() {
    return "Hola me llamo " + this.nombre + " tengo " + this.edad + " años, soy " + this.profesion + ", encantado de conocerte.";
  }

  cumplirAnyos() {
    this.edad += 1;
  }

}

let jose = new Persona("Jose", 31, "Ingeniero de Software");

console.log(jose.presentarse());

jose.cumplirAnyos();

console.log(jose.presentarse());