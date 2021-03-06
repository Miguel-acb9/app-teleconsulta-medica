// Importação de módulos e bibliotecas
import { Table, QueryRunner, MigrationInterface } from "typeorm";

class CriarTabelaConsultas1649647883086 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "consultas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_medico",
                        type: "uuid"
                    },
                    {
                        name: "id_paciente",
                        type: "uuid",
                    },
                    {
                        name: "id_prontuario",
                        type: "uuid"
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
                ],
                foreignKeys: [
                    {
                        name: "FK_MedicosConsultas",
                        referencedTableName: "medicos",
                        referencedColumnNames: [ "id" ],
                        columnNames: [ "id_medico" ],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_PacientesConsultas",
                        referencedTableName: "pacientes",
                        referencedColumnNames: [ "id" ],
                        columnNames: [ "id_paciente" ],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_ProntuariosConsultas",
                        referencedTableName: "prontuarios",
                        referencedColumnNames: [ "id" ],
                        columnNames: [ "id_prontuario" ],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("consultas");
    }
}

export { CriarTabelaConsultas1649647883086 };
