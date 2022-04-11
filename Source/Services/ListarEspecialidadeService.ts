// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { EspecialidadesRepositories } from "../Database/Repositories/EspecialidadesRepositories";

class ListarEspecialidadesService {
    async executar() {
        const especialidadesRepositories = getCustomRepository(EspecialidadesRepositories);
        const especialidades = await especialidadesRepositories.find();

        return { especialidades };
    }
}

export { ListarEspecialidadesService };