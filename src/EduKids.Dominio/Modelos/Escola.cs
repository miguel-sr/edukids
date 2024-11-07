using System.ComponentModel.DataAnnotations;

namespace EduKids.Dominio.Modelos
{
    public class Escola
    {
        [Key]
        public int Id { get; set; }
        public required string Nome { get; set; }
    }
}
