using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EduKids.Dominio.Modelos
{
    public class Coordenador : Usuario
    {
        public required string Cpf { get; set; }

        [ForeignKey(nameof(Modelos.Escola))]
        public int IdEscola { get; set; }

        [JsonIgnore]
        public Escola? Escola { get; set; }
    }
}
