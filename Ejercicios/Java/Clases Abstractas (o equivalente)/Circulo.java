abstract class Figura {
    protected String color;

    public Figura() {
        this("Negro");
    }

    public Figura(String color) {
        this.color = color;
    }

    public Figura(String color, boolean rellena) {
        this.color = color + (rellena ? " rellena" : " sin relleno");
    }

    public Figura(Figura otra) {
        this.color = otra.color;
    }

    public abstract double area();
}

class Circulo extends Figura {
    private double radio;

    public Circulo() {
        super();
        this.radio = 1;
    }

    public Circulo(double radio, String color) {
        super(color);
        this.radio = radio;
    }

    public Circulo(double radio) {
        this.radio = radio;
    }

    public Circulo(Circulo otro) {
        super(otro);
        this.radio = otro.radio;
    }

    @Override
    public double area() {
        return Math.PI * radio * radio;
    }
}
