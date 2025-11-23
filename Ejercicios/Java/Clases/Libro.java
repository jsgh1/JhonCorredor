public class Libro {
    private String titulo;
    private String autor;

    public Libro() {
        this("Sin título", "Anónimo");
    }

    public Libro(String titulo, String autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    public Libro(String titulo) {
        this(titulo, "Desconocido");
    }

    public Libro(Libro otro) {
        this(otro.titulo, otro.autor);
    }
}
