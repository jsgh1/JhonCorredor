using System;

public interface ISerializable
{
    string Serialize();
}

public class Usuario : ISerializable
{
    public string Nombre;

    public Usuario()
    {
        Nombre = "Invitado";
    }

    public Usuario(string nombre)
    {
        Nombre = nombre;
    }

    public Usuario(string nombre, int edad)
    {
        Nombre = $"{nombre} ({edad})";
    }

    public Usuario(Usuario otro)
    {
        Nombre = otro.Nombre;
    }

    public string Serialize() => Nombre;
}
