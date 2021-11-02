const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nome) {
  //   res.status(400).send({
  //     message: "Nome não pode ser vazio!"
  //   });
  //   return;
  // }

  // if (!req.body.email) {
  //   res.status(400).send({
  //     message: "Email não pode ser vazio!"
  //   });
  //   return;
  // }

  // if (!req.body.senha) {
  //   res.status(400).send({
  //     message: "Senha não pode ser vazio!"
  //   });
  //   return;
  // }

  // if (!req.body.data_nascimento) {
  //   res.status(400).send({
  //     message: "Data de nascimento não pode ser vazio!"
  //   });
  //   return;
  // }

  // if (!req.body.sexo) {
  //   res.status(400).send({
  //     message: "Sexo não pode ser vazio!"
  //   });
  //   return;
  // }

  // if (!req.body.telefone) {
  //   res.status(400).send({
  //     message: "Telefone não pode ser vazio!"
  //   });
  //   return;
  // }
  // Create a Tutorial
  const usuario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    data_nascimento: req.body.data_nascimento,
    telefone: req.body.telefone,
    sexo: req.body.sexo,
    cpf: req.body.cpf,
    // sexo: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Usuario.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  const email = req.query.email;
  const telefone = req.query.telefone;
  const sexo = req.query.sexo;
  const senha = req.query.senha;
  const cpf = req.query.cpf;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_usuario'

  var conditionNome = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;
  var conditionEmail = email ? { email: { [Op.eq]: `${email}` } } : null;
  var conditionTelefone = telefone ? { telefone: { [Op.like]: `%${telefone}%` } } : null;
  var conditionSexo = sexo ? { sexo: { [Op.like]: `%${sexo}%` } } : null;
  var conditionSenha = senha ? { senha: { [Op.eq]: `${senha}` } } : null;
  var conditionCpf = cpf ? { cpf: { [Op.eq]: `${cpf}` } } : null;

  Usuario.findAll({ where: {
    [Op.and]: [conditionNome, conditionEmail, conditionTelefone, conditionSexo, conditionSenha, conditionCpf]
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.update(req.body, {
    where: { id_usuario: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Usuario with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Usuario with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.destroy({
    where: { id_usuario: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Usuario with id=${id}. Maybe Usuario was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Usuario with id=" + id
      });
    });
};

// Find all published Tutorials
// exports.findAllNome = (req, res) => {
//   Usuario.findAll({ where: { nome: "Renan Marcelo" } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };
