using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Infra.Repositorios;
using EduKids.Servico.Usuarios;

namespace EduKids.Web
{
    public static class ModuloDeDependencias
    {
        public static void VincularServicos(IServiceCollection services)
        {
            services.AddScoped<IAlunoRepositorio, AlunoRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Aluno>, AlunoRepositorio>();

            services.AddScoped<IProfessorRepositorio, ProfessorRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Professor>, ProfessorRepositorio>();

            services.AddScoped<ICoordenadorRepositorio, CoordenadorRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Coordenador>, CoordenadorRepositorio>();

            services.AddScoped<IEscolaRepositorio, EscolaRepositorio>();
            services.AddScoped<ITurmaRepositorio, TurmaRepositorio>();
            services.AddScoped<IDisciplinaRepositorio, DisciplinaRepositorio>();
            services.AddScoped<INotaRepositorio, NotaRepositorio>();
            services.AddScoped<IPerguntaRepositorio, PerguntaRepositorio>();
            services.AddScoped<IRespostaRepositorio, RespostaRepositorio>();
            services.AddScoped<ServicoDeAutenticacao>();
        }
    }
}
