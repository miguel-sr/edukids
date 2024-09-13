using System.ComponentModel.DataAnnotations;

namespace EduKids.Dominio.Modelos
{
    public class Usuario
    {
        [Key]
        public required int Id { get; set; }
        public required string Nome { get; set; }
        public required string Login { get; set; }
        public required string Senha { get; set; }
    }
}
