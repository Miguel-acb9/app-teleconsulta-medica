// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("especialidades")
class Especialidade {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    especialidade: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Especialidade };
