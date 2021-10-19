'use strict';

var utils = require('../utils/writer.js');
var Agendamento = require('../service/AgendamentoService');

module.exports.addAgendamento = function addAgendamento (req, res, next, body) {
  Agendamento.addAgendamento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAgendamento = function deleteAgendamento (req, res, next, api_key, id_agendamento) {
  Agendamento.deleteAgendamento(api_key, id_agendamento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgendamento = function getAgendamento (req, res, next, id_agendamento, id_agenda, id_procedimentos, id_cliente, data_realizacao) {
  Agendamento.getAgendamento(id_agendamento, id_agenda, id_procedimentos, id_cliente, data_realizacao)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgendamentoById = function getAgendamentoById (req, res, next, id_agendamento) {
  Agendamento.getAgendamentoById(id_agendamento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAgendamento = function updateAgendamento (req, res, next, body) {
  Agendamento.updateAgendamento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
