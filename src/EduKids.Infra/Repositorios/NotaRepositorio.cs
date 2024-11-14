using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class NotaRepositorio(ContextoMySql contexto) : INotaRepositorio
    {
        public async Task<Nota> Adicionar(Nota entidade)
        {
            contexto.Notas.Add(entidade);

            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Nota entidade)
        {
            var notaDoBanco = await contexto.Escolas.FirstOrDefaultAsync(nota => nota.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Nota), entidade.Id);

            contexto.Entry(notaDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Nota> ObterPorId(int id)
        {
            return await contexto.Notas.FirstOrDefaultAsync(escola => escola.Id == id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Nota), id);
        }

        public async Task<IEnumerable<Nota>> ObterTodos()
        {
            return await contexto.Notas.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var nota = await ObterPorId(id);

            contexto.Notas.Remove(nota);

            await contexto.SaveChangesAsync();
        }
    }
}
