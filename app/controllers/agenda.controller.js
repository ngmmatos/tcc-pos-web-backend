const db = require("../models");
const Agenda = db.Agenda;
const Barbeiro = db.Barbeiro;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const agenda = {
    id_barbeiro: req.body.id_barbeiro,
    data: req.body.data,
    periodo: req.body.periodo,
    hr_inicio: req.body.hr_inicio,
    hr_fim: req.body.hr_fim,
    agendado: req.body.agenda,
    minutos_disponiveis: req.body.minutos_disponiveis,
  };

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

exports.findAll = (req, res) => {
  const id_barbeiro = req.query.id_barbeiro;
  const data = req.query.data;
  const periodo = req.query.periodo;
  const hr_inicio = req.query.hr_inicio;
  const hr_fim = req.query.hr_fim;
  const agendado = req.query.agendado;
  const minutos_disponiveis = req.query.minutos_disponiveis;
  var order = req.query.order;
  var orderBy= req.query.orderBy

  if (order === undefined)
    order = 'ASC'
  if (orderBy === undefined)
    orderBy = 'id_agenda'

  var conditionIdBarbeiro = id_barbeiro ? { id_barbeiro: { [Op.eq]: `${id_barbeiro}` } } : null;
  var conditionData = data ? { data: { [Op.eq]: `${data}` } } : null;
  var conditionPeriodo = periodo ? { periodo: { [Op.eq]: `${periodo}` } } : null;
  var conditionHrInicio = hr_inicio ? { hr_inicio: { [Op.gte]: `${hr_inicio}` } } : null;
  var conditionHrFim = hr_fim ? { hr_fim: { [Op.lte]: `${hr_fim}` } } : null;
  var conditionAgendado = agendado ? { agendado: { [Op.eq]: `${agendado}` } } : null;
  var conditionMinutos = minutos_disponiveis ? { minutos_disponiveis: { [Op.gte]: `${minutos_disponiveis}` } } : null;

  Agenda.findAll({ where: {
    [Op.and]: [conditionIdBarbeiro, conditionData, conditionPeriodo, conditionHrInicio, conditionHrFim, conditionAgendado, conditionMinutos]
  },
  order: [[`${orderBy}`, `${order}`]],
  limit: req.query.rows,
  include: { model: Barbeiro}
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
          message: "Agenda atualizada com sucesso."
        });
      } else {
        res.status(404).send({
          message: `Não localizado agenda com id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro atualizando agenda com id=" + id
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

