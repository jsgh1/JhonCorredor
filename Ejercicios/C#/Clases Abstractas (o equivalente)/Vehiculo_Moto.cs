using System;

public abstract class Vehiculo
{
    public string Placa;

    public Vehiculo()
    {
        Placa = "XXX000";
    }

    public Vehiculo(string placa)
    {
        Placa = placa;
    }

    public Vehiculo(string placa, string pais)
    {
        Placa = placa + "-" + pais;
    }

    public Vehiculo(Vehiculo otro)
    {
        Placa = otro.Placa;
    }

    public abstract void Mover();
}

public class Moto : Vehiculo
{
    public Moto() : base() { }

    public Moto(string placa) : base(placa) { }

    public Moto(string placa, string pais) : base(placa, pais) { }

    public Moto(Moto otra) : base(otra) { }

    public override void Mover() => Console.WriteLine("La moto se mueve");
}
