// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { MedicosRepositories } from "../Database/Repositories/MedicosRepositories";

interface IMedicoRequest {
    nome: string;
    crm: string;
    especialidade: number;
    endereco: string;
    telefone: string;
    email: string;
    senha: string;
}

class CadastrarMedicoService {
   async executar({ nome, crm, especialidade, endereco, telefone, email, senha }: IMedicoRequest) {
       const medicoRepository = getCustomRepository(MedicosRepositories);
       
       // Regras para cadastro
       if(!email) { throw new Error("E-mail incorreto."); }
       const usuarioExistente = await medicoRepository.findOne({ email });
       if(usuarioExistente) { throw new Error("Usuário já cadastrado."); }

       const medico = medicoRepository.create({nome, crm, especialidade, endereco, telefone, email, senha });
       await medicoRepository.save(medico);

       return medico;
   }
}

export { CadastrarMedicoService };
