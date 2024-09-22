using EduKids.Comum;
using EduKids.Dominio.Excecoes;
using EduKids.Infra.Database.Contexto;
using EduKids.Servico.Autenticacao;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.IdentityModel.Tokens;

namespace EduKids.Web
{
    public class Startup(IConfiguration configuration)
    {
        public IConfiguration Configuration { get; } = configuration;

        public void ConfigureServices(IServiceCollection services)
        {
            CarregarVariaveisDeAmbiente();
            ConfigurarInjecaoDeDependencia(services);
            ConfigurarServicoDeAutenticacao(services);

            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    policy =>
                    {
                        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseCors();
            app.UseForwardedHeaders();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }

        private void CarregarVariaveisDeAmbiente()
        {
            var caminhoDotenv = Environment.GetEnvironmentVariable(Constantes.CHAVE_CAMINHO_DOTENV);

            if (string.IsNullOrEmpty(caminhoDotenv))
                throw new VariavelDeAmbienteInvalidaException(Constantes.CHAVE_CAMINHO_DOTENV);

            if (!File.Exists(caminhoDotenv))
                throw new Exception($"Variáveis de ambiente não encontradas no caminho: \n{caminhoDotenv}");

            var linhasDotenv = File.ReadAllLines(caminhoDotenv);

            foreach (var linha in linhasDotenv)
            {
                if (string.IsNullOrWhiteSpace(linha))
                    continue;

                var posicaoIgual = linha.IndexOf('=');

                if (posicaoIgual < 0)
                    continue;

                var chave = linha.Substring(0, posicaoIgual);
                var valor = linha.Substring(posicaoIgual + 1);

                Environment.SetEnvironmentVariable(chave, valor);
            }
        }

        private void ConfigurarInjecaoDeDependencia(IServiceCollection services)
        {
            services.AddScoped<ContextoMySql>();

            ModuloDeDependencias.VincularServicos(services);

            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
            });
        }

        private void ConfigurarServicoDeAutenticacao(IServiceCollection services)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(ServicoToken.ObterChaveSecreta()),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }
    }
}
