package main

type Libro struct {
	Titulo string
	Autor  string
}

func NewLibro() Libro {
	return Libro{Titulo: "Sin título", Autor: "Anónimo"}
}

func NewLibroConDatos(titulo, autor string) Libro {
	return Libro{Titulo: titulo, Autor: autor}
}

func NewLibroTitulo(titulo string) Libro {
	return Libro{Titulo: titulo, Autor: "Desconocido"}
}

func NewLibroCopy(l Libro) Libro {
	return Libro{Titulo: l.Titulo, Autor: l.Autor}
}
