// Importação de Módulos e Bibliotecas
import { getCustomRepository } from "typeorm";
import { AdministradoresRepositories } from "../Database/Repositories/AdministradoresRepositories";

class ListarAdministradoresService {
    async executar() {
        const administradoresRepositories = getCustomRepository(AdministradoresRepositories);
        const administradores = await administradoresRepositories.find();

        return { administradores };
    }
}

export { ListarAdministradoresService };