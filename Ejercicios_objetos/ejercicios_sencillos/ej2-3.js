class Libro {
  
  constructor(titulo, autor, paginas, anyoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.anyoPublicacion = anyoPublicacion;
  }

}

let libro = new Libro("Cien años de soledad", "Gabriel García Marquez", 417, 1967);

for(let propiedad in libro) {
  console.log(`${propiedad}: ${libro[propiedad]}`);
}