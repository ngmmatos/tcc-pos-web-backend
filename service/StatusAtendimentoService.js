'use strict';


/**
 * Adiciona um novo status de Atendimento
 *
 * body StatusAtendimento Obejto StatusAtendimento
 * no response value expected for this operation
 **/
exports.addStatusAtendimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete um status de atendimento
 *
 * api_key String  (optional)
 * id_status_atendimento Long ID do status de atendimento a ser deletado
 * no response value expected for this operation
 **/
exports.deleteStatusAtendimento = function(api_key,id_status_atendimento) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um status de atendimento
 * Retorna um status de atendimento
 *
 * id_status_atendimento List ID do status de atendimento (optional)
 * status_atendimento String Status do atendimento (optional)
 * returns StatusAtendimento
 **/
exports.getStatusAtendimento = function(id_status_atendimento,status_atendimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_atendimento" : "status_atendimento",
  "msg" : "msg",
  "id_status_atendimento" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um status de atendimento por ID
 * Retorna um status de atendimento
 *
 * id_status_atendimento Long ID do status de atendimento a ser retornado
 * returns StatusAtendimento
 **/
exports.getStatusAtendimentoById = function(id_status_atendimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status_atendimento" : "status_atendimento",
  "msg" : "msg",
  "id_status_atendimento" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um status de atendimento
 *
 * body StatusAtendimento Obejto StatusAtendimento
 * no response value expected for this operation
 **/
exports.updateStatusAtendimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

