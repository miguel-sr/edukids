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

    public class ResumoDeNotas
    {
        public string Nome { get; set; }
        public string Disciplina { get; set; }
        public List<Bimestre> Bimestres { get; set; }
    }

    public class Bimestre
    {
        public int Numero { get; set; }
        public decimal ValorN1 { get; set; }
        public decimal ValorN2 { get; set; }
        public decimal Media => (ValorN1 + ValorN2) / 2;
    }
}
