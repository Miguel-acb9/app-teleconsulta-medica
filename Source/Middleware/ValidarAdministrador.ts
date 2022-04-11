// Importação de módulos e bibliotecas
import { Request, Response, NextFunction } from "express";

function ValidarAdministrador(request: Request, response: Response, proxima: NextFunction) {
    const administrador = true;
    if(administrador) { 
        return proxima();
    }
    return response.status(401).json({ Erro: "Sem autorização." });
}

export { ValidarAdministrador };
