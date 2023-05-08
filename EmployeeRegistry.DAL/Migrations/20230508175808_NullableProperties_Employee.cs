using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeRegistry.DAL.Migrations
{
    /// <inheritdoc />
    public partial class NullableProperties_Employee : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_OrganizationalUnits_OrganizationalUnitId",
                table: "Employees");

            migrationBuilder.AlterColumn<string>(
                name: "Supervisor",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<long>(
                name: "OrganizationalUnitId",
                table: "Employees",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_OrganizationalUnits_OrganizationalUnitId",
                table: "Employees",
                column: "OrganizationalUnitId",
                principalTable: "OrganizationalUnits",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_OrganizationalUnits_OrganizationalUnitId",
                table: "Employees");

            migrationBuilder.AlterColumn<string>(
                name: "Supervisor",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "OrganizationalUnitId",
                table: "Employees",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_OrganizationalUnits_OrganizationalUnitId",
                table: "Employees",
                column: "OrganizationalUnitId",
                principalTable: "OrganizationalUnits",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
