// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ListarConsultasService } from "../Services/ListarConsultasService";

class ListarConsultasController {
    async tratar(request: Request, response: Response) {
        const listarConsultasService = new ListarConsultasService();
        const listaConsultas = await listarConsultasService.executar();
        
        return response.json(listaConsultas);
    }
}

export { ListarConsultasController };