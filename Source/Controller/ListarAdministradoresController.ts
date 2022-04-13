// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ListarAdministradoresService } from "../Services/ListarAdministradoresService";

class ListarAdministradoresController {
    async tratar(request: Request, response: Response) {
        const buscarEditaisPorEntidadeService = new ListarAdministradoresService();
        const listaAdministradores = await buscarEditaisPorEntidadeService.executar();
        
        return response.json(listaAdministradores);
    }
}

export { ListarAdministradoresController };