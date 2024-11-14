using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Notas
{
    public class ServicoDeNotas(INotaRepositorio repositorio) : INotaRepositorio
    {
        public async Task<Nota> Adicionar(Nota entidade)
        {
            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Nota entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Nota> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Nota>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
