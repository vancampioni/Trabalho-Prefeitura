const http = require('http');
const servidor = require('./config/aplicativo.js');

const conexao = require('./config/conexao.js');

http.createServer(servidor).listen(servidor.get('porta'), function(){
    console.log('\nServidor Rodando na Porta ' + server.get('url') + server.get('porta'));
})

