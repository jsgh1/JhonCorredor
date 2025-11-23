using System;

public interface ILog
{
    void Log(string mensaje);
}

public class ConsolaLog : ILog
{
    public string Prefijo;

    public ConsolaLog()
    {
        Prefijo = "[INFO]";
    }

    public ConsolaLog(string prefijo)
    {
        Prefijo = prefijo;
    }

    public ConsolaLog(string prefijo, bool mayusculas)
    {
        Prefijo = mayusculas ? prefijo.ToUpper() : prefijo;
    }

    public ConsolaLog(ConsolaLog otro)
    {
        Prefijo = otro.Prefijo;
    }

    public void Log(string mensaje)
        => Console.WriteLine($"{Prefijo} {mensaje}");
}
