// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaPacientes1649636387315 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pacientes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "idade",
                        type: "int"
                    },
                    {
                        name: "endereco",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "atualizado_em",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pacientes");
    }
}

export { CriarTabelaPacientes1649636387315 };
