//server configuration for 
//1 - URI basePath
//2 - Envoirement (production, testing, dev) 
//3 - Host URL or IP
//4 - Port numb

const basePath = process.env.API_BASE_PATH || "/api/v1";
const env = (process.env.APP_ENV || "prd").toLowerCase();
const hostname = process.env.API_HOST || "127.0.0.1";
const port = process.env.API_PORT || process.env.PORT || 3000;

module.exports = {
  env,
  basePath,
  hostname,
  port
};
