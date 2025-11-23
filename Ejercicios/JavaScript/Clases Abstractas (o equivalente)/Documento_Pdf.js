class Documento {
  constructor(contenido, autor) {
    if (new.target === Documento) {
      throw new Error("Documento es abstracto");
    }
    if (contenido === undefined && autor === undefined) {
      this.contenido = "";
      this.autor = "Anónimo";
    } else if (contenido instanceof Documento) {
      this.contenido = contenido.contenido;
      this.autor = contenido.autor;
    } else if (autor === undefined) {
      this.contenido = contenido;
      this.autor = "Desconocido";
    } else {
      this.contenido = contenido;
      this.autor = autor;
    }
  }

  imprimir() {
    throw new Error("Método abstracto");
  }
}

class Pdf extends Documento {
  constructor(arg1, arg2) {
    if (arg1 === undefined && arg2 === undefined) {
      super();
      this.version = "1.0";
    } else if (arg1 instanceof Pdf) {
      super(arg1);
      this.version = arg1.version;
    } else if (typeof arg1 === "string" && typeof arg2 === "string") {
      super(arg1, arg2);
      this.version = "1.0";
    } else if (typeof arg1 === "string" && arg2 === undefined) {
      super(arg1);
      this.version = "1.0";
    } else {
      super();
      this.version = "1.0";
    }
  }

  imprimir() {
    console.log(`PDF (${this.version}) - ${this.autor}: ${this.contenido}`);
  }
}

export { Documento, Pdf };
