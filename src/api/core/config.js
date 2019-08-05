//server configuration for
//1 - URI basePath
//2 - Envoirement (production, testing, dev)
//3 - Host URL or IP
//4 - Port num
//5 - mongoDB uri to connect with my cluster

const mongodb_uri = "mongodb://localhost:27017/client";

const basePath = process.env.API_BASE_PATH || "/api/v1";
const env = (process.env.APP_ENV || "prd").toLowerCase();
const hostname = process.env.API_HOST || "localhost";
const port = process.env.API_PORT || process.env.PORT || 3000;
const mongoDB = process.env.MONGODB_URI || mongodb_uri;

const connectionOpt = {
  useNewUrlParser: true
};
module.exports = {
  env,
  basePath,
  hostname,
  port,
  mongoDB,
  connectionOpt
};
