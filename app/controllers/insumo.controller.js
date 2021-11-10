const db = require("../models");
const Insumo = db.Insumo;
const Op = db.Sequelize.Op;
const Fornecedor = db.Fornecedor;

exports.create = (req, res) => {

  const insumo = {
    id_fornecedor: req.body.id_fornecedor,
    insumo: req.body.insumo,
    estoque: req.body.estoque,
    ultimo_valor: req.body.ultimo_valor
  };

  Insumo.create(insumo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um insumo."
      });
    });
};

exports.findAll = (req, res) => {
  const insumo = req.query.insumo;
  const id_fornecedor = req.query.id_fornecedor;
  const estoque = req.query.estoque;
  var ultimo_valor = req.query.ultimo_valor;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_insumo'

  var conditionInsumo = insumo ? { insumo: { [Op.like]: `%${insumo}%` } } : null;
  var conditionIdFornecedor = id_fornecedor ? { id_fornecedor: { [Op.eq]: `${id_fornecedor}` } } : null;
  var conditionEstoque = estoque ? { estoque: { [Op.eq]: `${estoque}` } } : null;
  var conditionUltimoValor = ultimo_valor ? { ultimo_valor: { [Op.eq]: `${ultimo_valor}` } } : null;

  Insumo.findAll({ where: {
    [Op.and]: [conditionInsumo, conditionIdFornecedor, conditionEstoque, conditionUltimoValor]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: { model: Usuario }
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
  const id = req.params.id_insumo;

  Insumo.findByPk(id, {include: { model: Fornecedor }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado insumo com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar insumo id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_insumo;

  Insumo.update(req.body, {
    where: { id_insumo: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Insumo atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado insumo com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Insumo with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_insumo;

  Insumo.destroy({
    where: { id_insumo: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Insumo deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado insumo com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar insumo=${id}`
      });
    });
};

