using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;

namespace EduKids.Servico.Autenticacao
{
    public class ServicoDeAutenticacao<T>(IUsuarioRepositorio<T> repositorio) where T : Usuario
    {
        public async Task<string> Autenticar(DadosDeAutenticacao dadosDeAutenticacao)
        {
            var usuario = await repositorio.ObterUsuarioPorLoginESenha(dadosDeAutenticacao.Login, dadosDeAutenticacao.Senha);

            return ServicoToken.GerarToken(usuario);
        }
    }
}
