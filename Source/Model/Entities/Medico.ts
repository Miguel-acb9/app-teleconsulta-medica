// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from "typeorm";
import { Especialidade } from "./Especialidade";

@Entity("medicos")
class Medico {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;
    
    @Column()
    crm: string;

    @Column()
    id_especialidade: string;

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

    @JoinColumn({name: "id"})
    @OneToOne(() => Especialidade)
    especialidade: Especialidade

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Medico };
