// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { ProntuariosRepositories } from "../Model/Repositories/ProntuariosRepositories";

class ExcluirProntuarioService {
    async executar(id: string) {
        const prontuarioRepository = await getCustomRepository(ProntuariosRepositories).delete(id);
        if(prontuarioRepository.affected === 0) { 
            throw new Error("Erro ao deletar prontuário."); 
        }
        return { prontuarioRepository };
    }
}

export { ExcluirProntuarioService };
