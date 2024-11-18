using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Database.Contexto;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EduKids.Servico.Usuarios
{
    public class ServicoDeAutenticacao(ContextoMySql contexto)
    {
        public async Task<string> Autenticar(UsuarioParaGerarToken dadosDeAutenticacao)
        {
            var usuario = await ObterUsuarioPorLoginESenha(dadosDeAutenticacao.Login, dadosDeAutenticacao.Senha);

            return GerarToken(usuario);
        }

        public async Task<UsuarioParaGerarToken> ObterUsuarioPorLoginESenha(string login, string senha)
        {
            var dadosDeAutenticacao = await contexto.DadosDeAutenticacao.FirstOrDefaultAsync(usuario => usuario.Login == login)
                ?? throw new LoginInvalidoException();

            var senhaEhValida = HasherSenha.VerificarHash(senha, dadosDeAutenticacao.Senha);

            if (!senhaEhValida)
                throw new LoginInvalidoException();

            return dadosDeAutenticacao;
        }

        private string GerarToken(UsuarioParaGerarToken usuario)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var dadosDoToken = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
                    new Claim(ClaimTypes.Name, usuario.Nome),
                    new Claim(ClaimTypes.Role, usuario.Tipo.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(ObterChaveSecreta()),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(dadosDoToken);
            return tokenHandler.WriteToken(token);
        }

        public async Task<bool> ValidarToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var parametrosDeValidacao = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(ObterChaveSecreta()),
                ValidateLifetime = false,
            };

            var resultado = await tokenHandler.ValidateTokenAsync(token, parametrosDeValidacao);

            return resultado.IsValid;
        }

        private byte[] ObterChaveSecreta()
        {
            var chaveSecreta = Environment.GetEnvironmentVariable(Constantes.CHAVE_JWT_SECRET);

            if (string.IsNullOrEmpty(chaveSecreta))
                throw new VariavelDeAmbienteInvalidaException(Constantes.CHAVE_JWT_SECRET);

            return Encoding.ASCII.GetBytes(chaveSecreta);
        }
    }
}
