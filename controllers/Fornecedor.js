'use strict';

var utils = require('../utils/writer.js');
var Fornecedor = require('../service/FornecedorService');

module.exports.addFornecedor = function addFornecedor (req, res, next, body) {
  Fornecedor.addFornecedor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFornecedor = function deleteFornecedor (req, res, next, api_key, id_fornecedor) {
  Fornecedor.deleteFornecedor(api_key, id_fornecedor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFornecedor = function getFornecedor (req, res, next, id_fornecedor, telefone, fornecedor, email) {
  Fornecedor.getFornecedor(id_fornecedor, telefone, fornecedor, email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFornecedorById = function getFornecedorById (req, res, next, id_fornecedor) {
  Fornecedor.getFornecedorById(id_fornecedor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFornecedor = function updateFornecedor (req, res, next, body) {
  Fornecedor.updateFornecedor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
