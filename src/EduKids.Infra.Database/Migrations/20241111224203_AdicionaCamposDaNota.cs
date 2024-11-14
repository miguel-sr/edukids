using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EduKids.Infra.Database.Migrations
{
    /// <inheritdoc />
    public partial class AdicionaCamposDaNota : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Bimestre",
                table: "Notas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "ValorN1",
                table: "Notas",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "ValorN2",
                table: "Notas",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bimestre",
                table: "Notas");

            migrationBuilder.DropColumn(
                name: "ValorN1",
                table: "Notas");

            migrationBuilder.DropColumn(
                name: "ValorN2",
                table: "Notas");
        }
    }
}
