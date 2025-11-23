package main

type Documento interface {
	Contenido() string
}

type Pdf struct {
	texto string
}

func NewPdf() *Pdf {
	return &Pdf{texto: ""}
}

func NewPdfConTexto(texto string) *Pdf {
	return &Pdf{texto: texto}
}

func NewPdfTextoAutor(texto, autor string) *Pdf {
	return &Pdf{texto: texto + " - " + autor}
}

func NewPdfCopy(p *Pdf) *Pdf {
	return &Pdf{texto: p.texto}
}

func (p *Pdf) Contenido() string {
	return p.texto
}
