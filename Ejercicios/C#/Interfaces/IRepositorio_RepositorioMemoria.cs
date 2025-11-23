using System.Collections.Generic;

public interface IRepositorio<T>
{
    void Agregar(T item);
}

public class RepositorioMemoria<T> : IRepositorio<T>
{
    private List<T> _items;

    public RepositorioMemoria()
    {
        _items = new List<T>();
    }

    public RepositorioMemoria(IEnumerable<T> inicial)
    {
        _items = new List<T>(inicial);
    }

    public RepositorioMemoria(int capacidad)
    {
        _items = new List<T>(capacidad);
    }

    public RepositorioMemoria(RepositorioMemoria<T> otro)
    {
        _items = new List<T>(otro._items);
    }

    public void Agregar(T item) => _items.Add(item);
}
