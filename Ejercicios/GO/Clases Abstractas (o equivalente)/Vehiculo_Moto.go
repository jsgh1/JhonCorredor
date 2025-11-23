package main

type Vehiculo interface {
	Mover() string
}

type Moto struct {
	Placa string
}

func NewMoto() *Moto {
	return &Moto{Placa: "XXX000"}
}

func NewMotoConPlaca(placa string) *Moto {
	return &Moto{Placa: placa}
}

func NewMotoPlacaPais(placa, pais string) *Moto {
	return &Moto{Placa: placa + "-" + pais}
}

func NewMotoCopy(m *Moto) *Moto {
	return &Moto{Placa: m.Placa}
}

func (m *Moto) Mover() string {
	return "La moto se mueve"
}
