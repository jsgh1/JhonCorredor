package main

type Empleado interface {
	Salario() float64
}

type EmpleadoFijo struct {
	Nombre string
	Base   float64
}

func NewEmpleadoFijo() *EmpleadoFijo {
	return &EmpleadoFijo{Nombre: "Sin nombre", Base: 1000}
}

func NewEmpleadoFijoConDatos(nombre string, base float64) *EmpleadoFijo {
	return &EmpleadoFijo{Nombre: nombre, Base: base}
}

func NewEmpleadoFijoNombre(nombre string) *EmpleadoFijo {
	return &EmpleadoFijo{Nombre: nombre, Base: 1200}
}

func NewEmpleadoFijoCopy(e *EmpleadoFijo) *EmpleadoFijo {
	return &EmpleadoFijo{Nombre: e.Nombre, Base: e.Base}
}

func (e *EmpleadoFijo) Salario() float64 {
	return e.Base
}
