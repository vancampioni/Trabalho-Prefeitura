const controller = require('../controllers/prefeiturasControllers.js');

server.get('/prefeituras', controller.prefeiturasGetAll)

server.get('/prefeituras/:codigo', controller.prefeiturasGetById)

server.put('/prefeituras/ativoInativo/:codigo', controller.prefeiturasAtivoInativo)

server.put('/prefeituras/:codigo', controller.prefeiturasEditar)

server.post('/prefeituras', controller.prefeiturasNovo)

