// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaAdministradores1649640390159 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "administradores",
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
        await queryRunner.dropTable("administradores");
    }
}

export { CriarTabelaAdministradores1649640390159 };
