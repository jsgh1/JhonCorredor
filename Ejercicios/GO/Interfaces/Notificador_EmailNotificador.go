package main

import "fmt"

type Notificador interface {
	Notificar(msg string)
}

type EmailNotificador struct {
	Direccion string
}

func NewEmailNotificador() *EmailNotificador {
	return &EmailNotificador{Direccion: "desconocido@mail.com"}
}

func NewEmailNotificadorConDir(dir string) *EmailNotificador {
	return &EmailNotificador{Direccion: dir}
}

func NewEmailNotificadorNombre(dir, nombre string) *EmailNotificador {
	return &EmailNotificador{Direccion: nombre + " <" + dir + ">"}
}

func NewEmailNotificadorCopy(e *EmailNotificador) *EmailNotificador {
	return &EmailNotificador{Direccion: e.Direccion}
}

func (e *EmailNotificador) Notificar(msg string) {
	fmt.Println("Enviando", msg, "a", e.Direccion)
}
