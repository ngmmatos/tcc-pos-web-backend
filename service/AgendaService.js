'use strict';


/**
 * Adiciona uma nova entrada de agenda
 *
 * body Agenda Objeto Agenda
 * no response value expected for this operation
 **/
exports.addAgenda = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deleta uma entrada de agenda
 *
 * api_key String  (optional)
 * id_agenda Long ID da entrada de agenda a ser deletada
 * no response value expected for this operation
 **/
exports.deleteAgenda = function(api_key,id_agenda) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontre uma entrada na agenda
 * Retorna uma entrada na agenda
 *
 * id_agenda List ID do usuario a ser retornado (optional)
 * id_barbeiro Long Id do barbeiro (optional)
 * data Integer Data na agenda (optional)
 * periodo String Periodo na agenda (optional)
 * hr_inicio String Horario de inicio (optional)
 * hr_fim String Horario do fim (optional)
 * returns Agenda
 **/
exports.getAgenda = function(id_agenda,id_barbeiro,data,periodo,hr_inicio,hr_fim) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "periodo" : "periodo",
  "hr_inicio" : "hr_inicio",
  "Barbeiro" : {
    "Usuario" : {
      "senha" : "senha",
      "id_usuario" : 0,
      "data_nascimento" : 6,
      "nome" : "nome",
      "sexo" : "sexo",
      "email" : "email"
    },
    "id_barbeiro" : 0
  },
  "id_agenda" : 0,
  "hr_fim" : "hr_fim"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontre uma entrada de agenda pot ID
 * Retorna uma entrada de agenda
 *
 * id_agenda Long ID da entrada de agenda a ser retornada
 * returns Agenda
 **/
exports.getAgendaById = function(id_agenda) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "periodo" : "periodo",
  "hr_inicio" : "hr_inicio",
  "Barbeiro" : {
    "Usuario" : {
      "senha" : "senha",
      "id_usuario" : 0,
      "data_nascimento" : 6,
      "nome" : "nome",
      "sexo" : "sexo",
      "email" : "email"
    },
    "id_barbeiro" : 0
  },
  "id_agenda" : 0,
  "hr_fim" : "hr_fim"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualizar uma entrada de agenda agenda
 *
 * body Agenda Objeto Agenda
 * no response value expected for this operation
 **/
exports.updateagenda = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

