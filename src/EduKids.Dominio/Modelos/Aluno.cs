using System.ComponentModel.DataAnnotations.Schema;

namespace EduKids.Dominio.Modelos
{
    public class Aluno : Usuario
    {
        public required string Matricula { get; set; }

        [ForeignKey(nameof(Escola))]
        public int IdEscola { get; set; }
        public Escola Escola { get; set; }

        [ForeignKey(nameof(Turma))]
        public int IdTurma { get; set; }
        public Turma Turma { get; set; }
    }
}
