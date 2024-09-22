namespace EduKids.Dominio.IRepositorios
{
    public interface IRepositorio<T> where T : class
    {
        Task<T> Adicionar(T entidade);
        Task Remover(int id);
        Task Atualizar(T entidade);
        Task<T> ObterPorId(int id);
        Task<IEnumerable<T>> ObterTodos();
    }
}
