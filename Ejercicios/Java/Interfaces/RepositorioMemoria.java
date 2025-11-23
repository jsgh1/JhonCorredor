import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

interface IRepositorio<T> {
    void agregar(T item);
}

public class RepositorioMemoria<T> implements IRepositorio<T> {
    private List<T> items;

    public RepositorioMemoria() {
        this.items = new ArrayList<>();
    }

    public RepositorioMemoria(Collection<T> inicial) {
        this.items = new ArrayList<>(inicial);
    }

    public RepositorioMemoria(int capacidad) {
        this.items = new ArrayList<>(capacidad);
    }

    public RepositorioMemoria(RepositorioMemoria<T> otro) {
        this.items = new ArrayList<>(otro.items);
    }

    @Override
    public void agregar(T item) {
        items.add(item);
    }
}
