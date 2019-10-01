const http = require('http');
require('dotenv').config();

const app = require('./app');

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Server listening at port: ', PORT);
});
