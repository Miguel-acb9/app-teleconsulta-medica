// Importação de módulos e bibliotecas
import "./Database";
import "reflect-metadata";
import express from "express";
import { rotiador } from "./Rotas";

const app = express();

// Midlewares
app.use(express.json());
app.use(rotiador);

// Servidor
console.clear();
console.log("============================================================");
console.log("                 Servidor  Teleconsulta Médica              ");
console.log("============================================================");
app.listen(3434, () => console.log("\nSOLICITAÇÕES"));

