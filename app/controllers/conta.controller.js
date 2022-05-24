const db = require("../models");
const Conta = db.Conta;
const Usuario = db.Usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  const conta = {
    valor: req.body.valor,
    dt_pagamento: req.body.dt_pagamento,
    dt_vencimento: req.body.dt_vencimento,
    descricao: req.body.descricao,
  };

  Conta.create(conta)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de um Conta."
      });
    });
};

exports.findAll = (req, res) => {
  const id_conta = req.query.id_conta;
  const valor = req.query.valor;
  const dt_pagamento = req.query.dt_pagamento;zz
  const dt_vencimento_menor = req.query.dt_venciment_menor;
  const dt_vencimento_maior = req.query.dt_venciment_maior;
  const descricao = req.query.descricao;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_conta'

  var conditionIdConta = id_conta ? { id_conta: { [Op.eq]: `${id_conta}` } } : null;
  var conditionValor = valor ? { valor: { [Op.eq]: `${valor}` } } : null;
  var conditionDtPagamento = dt_pagamento ? { dt_pagamento: { [Op.lte]: `${dt_pagamento}` } } : null;
  var conditionDataVencimentoMenor = dt_vencimento_menor ? { dt_vencimento: { [Op.lte]: `${dt_vencimento_menor}` } } : null;
  var conditionDataVencimentoMaior = dt_vencimento_maior ? { dt_vencimento: { [Op.gte]: `${dt_vencimento_maior}` } } : null;
  var conditionIdDescricao = descricao ? { descricao: { [Op.like]: `%${descricao}%` } } : null;

  Conta.findAll({ where: {
    [Op.and]: [conditionIdConta, conditionValor, conditionDtPagamento, conditionIdDescricao, conditionDataVencimentoMenor, conditionDataVencimentoMaior]
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

exports.findOne = (req, res) => {
  const id = req.params.id_conta;

  Conta.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado conta com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar usuario id=${id} - ${err}.`
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id_conta;
  
    Conta.update(req.body, {
      where: { id_conta: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Conta atualizado com sucesso."
          });
        } else {
          res.status(404).send({
            message: `Não localizado conta com id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error atualizando conta com id=" + id
        });
      });
  };

exports.delete = (req, res) => {
  const id = req.params.id_conta;

  Conta.destroy({
    where: { id_conta: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Conta deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado conta com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar conta=${id}`
      });
    });
};

