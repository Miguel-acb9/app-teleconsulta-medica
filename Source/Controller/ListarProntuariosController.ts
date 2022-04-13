// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ListarProntuariosService } from "../Services/ListarProntuariosService";

class ListarProntuariosController {
    async tratar(request: Request, response: Response) {
        const listarProntuariosService = new ListarProntuariosService();
        const listaPacientes = await listarProntuariosService.executar();
        
        return response.json(listaPacientes);
    }
}

export { ListarProntuariosController };