// Importação de módulos e bibliotecas
import { Medico } from "../Entities/Medico";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Medico)
class MedicosRepositories extends Repository<Medico> { }

export { MedicosRepositories };
