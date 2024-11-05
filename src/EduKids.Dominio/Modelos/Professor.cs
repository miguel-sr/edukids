using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Professor : Usuario
    {
        public required string Cpf { get; set; }

        [ForeignKey(nameof(Escola))]
        public int IdEscola { get; set; }
        public Escola Escola { get; set; }

        [ForeignKey(nameof(Disciplina))]
        public int IdDisciplina { get; set; }
        public Disciplina Disciplina { get; set; }
    }
}
