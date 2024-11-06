using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Turmas
{
    public class ServicoDeTurmas(ITurmaRepositorio repositorio) : ITurmaRepositorio
    {
        public async Task<Turma> Adicionar(Turma entidade)
        {
            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Turma entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Turma> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Turma>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
