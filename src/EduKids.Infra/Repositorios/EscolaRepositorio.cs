using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class EscolaRepositorio(ContextoMySql contexto) : IEscolaRepositorio
    {
        public async Task<Escola> Adicionar(Escola entidade)
        {
            contexto.Escolas.Add(entidade);
            
            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Escola entidade)
        {
            var escolaDoBanco = await contexto.Escolas.FirstOrDefaultAsync(escola => escola.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Escola), entidade.Id);

            contexto.Entry(escolaDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Escola> ObterPorId(int id)
        {
            return await contexto.Escolas.FirstOrDefaultAsync(escola => escola.Id == id) 
                ?? throw new ObjetoNaoEncontradoException(nameof(Escola), id);
        }

        public async Task<IEnumerable<Escola>> ObterTodos()
        {
            return await contexto.Escolas.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var escola = await ObterPorId(id);

            contexto.Escolas.Remove(escola);

            await contexto.SaveChangesAsync();
        }
    }
}
