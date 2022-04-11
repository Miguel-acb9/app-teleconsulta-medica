// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { CadastrarConsultaService } from "../Services/CadastrarConsultaService";

class CadastrarConsultaController {
    async tratar(request: Request, response: Response) {
        const { id_medico, id_paciente, id_prontuario } = request.body;
        const cadastrarConsultaService = new CadastrarConsultaService();
        const consulta = await cadastrarConsultaService.executar({ id_medico, id_paciente, id_prontuario });
        
        return response.json(consulta);
    }
}

export { CadastrarConsultaController };
