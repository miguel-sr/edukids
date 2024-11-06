using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Disciplinas
{
    public class ServicoDeDisciplinas(IDisciplinaRepositorio repositorio) : IDisciplinaRepositorio
    {
        public async Task<Disciplina> Adicionar(Disciplina entidade)
        {
            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Disciplina entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Disciplina> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Disciplina>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
