using EduKids.Dominio.Modelos;

namespace EduKids.Dominio.IRepositorios
{
    public interface IAlunoRepositorio : IUsuarioRepositorio<Aluno>
    {
        Task<IEnumerable<AlunoComMateria>> ObterTodosComMateria();
    }
}
