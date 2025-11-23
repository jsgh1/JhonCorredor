interface ISerializable {
    String serialize();
}

public class Usuario implements ISerializable {
    private String nombre;

    public Usuario() {
        this("Invitado");
    }

    public Usuario(String nombre) {
        this.nombre = nombre;
    }

    public Usuario(String nombre, int edad) {
        this.nombre = nombre + " (" + edad + ")";
    }

    public Usuario(Usuario otro) {
        this.nombre = otro.nombre;
    }

    @Override
    public String serialize() {
        return nombre;
    }
}
