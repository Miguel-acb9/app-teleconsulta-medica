// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("Pacientes")
class Paciente {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;
    
    @Column()
    cpf: string;

    @Column()
    idade: number;

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

export { Paciente };
