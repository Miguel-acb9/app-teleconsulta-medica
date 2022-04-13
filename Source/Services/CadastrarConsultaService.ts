// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { PacientesRepositories } from "../Model/Repositories/PacientesRepositories";
import { ConsultasRepositories } from "../Model/Repositories/ConsultasRepositories";

interface IConsultaRequest {
    id_medico: string;
    id_paciente: string;
    id_prontuario: string;
}

class CadastrarConsultaService {
    async executar({ id_medico, id_paciente, id_prontuario }: IConsultaRequest) {
        const pacienteRepository = getCustomRepository(PacientesRepositories);
        const consultaRepository = getCustomRepository(ConsultasRepositories);
        
        // Regras para cadastro
        if(id_medico === id_paciente) { throw new Error("Paciente inválido."); }
        const pacienteExiste = await pacienteRepository.findOne(id_medico);
        if(!pacienteExiste) { throw new Error("Paciente inexistente."); }


        const consulta = consultaRepository.create({ id_medico, id_paciente, id_prontuario });
        await consultaRepository.save(consulta);

        return consulta;
    }
}

export { CadastrarConsultaService };
