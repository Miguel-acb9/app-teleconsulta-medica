// Importação de módulos e bibliotecas
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { MedicosRepositories } from "../Model/Repositories/MedicosRepositories";

interface IMedicoRequest {
    nome: string;
    crm: string;
    id_especialidade: string;
    endereco: string;
    telefone: string;
    email: string;
    senha: string;
}

class CadastrarMedicoService {
    async executar({ nome, crm, id_especialidade, endereco, telefone, email, senha }: IMedicoRequest) {
        const medicoRepository = getCustomRepository(MedicosRepositories);
        
        // Regras para cadastro
        if(!email) { throw new Error("E-mail ausente."); }
        const usuarioExistente = await medicoRepository.findOne({ email });
        if(usuarioExistente) { throw new Error("Médico já cadastrado."); }
        const senhaHash = await hash(senha, 8);

        const medico = medicoRepository.create({ nome, crm, id_especialidade, endereco, telefone, email, senha: senhaHash });
        await medicoRepository.save(medico);

        return medico;
    }
}

export { CadastrarMedicoService };
