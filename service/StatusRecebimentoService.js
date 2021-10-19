'use strict';


/**
 * Adiciona um novo status de recebimento
 *
 * body StatusRecebimento Obejto StatusRecebimento
 * no response value expected for this operation
 **/
exports.addStatusRecebimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete um status de Recebimento
 *
 * api_key String  (optional)
 * id_status_recebimento Long ID do status de Recebimento a ser deletado
 * no response value expected for this operation
 **/
exports.deleteStatusRecebimento = function(api_key,id_status_recebimento) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um status de Recebimento
 * Retorna um status de Recebimento
 *
 * id_status_recebimento List ID do status de Recebimento (optional)
 * status_recebimento String Status do Recebimento (optional)
 * returns StatusRecebimento
 **/
exports.getStatusRecebimento = function(id_status_recebimento,status_recebimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_atendimento" : "status_atendimento",
  "msg" : "msg",
  "id_status_recebimento" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um status de Recebimento por ID
 * Retorna um status de Recebimento
 *
 * id_status_recebimento Long ID do status de Recebimento a ser retornado
 * returns StatusRecebimento
 **/
exports.getStatusRecebimentoById = function(id_status_recebimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_atendimento" : "status_atendimento",
  "msg" : "msg",
  "id_status_recebimento" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um status de Recebimento
 *
 * body StatusRecebimento Obejto StatusRecebimento
 * no response value expected for this operation
 **/
exports.updateStatusRecebimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

