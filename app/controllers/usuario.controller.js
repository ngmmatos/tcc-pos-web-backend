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

  const usuario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    data_nascimento: req.body.data_nascimento,
    telefone: req.body.telefone,
    sexo: req.body.sexo,
    cpf: req.body.cpf,
  };

  // Save Tutorial in the database
  Usuario.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um usuário."
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
          message: `Não localizado usuário com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar usuario id=${id}.`
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
        res.status(404).send({
          message: `Não localizado usuário com id=${id}.`
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
          message: "Usuario deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado usuário com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar usuario=${id}`
      });
    });
};

