using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EduKids.Dominio.Modelos
{
    public class Aluno : Usuario
    {
        public required string Matricula { get; set; }

        [ForeignKey(nameof(Modelos.Escola))]
        public int IdEscola { get; set; }

        [JsonIgnore]
        public Escola? Escola { get; set; }

        [ForeignKey(nameof(Modelos.Turma))]
        public int IdTurma { get; set; }

        [JsonIgnore]
        public Turma? Turma { get; set; }
    }

    public class AlunoComMateria
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Materia { get; set; }
    }
}
