// Importação de módulos e bibliotecas
import { Repository, EntityRepository } from "typeorm";
import { Administrador } from "../Entities/Administrador";

@EntityRepository(Administrador)
class AdministradoresRepositories extends Repository<Administrador> { }

export { AdministradoresRepositories };
