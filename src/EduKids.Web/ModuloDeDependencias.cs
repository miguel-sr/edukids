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

        }
    }
}
