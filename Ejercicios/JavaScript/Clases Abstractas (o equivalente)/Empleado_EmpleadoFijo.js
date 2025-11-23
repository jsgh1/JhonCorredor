class Empleado {
  constructor(nombre, antiguedad) {
    if (new.target === Empleado) {
      throw new Error("Empleado es abstracto");
    }
    if (nombre === undefined && antiguedad === undefined) {
      this.nombre = "Sin nombre";
    } else if (nombre instanceof Empleado) {
      this.nombre = nombre.nombre;
    } else if (antiguedad === undefined) {
      this.nombre = nombre;
    } else {
      this.nombre = `${nombre} (${antiguedad} años)`;
    }
  }

  salario() {
    throw new Error("Método abstracto");
  }
}

class EmpleadoFijo extends Empleado {
  constructor(arg1, arg2) {
    if (arg1 === undefined && arg2 === undefined) {
      super();
      this.base = 1000;
    } else if (arg1 instanceof EmpleadoFijo) {
      super(arg1);
      this.base = arg1.base;
    } else if (typeof arg1 === "string" && arg2 === undefined) {
      super(arg1);
      this.base = 1200;
    } else if (typeof arg1 === "string" && typeof arg2 === "number") {
      super(arg1);
      this.base = arg2;
    } else {
      super();
      this.base = 1000;
    }
  }

  salario() {
    return this.base;
  }
}

export { Empleado, EmpleadoFijo };
