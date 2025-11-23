public class Coche
{
    public string Marca;
    public string Modelo;
    public int Año;

    public Coche()
    {
        Marca = "Genérico";
        Modelo = "Base";
        Año = 2000;
    }

    public Coche(string marca, string modelo, int año)
    {
        Marca = marca;
        Modelo = modelo;
        Año = año;
    }

    public Coche(string marca, string modelo)
    {
        Marca = marca;
        Modelo = modelo;
        Año = 2020;
    }

    public Coche(Coche otro)
    {
        Marca = otro.Marca;
        Modelo = otro.Modelo;
        Año = otro.Año;
    }
}
