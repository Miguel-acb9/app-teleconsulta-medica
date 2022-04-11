// Importação de módulos e bibliotecas
import { Router } from "express";
import { CadastrarMedicoController } from "./Controller/CadastrarMedicoController";
import { CadastrarPacienteController } from "./Controller/CadastrarPacienteController";

const rotiador = Router();

const cadastrarMedicoController = new CadastrarMedicoController();
const cadastrarPacienteController = new CadastrarPacienteController();


// Rotas GET dos controladores


// Rotas POST dos constroladores
rotiador.post("/cadastrar-medico", cadastrarMedicoController.tratar);
rotiador.post("/cadastrar-paciente", cadastrarPacienteController.tratar);

export { rotiador };
