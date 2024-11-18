using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class CoordenadorRepositorio(ContextoMySql contexto) : ICoordenadorRepositorio
    {
        public async Task<Coordenador> Adicionar(Coordenador entidade)
        {
            contexto.Coordenadores.Add(entidade);
            
            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Coordenador entidade)
        {
            var coordenadorDoBanco = await contexto.Alunos.FirstOrDefaultAsync(coordenadores => coordenadores.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Coordenador), entidade.Id);

            contexto.Entry(coordenadorDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Coordenador> ObterPorId(int id)
        {
            return await contexto.Coordenadores.FirstOrDefaultAsync(coordenadores => coordenadores.Id == id) 
                ?? throw new ObjetoNaoEncontradoException(nameof(Coordenador), id);
        }

        public async Task<IEnumerable<Coordenador>> ObterTodos()
        {
            return await contexto.Coordenadores.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var coordenadores = await ObterPorId(id);

            contexto.Coordenadores.Remove(coordenadores);

            await contexto.SaveChangesAsync();
        }
    }
}
