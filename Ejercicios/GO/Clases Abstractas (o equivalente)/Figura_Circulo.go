package main

type Figura interface {
	Area() float64
}

type Circulo struct {
	Color string
	Radio float64
}

func NewCirculo() *Circulo {
	return &Circulo{Color: "Negro", Radio: 1}
}

func NewCirculoConDatos(color string, radio float64) *Circulo {
	return &Circulo{Color: color, Radio: radio}
}

func NewCirculoRadio(radio float64) *Circulo {
	return &Circulo{Color: "Negro", Radio: radio}
}

func NewCirculoCopy(c *Circulo) *Circulo {
	return &Circulo{Color: c.Color, Radio: c.Radio}
}

func (c *Circulo) Area() float64 {
	return 3.14159 * c.Radio * c.Radio
}
