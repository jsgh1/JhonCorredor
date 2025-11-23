class Vehiculo {
  constructor(placa, pais) {
    if (new.target === Vehiculo) {
      throw new Error("Vehiculo es abstracto");
    }
    if (placa === undefined && pais === undefined) {
      this.placa = "XXX000";
      this.pais = "NA";
    } else if (placa instanceof Vehiculo) {
      this.placa = placa.placa;
      this.pais = placa.pais;
    } else if (pais === undefined) {
      this.placa = placa;
      this.pais = "NA";
    } else {
      this.placa = placa;
      this.pais = pais;
    }
  }

  mover() {
    throw new Error("Método abstracto");
  }
}

class Moto extends Vehiculo {
  constructor(arg1, arg2) {
    if (arg1 === undefined && arg2 === undefined) {
      super();
      this.tipo = "Scooter";
    } else if (arg1 instanceof Moto) {
      super(arg1);
      this.tipo = arg1.tipo;
    } else if (typeof arg1 === "string" && arg2 === undefined) {
      super(arg1);
      this.tipo = "Moto";
    } else if (typeof arg1 === "string" && typeof arg2 === "string") {
      super(arg1, arg2);
      this.tipo = "Moto";
    } else {
      super();
      this.tipo = "Scooter";
    }
  }

  mover() {
    console.log(`La moto con placa ${this.placa}-${this.pais} se mueve`);
  }
}

export { Vehiculo, Moto };
