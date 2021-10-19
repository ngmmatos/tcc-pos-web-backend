'use strict';


/**
 * Adicionar um novo administrador
 *
 * body Administrador Objeto Administrador
 * no response value expected for this operation
 **/
exports.addAdministrador = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta um administrador
 *
 * api_key String  (optional)
 * id_administrador Long Id do administrador a ser deletado
 * no response value expected for this operation
 **/
exports.deleteAdministrador = function(api_key,id_administrador) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontra administrador por ID
 * Retorna um administrador
 *
 * id_administrador Long ID de administrador a ser retornado
 * returns Administrador
 **/
exports.getAdministradorById = function(id_administrador) {
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
  "id_adm" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

