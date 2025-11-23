class Libro {
  constructor(titulo, autor) {
    if (titulo === undefined && autor === undefined) {
      this.titulo = "Sin título";
      this.autor = "Anónimo";
    } else if (titulo instanceof Libro) {
      this.titulo = titulo.titulo;
      this.autor = titulo.autor;
    } else if (autor === undefined) {
      this.titulo = titulo;
      this.autor = "Desconocido";
    } else {
      this.titulo = titulo;
      this.autor = autor;
    }
  }
}

export default Libro;
