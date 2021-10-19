'use strict';


/**
 * Adiciona uma nova conta
 *
 * body Conta Objeto Conta
 * no response value expected for this operation
 **/
exports.addConta = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes uma conta
 *
 * api_key String  (optional)
 * id_conta Long ID da conta a ser deletada
 * no response value expected for this operation
 **/
exports.deleteConta = function(api_key,id_conta) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre uma conta
 * Retorna uma conta
 *
 * id_conta List ID da conta (optional)
 * dt_vencimento Integer Data de vencimento da conta (optional)
 * valor BigDecimal Valor da conta (optional)
 * returns Conta
 **/
exports.getConta = function(id_conta,dt_vencimento,valor) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_conta" : 6,
  "dt_vencimento" : "dt_vencimento",
  "valor" : 1.4658129805029452
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre uma conta por ID
 * Retorna uma conta
 *
 * id_conta Long ID da conta a ser retornado
 * returns Conta
 **/
exports.getContaById = function(id_conta) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_conta" : 6,
  "dt_vencimento" : "dt_vencimento",
  "valor" : 1.4658129805029452
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de uma conta
 *
 * body Conta Objeto Conta
 * no response value expected for this operation
 **/
exports.updateConta = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

