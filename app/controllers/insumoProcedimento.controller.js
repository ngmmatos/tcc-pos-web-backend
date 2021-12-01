const db = require("../models");
const InsumoProcedimento = db.InsumoProcedimento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const insumoProcedimento = {
    id_insumo: req.body.id_insumo,
    id_procedimento: req.body.id_procedimento
  };

  InsumoProcedimento.create(insumoProcedimento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um insumoProcedimento."
      });
    });
};

exports.findAll = (req, res) => {
  const id_insumo = req.query.id_insumo;
  const id_procedimento = req.query.id_procedimento;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_procedimento'

  var conditionIdInsumo = id_insumo ? { id_insumo: { [Op.like]: `%${id_insumo}%` } } : null;
  var conditioIdProcedimento = id_procedimento ? { id_procedimento: { [Op.like]: `%${id_procedimento}%` } } : null;

  InsumoProcedimento.findAll({ where: {
    [Op.and]: [conditionIdInsumo, conditioIdProcedimento]
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
  const id = req.params.id_insumo_procedimento;

  InsumoProcedimento.findByPk(id, {include: { model: Fornecedor }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado insumoProcedimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar insumoProcedimento id=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_insumo_procedimento;

  InsumoProcedimento.destroy({
    where: { id_insumo_procedimento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "InsumoProcedimento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado insumoprocedimento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar insumoProcedimento=${id}`
      });
    });
};

