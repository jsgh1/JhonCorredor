class UsuarioSerializable {
  constructor(arg1, arg2) {
    if (arg1 === undefined && arg2 === undefined) {
      this.nombre = "Invitado";
    } else if (arg1 instanceof UsuarioSerializable) {
      this.nombre = arg1.nombre;
    } else if (arg2 === undefined) {
      this.nombre = arg1;
    } else {
      this.nombre = `${arg1} (${arg2})`;
    }
  }

  serialize() {
    return this.nombre;
  }
}

export default UsuarioSerializable;
