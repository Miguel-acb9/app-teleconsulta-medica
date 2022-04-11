// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { CadastrarAdministradorService } from "../Services/CadastrarAdministradorService";

class CadastrarAdministradorController {
    async tratar(request: Request, response: Response) {
        const { nome, email, senha } = request.body;
        const cadastrarAdministradorService = new CadastrarAdministradorService();
        const administrador = await cadastrarAdministradorService.executar({ nome, email, senha });
        
        return response.json(administrador);
    }
}

export { CadastrarAdministradorController };
