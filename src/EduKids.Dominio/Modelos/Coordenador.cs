using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Coordenador : Usuario
    {
        public required string Cpf { get; set; }

        [ForeignKey(nameof(Escola))]
        public int IdEscola { get; set; }
    }
}
