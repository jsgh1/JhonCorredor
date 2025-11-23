abstract class Vehiculo {
    protected String placa;

    public Vehiculo() {
        this("XXX000");
    }

    public Vehiculo(String placa) {
        this.placa = placa;
    }

    public Vehiculo(String placa, String pais) {
        this.placa = placa + "-" + pais;
    }

    public Vehiculo(Vehiculo otro) {
        this.placa = otro.placa;
    }

    public abstract void mover();
}

class Moto extends Vehiculo {
    public Moto() {
        super();
    }

    public Moto(String placa) {
        super(placa);
    }

    public Moto(String placa, String pais) {
        super(placa, pais);
    }

    public Moto(Moto otra) {
        super(otra);
    }

    @Override
    public void mover() {
        System.out.println("La moto se mueve");
    }
}
