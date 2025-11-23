interface ILog {
    void log(String mensaje);
}

public class ConsolaLog implements ILog {
    private String prefijo;

    public ConsolaLog() {
        this("[INFO]");
    }

    public ConsolaLog(String prefijo) {
        this.prefijo = prefijo;
    }

    public ConsolaLog(String prefijo, boolean mayusculas) {
        this.prefijo = mayusculas ? prefijo.toUpperCase() : prefijo;
    }

    public ConsolaLog(ConsolaLog otro) {
        this.prefijo = otro.prefijo;
    }

    @Override
    public void log(String mensaje) {
        System.out.println(prefijo + " " + mensaje);
    }
}
