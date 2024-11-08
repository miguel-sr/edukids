using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Pergunta
    {
        [Key]
        public int Id { get; set; }

        public string Descricao { get; set; }

        [ForeignKey(nameof(Modelos.Disciplina))]
        public int IdDisciplina { get; set; }
        public Disciplina Disciplina { get; set; }
    }
}
