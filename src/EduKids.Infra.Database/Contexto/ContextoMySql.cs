using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Dominio.Modelos;
using Microsoft.EntityFrameworkCore;

namespace EduKids.Infra.Database.Contexto
{
    public class ContextoMySql : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Coordenador> Coordenadores { get; set; }
        public DbSet<Professor> Professores { get; set; }
        public DbSet<Escola> Escolas { get; set; }
        public DbSet<Turma> Turmas { get; set; }
        public DbSet<Disciplina> Disciplinas { get; set; }

        public ContextoMySql() : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseMySQL(ObterStringDeConexao());
        }

        private string ObterStringDeConexao()
        {
            var uriDeConexao = Environment.GetEnvironmentVariable(Constantes.CHAVE_STRING_CONEXAO);

            if (string.IsNullOrEmpty(uriDeConexao))
                throw new VariavelDeAmbienteInvalidaException(Constantes.CHAVE_STRING_CONEXAO);

            return uriDeConexao;
        }
    }
}
