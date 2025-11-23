class Figura {
  constructor(color, rellena) {
    if (new.target === Figura) {
      throw new Error("Figura es abstracta");
    }
    if (color === undefined && rellena === undefined) {
      this.color = "Negro";
    } else if (color instanceof Figura) {
      this.color = color.color;
    } else if (rellena === undefined) {
      this.color = color;
    } else {
      this.color = color + (rellena ? " rellena" : " sin relleno");
    }
  }

  area() {
    throw new Error("Método abstracto");
  }
}

class Circulo extends Figura {
  constructor(arg1, arg2) {
    if (arg1 === undefined && arg2 === undefined) {
      super();
      this.radio = 1;
    } else if (arg1 instanceof Circulo) {
      super(arg1);
      this.radio = arg1.radio;
    } else if (typeof arg1 === "number" && typeof arg2 === "string") {
      super(arg2);
      this.radio = arg1;
    } else if (typeof arg1 === "number" && arg2 === undefined) {
      super();
      this.radio = arg1;
    } else {
      super();
      this.radio = 1;
    }
  }

  area() {
    return Math.PI * this.radio * this.radio;
  }
}

export { Figura, Circulo };
