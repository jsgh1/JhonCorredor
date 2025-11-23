class Persona {
  constructor(nombre, edad) {
    if (nombre === undefined && edad === undefined) {
      this.nombre = "Sin nombre";
      this.edad = 0;
    } else if (nombre instanceof Persona) {
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
}

export default Persona;
