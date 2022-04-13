// Importação de Módulos e Bibliotecas
import { Request, Response } from "express";
import { ListarEspecialidadesService } from "../Services/ListarEspecialidadeService";

class ListarEspecialidadesController {
    async tratar(request: Request, response: Response) {
        const listarEspecialidadesService = new ListarEspecialidadesService();
        const listaEspecialidade = await listarEspecialidadesService.executar();
        
        return response.json(listaEspecialidade);
    }
}

export { ListarEspecialidadesController };