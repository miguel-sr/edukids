namespace EduKids.Dominio.IRepositorios
{
    public interface IUsuarioRepositorio<T> : IRepositorio<T> where T : class
    {
        Task<T> ObterUsuarioPorLoginESenha(string login, string senha);
    }
}
