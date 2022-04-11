// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ListarPacientesService } from "../Services/ListarPacientesService";

class ListarPacientesController {
    async tratar(request: Request, response: Response) {
        const listarPacientesService = new ListarPacientesService();
        const listaPacientes = await listarPacientesService.executar();
        
        return response.json(listaPacientes);
    }
}

export { ListarPacientesController };