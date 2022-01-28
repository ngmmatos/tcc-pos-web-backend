const db = require("../models");
const auth = require("../middleware/authJwt")
const Usuario = db.Usuario;
const Administrador = db.Administrador;
const Barbeiro = db.Barbeiro;
const Cliente = db.Cliente;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {

  Usuario.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.senha,
        user.senha
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id_usuario }, process.env.SECRET, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      const adm = Administrador.findOne({ where: {id_usuario: req.id_usuario} });
      if (adm !== null) {
        authorities.push("admin");
      } else {
          next();
          return;
          }

      const barb = Barbeiro.findOne({ where: {id_usuario: req.id_usuario} });
      if (barb !== null) {
        authorities.push("barbeiro");
      } else {
          next();
          return;
          }
  
      const cli = Cliente.findOne({ where: {id_usuario: req.id_usuario} });
      if (cli !== null) {
        authorities.push("cliente");
      } else {
          next();
          return;
          }
    res.status(200).send({
      id: user.id_usuario,
      email: user.email,
      roles: authorities,
      accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};