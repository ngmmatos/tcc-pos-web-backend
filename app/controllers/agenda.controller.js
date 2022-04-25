const { promises } = require("fs");
const { send } = require("process");
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


exports.createAll = (req, res) => {

  let listAgendaCreate = []
  
  const horarios = [
    {"inicio": "08:00", "final": "09:00", "periodo": "manha"},
    {"inicio": "09:00", "final": "10:00", "periodo": "manha"},
    {"inicio": "10:00", "final": "11:00", "periodo": "manha"},
    {"inicio": "11:00", "final": "12:00", "periodo": "manha"},
    {"inicio": "13:00", "final": "14:00", "periodo": "tarde"},
    {"inicio": "14:00", "final": "15:00", "periodo": "tarde"},
    {"inicio": "15:00", "final": "16:00", "periodo": "tarde"},
    {"inicio": "16:00", "final": "17:00", "periodo": "tarde"},
    {"inicio": "17:00", "final": "18:00", "periodo": "tarde"},
    {"inicio": "18:00", "final": "19:00", "periodo": "noite"},
  ]
  
  try {

    const varDias = req.body.dias

      varDias.map((dia) => {
          
          horarios.map((agenda) => {
      
            const inicio = `${req.body.ano}-${req.body.mes}-${dia} ${agenda.inicio}`
            const fim = `${req.body.ano}-${req.body.mes}-${dia} ${agenda.final}`
            const id_barbeiro = req.body.id_barbeiro;
      
            const agendaCreate = {
              id_barbeiro: id_barbeiro,
              data: dia,
              periodo: agenda.periodo,
              hr_inicio: ((Date.parse(inicio)/1000) - 10800),
              hr_fim: ((Date.parse(fim)/1000) - 10800),
              agendado: false,
              minutos_disponiveis: 60,
            };
            listAgendaCreate.push(agendaCreate)
          });
        });

        async function analisaAgenda(agendas) { 
          
          let saidaAnalisaAgenda = []
          
          agendas.map(agenda => {

            var conditionIdBarbeiro = agenda.id_barbeiro ? { id_barbeiro: { [Op.eq]: `${agenda.id_barbeiro}` } } : null;
            var conditionHrInicio = agenda.hr_inicio ? { hr_inicio: { [Op.gte]: `${agenda.hr_inicio}` } } : null;
            var conditionHrFim = agenda.hr_fim ? { hr_fim: { [Op.lte]: `${agenda.hr_fim}` } } : null;

            saidaAnalisaAgenda.push(Agenda.findAll({ where: {
              [Op.and]: [conditionIdBarbeiro, conditionHrInicio, conditionHrFim]
            }
          }));
        });
        const resultado = await Promise.all(saidaAnalisaAgenda)

        return resultado
      };  
      
      async function criaAGenda(agendas) { 
          
        let saidaAgenda = []
        
        agendas.map(agenda => {
          saidaAgenda.push(Agenda.create(agenda))
        });
        const resultado = await Promise.all(saidaAgenda)
        return resultado
      };

      analisaAgenda(listAgendaCreate).then(resposta =>{

         let listaProvisionaria = listAgendaCreate
         let count = 0
         const listaResposta = resposta
         listaResposta.map((analise, index) => {
           if (analise.length > 0) {
             
             listaProvisionaria.map(lista => {
               let listaParcial = JSON.parse(JSON.stringify(analise))

                if (listaParcial[0].hr_inicio >= lista.hr_inicio && listaParcial[0].hr_fim <= lista.hr_fim) {

                  listAgendaCreate.splice((index - count), 1)
                  count = count + 1

                }
                else {
                  console.log(`Ja existe uma agenda para o barbeiro id ${listaParcial[0].id_barbeiro} entre os horarios ${listaParcial[0].hr_inicio} e ${listaParcial[0].hr_fim}`)
                }
              });
            }
          });
          criaAGenda(listAgendaCreate).then(resposta =>{
            res.send(resposta)
          });
        });
      } catch {
        res.status(500).send({
          message: "Algum erro ocorreu na validação do usuário"
          });
        };
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

