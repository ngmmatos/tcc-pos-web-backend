'use strict';

var utils = require('../utils/writer.js');
var StatusAtendimento = require('../service/StatusAtendimentoService');

module.exports.addStatusAtendimento = function addStatusAtendimento (req, res, next, body) {
  StatusAtendimento.addStatusAtendimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteStatusAtendimento = function deleteStatusAtendimento (req, res, next, api_key, id_status_atendimento) {
  StatusAtendimento.deleteStatusAtendimento(api_key, id_status_atendimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatusAtendimento = function getStatusAtendimento (req, res, next, id_status_atendimento, status_atendimento) {
  StatusAtendimento.getStatusAtendimento(id_status_atendimento, status_atendimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStatusAtendimentoById = function getStatusAtendimentoById (req, res, next, id_status_atendimento) {
  StatusAtendimento.getStatusAtendimentoById(id_status_atendimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStatusAtendimento = function updateStatusAtendimento (req, res, next, body) {
  StatusAtendimento.updateStatusAtendimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
