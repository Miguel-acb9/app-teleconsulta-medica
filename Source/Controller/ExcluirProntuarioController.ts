// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ExcluirProntuarioService } from "../Services/ExcluirProntuarioService";

class ExcluirProntuarioController {
    async tratar(request: Request, response: Response) {
        const { id } = request.body;
        const excluirProntuarioService = new ExcluirProntuarioService();
        const prontuario = await excluirProntuarioService.executar(id);
        
        return response.json(prontuario);
    }
}

export { ExcluirProntuarioController };