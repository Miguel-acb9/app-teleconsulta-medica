// Importação de módulos e bibliotecas
import { Router } from "express";
import { ValidarAdministrador } from "./ValidarAdministrador";
import { CadastrarMedicoController } from "../Controller/CadastrarMedicoController";
import { CadastrarPacienteController } from "../Controller/CadastrarPacienteController";
import { CadastrarProntuarioController } from "../Controller/CadastrarProntuarioController";
import { CadastrarAdministradorController } from "../Controller/CadastrarAdministradorController";
import { CadastrarEspecialidadeController } from "../Controller/CadastrarEspecialidadeController";

const rotiador = Router();

const cadastrarMedicoController = new CadastrarMedicoController();
const cadastrarPacienteController = new CadastrarPacienteController();
const cadastrarProntuarioController = new CadastrarProntuarioController();
const cadastrarAdministradorController = new CadastrarAdministradorController();
const cadastrarEspecialidadeController = new CadastrarEspecialidadeController();

// Rotas GET dos controladores


// Rotas POST dos constroladores
rotiador.post("/cadastrar-medico", cadastrarMedicoController.tratar);
rotiador.post("/cadastrar-paciente", cadastrarPacienteController.tratar);
rotiador.post("/cadastrar-prontuario", cadastrarProntuarioController.tratar);
rotiador.post("/cadastrar-administrador", cadastrarAdministradorController.tratar);
rotiador.post("/cadastrar-especialidade", ValidarAdministrador, cadastrarEspecialidadeController.tratar);


export { rotiador };
