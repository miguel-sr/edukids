using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Repositorios;
using EduKids.Servico.Autenticacao;

namespace EduKids.Web
{
    public static class ModuloDeDependencias
    {
        public static void VincularServicos(IServiceCollection services)
        {
            services.AddScoped<IAlunoRepositorio, AlunoRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Aluno>, AlunoRepositorio>();
            services.AddScoped<ServicoDeAutenticacao<Aluno>>();

            services.AddScoped<IProfessorRepositorio, ProfessorRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Professor>, ProfessorRepositorio>();
            services.AddScoped<ServicoDeAutenticacao<Professor>>();

            services.AddScoped<ICoordenadorRepositorio, CoordenadorRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Coordenador>, CoordenadorRepositorio>();
            services.AddScoped<ServicoDeAutenticacao<Coordenador>>();

            services.AddScoped<IEscolaRepositorio, EscolaRepositorio>();
            services.AddScoped<ITurmaRepositorio, TurmaRepositorio>();
            services.AddScoped<IDisciplinaRepositorio, DisciplinaRepositorio>();
        }
    }
}
