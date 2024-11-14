using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EduKids.Dominio.Modelos
{
    public class Turma
    {
        [Key]
        public int Id { get; set; }
        public required string Descricao { get; set; }

        [ForeignKey(nameof(Modelos.Escola))]
        public int IdEscola { get; set; }
        
        [JsonIgnore]
        public Escola? Escola { get; set; }
    }
}
