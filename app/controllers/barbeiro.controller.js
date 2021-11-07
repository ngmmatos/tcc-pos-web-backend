const db = require("../models");
const Barbeiro = db.barbeiro;
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
Barbeiro.associate({Usuario});

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const barbeiro = {
    id_usuario: req.body.id_usuario,
  };

  // Save Tutorial in the database
  Barbeiro.create(barbeiro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Barbeiro."
      });
    });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id_barbeiro = req.query.id_barbeiro;
  const id_usuario = req.query.id_usuario;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_barbeiro'

  var conditionIdAdm = id_barbeiro ? { id_barbeiro: { [Op.eq]: `${id_barbeiro}` } } : null;
  var conditionIdUsuario = id_usuario ? { id_usuario: { [Op.eq]: `${id_usuario}` } } : null;

  Barbeiro.findAll({ where: {
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id_barbeiro;

  Barbeiro.findByPk(id, {include: { model: Usuario }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado barbeiro com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar usuario id=${id}.`
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id_barbeiro;

  Barbeiro.destroy({
    where: { id_barbeiro: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Barbeiro deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado barbeiro com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar barbeiro=${id}`
      });
    });
};

