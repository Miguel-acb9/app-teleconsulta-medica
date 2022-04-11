// Importação de módulos e bibliotecas
import { Consulta } from "../Entities/Consulta";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Consulta)
class ConsultasRepositories extends Repository<Consulta> { }

export { ConsultasRepositories };