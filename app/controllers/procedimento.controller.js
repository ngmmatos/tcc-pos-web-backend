const db = require("../models");
const Procedimento = db.Procedimento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const procedimento = {
    procedimento: req.body.procedimento,
    valor: req.body.valor,
    tempo_medio: req.body.tempo_medio,
    descricao: req.body.descricao
  };

  Procedimento.create(procedimento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um procedimento."
      });
    });
};

exports.findAll = (req, res) => {
  const procedimento = req.query.procedimento;
  const valor = req.query.valor;
  const tempo_medio = req.query.tempo_medio;
  const descricao = req.query.descricao;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_procedimento'

  var conditionProcedimento = procedimento ? { procedimento: { [Op.like]: `%${procedimento}%` } } : null;
  var conditionValor = valor ? { valor: { [Op.eq]: `${valor}` } } : null;
  var conditionTempoMedio = tempo_medio ? { esttempo_mediooque: { [Op.eq]: `${tempo_medio}` } } : null;
  var conditionDescricao = descricao ? { descricao: { [Op.like]: `%${descricao}%` } } : null;

  Procedimento.findAll({ where: {
    [Op.and]: [conditionProcedimento, conditionValor, conditionTempoMedio, conditionDescricao]
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
  const id = req.params.id_procedimento;

  Procedimento.findByPk(id, {include: { model: Fornecedor }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado procedimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar procedimento id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_procedimento;

  Procedimento.update(req.body, {
    where: { id_procedimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Procedimento atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado procedimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Procedimento with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_procedimento;

  Procedimento.destroy({
    where: { id_procedimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Procedimento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado procedimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar procedimento=${id}`
      });
    });
};

