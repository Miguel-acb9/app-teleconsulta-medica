// Importação de módulos e bibliotecas
import { Paciente } from "../Entities/Paciente";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Paciente)
class PacientesRepositories extends Repository<Paciente> { }

export { PacientesRepositories };
