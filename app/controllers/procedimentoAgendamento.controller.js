const db = require("../models");
const ProcedimentoAgendamento = db.ProcedimentoAgendamento;
const Agendamento = db.Agendamento;
const Procedimento = db.Procedimento;
const Agenda = db.Agenda;
const Barbeiro = db.Barbeiro;
const Cliente = db.Cliente;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const procedimentoAgendamento = {
    id_agendamento: req.body.id_agendamento,
    id_procedimento: req.body.id_procedimento
  };

  ProcedimentoAgendamento.create(procedimentoAgendamento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um procedimentoAgendamento."
      });
    });
};

exports.findAll = (req, res) => {
  const id_agendamento = req.query.id_agendamento;
  const id_procedimento = req.query.id_procedimento;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_procedimento'

  var conditionIdAgendamento = id_agendamento ? { id_agendamento: { [Op.like]: `%${id_agendamento}%` } } : null;
  var conditioIdProcedimento = id_procedimento ? { id_procedimento: { [Op.like]: `%${id_procedimento}%` } } : null;

  ProcedimentoAgendamento.findAll({ where: {
    [Op.and]: [conditionIdAgendamento, conditioIdProcedimento]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: [{
    model: Agendamento,
    include: [{
      model: Cliente,
      include: [{
        model: Usuario,
        }],
      model: Agenda,
      include: [{
        model: Barbeiro,
          include: [{
            model: Usuario,
        }],
      }],
    }],
  },{
    model: Procedimento,
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
  const id = req.params.id_procedimento_agendamento;

  ProcedimentoAgendamento.findByPk(id, {include: [{ all: true }]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado procedimentoAgendamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar procedimentoAgendamento id=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_procedimento_agendamento;

  ProcedimentoAgendamento.destroy({
    where: { id_procedimento_agendamento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "ProcedimentoAgendamento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado procedimentoAgendamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar procedimentoAgendamento=${id}`
      });
    });
};

