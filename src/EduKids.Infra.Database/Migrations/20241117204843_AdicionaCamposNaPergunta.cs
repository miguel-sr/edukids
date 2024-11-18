using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EduKids.Infra.Database.Migrations
{
    /// <inheritdoc />
    public partial class AdicionaCamposNaPergunta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Correta",
                table: "Respostas",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "RespostaCorreta",
                table: "Perguntas",
                type: "longtext",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "RespostaErrada",
                table: "Perguntas",
                type: "longtext",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Correta",
                table: "Respostas");

            migrationBuilder.DropColumn(
                name: "RespostaCorreta",
                table: "Perguntas");

            migrationBuilder.DropColumn(
                name: "RespostaErrada",
                table: "Perguntas");
        }
    }
}
