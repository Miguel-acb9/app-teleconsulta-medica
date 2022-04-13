// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { ProntuariosRepositories } from "../Model/Repositories/ProntuariosRepositories";

class CadastrarProntuarioService {
    async executar(descricao: string) {
        const ProntuariosRepository = getCustomRepository(ProntuariosRepositories);
        
        // Regras para cadastro
        if(!descricao) { throw new Error("Descrição ausente."); }

        const Prontuario = ProntuariosRepository.create({ descricao });
        await ProntuariosRepository.save(Prontuario);

        return Prontuario;
    }
}

export { CadastrarProntuarioService };