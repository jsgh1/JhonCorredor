class CalculadoraBasica {
  constructor(nombre, version) {
    if (nombre === undefined && version === undefined) {
      this.nombre = "Básica";
    } else if (nombre instanceof CalculadoraBasica) {
      this.nombre = nombre.nombre;
    } else if (version === undefined) {
      this.nombre = nombre;
    } else {
      this.nombre = `${nombre} v${version}`;
    }
  }

  sumar(a, b) {
    return a + b;
  }
}

export default CalculadoraBasica;
