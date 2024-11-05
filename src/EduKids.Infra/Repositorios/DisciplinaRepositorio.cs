using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class DisciplinaRepositorio(ContextoMySql contexto) : IDisciplinaRepositorio
    {
        public async Task<Disciplina> Adicionar(Disciplina entidade)
        {
            contexto.Disciplinas.Add(entidade);
            
            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Disciplina entidade)
        {
            var coordenadorDoBanco = await contexto.Disciplinas.FirstOrDefaultAsync(disciplina => disciplina.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Disciplina), entidade.Id);

            contexto.Entry(coordenadorDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Disciplina> ObterPorId(int id)
        {
            return await contexto.Disciplinas.FirstOrDefaultAsync(disciplina => disciplina.Id == id) 
                ?? throw new ObjetoNaoEncontradoException(nameof(Disciplina), id);
        }

        public async Task<IEnumerable<Disciplina>> ObterTodos()
        {
            return await contexto.Disciplinas.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var disciplina = await ObterPorId(id);

            contexto.Disciplinas.Remove(disciplina);

            await contexto.SaveChangesAsync();
        }
    }
}
