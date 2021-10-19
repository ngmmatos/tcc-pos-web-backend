'use strict';


/**
 * Adiciona um novo agendamento
 *
 * body Agendamento Obejto Agendamento
 * no response value expected for this operation
 **/
exports.addAgendamento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes uma entrada de agendamento
 *
 * api_key String  (optional)
 * id_agendamento Long ID do agendamento a ser deletado
 * no response value expected for this operation
 **/
exports.deleteAgendamento = function(api_key,id_agendamento) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um agendamento
 * Retorna um agendamento
 *
 * id_agendamento Long ID do agendamento (optional)
 * id_agenda Long ID da entrada na agenda (optional)
 * id_procedimentos Long ID procedimentos (optional)
 * id_cliente Long ID do cliente (optional)
 * data_realizacao Integer Data da realização do agendamento (optional)
 * returns Agendamento
 **/
exports.getAgendamento = function(id_agendamento,id_agenda,id_procedimentos,id_cliente,data_realizacao) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um agendamento por ID
 * Retorna um agendamento
 *
 * id_agendamento Long ID do agendamento a ser retornado
 * returns Agendamento
 **/
exports.getAgendamentoById = function(id_agendamento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um agendamento
 *
 * body Agendamento Obejto Agendamento
 * no response value expected for this operation
 **/
exports.updateAgendamento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

