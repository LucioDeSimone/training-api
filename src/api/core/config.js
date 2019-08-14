//server configuration for
//1 - URI basePath
//2 - Envoirement (production, testing, dev)
//3 - Host URL or IP
//4 - Port num
//5 - mongoDB uri
//6 - connection opts for mongo
//7 - jwt configuration 

const basePath = process.env.API_BASE_PATH || "/api/v1";
const env = (process.env.APP_ENV || "prd").toLowerCase();
const hostname = process.env.API_HOST || "localhost";
const port = process.env.API_PORT || process.env.PORT || 3000;
const mongoDB = process.env.MONGODB_URI || "mongodb://localhost:27017/client";
const connectionOpt = {
  useNewUrlParser: true
};
const jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    jwksUri: "https://dev-f94ewujj.auth0.com/.well-known/jwks.json"
  }),
  audience: "localhost:3000/api/v1",
  issuer: "https://dev-f94ewujj.auth0.com/",
  algorithms: ["RS256"]
});

module.exports = {
  env,
  basePath,
  hostname,
  port,
  mongoDB,
  connectionOpt,
  jwtCheck
};
