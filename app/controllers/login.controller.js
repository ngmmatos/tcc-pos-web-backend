const db = require("../models");
const auth = require("../middleware/authJwt")
const Usuario = db.Usuario;
const Administrador = db.Administrador;
const Barbeiro = db.Barbeiro;
const Cliente = db.Cliente;
const moment = require("moment");

process.env.TZ = "America/Sao_Paulo";

var jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const checkUsers = async (x) => {

  const list_empty = []

  const adm = await Administrador.findOne({ where: {id_usuario: x.id_usuario} });
  if (adm !== null) {
    list_empty.push({"admin": adm.id_adm});
  }

  const barb = await Barbeiro.findOne({ where: {id_usuario: x.id_usuario} });
  
  if (barb !== null) {
    list_empty.push({"barbeiro": barb.id_barbeiro});
  }

  const cli = await Cliente.findOne({ where: {id_usuario: x.id_usuario} });
  if (cli !== null) {
    list_empty.push({"cliente": cli.id_cliente});
    }

  return list_empty
  }; 


exports.signin = (req, res) => {

  Usuario.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user  => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const senha = 'vaicurintia' 
      const salt = bcrypt.genSaltSync(10);
      const passHash = bcrypt.hashSync(senha, salt);  
      console.log(passHash)

      var passwordIsValid = bcrypt.compareSync(
        req.body.senha,
        user.senha
      );
      console.log(passwordIsValid)
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      // if (user.senha !== req.body.senha) {
      //   return res.status(401).send({
      //     accessToken: null,
      //     message: "Invalid Password!"
      //   });
      // }

      var token = jwt.sign({ id: user.id_usuario }, process.env.SECRET, {
        expiresIn: 1800 // 30 minutos
      });

      const expiredAt = moment().add(1800, 'seconds').format();

      checkUsers(user).then((data) => {

      res.status(200).send({
        token: token,
        token_type: "Bearer",
        expired_at: (new Date(expiredAt).getTime()/1000),
        user: {
          id_usuario: user.id_usuario,
          nome: user.nome,
          email: user.email,
          sexo: user.sexo,
          data_nascimento: user.data_nascimento,
          telefone: user.telefone
        },
        roles: data
          });
        })
      .catch(err => {
        res.status(500).send({ message: err.message });
    })
  });
};