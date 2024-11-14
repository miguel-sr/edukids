using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EduKids.Dominio.Modelos
{
    public class Nota
    {
        [Key]
        public int Id { get; set; }
        
        public decimal ValorN1 { get; set; }
        
        public decimal ValorN2 { get; set; }

        public int Bimestre { get; set; }

        [ForeignKey(nameof(Modelos.Aluno))]
        public int IdAluno { get; set; }

        [JsonIgnore]
        public Aluno? Aluno { get; set; }

        [ForeignKey(nameof(Modelos.Disciplina))]
        public int IdDisciplina { get; set; }

        [JsonIgnore]
        public Disciplina? Disciplina { get; set; }
    }
}
