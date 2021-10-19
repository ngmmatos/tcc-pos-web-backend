'use strict';

var utils = require('../utils/writer.js');
var Conta = require('../service/ContaService');

module.exports.addConta = function addConta (req, res, next, body) {
  Conta.addConta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteConta = function deleteConta (req, res, next, api_key, id_conta) {
  Conta.deleteConta(api_key, id_conta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConta = function getConta (req, res, next, id_conta, dt_vencimento, valor) {
  Conta.getConta(id_conta, dt_vencimento, valor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContaById = function getContaById (req, res, next, id_conta) {
  Conta.getContaById(id_conta)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateConta = function updateConta (req, res, next, body) {
  Conta.updateConta(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
