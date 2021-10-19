'use strict';

var utils = require('../utils/writer.js');
var Insumo = require('../service/InsumoService');

module.exports.addInsumo = function addInsumo (req, res, next, body) {
  Insumo.addInsumo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteInsumo = function deleteInsumo (req, res, next, api_key, id_insumo) {
  Insumo.deleteInsumo(api_key, id_insumo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInsumo = function getInsumo (req, res, next, id_insumo, id_fornecedor, insumo, estoque) {
  Insumo.getInsumo(id_insumo, id_fornecedor, insumo, estoque)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getInsumoById = function getInsumoById (req, res, next, id_insumo) {
  Insumo.getInsumoById(id_insumo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInsumo = function updateInsumo (req, res, next, body) {
  Insumo.updateInsumo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
