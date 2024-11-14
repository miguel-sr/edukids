using EduKids.Comum;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Usuarios
{
    public class ServicoDeProfessores(IProfessorRepositorio repositorio) : IProfessorRepositorio
    {
        public async Task<Professor> Adicionar(Professor entidade)
        {
            entidade.Senha = HasherSenha.GerarHash(entidade.Senha);

            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Professor entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Professor> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Professor>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task<Professor> ObterUsuarioPorLoginESenha(string login, string senha)
        {
            return await repositorio.ObterUsuarioPorLoginESenha(login, senha);
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
