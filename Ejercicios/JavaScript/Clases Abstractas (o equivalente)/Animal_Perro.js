class Animal {
  constructor(nombre, edad) {
    if (new.target === Animal) {
      throw new Error("Animal es abstracto");
    }
    if (nombre === undefined && edad === undefined) {
      this.nombre = "Animal";
      this.edad = 0;
    } else if (nombre instanceof Animal) {
      this.nombre = nombre.nombre;
      this.edad = nombre.edad;
    } else if (edad === undefined) {
      this.nombre = nombre;
      this.edad = 0;
    } else {
      this.nombre = nombre;
      this.edad = edad;
    }
  }

  sonido() {
    throw new Error("Método abstracto");
  }
}

class Perro extends Animal {
  constructor(arg1, arg2) {
    if (arg1 === undefined && arg2 === undefined) {
      super();
      this.raza = "Mestizo";
    } else if (arg1 instanceof Perro) {
      super(arg1);
      this.raza = arg1.raza;
    } else if (typeof arg1 === "string" && arg2 === undefined) {
      super(arg1);
      this.raza = "Desconocida";
    } else if (typeof arg1 === "string" && typeof arg2 === "number") {
      super(arg1, arg2);
      this.raza = "Desconocida";
    } else {
      super();
      this.raza = "Mestizo";
    }
  }

  sonido() {
    console.log("Guau");
  }
}

export { Animal, Perro };
