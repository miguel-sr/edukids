using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Servico.Usuarios;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EduKids.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CoordenadorController(ICoordenadorRepositorio repositorio, ServicoDeAutenticacao<Coordenador> servicoDeAutenticacao) : ControllerBase
    {
        private readonly ServicoDeCoordenadores _servicoDeCoordenadores = new(repositorio);

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ObterTodos()
        {
            try
            {
                var coordenadores = await _servicoDeCoordenadores.ObterTodos();

                return Ok(coordenadores);
            }
            catch (HttpRequestException ex)
            {
                var status = (int)(ex.StatusCode ?? HttpStatusCode.InternalServerError);

                return StatusCode(status, ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> ObterPorId(int id)
        {
            try
            {
                var aluno = await _servicoDeCoordenadores.ObterPorId(id);

                return Ok(aluno);
            }
            catch (HttpRequestException erro)
            {
                var status = (int)(erro.StatusCode ?? HttpStatusCode.InternalServerError);

                return StatusCode(status, erro.Message);
            }
            catch (Exception erro)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, erro.Message);
            }
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Criar([FromBody] Coordenador entidade)
        {
            try
            {
                var coordenador = await _servicoDeCoordenadores.Adicionar(entidade);

                return Created($"coordenador/{coordenador.Id}", new
                {
                    id = coordenador.Id,
                    nome = coordenador.Nome,
                    cpf = coordenador.Cpf,
                });
            }
            catch (HttpRequestException erro)
            {
                var status = (int)(erro.StatusCode ?? HttpStatusCode.InternalServerError);

                return StatusCode(status, erro.Message);
            }
            catch (Exception erro)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, erro.Message);
            }
        }

        [HttpPut]
        [AllowAnonymous]
        public async Task<IActionResult> Atualizar([FromBody] Coordenador aluno)
        {
            try
            {
                await _servicoDeCoordenadores.Atualizar(aluno);

                return NoContent();
            }
            catch (HttpRequestException erro)
            {
                var status = (int)(erro.StatusCode ?? HttpStatusCode.InternalServerError);

                return StatusCode(status, erro.Message);
            }
            catch (Exception erro)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, erro.Message);
            }
        }

        [HttpDelete]
        [AllowAnonymous]
        public async Task<IActionResult> Remover(int id)
        {
            try
            {
                await _servicoDeCoordenadores.Remover(id);

                return NoContent();
            }
            catch (HttpRequestException erro)
            {
                var status = (int)(erro.StatusCode ?? HttpStatusCode.InternalServerError);

                return StatusCode(status, erro.Message);
            }
            catch (Exception erro)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, erro.Message);
            }
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] DadosDeAutenticacao dados)
        {
            try
            {
                var token = await servicoDeAutenticacao.Autenticar(dados);

                return Ok(token);
            }
            catch (HttpRequestException ex)
            {
                var status = (int)(ex.StatusCode ?? HttpStatusCode.InternalServerError);

                return StatusCode(status, ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
