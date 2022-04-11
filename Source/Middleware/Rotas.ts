// Importação de módulos e bibliotecas
import { Router } from "express";
import { ValidarMedico } from "./ValidarMedico";
import { ValidarPaciente } from "./ValidarPaciente";
import { ValidarAdministrador } from "./ValidarAdministrador";
import { LoginMedicoController } from "../Controller/LoginMedicoController";
import { LoginPacienteController } from "../Controller/LoginPacienteController";
import { ListarMedicosController } from "../Controller/ListarMedicosController";
import { CadastrarMedicoController } from "../Controller/CadastrarMedicoController";
import { ListarPacientesController } from "../Controller/ListarPacientesController";
import { ListarConsultasController } from "../Controller/ListarConsultasController";
import { ExcluirProntuarioController } from "../Controller/ExcluirProntuarioController";
import { CadastrarConsultaController } from "../Controller/CadastrarConsultaController";
import { CadastrarPacienteController } from "../Controller/CadastrarPacienteController";
import { ListarProntuariosController } from "../Controller/ListarProntuariosController";
import { LoginAdministradorController } from "../Controller/LoginAdministradorController";
import { CadastrarProntuarioController } from "../Controller/CadastrarProntuarioController";
import { ListarEspecialidadesController } from "../Controller/ListarEspecialidadesController";
import { ListarAdministradoresController } from "../Controller/ListarAdministradoresController";
import { CadastrarAdministradorController } from "../Controller/CadastrarAdministradorController";
import { CadastrarEspecialidadeController } from "../Controller/CadastrarEspecialidadeController";

const rotiador = Router();

const loginMedicoController = new LoginMedicoController();
const listarMedicosController = new ListarMedicosController();
const loginPacienteController = new LoginPacienteController();
const cadastrarMedicoController = new CadastrarMedicoController();
const listarPacientesController = new ListarPacientesController();
const listarConsultasController = new ListarConsultasController();
const listarProntuariosController = new ListarProntuariosController();
const cadastrarConsultaController = new CadastrarConsultaController();
const cadastrarPacienteController = new CadastrarPacienteController();
const loginAdministradorController = new LoginAdministradorController();
const cadastrarProntuarioController = new CadastrarProntuarioController();
const listarEspecialidadesController = new ListarEspecialidadesController();
const listarAdministradoresController = new ListarAdministradoresController();
const cadastrarAdministradorController = new CadastrarAdministradorController();
const cadastrarEspecialidadeController = new CadastrarEspecialidadeController();
const excluirProntuarioController = new ExcluirProntuarioController();

// Rotas GET dos controladores
rotiador.get("/listar-especialidades", listarEspecialidadesController.tratar);
rotiador.get("/listar-medicos", ValidarAdministrador, listarMedicosController.tratar);
rotiador.get("/listar-pacientes", ValidarAdministrador, listarPacientesController.tratar);
rotiador.get("/listar-prontuarios", ValidarAdministrador, listarProntuariosController.tratar);
rotiador.get("/listar-meus-atendimentos", ValidarMedico, listarConsultasController.tratar);
rotiador.get("/listar-minhas-consultas", ValidarPaciente, listarConsultasController.tratar);
rotiador.get("/listar-administradores", ValidarAdministrador, listarAdministradoresController.tratar);

// Rotas POST dos constroladores
rotiador.post("/login-medico", loginMedicoController.tratar);
rotiador.post("/login-paciente", loginPacienteController.tratar);
rotiador.post("/cadastrar-medico", cadastrarMedicoController.tratar);
rotiador.post("/cadastrar-paciente", cadastrarPacienteController.tratar);
rotiador.post("/login-administrador", loginAdministradorController.tratar);
rotiador.post("/cadastrar-administrador", cadastrarAdministradorController.tratar);
rotiador.post("/cadastrar-especialidade", cadastrarEspecialidadeController.tratar);
rotiador.post("/cadastrar-consulta", ValidarMedico, cadastrarConsultaController.tratar);
rotiador.post("/cadastrar-prontuario", ValidarMedico, cadastrarProntuarioController.tratar);

// Rotas DELETE dos controladores
rotiador.delete("/excluir-prontuario", ValidarMedico, excluirProntuarioController.tratar);

export { rotiador };
