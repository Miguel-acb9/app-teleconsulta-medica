// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { LoginAdministradorService } from "../Services/LoginAdministradorService";

class LoginAdministradorController {
    async tratar(request: Request, response: Response) {
        const { email, senha } = request.body;
        const loginAdministradorService = new LoginAdministradorService();
        const token = await loginAdministradorService.executar({ email, senha });

        return response.json(token);
    }
}

export { LoginAdministradorController };
