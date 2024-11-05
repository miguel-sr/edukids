using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EduKids.Servico.Autenticacao
{
    public class ServicoDeAutenticacao<T>(IUsuarioRepositorio<T> repositorio) where T : Usuario
    {
        public async Task<string> Autenticar(DadosDeAutenticacao dadosDeAutenticacao)
        {
            var usuario = await repositorio.ObterUsuarioPorLoginESenha(dadosDeAutenticacao.Login, dadosDeAutenticacao.Senha);

            return GerarToken(usuario);
        }

        private string GerarToken(Usuario usuario)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var dadosDoToken = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
                    new Claim(ClaimTypes.Name, usuario.Nome),
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
