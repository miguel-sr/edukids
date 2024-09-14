using System.Net;

namespace EduKids.Dominio.Excecoes
{
    public class ObjetoNaoEncontradoException : HttpRequestException
    {
        private const string MENSAGEM = "[{0}] com código [{1}] não encontrado(a).";

        public ObjetoNaoEncontradoException(string objeto, int id)
            : this(MENSAGEM, objeto, id)
        {
        }

        private ObjetoNaoEncontradoException(string mensagem, string objeto, int id)
            : base(string.Format(mensagem, objeto, id), null, HttpStatusCode.NotFound)
        {
        }

    }
}
