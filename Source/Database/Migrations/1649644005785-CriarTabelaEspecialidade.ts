// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaEspecialidade1649644005785 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "especialidades",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "especialidade",
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
        await queryRunner.dropTable("especialidades");
    }
}

export { CriarTabelaEspecialidade1649644005785 };
