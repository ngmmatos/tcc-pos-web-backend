'use strict';


/**
 * Adiciona um novo insumo
 *
 * body Insumo Obejto Insumo
 * no response value expected for this operation
 **/
exports.addInsumo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes uma entrada de insumo
 *
 * api_key String  (optional)
 * id_insumo Long ID do insumo a ser deletado
 * no response value expected for this operation
 **/
exports.deleteInsumo = function(api_key,id_insumo) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um insumo
 * Retorna um insumo
 *
 * id_insumo List ID do insumo (optional)
 * id_fornecedor Long Id do fornecedor (optional)
 * insumo String Insumo (optional)
 * estoque String Estoque do insumo (optional)
 * returns Insumo
 **/
exports.getInsumo = function(id_insumo,id_fornecedor,insumo,estoque) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um insumo por ID
 * Retorna um insumo
 *
 * id_insumo Long ID do insumo a ser retornado
 * returns Insumo
 **/
exports.getInsumoById = function(id_insumo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um insumo
 *
 * body Insumo Obejto Insumo
 * no response value expected for this operation
 **/
exports.updateInsumo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

