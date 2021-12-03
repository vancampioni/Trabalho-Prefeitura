const conexao = require('../../config/conexao.js');

module.exports = {
    getAllPrefeituras,
    getByIdPrefeituras,
    ativarInativar,
    editarPrefeitura,
    novoPrefeitura            
}

function getAllPrefeituras (callback) {
    conexao.query('select * from prefeitura', callback)
}

function getByIdPrefeituras (id, callback) {
    conexao.query('select * from prefeitura WHERE pre_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('Prefeituras Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update prefeitura set pre_ativoinativo = '" + ativo + "' where pre_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Prefeitura Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
}

function novoPrefeitura(dados, callback) {
    var msql = 'INSERT INTO prefeitura SET ? ';

	conexao.query(msql, dados, callback);
}

function editarPrefeitura(dados, callback) {
    console.log('Estou alterando as prefeituras { M O D E L } .......' + dados);

    var msql = "UPDATE prefeitura SET pre_prefeito = '" + dados.pre_prefeito + 
    "' , pre_ativoinativo = '" + dados.pre_ativoinativo +     
    "' , pre_partido      = '" + dados.pre_partido + 
    "' , pre_cidade         = '" + dados.pre_cidade + 
    "' , pre_estados     = '" + dados.pre_estados + 
    "' , pre_habitantes        = '" + dados.pre_habitantes + 
    "' , pre_aniversario        = '" + dados.pre_aniversario + 
    "'  WHERE pre_codigo  = '" + dados.pre_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

