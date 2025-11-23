public class Producto
{
    public string Nombre;
    public decimal Precio;

    public Producto()
    {
        Nombre = "Desconocido";
        Precio = 0m;
    }

    public Producto(string nombre, decimal precio)
    {
        Nombre = nombre;
        Precio = precio;
    }

    public Producto(string nombre)
    {
        Nombre = nombre;
        Precio = 10m;
    }

    public Producto(Producto otro)
    {
        Nombre = otro.Nombre;
        Precio = otro.Precio;
    }
}
