using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class AlunoRepositorio(ContextoMySql contexto) : IAlunoRepositorio
    {
        public async Task<Aluno> Adicionar(Aluno entidade)
        {
            contexto.Alunos.Add(entidade);
            
            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Aluno entidade)
        {
            var alunoDoBanco = await contexto.Alunos.FirstOrDefaultAsync(aluno => aluno.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Aluno), entidade.Id);

            contexto.Entry(alunoDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Aluno> ObterPorId(int id)
        {
            return await contexto.Alunos.FirstOrDefaultAsync(aluno => aluno.Id == id) 
                ?? throw new ObjetoNaoEncontradoException(nameof(Aluno), id);
        }

        public async Task<IEnumerable<Aluno>> ObterTodos()
        {
            return await contexto.Alunos.ToListAsync();
        }

        public async Task<IEnumerable<AlunoComMateria>> ObterTodosComMateria()
        {
            return await contexto.AlunosComMaterias.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var aluno = await ObterPorId(id);

            contexto.Alunos.Remove(aluno);

            await contexto.SaveChangesAsync();
        }
    }
}
