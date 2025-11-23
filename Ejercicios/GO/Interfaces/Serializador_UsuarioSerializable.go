package main

import "fmt"

type Serializador interface {
	Serialize() string
}

type UsuarioSerializable struct {
	Nombre string
}

func NewUsuarioSerializable() *UsuarioSerializable {
	return &UsuarioSerializable{Nombre: "Invitado"}
}

func NewUsuarioSerializableNombre(nombre string) *UsuarioSerializable {
	return &UsuarioSerializable{Nombre: nombre}
}

func NewUsuarioSerializableNombreEdad(nombre string, edad int) *UsuarioSerializable {
	return &UsuarioSerializable{Nombre: fmt.Sprintf("%s (%d)", nombre, edad)}
}

func NewUsuarioSerializableCopy(u *UsuarioSerializable) *UsuarioSerializable {
	return &UsuarioSerializable{Nombre: u.Nombre}
}

func (u *UsuarioSerializable) Serialize() string {
	return u.Nombre
}
