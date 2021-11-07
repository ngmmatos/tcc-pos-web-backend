const db = require("../models");
const Administrador = db.administrador;
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
Administrador.associate({Usuario});

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nome) {
  //   res.status(400).send({
  //     message: "Nome não pode ser vazio!"
  //   });
  //   return;
  // }

  const administrador = {
    id_usuario: req.body.id_usuario,
  };

  // Save Tutorial in the database
  Administrador.create(administrador)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Administrador."
      });
    });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id_adm = req.query.id_adm;
  const id_usuario = req.query.id_usuario;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_adm'

  var conditionIdAdm = id_adm ? { id_adm: { [Op.eq]: `${id_adm}` } } : null;
  var conditionIdUsuario = id_usuario ? { id_usuario: { [Op.eq]: `${id_usuario}` } } : null;

  Administrador.findAll({ where: {
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
  const id = req.params.id_adm;

  Administrador.findByPk(id, {include: { model: Usuario }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado administrador com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar administrador id=${id}.`
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id_adm;

  Administrador.destroy({
    where: { id_adm: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Administrador deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado administrador com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar administrador=${id}`
      });
    });
};

