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
            services.AddScoped<IAlunosRepositorio, AlunosRepositorio>();
            services.AddScoped<IUsuarioRepositorio<Aluno>, AlunosRepositorio>();
            services.AddScoped<ServicoDeAutenticacao<Aluno>>();

        }
    }
}
