// Importação de módulos e bibliotecas
import { Router } from "express";
import { ValidarMedico } from "./ValidarMedico";
import { ValidarPaciente } from "./ValidarPaciente";
import { ValidarAdministrador } from "./ValidarAdministrador";
import { LoginMedicoController } from "../Controller/LoginMedicoController";
import { LoginPacienteController } from "../Controller/LoginPacienteController";
import { CadastrarMedicoController } from "../Controller/CadastrarMedicoController";
import { CadastrarConsultaController } from "../Controller/CadastrarConsultaController";
import { CadastrarPacienteController } from "../Controller/CadastrarPacienteController";
import { LoginAdministradorController } from "../Controller/LoginAdministradorController";
import { CadastrarProntuarioController } from "../Controller/CadastrarProntuarioController";
import { CadastrarAdministradorController } from "../Controller/CadastrarAdministradorController";
import { CadastrarEspecialidadeController } from "../Controller/CadastrarEspecialidadeController";

const rotiador = Router();

const loginMedicoController = new LoginMedicoController();
const loginPacienteController = new LoginPacienteController();
const cadastrarMedicoController = new CadastrarMedicoController();
const cadastrarConsultaController = new CadastrarConsultaController();
const cadastrarPacienteController = new CadastrarPacienteController();
const loginAdministradorController = new LoginAdministradorController();
const cadastrarProntuarioController = new CadastrarProntuarioController();
const cadastrarAdministradorController = new CadastrarAdministradorController();
const cadastrarEspecialidadeController = new CadastrarEspecialidadeController();

// Rotas GET dos controladores
rotiador.get("/listar-consultas", listarProntuariosController.tratar);
rotiador.get("/listar-prontuarios", listarProntuariosController.tratar);
rotiador.get("/listar-especialidades", listarEspecialidadesController.tratar);
rotiador.get("/listar-medicos", ValidarAdministrador, listarMedicosController.tratar);
rotiador.get("/listar-pacientes", ValidarAdministrador, listarPacientesController.tratar);
rotiador.get("/listar-administradores", ValidarAdministrador, listarAdministradoresController.tratar);

// Rotas POST dos constroladores
rotiador.post("/login-medico", loginMedicoController.tratar);
rotiador.post("/login-paciente", loginPacienteController.tratar);
rotiador.post("/cadastrar-medico", cadastrarMedicoController.tratar);
rotiador.post("/cadastrar-paciente", cadastrarPacienteController.tratar);
rotiador.post("/cadastrar-consulta", ValidarMedico, cadastrarConsultaController.tratar);
rotiador.post("/login-administrador", loginAdministradorController.tratar);
rotiador.post("/cadastrar-prontuario", ValidarMedico, cadastrarProntuarioController.tratar);
rotiador.post("/cadastrar-administrador", ValidarAdministrador, cadastrarAdministradorController.tratar);
rotiador.post("/cadastrar-especialidade", ValidarAdministrador, cadastrarEspecialidadeController.tratar);

export { rotiador };
