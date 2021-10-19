'use strict';


/**
 * Adicionar um novo barbeiro
 *
 * body Barbeiro Objeto Barbeiro
 * no response value expected for this operation
 **/
exports.addBarbeiro = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta um barbeiro
 *
 * api_key String  (optional)
 * id_barbeiro Long Id do barbeiro a ser deletado
 * no response value expected for this operation
 **/
exports.deleteBarbeiro = function(api_key,id_barbeiro) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontra barbeiro por ID
 * Retorna um barbeiro
 *
 * id_barbeiro Long ID de barbeiro a ser retornado
 * returns Barbeiro
 **/
exports.getBarbeiroById = function(id_barbeiro) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Usuario" : {
    "senha" : "senha",
    "id_usuario" : 0,
    "data_nascimento" : 6,
    "nome" : "nome",
    "sexo" : "sexo",
    "email" : "email"
  },
  "id_barbeiro" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

