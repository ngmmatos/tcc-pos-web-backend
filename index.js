const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require('./swagger/swagger_output.json');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.use('/SwaggerRhBarbearia', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./app/routes/agenda.routes")(app);
require("./app/routes/usuario.routes")(app);
require("./app/routes/administrador.routes")(app);
require("./app/routes/cliente.routes")(app);
require("./app/routes/barbeiro.routes")(app);
require("./app/routes/agendamento.routes")(app);
require("./app/routes/fornecedor.routes")(app);
require("./app/routes/insumo.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}.`);
});
