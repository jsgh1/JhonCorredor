interface ICalculadora {
    int sumar(int a, int b);
}

public class CalculadoraBasica implements ICalculadora {
    private String nombre;

    public CalculadoraBasica() {
        this("Básica");
    }

    public CalculadoraBasica(String nombre) {
        this.nombre = nombre;
    }

    public CalculadoraBasica(String nombre, String version) {
        this.nombre = nombre + " v" + version;
    }

    public CalculadoraBasica(CalculadoraBasica otra) {
        this.nombre = otra.nombre;
    }

    @Override
    public int sumar(int a, int b) {
        return a + b;
    }
}
