// Importação de módulos e bibliotecas
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { AdministradoresRepositories } from "../Model/Repositories/AdministradoresRepositories";

interface ILoginRequest {
    email: string;
    senha: string;
}

class LoginMedicoService {
    async executar({ email, senha }: ILoginRequest){
        const administradoresRepositories = getCustomRepository(AdministradoresRepositories);
        
        // Regras de login
        const medico = await administradoresRepositories.findOne({ email });
        if(!medico) { throw new Error("E-mail ou senha incorreta."); }
        const senhaCorrespondente = await compare(senha, medico.senha);
        if(!senhaCorrespondente) { throw new Error("E-mail ou senha incorreta."); }
        const token = sign(
            { email: medico.email, },
            "ChaveSecreta",
            { subject: medico.id, expiresIn: "1d" }
        );
        
        return token;
    }
}

export { LoginMedicoService };
