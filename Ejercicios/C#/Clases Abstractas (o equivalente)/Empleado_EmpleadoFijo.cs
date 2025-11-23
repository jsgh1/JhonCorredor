using System;

public abstract class Empleado
{
    public string Nombre;

    public Empleado()
    {
        Nombre = "Sin nombre";
    }

    public Empleado(string nombre)
    {
        Nombre = nombre;
    }

    public Empleado(string nombre, int antiguedad)
    {
        Nombre = $"{nombre} ({antiguedad} años)";
    }

    public Empleado(Empleado otro)
    {
        Nombre = otro.Nombre;
    }

    public abstract decimal CalcularSalario();
}

public class EmpleadoFijo : Empleado
{
    public decimal SalarioBase;

    public EmpleadoFijo() : base()
    {
        SalarioBase = 1000m;
    }

    public EmpleadoFijo(string nombre, decimal salarioBase) : base(nombre)
    {
        SalarioBase = salarioBase;
    }

    public EmpleadoFijo(string nombre) : base(nombre)
    {
        SalarioBase = 1200m;
    }

    public EmpleadoFijo(EmpleadoFijo otro) : base(otro)
    {
        SalarioBase = otro.SalarioBase;
    }

    public override decimal CalcularSalario() => SalarioBase;
}
