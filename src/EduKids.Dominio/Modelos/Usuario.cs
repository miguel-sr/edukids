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

    public class DadosDeAutenticacao
    {
        public required string Login { get; set; }
        public required string Senha { get; set; }
    }
}
