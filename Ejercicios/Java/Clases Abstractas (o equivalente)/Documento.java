abstract class Documento {
    protected String contenido;

    public Documento() {
        this("");
    }

    public Documento(String contenido) {
        this.contenido = contenido;
    }

    public Documento(String contenido, String autor) {
        this.contenido = contenido + " - " + autor;
    }

    public Documento(Documento otro) {
        this.contenido = otro.contenido;
    }

    public abstract void imprimir();
}

class Pdf extends Documento {
    public Pdf() {
        super();
    }

    public Pdf(String contenido) {
        super(contenido);
    }

    public Pdf(String contenido, String autor) {
        super(contenido, autor);
    }

    public Pdf(Pdf otro) {
        super(otro);
    }

    @Override
    public void imprimir() {
        System.out.println("PDF: " + contenido);
    }
}
