using EduKids.Dominio.Modelos;
using System.Data.Entity;

namespace EduKids.Infra.Database.Contexto
{
    public class ContextoMySql : DbContext
    {
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Coordenador> Coordenadores { get; set; }
        public DbSet<Professor> Professores { get; set; }

        public ContextoMySql() : base()
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Aluno>().MapToStoredProcedures();
            modelBuilder.Entity<Coordenador>().MapToStoredProcedures();
            modelBuilder.Entity<Professor>().MapToStoredProcedures();
        }
    }
}
