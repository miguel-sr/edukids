using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Nota
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey(nameof(Modelos.Aluno))]
        public int IdAluno { get; set; }
        public Aluno Aluno { get; set; }

        [ForeignKey(nameof(Modelos.Disciplina))]
        public int IdDisciplina { get; set; }
        public Disciplina Disciplina { get; set; }
    }
}
