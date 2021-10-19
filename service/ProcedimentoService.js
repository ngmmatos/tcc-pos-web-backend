'use strict';


/**
 * Adiciona um novo procedimento
 *
 * body Procedimento Obejto Procedimento
 * no response value expected for this operation
 **/
exports.addProcedimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes uma entrada de procedimento
 *
 * api_key String  (optional)
 * id_procedimento Long ID do procedimento a ser deletado
 * no response value expected for this operation
 **/
exports.deleteProcedimento = function(api_key,id_procedimento) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um procedimento
 * Retorna um procedimento
 *
 * id_procedimento List ID do procedimento (optional)
 * id_insumo List ID insumo (optional)
 * procedimento String Procedimento (optional)
 * valor BigDecimal Vlor do procedimento (optional)
 * tempo_medio String Tempo medio do procedimento (optional)
 * returns Procedimento
 **/
exports.getProcedimento = function(id_procedimento,id_insumo,procedimento,valor,tempo_medio) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre um procedimento por ID
 * Retorna um procedimento
 *
 * id_procedimento Long ID do procedimento a ser retornado
 * returns Procedimento
 **/
exports.getProcedimentoById = function(id_procedimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar informações de um procedimento
 *
 * body Procedimento Obejto Procedimento
 * no response value expected for this operation
 **/
exports.updateProcedimento = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

