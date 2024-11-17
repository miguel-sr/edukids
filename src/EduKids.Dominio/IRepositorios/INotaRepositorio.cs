using EduKids.Dominio.Modelos;

namespace EduKids.Dominio.IRepositorios
{
    public interface INotaRepositorio : IRepositorio<Nota>
    {
        Task<ResumoDeNotas> ObterResumoDeNotas(int idAluno, int idDisciplina);
    }
}
