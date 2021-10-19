'use strict';

var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');

module.exports.addUsuario = function addUsuario (req, res, next, body) {
  Usuario.addUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUsuario = function deleteUsuario (req, res, next, api_key, id_usuario) {
  Usuario.deleteUsuario(api_key, id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsuario = function getUsuario (req, res, next, id_usuario, nome, email, senha, sexo, data_nascimento) {
  Usuario.getUsuario(id_usuario, nome, email, senha, sexo, data_nascimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsuarioById = function getUsuarioById (req, res, next, id_usuario) {
  Usuario.getUsuarioById(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUsuario = function updateUsuario (req, res, next, body) {
  Usuario.updateUsuario(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
