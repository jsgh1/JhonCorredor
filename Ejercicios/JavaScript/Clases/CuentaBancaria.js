class CuentaBancaria {
  constructor(numero, saldo) {
    if (numero === undefined && saldo === undefined) {
      this.numero = "0000";
      this.saldo = 0;
    } else if (numero instanceof CuentaBancaria) {
      this.numero = numero.numero;
      this.saldo = numero.saldo;
    } else if (saldo === undefined) {
      this.numero = numero;
      this.saldo = 0;
    } else {
      this.numero = numero;
      this.saldo = saldo;
    }
  }
}

export default CuentaBancaria;
