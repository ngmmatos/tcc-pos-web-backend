const jwt = require("jsonwebtoken");
const db = require("../models");
// const Usuario = db.Usuario;
const Administrador = db.Administrador;
const Barbeiro = db.Barbeiro;
const Cliente = db.Cliente;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.id_usuario = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
    const adm = Administrador.findOne({ where: {id_usuario: req.id_usuario} });
    if (adm === null) {
        res.status(403).send({
            message: "Require Admin Role!"
        });
    } else {
        next();
        return;
        }
    }

isBarber = (req, res, next) => {
    const barb = Barbeiro.findOne({ where: {id_usuario: req.id_usuario} });
    if (barb === null) {
        res.status(403).send({
            message: "Require Admin Role!"
        });
    } else {
        next();
        return;
        }
    }


isClient = (req, res, next) => {
    const cli = Cliente.findOne({ where: {id_usuario: req.id_usuario} });
    if (cli === null) {
        res.status(403).send({
            message: "Require Admin Role!"
        });
    } else {
        next();
        return;
        }
    }
    

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isBarber: isBarber,
  isClient: isClient
};
module.exports = authJwt;