'use strict';

var utils = require('../utils/writer.js');
var Pagamento = require('../service/PagamentoService');

module.exports.addPagamento = function addPagamento (req, res, next, body) {
  Pagamento.addPagamento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePagamento = function deletePagamento (req, res, next, api_key, id_pagamento) {
  Pagamento.deletePagamento(api_key, id_pagamento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPagamento = function getPagamento (req, res, next, id_pagamento, id_conta, id_adm, esporadico, valor) {
  Pagamento.getPagamento(id_pagamento, id_conta, id_adm, esporadico, valor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPagamentoById = function getPagamentoById (req, res, next, id_pagamento) {
  Pagamento.getPagamentoById(id_pagamento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePagamento = function updatePagamento (req, res, next, body) {
  Pagamento.updatePagamento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
