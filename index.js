const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require('./swagger/swagger_output.json');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo a api rh barbearia." });
});

app.use('/RhBarbearia', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// set port, listen for requests
require("./app/routes/usuario.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
