using EduKids.Dominio.IRepositorios;
using EduKids.Dominio.Modelos;
using EduKids.Servico.Perguntas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EduKids.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class PerguntaController(IPerguntaRepositorio perguntaRepositorio) : ControllerBase
    {
        private readonly ServicoDePerguntas _servicoDePerguntas = new(perguntaRepositorio);

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ObterTodos()
        {
            try
            {
                var perguntas = await _servicoDePerguntas.ObterTodos();

                return Ok(perguntas);
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
                var nota = await _servicoDePerguntas.ObterPorId(id);

                return Ok(nota);
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
        public async Task<IActionResult> Criar([FromBody] Pergunta pergunta)
        {
            try
            {
                var perguntaDoBanco = await _servicoDePerguntas.Adicionar(pergunta);

                return Created($"pergunta/{perguntaDoBanco.Id}", perguntaDoBanco);
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
        public async Task<IActionResult> Atualizar([FromBody] Pergunta pergunta)
        {
            try
            {
                await _servicoDePerguntas.Atualizar(pergunta);

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
                await _servicoDePerguntas.Remover(id);

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
