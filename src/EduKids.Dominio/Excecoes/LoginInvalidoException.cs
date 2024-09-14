using System.Net;

namespace EduKids.Dominio.Excecoes
{
    public class LoginInvalidoException : HttpRequestException
    {
        private const string MENSAGEM = "Login ou senha inválidos.";

        public LoginInvalidoException()
            : this(MENSAGEM)
        {
        }

        private LoginInvalidoException(string mensagem)
            : base(mensagem, null, HttpStatusCode.Unauthorized)
        {
        }

    }
}
