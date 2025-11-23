package main

type Calculadora interface {
	Sumar(a, b int) int
}

type CalculadoraBasica struct {
	Nombre string
}

func NewCalculadoraBasica() *CalculadoraBasica {
	return &CalculadoraBasica{Nombre: "Básica"}
}

func NewCalculadoraBasicaNombre(nombre string) *CalculadoraBasica {
	return &CalculadoraBasica{Nombre: nombre}
}

func NewCalculadoraBasicaVersion(nombre, version string) *CalculadoraBasica {
	return &CalculadoraBasica{Nombre: nombre + " v" + version}
}

func NewCalculadoraBasicaCopy(c *CalculadoraBasica) *CalculadoraBasica {
	return &CalculadoraBasica{Nombre: c.Nombre}
}

func (c *CalculadoraBasica) Sumar(a, b int) int {
	return a + b
}
