package main

type Repositorio[T any] interface {
	Agregar(item T)
}

type RepositorioMem[T any] struct {
	items []T
}

func NewRepositorioMem[T any]() *RepositorioMem[T] {
	return &RepositorioMem[T]{items: []T{}}
}

func NewRepositorioMemConDatos[T any](inicial []T) *RepositorioMem[T] {
	return &RepositorioMem[T]{items: inicial}
}

func NewRepositorioMemCapacidad[T any](cap int) *RepositorioMem[T] {
	return &RepositorioMem[T]{items: make([]T, 0, cap)}
}

func NewRepositorioMemCopy[T any](r *RepositorioMem[T]) *RepositorioMem[T] {
	copia := make([]T, len(r.items))
	copy(copia, r.items)
	return &RepositorioMem[T]{items: copia}
}

func (r *RepositorioMem[T]) Agregar(item T) {
	r.items = append(r.items, item)
}
