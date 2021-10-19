'use strict';


/**
 * Adicionar um novo usuário
 *
 * body Usuario Objeto Usuario
 * no response value expected for this operation
 **/
exports.addUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta a usuario
 *
 * api_key String  (optional)
 * id_usuario Long Id do usuario a ser deletado
 * no response value expected for this operation
 **/
exports.deleteUsuario = function(api_key,id_usuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre um usuario
 * Retorna um usuario
 *
 * id_usuario List ID do usuario a ser retornado (optional)
 * nome String nome do usuario (optional)
 * email String Email do usuario (optional)
 * senha String Senha do usuario (optional)
 * sexo String Sexo do usuario (optional)
 * data_nascimento Integer Data de nascimento do usuario (optional)
 * returns Usuario
 **/
exports.getUsuario = function(id_usuario,nome,email,senha,sexo,data_nascimento) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senha" : "senha",
  "id_usuario" : 0,
  "data_nascimento" : 6,
  "nome" : "nome",
  "sexo" : "sexo",
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
 * Encontra usuario por ID
 * Retorna um usuario
 *
 * id_usuario Long ID de usuario a ser retornado
 * returns Usuario
 **/
exports.getUsuarioById = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "senha" : "senha",
  "id_usuario" : 0,
  "data_nascimento" : 6,
  "nome" : "nome",
  "sexo" : "sexo",
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
 * Atualizando um usuario existente
 *
 * body Usuario Objeto Usuario
 * no response value expected for this operation
 **/
exports.updateUsuario = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

