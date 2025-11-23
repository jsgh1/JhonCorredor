public class CuentaBancaria
{
    public string Numero;
    public decimal Saldo;

    public CuentaBancaria()
    {
        Numero = "0000";
        Saldo = 0m;
    }

    public CuentaBancaria(string numero, decimal saldo)
    {
        Numero = numero;
        Saldo = saldo;
    }

    public CuentaBancaria(string numero)
    {
        Numero = numero;
        Saldo = 0m;
    }

    public CuentaBancaria(CuentaBancaria otra)
    {
        Numero = otra.Numero;
        Saldo = otra.Saldo;
    }
}
