const models = require('../models/funcionariosModels.js');

module.exports = {
    funcionariosGetAll,
    funcionariosGetById,
    funcionariosAtivoInativo ,
    funcionariosNovo,
    funcionariosEditar,       
}

function funcionariosGetAll(req, res) {
    console.log('Listar Funcionários {M O D E L}');
    models.getAllFuncionarios(function(err, resposta) {
        console.log('Retorno de Funcionários {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })  
}


function funcionariosGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdFuncionarios(id, function(err, resposta) {
        console.log('Retorno de Funcionários Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function funcionariosAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Funcionários { M O D E L }')    
    console.log('Ativar/Inativar Funcionários { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdFuncionarios(id, function(err, resposta) {
        console.log('Retorno de Funcionários Id {M O D E L}', resposta)
        let p_ativo = resposta[0].fun_ativoinativo
        if(err) {
            throw err;
        } else {
            if( p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function(err, result){
            if(err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
        })
    })
}

function funcionariosNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Funcionários...");
    console.log(req.body);
    dados.fun_codigo = null;
    console.log("Inserindo novo registro de Funcionários...");
    models.novoFuncionario(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/funcionario');
    })
}

function funcionariosEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de Funcionários...",dados);

    models.editarFuncionarios(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/funcionario');
    });
}