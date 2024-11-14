using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class RespostaRepositorio(ContextoMySql contexto) : IRespostaRepositorio
    {
        public async Task<Resposta> Adicionar(Resposta entidade)
        {
            contexto.Respostas.Add(entidade);

            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Resposta entidade)
        {
            var respostaDoBanco = await contexto.Respostas.FirstOrDefaultAsync(resposta => resposta.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Resposta), entidade.Id);

            contexto.Entry(respostaDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Resposta> ObterPorId(int id)
        {
            return await contexto.Respostas.FirstOrDefaultAsync(resposta => resposta.Id == id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Resposta), id);
        }

        public async Task<IEnumerable<Resposta>> ObterTodos()
        {
            return await contexto.Respostas.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var pergunta = await ObterPorId(id);

            contexto.Respostas.Remove(pergunta);

            await contexto.SaveChangesAsync();
        }
    }
}
