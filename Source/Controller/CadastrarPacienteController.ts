// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { CadastrarPacienteService } from "../Services/CadastrarPacienteService";

class CadastrarPacienteController {
    async tratar(request: Request, response: Response) {
        const { nome, cpf, idade, endereco, telefone, email, senha } = request.body;
        const cadastrarMedicoService = new CadastrarPacienteService();
        const medico = await cadastrarMedicoService.executar({ nome, cpf, idade, endereco, telefone, email, senha });
        
        return response.json(medico);
    }
}

export { CadastrarPacienteController };
