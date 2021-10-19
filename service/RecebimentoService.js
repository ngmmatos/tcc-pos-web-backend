'use strict';


/**
 * Adiciona um novo recebimento
 *
 * body Recebimento Obejto Recebimento
 * no response value expected for this operation
 **/
exports.addRecebimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete um recebimento
 *
 * api_key String  (optional)
 * id_recebimento Long ID do recebimento a ser deletado
 * no response value expected for this operation
 **/
exports.deleteRecebimento = function(api_key,id_recebimento) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um recebimento
 * Retorna um recebimento
 *
 * id_recebimento List ID do recebimento (optional)
 * id_status_recebimento List ID do status do Recebimento (optional)
 * id_atendimento List ID do atendimento (optional)
 * data_recebimento Integer Data do recebimento (optional)
 * data_marcacao Integer Data futura de recebimento (optional)
 * returns Recebimento
 **/
exports.getRecebimento = function(id_recebimento,id_status_recebimento,id_atendimento,data_recebimento,data_marcacao) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_recebimento" : 0,
  "informacao" : "informacao",
  "Atendimento" : {
    "data_inicio" : "data_inicio",
    "id_atendimento" : 0,
    "data_fim" : "data_fim",
    "Agendamento" : {
      "data_realizacao" : "data_realizacao",
      "Procedimento" : {
        "id_procedimento" : 0,
        "valor" : 6.027456183070403,
        "procedimento" : "procedimento",
        "Insumo" : {
          "estoque" : 6,
          "ultimo_valor" : 1.4658129805029452,
          "id_insumo" : 0,
          "Fornecedor" : {
            "telefone" : "telefone",
            "id_fornecedor" : 5,
            "fornecedor" : "fornecedor",
            "email" : "email"
          },
          "insumo" : "insumo"
        },
        "tempo_medio" : 1,
        "descricao" : "descricao"
      },
      "procedimentos" : "procedimentos",
      "data_agendamento" : "data_agendamento",
      "Agenda" : {
        "data" : "data",
        "periodo" : "periodo",
        "hr_inicio" : "hr_inicio",
        "Barbeiro" : {
          "Usuario" : {
            "senha" : "senha",
            "id_usuario" : 0,
            "data_nascimento" : 6,
            "nome" : "nome",
            "sexo" : "sexo",
            "email" : "email"
          },
          "id_barbeiro" : 0
        },
        "id_agenda" : 0,
        "hr_fim" : "hr_fim"
      },
      "id_agendamento" : 0,
      "Cliente" : {
        "id_cliente" : 0,
        "Usuario" : {
          "senha" : "senha",
          "id_usuario" : 0,
          "data_nascimento" : 6,
          "nome" : "nome",
          "sexo" : "sexo",
          "email" : "email"
        }
      }
    },
    "valor" : 6.027456183070403,
    "StatusAtendimento" : {
      "status_atendimento" : "status_atendimento",
      "msg" : "msg",
      "id_status_atendimento" : 1
    }
  },
  "StatusRecebimento" : {
    "status_atendimento" : "status_atendimento",
    "msg" : "msg",
    "id_status_recebimento" : 0
  },
  "data_marcacao" : "data_marcacao",
  "data_recebimento" : 6.027456183070403
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um recebimento por ID
 * Retorna um recebimento
 *
 * id_recebimento Long ID do recebimento a ser retornado
 * returns Recebimento
 **/
exports.getRecebimentoById = function(id_recebimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_recebimento" : 0,
  "informacao" : "informacao",
  "Atendimento" : {
    "data_inicio" : "data_inicio",
    "id_atendimento" : 0,
    "data_fim" : "data_fim",
    "Agendamento" : {
      "data_realizacao" : "data_realizacao",
      "Procedimento" : {
        "id_procedimento" : 0,
        "valor" : 6.027456183070403,
        "procedimento" : "procedimento",
        "Insumo" : {
          "estoque" : 6,
          "ultimo_valor" : 1.4658129805029452,
          "id_insumo" : 0,
          "Fornecedor" : {
            "telefone" : "telefone",
            "id_fornecedor" : 5,
            "fornecedor" : "fornecedor",
            "email" : "email"
          },
          "insumo" : "insumo"
        },
        "tempo_medio" : 1,
        "descricao" : "descricao"
      },
      "procedimentos" : "procedimentos",
      "data_agendamento" : "data_agendamento",
      "Agenda" : {
        "data" : "data",
        "periodo" : "periodo",
        "hr_inicio" : "hr_inicio",
        "Barbeiro" : {
          "Usuario" : {
            "senha" : "senha",
            "id_usuario" : 0,
            "data_nascimento" : 6,
            "nome" : "nome",
            "sexo" : "sexo",
            "email" : "email"
          },
          "id_barbeiro" : 0
        },
        "id_agenda" : 0,
        "hr_fim" : "hr_fim"
      },
      "id_agendamento" : 0,
      "Cliente" : {
        "id_cliente" : 0,
        "Usuario" : {
          "senha" : "senha",
          "id_usuario" : 0,
          "data_nascimento" : 6,
          "nome" : "nome",
          "sexo" : "sexo",
          "email" : "email"
        }
      }
    },
    "valor" : 6.027456183070403,
    "StatusAtendimento" : {
      "status_atendimento" : "status_atendimento",
      "msg" : "msg",
      "id_status_atendimento" : 1
    }
  },
  "StatusRecebimento" : {
    "status_atendimento" : "status_atendimento",
    "msg" : "msg",
    "id_status_recebimento" : 0
  },
  "data_marcacao" : "data_marcacao",
  "data_recebimento" : 6.027456183070403
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um recebimento
 *
 * body Recebimento Obejto Recebimento
 * no response value expected for this operation
 **/
exports.updateRecebimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

