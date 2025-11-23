public class Libro
{
    public string Titulo;
    public string Autor;

    public Libro()
    {
        Titulo = "Sin título";
        Autor = "Anónimo";
    }

    public Libro(string titulo, string autor)
    {
        Titulo = titulo;
        Autor = autor;
    }

    public Libro(string titulo)
    {
        Titulo = titulo;
        Autor = "Desconocido";
    }

    public Libro(Libro otro)
    {
        Titulo = otro.Titulo;
        Autor = otro.Autor;
    }
}
