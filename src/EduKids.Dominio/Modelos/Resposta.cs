using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Resposta
    {
        [Key]
        public int Id { get; set; }
        
        public string Descricao { get; set; }

        [ForeignKey(nameof(Modelos.Pergunta))]
        public int IdPergunta { get; set; }
        public Pergunta Pergunta { get; set; }
    }
}
