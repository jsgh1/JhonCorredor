class Coche {
  constructor(marca, modelo, anio) {
    if (marca === undefined && modelo === undefined && anio === undefined) {
      this.marca = "Genérico";
      this.modelo = "Base";
      this.anio = 2000;
    } else if (marca instanceof Coche) {
      this.marca = marca.marca;
      this.modelo = marca.modelo;
      this.anio = marca.anio;
    } else if (anio === undefined) {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = 2020;
    } else {
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
  }
}

export default Coche;
