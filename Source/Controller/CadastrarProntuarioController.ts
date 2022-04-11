// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { CadastrarProntuarioService } from "../Services/CadastrarProntuarioService";

class CadastrarProntuarioController {
    async tratar(request: Request, response: Response) {
        const { descricao } = request.body;
        const cadastrarAdministradorService = new CadastrarProntuarioService();
        const prontuario = await cadastrarAdministradorService.executar(descricao);
        
        return response.json(prontuario);
    }
}

export { CadastrarProntuarioController };