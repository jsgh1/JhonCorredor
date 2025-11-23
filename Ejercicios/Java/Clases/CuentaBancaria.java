public class CuentaBancaria {
    private String numero;
    private double saldo;

    public CuentaBancaria() {
        this("0000", 0);
    }

    public CuentaBancaria(String numero, double saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public CuentaBancaria(String numero) {
        this(numero, 0);
    }

    public CuentaBancaria(CuentaBancaria otra) {
        this(otra.numero, otra.saldo);
    }
}
