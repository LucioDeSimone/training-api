const http = require("http");

const app = require("./core/app");
const config = require("./core/config");

//creates an instance of http.server with app configurations

const server = http.createServer(app);

app.set("port", config.port);

server.listen(config.port, () => {
  const url = `${config.hostname}:${config.port}${config.basePath}`;
  console.log(url);
});
