package main

type Usuario struct {
	Nombre string
	Edad   int
}

func NewUsuario() Usuario {
	return Usuario{Nombre: "Invitado", Edad: 0}
}

func NewUsuarioConDatos(nombre string, edad int) Usuario {
	return Usuario{Nombre: nombre, Edad: edad}
}

func NewUsuarioSoloNombre(nombre string) Usuario {
	return Usuario{Nombre: nombre, Edad: 0}
}

func NewUsuarioCopy(u Usuario) Usuario {
	return Usuario{Nombre: u.Nombre, Edad: u.Edad}
}
