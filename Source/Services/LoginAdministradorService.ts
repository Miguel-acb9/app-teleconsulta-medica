// Importação de módulos e bibliotecas
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { AdministradoresRepositories } from "../Database/Repositories/AdministradoresRepositories";

interface ILoginRequest {
    email: string;
    senha: string;
}

class LoginAdministradorService {
    async executar({ email, senha }: ILoginRequest){
        const administradoresRepositories = getCustomRepository(AdministradoresRepositories);
        
        // Regras de login
        const administrador = await administradoresRepositories.findOne({ email });
        if(!administrador) { throw new Error("E-mail ou senha incorreta."); }
        const senhaCorrespondente = await compare(senha, administrador.senha);
        if(!senhaCorrespondente) { throw new Error("E-mail ou senha incorreta."); }
        const token = sign(
            { email: administrador.email, },
            "ChaveSecreta",
            { subject: administrador.id, expiresIn: "1d" }
        );
        
        return token;
    }
}

export { LoginAdministradorService };
