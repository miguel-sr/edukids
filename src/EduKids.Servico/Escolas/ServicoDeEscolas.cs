using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Escolas
{
    public class ServicoDeEscolas(IEscolaRepositorio repositorio) : IEscolaRepositorio
    {
        public async Task<Escola> Adicionar(Escola entidade)
        {
            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Escola entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Escola> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Escola>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
