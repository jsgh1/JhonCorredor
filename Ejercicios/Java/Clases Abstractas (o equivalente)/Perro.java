abstract class Animal {
    protected String nombre;

    public Animal() {
        this("Animal");
    }

    public Animal(String nombre) {
        this.nombre = nombre;
    }

    public Animal(String nombre, int edad) {
        this.nombre = nombre + " (" + edad + " años)";
    }

    public Animal(Animal otro) {
        this.nombre = otro.nombre;
    }

    public abstract void sonido();
}

class Perro extends Animal {
    public Perro() {
        super();
    }

    public Perro(String nombre) {
        super(nombre);
    }

    public Perro(String nombre, int edad) {
        super(nombre, edad);
    }

    public Perro(Perro otro) {
        super(otro);
    }

    @Override
    public void sonido() {
        System.out.println("Guau");
    }
}
