interface INotificable {
    void notificar(String mensaje);
}

public class EmailNotificador implements INotificable {
    private String direccion;

    public EmailNotificador() {
        this("desconocido@mail.com");
    }

    public EmailNotificador(String direccion) {
        this.direccion = direccion;
    }

    public EmailNotificador(String direccion, String nombre) {
        this.direccion = nombre + " <" + direccion + ">";
    }

    public EmailNotificador(EmailNotificador otro) {
        this.direccion = otro.direccion;
    }

    @Override
    public void notificar(String mensaje) {
        System.out.println("Enviando '" + mensaje + "' a " + direccion);
    }
}
