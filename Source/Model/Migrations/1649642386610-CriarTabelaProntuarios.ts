// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaProntuarios1649642386610 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "prontuarios",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "descricao",
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
        await queryRunner.dropTable("prontuarios");
    }
}

export { CriarTabelaProntuarios1649642386610 };
