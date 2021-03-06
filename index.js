const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require('./swagger/swagger_output.json');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
// db.sequelize.sync();

app.use('/SwaggerRhBarbearia', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./app/routes/agenda.routes")(app);
require("./app/routes/usuario.routes")(app);
require("./app/routes/administrador.routes")(app);
require("./app/routes/cliente.routes")(app);
require("./app/routes/barbeiro.routes")(app);
require("./app/routes/agendamento.routes")(app);
require("./app/routes/fornecedor.routes")(app);
require("./app/routes/insumo.routes")(app);
require("./app/routes/procedimento.routes")(app);
require("./app/routes/insumoProcedimento.routes")(app);
require("./app/routes/procedimentoAgendamento.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/recuperaSenha.routes")(app);
require("./app/routes/atendimento.routes")(app);
require("./app/routes/conta.routes")(app);
require("./app/routes/pagamento.routes")(app);
require("./app/routes/recebimento.routes")(app);
require("./app/routes/statusAtendimento.routes")(app);
require("./app/routes/statusRecebimento.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}.`);
});
