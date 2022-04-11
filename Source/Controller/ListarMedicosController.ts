// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ListarMedicosService } from "../Services/ListarMedicosService";

class ListarMedicosController {
    async tratar(request: Request, response: Response) {
        const listarMedicosService = new ListarMedicosService();
        const listaMedicos = await listarMedicosService.executar();
        
        return response.json(listaMedicos);
    }
}

export { ListarMedicosController };