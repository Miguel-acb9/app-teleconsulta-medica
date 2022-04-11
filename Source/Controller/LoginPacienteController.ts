// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { LoginPacienteService } from "../Services/LoginPacienteService";

class LoginPacienteController {
    async tratar(request: Request, response: Response) {
        const { email, senha } = request.body;
        const loginPacienteService = new LoginPacienteService();
        const token = await loginPacienteService.executar({ email, senha });

        return response.json(token);
    }
}

export { LoginPacienteController };
