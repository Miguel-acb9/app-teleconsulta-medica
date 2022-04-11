// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { ConsultasRepositories } from "../Database/Repositories/ConsultasRepositories";

class ListarConsultasService {
    async executar() {
        const consultasRepositories = getCustomRepository(ConsultasRepositories);
        const consultas = await consultasRepositories.find();

        return { consultas };
    }
}

export { ListarConsultasService };