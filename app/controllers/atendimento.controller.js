const db = require("../models");
const Atendimento = db.Atendimento;
const StatusAtendimento = db.StatusAtendimento;
const Agenda = db.Agenda;
const Agendamento = db.Agendamento;
const Cliente = db.Cliente;
const Barbeiro = db.Barbeiro;
const Usuario = db.Usuario;
const Procedimento = db.Procedimento;
const ProcedimentoAgendamento = db.ProcedimentoAgendamento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const atendimento = {
    id_agendamento: req.body.id_agendamento,
    id_status_atendimento: req.body.id_status_atendimento,
    valor: req.body.valor,
    data_inicio: req.body.data_inicio,
    data_fim: req.body.data_fim
  };

  Atendimento.create(atendimento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Atendimento."
      });
    });
};

exports.findAll = (req, res) => {
  const id_atendimento = req.query.id_atendimento;
  const id_agendamento = req.query.id_agendamento;
  const id_status_atendimento = req.query.id_status_atendimento;
  const valor = req.query.valor;
  const data_inicio = req.query.data_inicio;
  const data_fim = req.query.data_fim;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_atendimento'

  var conditionAtendimento = id_atendimento ? { id_atendimento: { [Op.eq]: `${id_atendimento}` } } : null;
  var conditionIdAgendamento = id_agendamento ? { id_agendamento: { [Op.eq]: `${id_agendamento}` } } : null;
  var conditionStatusAtendimento = id_status_atendimento ? { id_status_atendimento: { [Op.eq]: `${id_status_atendimento}` } } : null;
  var conditionValor = valor ? { valor: { [Op.eq]: `${valor}` } } : null;
  var conditionDataInicio = data_inicio ? { data_inicio: { [Op.lte]: `${data_inicio}` } } : null;
  var conditionDataFim = data_fim ? { data_fim: { [Op.gte]: `${data_fim}` } } : null;

  Atendimento.findAll({ where: {
    [Op.and]: [conditionAtendimento, conditionIdAgendamento, conditionStatusAtendimento, conditionValor, conditionDataInicio, conditionDataFim]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: [{
    model: Agendamento,
    include: [{
        model: Agenda,
        include: [{
            model: Barbeiro,
            include: [{
              model: Usuario,
            }],
        }],
        model: Cliente,
        include: [{
          model: Usuario,
          }],
        },{
          model: ProcedimentoAgendamento,
          include: [{
            model: Procedimento,
          }],
        }]
    },{
    model: StatusAtendimento,
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
  const id = req.params.id_atendimento;

  Atendimento.findByPk(id, {include: [{ all: true }]})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado atendimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar atendimento id=${id} - ${err}.`
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id_atendimento;
  
    Atendimento.update(req.body, {
      where: { id_atendimento: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Atendimento atualizado com sucesso."
          });
        } else {
          res.status(404).send({
            message: `Não localizado atendimento com id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error atualizando atendimento com id=" + err
        });
      });
  };

exports.delete = (req, res) => {
  const id = req.params.id_atendimento;

  Atendimento.destroy({
    where: { id_atendimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Atendimento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado atendimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar atendimento=${id}`
      });
    });
};

