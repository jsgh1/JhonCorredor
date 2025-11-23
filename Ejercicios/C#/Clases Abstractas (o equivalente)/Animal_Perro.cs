using System;

public abstract class Animal
{
    public string Nombre;

    public Animal()
    {
        Nombre = "Animal";
    }

    public Animal(string nombre)
    {
        Nombre = nombre;
    }

    public Animal(string nombre, int edad)
    {
        Nombre = $"{nombre} ({edad} años)";
    }

    public Animal(Animal otro)
    {
        Nombre = otro.Nombre;
    }

    public abstract void HacerSonido();
}

public class Perro : Animal
{
    public Perro() : base() { }

    public Perro(string nombre) : base(nombre) { }

    public Perro(string nombre, int edad) : base(nombre, edad) { }

    public Perro(Perro otro) : base(otro) { }

    public override void HacerSonido() => Console.WriteLine("Guau");
}
