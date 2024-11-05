using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Disciplina
    {
        [Key]
        public int Id { get; set; }
        public required string Nome { get; set; }

        [ForeignKey(nameof(Escola))]
        public int IdEscola { get; set; }
        public Escola Escola { get; set; }
    }
}
