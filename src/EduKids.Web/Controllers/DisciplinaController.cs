using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Servico.Disciplinas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EduKids.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class DisciplinaController(IDisciplinaRepositorio repositorio) : ControllerBase
    {
        private readonly ServicoDeDisciplinas _servicoDeDisciplinas = new(repositorio);

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ObterTodos()
        {
            try
            {
                var disciplinas = await _servicoDeDisciplinas.ObterTodos();

                return Ok(disciplinas);
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
                var disciplina = await _servicoDeDisciplinas.ObterPorId(id);

                return Ok(disciplina);
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
        public async Task<IActionResult> Criar([FromBody] Disciplina disciplina)
        {
            try
            {
                var disciplinaDoBanco = await _servicoDeDisciplinas.Adicionar(disciplina);

                return Created($"aluno/{disciplina.Id}", disciplinaDoBanco);
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
        public async Task<IActionResult> Atualizar([FromBody] Disciplina disciplina)
        {
            try
            {
                await _servicoDeDisciplinas.Atualizar(disciplina);

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
                await _servicoDeDisciplinas.Remover(id);

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
