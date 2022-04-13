// Importação de módulos e bibliotecas
import "./Database";
import "reflect-metadata";
import morgan from "morgan";
import express from "express";
import "express-async-errors";
import { rotiador } from "./Middleware/Rotas";
import { TratadorDeErros } from "./Middleware/TratadorDeErros";

const app = express();

// Midlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(rotiador);
app.use(TratadorDeErros);

// Servidor
console.clear();
console.log("============================================================");
console.log("                 Servidor Teleconsulta Médica               ");
console.log("============================================================");
app.listen(3434, () => console.log("\nSOLICITAÇÕES"))

//export { app };
