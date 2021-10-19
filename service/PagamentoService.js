'use strict';


/**
 * Adiciona um novo pagamento
 *
 * body Pagamento Obejto Pagamento
 * no response value expected for this operation
 **/
exports.addPagamento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes uma entrada de pagamento
 *
 * api_key String  (optional)
 * id_pagamento Long ID do pagamento a ser deletado
 * no response value expected for this operation
 **/
exports.deletePagamento = function(api_key,id_pagamento) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um pagamento
 * Retorna um pagamento
 *
 * id_pagamento List ID do pagamento (optional)
 * id_conta List ID da conta (optional)
 * id_adm List ID do administrador (optional)
 * esporadico Boolean Pagamento esporádico? (optional)
 * valor BigDecimal Valor do pagamento (optional)
 * returns Pagamento
 **/
exports.getPagamento = function(id_pagamento,id_conta,id_adm,esporadico,valor) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "esporadico" : true,
  "Administrador" : {
    "Usuario" : {
      "senha" : "senha",
      "id_usuario" : 0,
      "data_nascimento" : 6,
      "nome" : "nome",
      "sexo" : "sexo",
      "email" : "email"
    },
    "id_adm" : 0
  },
  "data_pagamento" : "data_pagamento",
  "Conta" : {
    "id_conta" : 6,
    "dt_vencimento" : "dt_vencimento",
    "valor" : 1.4658129805029452
  },
  "id_pagamento" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um pagamento por ID
 * Retorna um pagamento
 *
 * id_pagamento Long ID do pagamento a ser retornado
 * returns Pagamento
 **/
exports.getPagamentoById = function(id_pagamento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "esporadico" : true,
  "Administrador" : {
    "Usuario" : {
      "senha" : "senha",
      "id_usuario" : 0,
      "data_nascimento" : 6,
      "nome" : "nome",
      "sexo" : "sexo",
      "email" : "email"
    },
    "id_adm" : 0
  },
  "data_pagamento" : "data_pagamento",
  "Conta" : {
    "id_conta" : 6,
    "dt_vencimento" : "dt_vencimento",
    "valor" : 1.4658129805029452
  },
  "id_pagamento" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um pagamento
 *
 * body Pagamento Obejto Pagamento
 * no response value expected for this operation
 **/
exports.updatePagamento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

