using EduKids.Infra.Database.Contexto;

namespace EduKids.Web
{
    public static class ModuloDeDependencias
    {
        public static void VincularServicos(IServiceCollection services)
        {
            services.AddScoped<ContextoMySql>();
        }
    }
}
