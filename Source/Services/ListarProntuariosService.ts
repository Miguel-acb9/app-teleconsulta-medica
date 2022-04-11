// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { ProntuariosRepositories } from "../Database/Repositories/ProntuariosRepositories";

class ListarProntuariosService {
    async executar() {
        const prontuariosRepositories = getCustomRepository(ProntuariosRepositories);
        const prontuarios = await prontuariosRepositories.find();

        return { prontuarios };
    }
}

export { ListarProntuariosService };