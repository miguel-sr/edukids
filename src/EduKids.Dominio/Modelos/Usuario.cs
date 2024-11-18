using System.ComponentModel.DataAnnotations;

namespace EduKids.Dominio.Modelos
{
    public abstract class Usuario
    {
        [Key]
        public int Id { get; set; }
        public required string Nome { get; set; }
        public required string Login { get; set; }
        public required string Senha { get; set; }
    }

    public class UsuarioParaGerarToken
    {
        public int? Id { get; set; }
        public string? Nome { get; set; }
        public TipoUsuario? Tipo { get; set; } = TipoUsuario.NaoDefinido;
        public required string Login { get; set; }
        public required string Senha { get; set; }
    }

    public enum TipoUsuario
    {
        NaoDefinido,
        Coordenador,
        Professor,
        Aluno
    }
}
