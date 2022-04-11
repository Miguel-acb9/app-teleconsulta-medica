// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { CadastrarMedicoService } from "../Services/CadastrarMedicoService";

class CadastrarMedicoController {
    async tratar(request: Request, response: Response) {
        const { nome, crm, especialidade, endereco, telefone, email, senha } = request.body;
        const cadastrarMedicoService = new CadastrarMedicoService();
        const medico = await cadastrarMedicoService.executar({ nome, crm, especialidade, endereco, telefone, email, senha });
        
        return response.json(medico);
    }
}

export { CadastrarMedicoController };
