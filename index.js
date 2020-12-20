const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

server.listen(process.env.PORT);
server.on('error', console.error);
server.on('listening', () => console.log(`Server running on ${process.env.PORT}`));