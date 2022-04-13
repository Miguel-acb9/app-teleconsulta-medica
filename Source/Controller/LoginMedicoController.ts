// Importação de módulos e bibliotecas
import { Request, Response } from "express";
import { LoginMedicoService } from "../Services/LoginMedicoService";

class LoginMedicoController {
    async tratar(request: Request, response: Response) {
        const { email, senha } = request.body;
        const loginMedicoService = new LoginMedicoService();
        const token = await loginMedicoService.executar({ email, senha });

        return token;
    }
}

export { LoginMedicoController };
