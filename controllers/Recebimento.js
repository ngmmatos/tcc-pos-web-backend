'use strict';

var utils = require('../utils/writer.js');
var Recebimento = require('../service/RecebimentoService');

module.exports.addRecebimento = function addRecebimento (req, res, next, body) {
  Recebimento.addRecebimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRecebimento = function deleteRecebimento (req, res, next, api_key, id_recebimento) {
  Recebimento.deleteRecebimento(api_key, id_recebimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecebimento = function getRecebimento (req, res, next, id_recebimento, id_status_recebimento, id_atendimento, data_recebimento, data_marcacao) {
  Recebimento.getRecebimento(id_recebimento, id_status_recebimento, id_atendimento, data_recebimento, data_marcacao)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRecebimentoById = function getRecebimentoById (req, res, next, id_recebimento) {
  Recebimento.getRecebimentoById(id_recebimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRecebimento = function updateRecebimento (req, res, next, body) {
  Recebimento.updateRecebimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
