'use strict';

var utils = require('../utils/writer.js');
var Atendimento = require('../service/AtendimentoService');

module.exports.addAtendimento = function addAtendimento (req, res, next, body) {
  Atendimento.addAtendimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAtendimento = function deleteAtendimento (req, res, next, api_key, id_atendimento) {
  Atendimento.deleteAtendimento(api_key, id_atendimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAtendimento = function getAtendimento (req, res, next, id_atendimento, id_agendamento, data_inicio, data_fim, valor) {
  Atendimento.getAtendimento(id_atendimento, id_agendamento, data_inicio, data_fim, valor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAtendimentoById = function getAtendimentoById (req, res, next, id_atendimento) {
  Atendimento.getAtendimentoById(id_atendimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAtendimento = function updateAtendimento (req, res, next, body) {
  Atendimento.updateAtendimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
