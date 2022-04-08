const db = require("../models");
const StatusRecebimento = db.StatusRecebimento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const statusRecebimento = {
    status_recebimento: req.body.status_recebimento,
    msg: req.body.msg,
  };

  StatusRecebimento.create(statusRecebimento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um status_atendimento."
      });
    });
};

exports.findAll = (req, res) => {
  const id_status_recebimento = req.query.id_status_recebimento;
  const status_recebimento = req.query.status_recebimento;
  const msg = req.query.msg;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_status_recebimento'

  var conditionIdStatusRecebimento = id_status_recebimento ? { id_status_recebimento: { [Op.eq]: `${id_status_recebimento}` } } : null;
  var conditionStatusRecebimento = status_recebimento ? { status_recebimento: { [Op.eq]: `${status_recebimento}` } } : null;
  var conditionMsg = msg ? { msg: { [Op.like]: `%${msg}%` } } : null;

  StatusRecebimento.findAll({ where: {
    [Op.and]: [conditionIdStatusRecebimento, conditionStatusRecebimento, conditionMsg]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows
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
  const id = req.params.id_status_recebimento;

  StatusRecebimento.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado status_atendimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar status_atendimento id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_status_recebimento;

  StatusRecebimento.update(req.body, {
    where: { id_status_recebimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StatusRecebimento atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado status_atendimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating StatusRecebimento with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_status_recebimento;

  StatusRecebimento.destroy({
    where: { id_status_recebimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StatusRecebimento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado status_atendimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar status_atendimento=${id}`
      });
    });
};

