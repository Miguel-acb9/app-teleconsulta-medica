// Importação de módulos e bibliotecas
import { v4 as uuid } from "uuid";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Prontuario } from "./Prontuario";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from "typeorm";

@Entity("consultas")
class Consulta {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_medico: string;

    @Column()
    id_paciente: string;

    @Column()
    id_prontuario: string;

    @JoinColumn({name: "id_medico"})
    @OneToOne(() => Medico)
    medico: Medico

    @JoinColumn({name: "id_paciente"})
    @OneToOne(() => Paciente)
    paciente: Paciente

    @JoinColumn({name: "id_prontuario"})
    @OneToOne(() => Prontuario)
    prontuario: Prontuario

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    atualizado_em: Date;

    constructor() {
        if(!this.id) { this.id = uuid(); }
    }
}

export { Consulta };
