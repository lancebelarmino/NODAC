const frontity = require('./build/server').default;
const http = require('http');
const server = http.createServer(frontity);
server.listen();
