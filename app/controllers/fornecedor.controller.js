const db = require("../models");
const Fornecedor = db.Fornecedor;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const fornecedor = {
    telefone: req.body.telefone,
    fornecedor: req.body.fornecedor,
    email: req.body.email,
  };

  Fornecedor.create(fornecedor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um fornecedor."
      });
    });
};

exports.findAll = (req, res) => {
  const fornecedor = req.query.fornecedor;
  const email = req.query.email;
  const telefone = req.query.telefone;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_fornecedor'

  var conditionFornecedor = fornecedor ? { fornecedor: { [Op.like]: `%${fornecedor}%` } } : null;
  var conditionEmail = email ? { email: { [Op.eq]: `${email}` } } : null;
  var conditionTelefone = telefone ? { telefone: { [Op.like]: `%${telefone}%` } } : null;

  Fornecedor.findAll({ where: {
    [Op.and]: [conditionFornecedor, conditionEmail, conditionTelefone]
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
  const id = req.params.id_fornecedor;

  Fornecedor.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado fornecedor com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar fornecedor id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_fornecedor;

  Fornecedor.update(req.body, {
    where: { id_fornecedor: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Fornecedor atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado fornecedor com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fornecedor with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_fornecedor;

  Fornecedor.destroy({
    where: { id_fornecedor: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Fornecedor deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado fornecedor com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar fornecedor=${id}`
      });
    });
};

