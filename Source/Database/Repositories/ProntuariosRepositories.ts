// Importação de módulos e bibliotecas
import { Prontuario } from "../Entities/Prontuario";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Prontuario)
class ProntuariosRepositories extends Repository<Prontuario> { }

export { ProntuariosRepositories };
