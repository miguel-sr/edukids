using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Turma
    {
        [Key]
        public int Id { get; set; }
        public required string Descricao { get; set; }

        [ForeignKey(nameof(Escola))]
        public int IdEscola { get; set; }
    }
}
