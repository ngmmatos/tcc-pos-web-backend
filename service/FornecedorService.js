'use strict';


/**
 * Adiciona um novo fornecedor
 *
 * body Fornecedor Obejto Fornecedor
 * no response value expected for this operation
 **/
exports.addFornecedor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes uma entrada de fornecedor
 *
 * api_key String  (optional)
 * id_fornecedor Long ID do fornecedor a ser deletado
 * no response value expected for this operation
 **/
exports.deleteFornecedor = function(api_key,id_fornecedor) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um fornecedor
 * Retorna um fornecedor
 *
 * id_fornecedor List ID do fornecedor (optional)
 * telefone String Telefone do fornecedor (optional)
 * fornecedor String Fornecedor (optional)
 * email String Email do fornecedor (optional)
 * returns Fornecedor
 **/
exports.getFornecedor = function(id_fornecedor,telefone,fornecedor,email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "telefone",
  "id_fornecedor" : 5,
  "fornecedor" : "fornecedor",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um fornecedor por ID
 * Retorna um fornecedor
 *
 * id_fornecedor Long ID do fornecedor a ser retornado
 * returns Fornecedor
 **/
exports.getFornecedorById = function(id_fornecedor) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "telefone",
  "id_fornecedor" : 5,
  "fornecedor" : "fornecedor",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um fornecedor
 *
 * body Fornecedor Obejto Fornecedor
 * no response value expected for this operation
 **/
exports.updateFornecedor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

