using System;

public interface ICalculadora
{
    int Sumar(int a, int b);
}

public class CalculadoraBasica : ICalculadora
{
    public string Nombre;

    public CalculadoraBasica()
    {
        Nombre = "Básica";
    }

    public CalculadoraBasica(string nombre)
    {
        Nombre = nombre;
    }

    public CalculadoraBasica(string nombre, string version)
    {
        Nombre = $"{nombre} v{version}";
    }

    public CalculadoraBasica(CalculadoraBasica otra)
    {
        Nombre = otra.Nombre;
    }

    public int Sumar(int a, int b) => a + b;
}
