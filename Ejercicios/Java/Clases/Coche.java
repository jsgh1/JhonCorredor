public class Coche {
    private String marca;
    private String modelo;
    private int anio;

    public Coche() {
        this("Genérico", "Base", 2000);
    }

    public Coche(String marca, String modelo, int anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    public Coche(String marca, String modelo) {
        this(marca, modelo, 2020);
    }

    public Coche(Coche otro) {
        this(otro.marca, otro.modelo, otro.anio);
    }
}
