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
    public class ProfessorController(IProfessorRepositorio repositorio, ServicoDeAutenticacao<Professor> servicoDeAutenticacao) : ControllerBase
    {
        private readonly ServicoDeProfessores _servicoDeProfessores = new(repositorio);

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ObterTodos()
        {
            try
            {
                var professores = await _servicoDeProfessores.ObterTodos();

                return Ok(professores);
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
                var professor = await _servicoDeProfessores.ObterPorId(id);

                return Ok(professor);
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
        public async Task<IActionResult> Criar([FromBody] Professor entidade)
        {
            try
            {
                var professor = await _servicoDeProfessores.Adicionar(entidade);

                return Created($"professor/{professor.Id}", new
                {
                    id = professor.Id,
                    nome = professor.Nome,
                    cpf = professor.Cpf,
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
        public async Task<IActionResult> Atualizar([FromBody] Professor professor)
        {
            try
            {
                await _servicoDeProfessores.Atualizar(professor);

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

        [HttpPut]
        [AllowAnonymous]
        public async Task<IActionResult> Remover(int id)
        {
            try
            {
                await _servicoDeProfessores.Remover(id);

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
