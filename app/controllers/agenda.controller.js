const db = require("../models");
const Agenda = db.agenda;
const Op = db.Sequelize.Op;
const Barbeiro = db.barbeiro;
Agenda.associate({Barbeiro});

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nome) {
  //   res.status(400).send({
  //     message: "Nome não pode ser vazio!"
  //   });
  //   return;
  // }

  const agenda = {
    id_barbeiro: req.body.id_barbeiro,
    data: req.body.data,
    periodo: req.body.periodo,
    hr_inicio: req.body.hr_inicio,
    hr_fim: req.body.hr_fim
  };

  // Save Tutorial in the database
  Agenda.create(agenda)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao na tentativa de criação de uma agenda."
      });
    });
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const id_barbeiro = req.query.id_barbeiro;
  const data = req.query.data;
  const periodo = req.query.periodo;
  const hr_inicio = req.query.hr_inicio;
  const hr_fim = req.query.hr_fim;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_agenda'

  var conditionIdBarbeiro = id_barbeiro ? { id_barbeiro: { [Op.eq]: `${id_barbeiro}` } } : null;
  var conditionData = data ? { data: { [Op.eq]: `${data}` } } : null;
  var conditionPeriodo = periodo ? { periodo: { [Op.eq]: `${periodo}` } } : null;
  var conditionHrInicio = hr_inicio ? { hr_inicio: { [Op.eq]: `${hr_inicio}` } } : null;
  var conditionHrFim = hr_fim ? { hr_fim: { [Op.eq]: `${hr_fim}` } } : null;

  Agenda.findAll({ where: {
    [Op.and]: [conditionIdBarbeiro, conditionData, conditionPeriodo, conditionHrInicio, conditionHrFim]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: { model: Barbeiro }
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
  const id = req.params.id_agenda;

  Agenda.findByPk(id, {include: { model: Barbeiro }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não localizado agenda com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro tentando localizar agenda id=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id_agenda;

  Agenda.update(req.body, {
    where: { id_agenda: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Agenda was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Não localizado agenda com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Agenda with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id_agenda;

  Agenda.destroy({
    where: { id_agenda: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Agenda deletado com sucesso!"
        });
      } else {
        res.status(404).send({
          message: `Não localizado agenda com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Erro ao deletar agenda=${id}`
      });
    });
};

