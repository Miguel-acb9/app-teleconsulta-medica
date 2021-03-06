// Importação de módulos e bibliotecas
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { PacientesRepositories } from "../Model/Repositories/PacientesRepositories";

interface IPacienteRequest {
    nome: string;
    cpf: string;
    idade: number;
    endereco: string;
    telefone: string;
    email: string;
    senha: string;
}

class CadastrarPacienteService {
    async executar({ nome, cpf, idade, endereco, telefone, email, senha }: IPacienteRequest) {
        const pacientesRepository = getCustomRepository(PacientesRepositories);
        
        // Regras para cadastro
        if(!email) { throw new Error("E-mail ausente."); }
        const usuarioExistente = await pacientesRepository.findOne({ email });
        if(usuarioExistente) { throw new Error("Paciente já cadastrado."); }
        const senhaHash = await hash(senha, 8);

        const paciente = pacientesRepository.create({ nome, cpf, idade, endereco, telefone, email, senha: senhaHash });
        await pacientesRepository.save(paciente);

        return paciente;
    }
}

export { CadastrarPacienteService };