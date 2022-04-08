const db = require("../models");
const Recebimento = db.Recebimento;
const Atendimento = db.Atendimento;
const StatusRecebimento = db.StatusRecebimento;
const StatusAtendimento = db.StatusAtendimento;
const Barbeiro = db.Barbeiro;
const Agenda = db.Agenda;
const Agendamento = db.Agendamento;
const Usuario = db.Usuario;
const Cliente = db.Cliente;
const Procedimento = db.Procedimento;
const ProcedimentoAgendamento = db.ProcedimentoAgendamento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const recebimento = {
    id_status_recebimento: req.body.id_status_recebimento,
    id_atendimento: req.body.id_atendimento,
    informacao: req.body.informacao,
    data_recebimento: req.body.data_recebimento,
  };

  Recebimento.create(recebimento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Recebimento."
      });
    });
};

exports.findAll = (req, res) => {
  const id_recebimento = req.query.id_recebimento;
  const id_status_recebimento = req.query.id_status_recebimento;
  const id_atendimento = req.query.id_atendimento;
  const informacao = req.query.informacao;
  const data_recebimento = req.query.data_recebimento;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_recebimento'

  var conditionRecebimento = id_recebimento ? { id_recebimento: { [Op.eq]: `${id_recebimento}` } } : null;
  var conditionStatusRecebimento = id_status_recebimento ? { id_status_recebimento: { [Op.eq]: `${id_status_recebimento}` } } : null;
  var conditionIdAtendimento = id_atendimento ? { id_atendimento: { [Op.eq]: `${id_atendimento}` } } : null;
  var conditionInformacao = informacao ? { informacao: { [Op.like]: `%${informacao}%` } } : null;
  var conditionDataRecebimento = data_recebimento ? { data_recebimento: { [Op.lte]: `${data_recebimento}` } } : null;

  Recebimento.findAll({ where: {
    [Op.and]: [conditionRecebimento, conditionStatusRecebimento, conditionIdAtendimento, conditionInformacao, conditionDataRecebimento]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: [{
    model: Atendimento,
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
  }]
  },{
    model: StatusRecebimento,
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
  const id = req.params.id_recebimento;

  Recebimento.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado recebimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar usuario id=${id}.`
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id_recebimento;
  
    Recebimento.update(req.body, {
      where: { id_recebimento: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Recebimento atualizado com sucesso."
          });
        } else {
          res.status(404).send({
            message: `Não localizado recebimento com id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error atualizando recebimento com id=" + id
        });
      });
  };

exports.delete = (req, res) => {
  const id = req.params.id_recebimento;

  Recebimento.destroy({
    where: { id_recebimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Recebimento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado recebimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar recebimento=${id}`
      });
    });
};

