const controller = require('../controllers/funcionariosControllers.js');

server.get('/funcionarios/listar', controller.funcionariosGetAll)

server.get('/funcionarios/consultar/:codigo', controller.funcionariosGetById)

server.put('/funcionarios/ativoInativo/:codigo', controller.funcionariosAtivoInativo)

server.put('/funcionarios/:codigo', controller.funcionariosEditar)

server.post('/funcionarios', controller.funcionariosNovo)


