class EmailNotificador {
  constructor(direccion, nombre) {
    if (direccion === undefined && nombre === undefined) {
      this.direccion = "desconocido@mail.com";
    } else if (direccion instanceof EmailNotificador) {
      this.direccion = direccion.direccion;
    } else if (nombre === undefined) {
      this.direccion = direccion;
    } else {
      this.direccion = `${nombre} <${direccion}>`;
    }
  }

  notificar(mensaje) {
    console.log(`Enviando '${mensaje}' a ${this.direccion}`);
  }
}

export default EmailNotificador;
