package main

type Coche struct {
	Marca  string
	Modelo string
	Anio   int
}

func NewCoche() Coche {
	return Coche{Marca: "Genérico", Modelo: "Base", Anio: 2000}
}

func NewCocheConDatos(marca, modelo string, anio int) Coche {
	return Coche{Marca: marca, Modelo: modelo, Anio: anio}
}

func NewCocheMarcaModelo(marca, modelo string) Coche {
	return Coche{Marca: marca, Modelo: modelo, Anio: 2020}
}

func NewCocheCopy(c Coche) Coche {
	return Coche{Marca: c.Marca, Modelo: c.Modelo, Anio: c.Anio}
}
