const db = require("../models");
const Cliente = db.Cliente;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const cliente = {
    id_usuario: req.body.id_usuario,
  };

  Cliente.create(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Cliente."
      });
    });
};

exports.findAll = (req, res) => {
  const id_cliente = req.query.id_cliente;
  const id_usuario = req.query.id_usuario;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_cliente'

  var conditionIdAdm = id_cliente ? { id_cliente: { [Op.eq]: `${id_cliente}` } } : null;
  var conditionIdUsuario = id_usuario ? { id_usuario: { [Op.eq]: `${id_usuario}` } } : null;

  Cliente.findAll({ where: {
    [Op.and]: [conditionIdAdm, conditionIdUsuario]
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
  const id = req.params.id_cliente;

  Cliente.findByPk(id, {include: { model: Usuario }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado cliente com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar usuario id=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_cliente;

  Cliente.destroy({
    where: { id_cliente: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cliente deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado cliente com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar cliente=${id}`
      });
    });
};

