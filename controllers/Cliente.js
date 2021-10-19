'use strict';

var utils = require('../utils/writer.js');
var Cliente = require('../service/ClienteService');

module.exports.addCliente = function addCliente (req, res, next, body) {
  Cliente.addCliente(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCliente = function deleteCliente (req, res, next, api_key, id_cliente) {
  Cliente.deleteCliente(api_key, id_cliente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getClienteById = function getClienteById (req, res, next, id_cliente) {
  Cliente.getClienteById(id_cliente)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
