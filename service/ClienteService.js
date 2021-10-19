'use strict';


/**
 * Adicionar um novo cliente
 *
 * body Cliente Objeto Cliente
 * no response value expected for this operation
 **/
exports.addCliente = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta um cliente
 *
 * api_key String  (optional)
 * id_cliente Long Id do cliente a ser deletado
 * no response value expected for this operation
 **/
exports.deleteCliente = function(api_key,id_cliente) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontra cliente por ID
 * Retorna um cliente
 *
 * id_cliente Long ID de cliente a ser retornado
 * returns Cliente
 **/
exports.getClienteById = function(id_cliente) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_cliente" : 0,
  "Usuario" : {
    "senha" : "senha",
    "id_usuario" : 0,
    "data_nascimento" : 6,
    "nome" : "nome",
    "sexo" : "sexo",
    "email" : "email"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

