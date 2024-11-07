using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class TurmaRepositorio(ContextoMySql contexto) : ITurmaRepositorio
    {
        public async Task<Turma> Adicionar(Turma entidade)
        {
            contexto.Turmas.Add(entidade);
            
            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Turma entidade)
        {
            var turmaDoBanco = await contexto.Turmas.FirstOrDefaultAsync(turma => turma.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Turma), entidade.Id);

            contexto.Entry(turmaDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Turma> ObterPorId(int id)
        {
            return await contexto.Turmas.FirstOrDefaultAsync(aluno => aluno.Id == id) 
                ?? throw new ObjetoNaoEncontradoException(nameof(Turma), id);
        }

        public async Task<IEnumerable<Turma>> ObterTodos()
        {
            return await contexto.Turmas.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var turma = await ObterPorId(id);

            contexto.Turmas.Remove(turma);

            await contexto.SaveChangesAsync();
        }
    }
}
