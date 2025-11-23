using System;

public abstract class Figura
{
    public string Color;

    public Figura()
    {
        Color = "Negro";
    }

    public Figura(string color)
    {
        Color = color;
    }

    public Figura(string color, bool rellena)
    {
        Color = color + (rellena ? " rellena" : " sin relleno");
    }

    public Figura(Figura otra)
    {
        Color = otra.Color;
    }

    public abstract double Area();
}

public class Circulo : Figura
{
    public double Radio;

    public Circulo() : base()
    {
        Radio = 1.0;
    }

    public Circulo(double radio, string color) : base(color)
    {
        Radio = radio;
    }

    public Circulo(double radio) : base()
    {
        Radio = radio;
    }

    public Circulo(Circulo otro) : base(otro)
    {
        Radio = otro.Radio;
    }

    public override double Area() => Math.PI * Radio * Radio;
}
