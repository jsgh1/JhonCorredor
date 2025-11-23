class RepositorioMemoria {
  constructor(inicial, capacidad) {
    if (inicial === undefined && capacidad === undefined) {
      this.items = [];
    } else if (inicial instanceof RepositorioMemoria) {
      this.items = [...inicial.items];
    } else if (Array.isArray(inicial) && capacidad === undefined) {
      this.items = [...inicial];
    } else {
      this.items = new Array(capacidad);
    }
  }

  agregar(item) {
    this.items.push(item);
  }
}

export default RepositorioMemoria;
