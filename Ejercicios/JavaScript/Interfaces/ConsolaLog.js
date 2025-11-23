class ConsolaLog {
  constructor(prefijo, mayusculas) {
    if (prefijo === undefined && mayusculas === undefined) {
      this.prefijo = "[INFO]";
    } else if (prefijo instanceof ConsolaLog) {
      this.prefijo = prefijo.prefijo;
    } else if (mayusculas === undefined) {
      this.prefijo = prefijo;
    } else {
      this.prefijo = mayusculas ? prefijo.toUpperCase() : prefijo;
    }
  }

  log(mensaje) {
    console.log(this.prefijo, mensaje);
  }
}

export default ConsolaLog;
