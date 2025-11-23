package main

import "fmt"

type Animal interface {
	Sonido() string
}

type Perro struct {
	Nombre string
}

func NewPerro() *Perro {
	return &Perro{Nombre: "Perro"}
}

func NewPerroConNombre(nombre string) *Perro {
	return &Perro{Nombre: nombre}
}

func NewPerroConDatos(nombre string, edad int) *Perro {
	return &Perro{Nombre: fmt.Sprintf("%s (%d años)", nombre, edad)}
}

func NewPerroCopy(p *Perro) *Perro {
	return &Perro{Nombre: p.Nombre}
}

func (p *Perro) Sonido() string {
	return "Guau"
}
