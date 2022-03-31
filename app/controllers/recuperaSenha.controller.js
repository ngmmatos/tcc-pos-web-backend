const db = require("../models");
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;


exports.findOne = (req, res) => {
  const token_senha = req.query.token_senha;
  const email = req.query.email;

  var conditionEmail = { email: { [Op.eq]: `${email}` } };
  var conditionTokenSenha = { token_senha: { [Op.eq]: `${token_senha}` } };

  Usuario.findOne({ where: {
    [Op.and]: [conditionEmail, conditionTokenSenha]
  },
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


exports.update = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.update(req.body, {
    where: { id_usuario: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario atualizado com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado usuário com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro atualizando usuario id=" + id
      });
    });
};

