using EduKids.Comum;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Usuarios
{
    public class ServicoDeCoordenadores(ICoordenadorRepositorio repositorio) : ICoordenadorRepositorio
    {
        public async Task<Coordenador> Adicionar(Coordenador entidade)
        {
            entidade.Senha = HasherSenha.GerarHash(entidade.Senha);

            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Coordenador entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Coordenador> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Coordenador>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
