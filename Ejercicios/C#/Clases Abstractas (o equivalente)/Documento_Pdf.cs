using System;

public abstract class Documento
{
    public string Contenido;

    public Documento()
    {
        Contenido = "";
    }

    public Documento(string contenido)
    {
        Contenido = contenido;
    }

    public Documento(string contenido, string autor)
    {
        Contenido = contenido + " - " + autor;
    }

    public Documento(Documento otro)
    {
        Contenido = otro.Contenido;
    }

    public abstract void Imprimir();
}

public class Pdf : Documento
{
    public Pdf() : base() { }

    public Pdf(string contenido) : base(contenido) { }

    public Pdf(string contenido, string autor) : base(contenido, autor) { }

    public Pdf(Pdf otro) : base(otro) { }

    public override void Imprimir() => Console.WriteLine("Imprimiendo PDF: " + Contenido);
}
