const db = require("../models");
const auth = require("../middleware/authJwt")
const {OAuth2Client} = require('google-auth-library');
const Usuario = db.Usuario;
const Administrador = db.Administrador;
const Barbeiro = db.Barbeiro;
const Cliente = db.Cliente;
const moment = require("moment");

process.env.TZ = "America/Sao_Paulo";

var jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const client = new OAuth2Client('628846454021-polojbj1k6i1jurubcae051r3h0hvm7q.apps.googleusercontent.com');

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



exports.signinOauth = (req, res) => {

  const id_token = req.body.token
  
  async function verify() {

    try {
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: `${process.env.GOOGLE}`,
      });
      
      const payload = ticket.getPayload();

      const expiredAt = moment().add(1800, 'seconds').format();

      Usuario.findOne({
        where: {
          email: payload.email
        }
      }) .then(user  => {
        if (user) {

          const token = jwt.sign({ id: user.id_usuario }, process.env.SECRET, {
            expiresIn: 1800 // 30 minutos
          });

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
              roles: data,
              completo: true
                });
              })
          
        } else {

          const usuarioEntradas = {
            nome: payload.name,
            email: payload.email,
            senha: process.env.SENHA_DEFAULT,
            data_nascimento: "631152000",
            telefone: "(00) 0000-0000",
            sexo: "m",
          };

          Usuario.create(usuarioEntradas)
          .then(data => {
            const usuario = data

            const token = jwt.sign({ id: usuario.id_usuario }, process.env.SECRET, {
              expiresIn: 1800 // 30 minutos
            });
        

            const clienteEntradas = {
              id_usuario: usuario.id_usuario,
            };
    
            Cliente.create(clienteEntradas)
            .then(data => {
              const cliente = data

              res.status(200).send({
                token: token,
                token_type: "Bearer",
                expired_at: (new Date(expiredAt).getTime()/1000),
                user: {
                  id_usuario: usuario.id_usuario,
                  nome: usuario.nome,
                  email: usuario.email,
                  sexo: usuario.sexo,
                  data_nascimento: usuario.data_nascimento,
                  telefone: usuario.telefone
                },
                roles: [{"cliente": cliente.id_cliente}],
                completo: false
                  });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Algum erro ocorreu ao na tentativa de criação de um usuário."
              });


            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Algum erro ocorreu ao na tentativa de criação de um cliente."
              });
            });
          });
        };
      });
    } catch {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu na validação do usuário"
      });
    }
   }; 
  verify().catch(console.error);
};
