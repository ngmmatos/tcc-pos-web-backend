const db = require("../models");
const usuarioModel = require("../models/usuario.model");
const Agendamento = db.Agendamento;
const Agenda = db.Agenda;
const Cliente = db.Cliente;
const Barbeiro = db.Barbeiro;
const Usuario = db.Usuario;
const Procedimento = db.Procedimento;
const ProcedimentoAgendamento = db.ProcedimentoAgendamento;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nome) {
  //   res.status(400).send({
  //     message: "Nome não pode ser vazio!"
  //   });
  //   return;
  // }

  const agendamento = {
    id_agenda: req.body.id_agenda,
    id_cliente: req.body.id_cliente,
    data_realizacao: req.body.data_realizacao,
    data_agendamento: req.body.data_agendamento
  };

  // Save Tutorial in the database
  Agendamento.create(agendamento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de uma agendamento."
      });
    });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id_agenda = req.query.id_agenda;
  const id_cliente = req.query.id_cliente;
  const data_realizacao = req.query.data_realizacao;
  const data_agendamento = req.query.data_agendamento;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_agendamento'

  var conditionIdAgenda = id_agenda ? { id_agenda: { [Op.eq]: `${id_agenda}` } } : null;
  var conditionIdCliente = id_cliente ? { id_cliente: { [Op.eq]: `${id_cliente}` } } : null;
  var conditionDataRealizacao = data_realizacao ? { data_realizacao: { [Op.eq]: `${data_realizacao}` } } : null;
  var conditionDataAgendamento = data_agendamento ? { data_agendamento: { [Op.eq]: `${data_agendamento}` } } : null;

  Agendamento.findAll({ where: {
    [Op.and]: [conditionIdAgenda, conditionIdCliente, conditionDataRealizacao, conditionDataAgendamento]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: [{
    model: Agenda,
    include: [{
      model: Barbeiro,
      include: [{
        model: Usuario,
      }],
    }],
  },{
    model: Cliente,
    include: [{
      model: Usuario,
      }],
    },{
      model: ProcedimentoAgendamento,
      include: [{
        model: Procedimento,
      }],
    }],
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro ao tentar buscar informações."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id_agendamento;

  Agendamento.findByPk(id, {include: [{ all: true }]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado agendamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar agendamento id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_agendamento;

  Agendamento.update(req.body, {
    where: { id_agendamento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Agendamento atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado agendamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro atualizando Agendamento com id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_agendamento;

  Agendamento.destroy({
    where: { id_agendamento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Agenda deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado agendamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar agendamento=${id}`
      });
    });
};

