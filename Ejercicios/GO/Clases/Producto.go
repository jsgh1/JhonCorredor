package main

type Producto struct {
	Nombre string
	Precio float64
}

func NewProducto() Producto {
	return Producto{Nombre: "Desconocido", Precio: 0}
}

func NewProductoConDatos(nombre string, precio float64) Producto {
	return Producto{Nombre: nombre, Precio: precio}
}

func NewProductoNombre(nombre string) Producto {
	return Producto{Nombre: nombre, Precio: 10}
}

func NewProductoCopy(p Producto) Producto {
	return Producto{Nombre: p.Nombre, Precio: p.Precio}
}
