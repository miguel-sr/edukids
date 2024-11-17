using EduKids.Comum;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Usuarios
{
    public class ServicoDeAlunos(IAlunoRepositorio repositorio) : IAlunoRepositorio
    {
        public async Task<Aluno> Adicionar(Aluno entidade)
        {
            entidade.Senha = HasherSenha.GerarHash(entidade.Senha);

            return await repositorio.Adicionar(entidade);
        }

        public async Task Atualizar(Aluno entidade)
        {
            await repositorio.Atualizar(entidade);
        }

        public async Task<Aluno> ObterPorId(int id)
        {
            return await repositorio.ObterPorId(id);
        }

        public async Task<IEnumerable<Aluno>> ObterTodos()
        {
            return await repositorio.ObterTodos();
        }

        public async Task<IEnumerable<AlunoComMateria>> ObterTodosComMateria()
        {
            return await repositorio.ObterTodosComMateria();
        }

        public async Task<Aluno> ObterUsuarioPorLoginESenha(string login, string senha)
        {
            return await repositorio.ObterUsuarioPorLoginESenha(login, senha);
        }

        public async Task Remover(int id)
        {
            await repositorio.Remover(id);
        }
    }
}
