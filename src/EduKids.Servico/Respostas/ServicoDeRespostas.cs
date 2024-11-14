using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Respostas
{
    public class ServicoDeRespostas(IRespostaRepositorio repositorio) : IRespostaRepositorio
    {
        public async Task<Resposta> Adicionar(Resposta entidade)
        {
            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Resposta entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Resposta> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Resposta>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
