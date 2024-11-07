using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Servico.Turmas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EduKids.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TurmaController(ITurmaRepositorio repositorio) : ControllerBase
    {
        private readonly ServicoDeTurmas _servicoDeTurmas = new(repositorio);

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ObterTodos()
        {
            try
            {
                var turmas = await _servicoDeTurmas.ObterTodos();

                return Ok(turmas);
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
                var turma = await _servicoDeTurmas.ObterPorId(id);

                return Ok(turma);
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
        public async Task<IActionResult> Criar([FromBody] Turma turma)
        {
            try
            {
                var turmaDoBanco = await _servicoDeTurmas.Adicionar(turma);

                return Created($"aluno/{turma.Id}", turmaDoBanco);
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
        public async Task<IActionResult> Atualizar([FromBody] Turma turma)
        {
            try
            {
                await _servicoDeTurmas.Atualizar(turma);

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
                await _servicoDeTurmas.Remover(id);

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
    }
}
