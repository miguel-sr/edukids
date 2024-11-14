using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EduKids.Dominio.Modelos
{
    public class Professor : Usuario
    {
        public required string Cpf { get; set; }

        [ForeignKey(nameof(Modelos.Escola))]
        public int IdEscola { get; set; }

        [JsonIgnore]
        public Escola? Escola { get; set; }

        [ForeignKey(nameof(Modelos.Disciplina))]
        public int IdDisciplina { get; set; }

        [JsonIgnore]
        public Disciplina? Disciplina { get; set; }
    }
}
