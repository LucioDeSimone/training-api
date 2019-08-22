const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const config = require("../core/config");
const utils = require("../core/utils");

const app = express();

//to parse all req/res bodies

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//to log requests method, uri, status and time of return

app.use(logger("dev"));

//CORS config __pending

app.use(cors(utils.corsOptions));


//establish connection with a local db defined in config with a string
//you can set a new string to a cluster and make your dbs remotely stored

mongoose
  .connect(config.mongoDB, config.connectionOpt)
  .then(connectionStatus => {
    console.log({ connection: connectionStatus });
  })
  .catch(error => {
    console.log(error);
  });

//resources routers definition * endpoints *

const productRouter = require("../resources/product/routes");
const userRouter = require("../resources/user/routes");

app.use(`${config.basePath}/product`, productRouter);
app.use(`${config.basePath}/user`, userRouter);

app.use(config.jwtCheck);

//invalid route / 404 httpcode handdler

app.use("/api/v1", (req, res) => {
  res.status(404).send({ message: "invalid URI" });
});

module.exports = app;
