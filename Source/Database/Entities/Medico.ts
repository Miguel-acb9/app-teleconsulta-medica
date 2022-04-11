// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("medicos")
class Medico {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;
    
    @Column()
    crm: string;

    @Column()
    especialidade: number;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Medico };
