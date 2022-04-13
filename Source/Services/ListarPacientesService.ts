// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { PacientesRepositories } from "../Model/Repositories/PacientesRepositories";

class ListarPacientesService {
    async executar() {
        const pacientesRepositories = getCustomRepository(PacientesRepositories);
        const pacientes = await pacientesRepositories.find();

        return { pacientes };
    }
}

export { ListarPacientesService };