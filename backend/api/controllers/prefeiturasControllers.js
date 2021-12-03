const models = require('../models/prefeiturasModels.js');

module.exports = {
    prefeiturasGetAll,
    prefeiturasGetById,
    prefeiturasAtivoInativo,
    prefeiturasNovo,
    prefeiturasEditar,
}

function prefeiturasGetAll(req, res) {
    console.log('Listar Prefeituras {M O D E L}');
    models.getAllPrefeituras(function (err, resposta) {
        console.log('Retorno de Prefeituras {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function prefeiturasGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdPrefeituras(id, function (err, resposta) {
        console.log('Retorno de Prefeituras Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 

function prefeiturasAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Prefeituras { M O D E L }')
    console.log('Ativar/Inativar Prefeituras { M O D E L }')
    console.log('Parametro Esperado A-I: ' + id);

    models.getByIdPrefeituras(id, function (err, resposta) {
        console.log('Retorno de Prefeituras Id {M O D E L}', resposta)
        let p_ativo = resposta[0].pre_ativoinativo
        if (err) {
            throw err;
        } else {
            if (p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function (err, result) {
            if (err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
        })
    })
}


function prefeiturasNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Prefeituras...");
    console.log(req.body);
    dados.pre_codigo = null;
    console.log("Inserindo novo registro de Prefeituras...");
    models.novoPrefeitura(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/prefeituras');
    })
}


function prefeiturasEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de Prefeituras...",dados);

    models.editarPrefeituras(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/prefeituras');
    });
}


