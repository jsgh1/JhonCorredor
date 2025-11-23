package main

type Cuenta struct {
	Numero string
	Saldo  float64
}

func NewCuenta() Cuenta {
	return Cuenta{Numero: "0000", Saldo: 0}
}

func NewCuentaConDatos(num string, saldo float64) Cuenta {
	return Cuenta{Numero: num, Saldo: saldo}
}

func NewCuentaNumero(num string) Cuenta {
	return Cuenta{Numero: num, Saldo: 0}
}

func NewCuentaCopy(c Cuenta) Cuenta {
	return Cuenta{Numero: c.Numero, Saldo: c.Saldo}
}
