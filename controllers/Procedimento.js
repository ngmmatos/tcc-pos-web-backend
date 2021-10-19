'use strict';

var utils = require('../utils/writer.js');
var Procedimento = require('../service/ProcedimentoService');

module.exports.addProcedimento = function addProcedimento (req, res, next, body) {
  Procedimento.addProcedimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProcedimento = function deleteProcedimento (req, res, next, api_key, id_procedimento) {
  Procedimento.deleteProcedimento(api_key, id_procedimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcedimento = function getProcedimento (req, res, next, id_procedimento, id_insumo, procedimento, valor, tempo_medio) {
  Procedimento.getProcedimento(id_procedimento, id_insumo, procedimento, valor, tempo_medio)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProcedimentoById = function getProcedimentoById (req, res, next, id_procedimento) {
  Procedimento.getProcedimentoById(id_procedimento)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProcedimento = function updateProcedimento (req, res, next, body) {
  Procedimento.updateProcedimento(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
