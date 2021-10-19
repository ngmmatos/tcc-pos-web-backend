'use strict';

var utils = require('../utils/writer.js');
var Agenda = require('../service/AgendaService');

module.exports.addAgenda = function addAgenda (req, res, next, body) {
  Agenda.addAgenda(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAgenda = function deleteAgenda (req, res, next, api_key, id_agenda) {
  Agenda.deleteAgenda(api_key, id_agenda)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgenda = function getAgenda (req, res, next, id_agenda, id_barbeiro, data, periodo, hr_inicio, hr_fim) {
  Agenda.getAgenda(id_agenda, id_barbeiro, data, periodo, hr_inicio, hr_fim)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAgendaById = function getAgendaById (req, res, next, id_agenda) {
  Agenda.getAgendaById(id_agenda)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateagenda = function updateagenda (req, res, next, body) {
  Agenda.updateagenda(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
