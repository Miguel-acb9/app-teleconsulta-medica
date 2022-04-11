// Importação de módulos e bibliotecas
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { PacientesRepositories } from "../Database/Repositories/PacientesRepositories";

interface ILoginRequest {
    email: string;
    senha: string;
}

class LoginPacienteService {
    async executar({ email, senha }: ILoginRequest){
        const administradoresRepositories = getCustomRepository(PacientesRepositories);
        
        // Regras de login
        const paciente = await administradoresRepositories.findOne({ email });
        if(!paciente) { throw new Error("E-mail ou senha incorreta."); }
        const senhaCorrespondente = await compare(senha, paciente.senha);
        if(!senhaCorrespondente) { throw new Error("E-mail ou senha incorreta."); }
        const token = sign(
            { email: paciente.email, },
            "ChaveSecreta",
            { subject: paciente.id, expiresIn: "1d" }
        );
        
        return token;
    }
}

export { LoginPacienteService };
