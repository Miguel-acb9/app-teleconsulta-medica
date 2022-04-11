// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { CadastrarEspecialidadeService } from "../Services/CadastrarEspecialidadeService";

class CadastrarEspecialidadeController {
    async tratar(request: Request, response: Response) {
        const { especialidade } = request.body;
        const cadastrarEspecialidadeService = new CadastrarEspecialidadeService();
        const novaEspecialidade = await cadastrarEspecialidadeService.executar(especialidade);
        
        return response.json(novaEspecialidade);
    }
}

export { CadastrarEspecialidadeController };