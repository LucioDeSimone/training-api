const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");

const utils = require("../core/utils");

const app = express();

//to parse all req/res bodies

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//to log requests and status

app.use(logger("dev"));

//CORS config __pending

app.use(cors(utils.corsOptions));

app.get("/api/v1/", (req, res) => {
  res.send({ message: "listening" });
});

module.exports = app;
