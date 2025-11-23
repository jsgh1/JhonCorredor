public class Producto {
    private String nombre;
    private double precio;

    public Producto() {
        this("Desconocido", 0);
    }

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public Producto(String nombre) {
        this(nombre, 10);
    }

    public Producto(Producto otro) {
        this(otro.nombre, otro.precio);
    }
}
