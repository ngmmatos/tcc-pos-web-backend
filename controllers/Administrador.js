'use strict';

var utils = require('../utils/writer.js');
var Administrador = require('../service/AdministradorService');

module.exports.addAdministrador = function addAdministrador (req, res, next, body) {
  Administrador.addAdministrador(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdministrador = function deleteAdministrador (req, res, next, api_key, id_administrador) {
  Administrador.deleteAdministrador(api_key, id_administrador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdministradorById = function getAdministradorById (req, res, next, id_administrador) {
  Administrador.getAdministradorById(id_administrador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
