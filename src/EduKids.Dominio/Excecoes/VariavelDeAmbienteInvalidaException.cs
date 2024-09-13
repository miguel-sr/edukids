namespace EduKids.Dominio.Excecoes
{
    public class VariavelDeAmbienteInvalidaException : Exception
    {
        private const string MENSAGEM = "Variável de ambiente [{0}] inválida.";

        public VariavelDeAmbienteInvalidaException(string chave)
            : this(MENSAGEM, chave)
        {
        }

        private VariavelDeAmbienteInvalidaException(string mensagem, string chave)
            : base(string.Format(mensagem, chave))
        {
        }

    }
}
