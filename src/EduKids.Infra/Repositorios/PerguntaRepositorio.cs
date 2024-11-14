using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Repositorios
{
    public class PerguntaRepositorio(ContextoMySql contexto) : IPerguntaRepositorio
    {
        public async Task<Pergunta> Adicionar(Pergunta entidade)
        {
            contexto.Perguntas.Add(entidade);

            await contexto.SaveChangesAsync();

            return entidade;
        }

        public async Task Atualizar(Pergunta entidade)
        {
            var perguntaDoBanco = await contexto.Perguntas.FirstOrDefaultAsync(pergunta => pergunta.Id == entidade.Id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Pergunta), entidade.Id);

            contexto.Entry(perguntaDoBanco).CurrentValues.SetValues(entidade);

            await contexto.SaveChangesAsync();
        }

        public async Task<Pergunta> ObterPorId(int id)
        {
            return await contexto.Perguntas.FirstOrDefaultAsync(pergunta => pergunta.Id == id)
                ?? throw new ObjetoNaoEncontradoException(nameof(Pergunta), id);
        }

        public async Task<IEnumerable<Pergunta>> ObterTodos()
        {
            return await contexto.Perguntas.ToListAsync();
        }

        public async Task Remover(int id)
        {
            var pergunta = await ObterPorId(id);

            contexto.Perguntas.Remove(pergunta);

            await contexto.SaveChangesAsync();
        }
    }
}
