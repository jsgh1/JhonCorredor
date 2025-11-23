using System;

public interface INotificable
{
    void Notificar(string mensaje);
}

public class EmailNotificador : INotificable
{
    public string Direccion;

    public EmailNotificador()
    {
        Direccion = "desconocido@mail.com";
    }

    public EmailNotificador(string direccion)
    {
        Direccion = direccion;
    }

    public EmailNotificador(string direccion, string nombre)
    {
        Direccion = $"{nombre} <{direccion}>";
    }

    public EmailNotificador(EmailNotificador otro)
    {
        Direccion = otro.Direccion;
    }

    public void Notificar(string mensaje)
        => Console.WriteLine($"Enviando '{mensaje}' a {Direccion}");
}
