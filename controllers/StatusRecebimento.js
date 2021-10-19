'use strict';

var utils = require('../utils/writer.js');
var StatusRecebimento = require('../service/StatusRecebimentoService');

module.exports.addStatusRecebimento = function addStatusRecebimento (req, res, next, body) {
  StatusRecebimento.addStatusRecebimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStatusRecebimento = function deleteStatusRecebimento (req, res, next, api_key, id_status_recebimento) {
  StatusRecebimento.deleteStatusRecebimento(api_key, id_status_recebimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatusRecebimento = function getStatusRecebimento (req, res, next, id_status_recebimento, status_recebimento) {
  StatusRecebimento.getStatusRecebimento(id_status_recebimento, status_recebimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatusRecebimentoById = function getStatusRecebimentoById (req, res, next, id_status_recebimento) {
  StatusRecebimento.getStatusRecebimentoById(id_status_recebimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStatusRecebimento = function updateStatusRecebimento (req, res, next, body) {
  StatusRecebimento.updateStatusRecebimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
