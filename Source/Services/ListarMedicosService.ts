// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { MedicosRepositories } from "../Model/Repositories/MedicosRepositories";

class ListarMedicosService {
    async executar() {
        const medicosRepositories = getCustomRepository(MedicosRepositories);
        const medicos = await medicosRepositories.find();

        return { medicos };
    }
}

export { ListarMedicosService };