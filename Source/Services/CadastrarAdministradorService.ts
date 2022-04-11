// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { AdministradoresRepositories } from "../Database/Repositories/AdministradoresRepositories";

interface IAdministradorRequest {
    nome: string;
    email: string;
    senha: string;
}

class CadastrarAdministradorService {
    async executar({ nome, email, senha }: IAdministradorRequest) {
        const administradorRepository = getCustomRepository(AdministradoresRepositories);
        
        // Regras para cadastro
        if(!email) { throw new Error("E-mail ausente."); }
        const usuarioExistente = await administradorRepository.findOne({ email });
        if(usuarioExistente) { throw new Error("Administrador já cadastrado."); }

        const administrador = administradorRepository.create({ nome, email, senha });
        await administradorRepository.save(administrador);

        return administrador;
    }
}

export { CadastrarAdministradorService };
