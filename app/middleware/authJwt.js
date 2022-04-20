const jwt = require("jsonwebtoken");
const db = require("../models");
// const Usuario = db.Usuario;
const Administrador = db.Administrador;
const Barbeiro = db.Barbeiro;
const Cliente = db.Cliente;

verifyToken = (req, res, next) => {

  let token = req.headers["authorization"];

  console.log(token)

  if (!token) {
    return res.status(403).send({
      message: "Nenhum token encontrado!"
    });
  }

  if (token.split(" ")[0] === "Bearer"){

      jwt.verify(token.replace('Bearer ',''), process.env.SECRET, (err, decoded) => {
        if (err) {
          console.log(err)
          return res.status(401).send({
            message: "Não autorizado!"
          });
        }
        req.id_usuario = decoded.id;
    
        next();
      });

    } else if  (token.split(" ")[0] === "Basic"){
      const base = Buffer.from((token.split(" ")[1]), 'base64').toString('ascii')
      console.log("56161611")
    
        if (base !== `${process.env.API_USER}:${process.env.API_PASS}`) {
          return res.status(401).send({
            message: "Não autorizado!"
          });
        }
      next();
      } else {
        return res.status(403).send({
          message: "Token com formato incorreto!"
        });
      }

  }


isAdmin = async (req, res, next) => {
    const adm = Administrador.findOne({ where: {id_usuario: req.id_usuario} });
    adm.then((data) => {
      if (data === null) {
          res.status(403).send({
              message: "Require Admin Role!"
          });
      } else {
          next();
          return;
          }
        });
      };

isBarber = async (req, res, next) => {
    const barb = Barbeiro.findOne({ where: {id_usuario: req.id_usuario} });
    barb.then((data) => {
    if (data === null) {
        res.status(403).send({
            message: "Require Barbeiro Role!"
        });
    } else {
        next();
        return;
        }
    });
  }

// isBarberOrAdm = async (req, res, next) => {
//     const barb = Administrador.Barbeiro.findOne({ where: {id_usuario: req.id_usuario} });
//     const adm = Administrador.findOne({ where: {id_usuario: req.id_usuario} });
//     adm.then((data) => {
//     if (data !== null) {
//         const isadm = true
//     } else {
//       const isadm = false
//       }
//     });

//     barb.then((data) => {
//       if (data !== null) {
//           const isbarb = true
//       } else {
//         const isbarb = false
//         }
//       });


//     if(isadm || isbarb) {
//       next();
//       return;
//     } else {
//       res.status(403).send({
//         message: "Require Barbeir or Adm Role!"
//     });
//     }

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isBarber: isBarber
};
module.exports = authJwt;