const db = require("../models");
const StatusAtendimento = db.StatusAtendimento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const statusAtendimento = {
    status_atendimento: req.body.status_atendimento,
    msg: req.body.msg,
  };

  StatusAtendimento.create(statusAtendimento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um status_atendimento." + err
      });
    });
};

exports.findAll = (req, res) => {
  const id_status_atendimento = req.query.id_status_atendimento;
  const status_atendimento = req.query.status_atendimento;
  const msg = req.query.msg;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_status_atendimento'

  var conditionIdStatusAtendimento = id_status_atendimento ? { id_status_atendimento: { [Op.eq]: `${id_status_atendimento}` } } : null;
  var conditionStatusAgenda = status_atendimento ? { status_atendimento: { [Op.eq]: `${status_atendimento}` } } : null;
  var conditionMsg = msg ? { msg: { [Op.like]: `%${msg}%` } } : null;

  StatusAtendimento.findAll({ where: {
    [Op.and]: [conditionIdStatusAtendimento, conditionStatusAgenda, conditionMsg]
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
  const id = req.params.id_status_atendimento;
  console.log(req.params)

  StatusAtendimento.findByPk(id)
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
  const id = req.params.id_status_atendimento;

  StatusAtendimento.update(req.body, {
    where: { id_status_atendimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StatusAtendimento atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado status_atendimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating StatusAtendimento with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_status_atendimento;

  StatusAtendimento.destroy({
    where: { id_status_atendimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StatusAtendimento deletado com sucesso!"
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

