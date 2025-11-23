public class Persona {
    private String nombre;
    private int edad;

    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
    }

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public Persona(String nombre) {
        this(nombre, 0);
    }

    public Persona(Persona otra) {
        this.nombre = otra.nombre;
        this.edad = otra.edad;
    }
}
