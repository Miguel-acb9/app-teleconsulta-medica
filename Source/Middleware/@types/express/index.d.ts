// Sobrescrever as tipagens do framework Express
declare namespace Express {
    export interface Request {
        id_usuario: string;
    }
}