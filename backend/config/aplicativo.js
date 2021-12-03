const express = require('express');
const consign = require('consign');
const cors = require('cors');
const body = require('body-parser');

// instanciando objeto express
server = express();

server.use(cors());
server.use(body.json());

// definição da porta 
server.set('porta', 3001);
server.set('url', 'http://localhost:');
 
consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;

