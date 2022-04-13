// Importação de módulos e bibliotecas
import { getCustomRepository } from "typeorm";
import { EspecialidadesRepositories } from "../Model/Repositories/EspecialidadesRepositories";

class CadastrarEspecialidadeService {
    async executar(especialidade: string) {
        const especialidadeRepository = getCustomRepository(EspecialidadesRepositories);
        
        // Regras para cadastro
        if(!especialidade) { throw new Error("Especialidade ausente."); }
        const especialidadeExistente = await especialidadeRepository.findOne(especialidade);
        if(especialidadeExistente) { throw new Error("Especialidade já cadastrada."); }

        const novaEspecialidade = especialidadeRepository.create({ especialidade });
        await especialidadeRepository.save(novaEspecialidade);

        return novaEspecialidade;
    }
}

export { CadastrarEspecialidadeService };
