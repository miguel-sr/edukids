using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Perguntas
{
    public class ServicoDePerguntas(IPerguntaRepositorio repositorio) : IPerguntaRepositorio
    {
        public async Task<Pergunta> Adicionar(Pergunta entidade)
        {
            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Pergunta entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Pergunta> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Pergunta>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
