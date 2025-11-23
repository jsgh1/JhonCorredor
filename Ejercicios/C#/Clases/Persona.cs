public class Persona
{
    public string Nombre;
    public int Edad;

    public Persona()
    {
        Nombre = "Sin nombre";
        Edad = 0;
    }

    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    public Persona(string nombre)
    {
        Nombre = nombre;
        Edad = 0;
    }

    public Persona(Persona otra)
    {
        Nombre = otra.Nombre;
        Edad = otra.Edad;
    }
}
