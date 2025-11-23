abstract class Empleado {
    protected String nombre;

    public Empleado() {
        this("Sin nombre");
    }

    public Empleado(String nombre) {
        this.nombre = nombre;
    }

    public Empleado(String nombre, int antiguedad) {
        this.nombre = nombre + " (" + antiguedad + " años)";
    }

    public Empleado(Empleado otro) {
        this.nombre = otro.nombre;
    }

    public abstract double salario();
}

class EmpleadoFijo extends Empleado {
    private double base;

    public EmpleadoFijo() {
        super();
        this.base = 1000;
    }

    public EmpleadoFijo(String nombre, double base) {
        super(nombre);
        this.base = base;
    }

    public EmpleadoFijo(String nombre) {
        this(nombre, 1200);
    }

    public EmpleadoFijo(EmpleadoFijo otro) {
        super(otro);
        this.base = otro.base;
    }

    @Override
    public double salario() {
        return base;
    }
}
