using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class ProfessorRepositorio(ContextoMySql contexto) : IProfessorRepositorio
    {
        public async Task<Professor> Adicionar(Professor entidade)
        {
            contexto.Professores.Add(entidade);

            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Professor entidade)
        {
            var professorDoBanco = await contexto.Professores.FirstOrDefaultAsync(professor => professor.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Professor), entidade.Id);

            contexto.Entry(professorDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Professor> ObterPorId(int id)
        {
            return await contexto.Professores.FirstOrDefaultAsync(professor => professor.Id == id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Professor), id);
        }

        public async Task<IEnumerable<Professor>> ObterTodos()
        {
            return await contexto.Professores.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var professor = await ObterPorId(id);

            contexto.Professores.Remove(professor);

            await contexto.SaveChangesAsync();
        }
    }
}
