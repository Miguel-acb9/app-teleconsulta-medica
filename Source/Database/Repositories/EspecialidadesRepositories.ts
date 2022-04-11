// Importação de módulos e bibliotecas
import { Repository, EntityRepository } from "typeorm";
import { Especialidade } from "../Entities/Especialidade";

@EntityRepository(Especialidade)
class EspecialidadesRepositories extends Repository<Especialidade> { }

export { EspecialidadesRepositories };
