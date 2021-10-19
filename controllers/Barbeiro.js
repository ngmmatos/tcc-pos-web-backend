'use strict';

var utils = require('../utils/writer.js');
var Barbeiro = require('../service/BarbeiroService');

module.exports.addBarbeiro = function addBarbeiro (req, res, next, body) {
  Barbeiro.addBarbeiro(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBarbeiro = function deleteBarbeiro (req, res, next, api_key, id_barbeiro) {
  Barbeiro.deleteBarbeiro(api_key, id_barbeiro)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBarbeiroById = function getBarbeiroById (req, res, next, id_barbeiro) {
  Barbeiro.getBarbeiroById(id_barbeiro)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
