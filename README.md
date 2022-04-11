# Teleconsulta Médica

A aplicação trata-se de um software que une pacientes e médicos interessados em uma consulta, no qual gera um prontuário para auxiliar no tratamento do paciente de forma rápida e fácil.

## 🚀 Começando

### 📋 Pré-requisitos

1. Instalação do Node(https://nodejs.org/pt-br/) 
    - Verificação:
    ```
    node --version
    npm --version
    ```

2. Instalação do gerenciador de pacotes Yarn
    - Instalação
    ```
    npm install --global yarn
    ```
3. Baixar as ferramentas:
    - Insominia - https://insomnia.rest/download
    - Beekeeper - https://www.beekeeperstudio.io/


### 📋 Dependências
1. Inicialização das dependencias e configurações do ambiente de desenvolvimento.
    ```
    yarn 
    ```

## 💾 Bando de Dados
Criar banco de dados
```
yarn typeorm migration:run
```

# 📋 Tabelas

## Médico
|    | NOME              | TIPO      | DESCRIÇÃO                                                  |
| -- | ----------------- | --------- | ---------------------------------------------------------- |
|  1 | id(PK)            | uuid      | Chave primaria de identificação do médico                  |
|  2 | nome              | varchar   | Nome do médico                                             |
|  3 | crm               | varchar   | Conselho Regional de Medicina                              |
|  4 | especialidade(FK) | uuid      | Chave estrangeira de identificação da especialidade médica |
|  5 | endereco          | varchar   | Endereço do médico                                         |
|  6 | telefone          | varchar   | Telefone de contato do médico                              |
|  7 | email             | varchar   | E-amil do cadastro do médico                               |
|  8 | senha             | varchar   | Senha do cadastro do médico                                |
|  9 | criado_em         | timestamp | Data de criação do cadastro                                |
| 10 | atualizado_em     | timestamp | Data de atualização do cadastro                            |

## Paciente
|    | NOME          | TIPO      | DESCRIÇÃO                                   |
| -- | ------------- | --------- | ------------------------------------------- |
|  1 | id(PK)        | uuid      | Chave primaria de identificação do paciente |
|  2 | nome          | varchar   | Nome do paciente                            |
|  3 | cpf           | varchar   | CPF do paciente                             | 
|  4 | idade         | int       | Idade do paciente                           |
|  5 | endereco      | varchar   | Endereço do paciente                        |
|  6 | telefone      | varchar   | Telefone de contato do paciente             |
|  7 | email         | varchar   | E-amil do cadastro do paciente              |
|  8 | senha         | varchar   | Senha do cadastro do paciente               |
|  9 | criado_em     | timestamp | Data de criação do cadastro                 |
| 10 | atualizado_em | timestamp | Data de atualização do cadastro             |

## Administrador
|    | NOME          | TIPO      | DESCRIÇÃO                                        |
| -- | ------------- | --------- | ------------------------------------------------ |
|  1 | id(PK)        | uuid      | Chave primaria de identificação do administrador |
|  2 | nome          | varchar   | nome do administrador                            |
|  3 | email         | varchar   | E-amil do cadastro do administrador              |
|  4 | senha         | varchar   | Senha do cadastro do administrador               |
|  5 | criado_em     | timestamp | Data de criação do cadastro                      |
|  6 | atualizado_em | timestamp | Data de atualização do cadastro                  |

## Prontuário
|    | NOME          | TIPO      | DESCRIÇÃO                                     |
| -- | ------------- | --------- | --------------------------------------------- |
|  1 | id(PK)        | uuid      | Chave primaria de identificação do prontuário |
|  5 | descricao     | varchar   | Descrição do prontuário                       |
|  5 | criado_em     | timestamp | Data de criação do cadastro                   |
|  6 | atualizado_em | timestamp | Data de atualização do cadastro               |

## Consulta
|    | NOME              | TIPO      | DESCRIÇÃO                                        |
| -- | ----------------- | --------- | ------------------------------------------------ |
|  1 | id(PK)            | uuid      | Chave primaria de identificação da consulta      |
|  2 | id_medico(FK)     | uuid      | Chave estrangeira de identificação do médico     |
|  3 | id_paciente(FK)   | uuid      | Chave estrangeira de identificação do paciente   |
|  4 | id_prontuario(FK) | uuid      | Chave estrangeira de identificação do prontuário |
|  5 | criado_em         | timestamp | Data de criação do cadastro                      |
|  6 | atualizado_em     | timestamp | Data de atualização do cadastro                  |

## Especialidade
|    | NOME          | TIPO      | DESCRIÇÃO                                        |
| -- | ------------- | --------- | ------------------------------------------------ |
|  1 | id(PK)        | uuid      | Chave primaria de identificação da especialidade |
|  5 | especialidade | varchar   | Nome da especialidade médica                     |
|  5 | criado_em     | timestamp | Data de criação do cadastro                      |
|  6 | atualizado_em | timestamp | Data de atualização do cadastro                  |

# Testes no Insominia

## Cadastros
```JSON
// Administrador
{
	"nome": "Fulano",
	"email": "fulano@email.com",
	"senha": "senha123"
}

// Especialidade
{
	"especialidade": "Cardiologia"
}

// Médico
{
	"nome": "Ciclano",
	"crm": "CRM/GO 111111",
	"id_especialidade": "",
	"endereco": "Rua 2, 2, setor central, Goiânia, Goiás",
	"telefone": "(62)92222-2222",
	"email": "ciclano@email.com",
	"senha": "senha123"
}

// Paciente
{
	"nome": "Beltrano",
	"cpf": "111.111.111-11",
	"idade": "30",
	"endereco": "Rua 1, 1, setor central, Goiânia, Goiás",
	"telefone": "(62)91111-1111",
	"email": "beltrano@email.com",
	"senha": "senha123"
}

// Prontuário
{
	"descricao": "Vai morrer em 2 dias."
}

// Consulta
{
	"id_medico": "",
	"id_paciente": "",
	"id_prontuario": ""
}
```

## Login
```JSON
// Médico
{
	"email": "Ciclano@email.com",
	"senha": "senha123"
}
// Paciente
{
	"email": "Beltrano@email.com",
	"senha": "senha123"
}
// Administrador
{
	"email": "fulano@email.com",
	"senha": "senha123"
}
```

## Exclusões
```JSON
{
	"id": ""
}
```




