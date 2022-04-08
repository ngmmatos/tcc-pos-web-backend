const db = require("../models");
const Pagamento = db.Pagamento;
const Conta = db.Conta;
const Administrador = db.Administrador;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const pagamento = {
    valor: req.body.valor,
    id_adm: req.body.id_adm,
    data_pagamento: req.body.data_pagamento,
    id_conta: req.body.id_conta,
    esporadico: req.body.esporadico,
    observacao: req.body.observacao,
  };

  Pagamento.create(pagamento)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Pagamento."
      });
    });
};

exports.findAll = (req, res) => {
  const id_pagamento = req.query.id_pagamento;
  const valor = req.query.valor;
  const data_pagamento = req.query.data_pagamento;
  const id_conta = req.query.id_conta;
  const id_adm = req.query.id_adm;
  const esporadico = req.query.esporadico;
  const observacao = req.query.observacao;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_pagamento'

  var conditionIdPagamento = id_pagamento ? { id_pagamento: { [Op.eq]: `${id_pagamento}` } } : null;
  var conditionValor = valor ? { valor: { [Op.eq]: `${valor}` } } : null;
  var conditionDataPagamento = data_pagamento ? { data_pagamento: { [Op.lte]: `${data_pagamento}` } } : null;
  var conditionIdConta = id_conta ? { id_conta: { [Op.eq]: `${id_conta}` } } : null;
  var conditionAdm = id_adm ? { id_adm: { [Op.eq]: `${id_adm}` } } : null;
  var conditionEsporadico = esporadico ? { esporadico: { [Op.eq]: `${esporadico}` } } : null;
  var conditionObservacao = observacao ? { observacao: { [Op.like]: `%${observacao}%` } } : null;

  Pagamento.findAll({ where: {
    [Op.and]: [conditionIdPagamento, conditionValor, conditionAdm, conditionDataPagamento, conditionIdConta, conditionEsporadico, conditionObservacao]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: [{
    model: Administrador,
    include: [{
      model: Usuario,
    }],
  },{
    model: Conta,
    }],
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

exports.findOne = (req, res) => {
  const id = req.params.id_pagamento;

  Pagamento.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado pagamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar usuario id=${id}.`
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id_pagamento;
  
    Pagamento.update(req.body, {
      where: { id_pagamento: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pagamento atualizado com sucesso."
          });
        } else {
          res.status(404).send({
            message: `Não localizado pagamento com id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error atualizando pagamento com id=" + id
        });
      });
  };

exports.delete = (req, res) => {
  const id = req.params.id_pagamento;

  Pagamento.destroy({
    where: { id_pagamento: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pagamento deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado pagamento com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar pagamento=${id}`
      });
    });
};

