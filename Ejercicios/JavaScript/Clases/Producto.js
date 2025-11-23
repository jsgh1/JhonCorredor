class Producto {
  constructor(nombre, precio) {
    if (nombre === undefined && precio === undefined) {
      this.nombre = "Desconocido";
      this.precio = 0;
    } else if (nombre instanceof Producto) {
      this.nombre = nombre.nombre;
      this.precio = nombre.precio;
    } else if (precio === undefined) {
      this.nombre = nombre;
      this.precio = 10;
    } else {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
}

export default Producto;
