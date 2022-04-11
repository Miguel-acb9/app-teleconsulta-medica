// Importação de módulos e bibliotecas
import "./Database";
import "reflect-metadata";
import "express-async-errors";
import { TratadorDeErros } from "./Middleware/TratadorDeErros";
import { rotiador } from "./Middleware/Rotas";
import express, { Request, Response, NextFunction, response } from "express";

const app = express();

// Midlewares
app.use(express.json());
app.use(rotiador);
app.use(TratadorDeErros);

// Servidor
console.clear();
console.log("============================================================");
console.log("                 Servidor  Teleconsulta Médica              ");
console.log("============================================================");
app.listen(3434, () => console.log("\nSOLICITAÇÕES"));

