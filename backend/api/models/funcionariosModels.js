const conexao = require('../../config/conexao.js');

module.exports = {
    getAllFuncionarios,
    getByIdFuncionarios,
    ativarInativar,
    editarFuncionario,
    novoFuncionario        
}

function getAllFuncionarios (callback) {
    conexao.query('select * from funcionario as f inner join prefeitura as p on f.fun_codigo = f.pre_codigo ', callback)    
}

function getByIdFuncionarios (id, callback) {
    conexao.query('select * from funcionario WHERE fun_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('Funcionarios Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update funcionario set fun_ativoinativo = '" + ativo + "' where fun_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Funcionários Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
}

function novoFuncionario(dados, callback) {
    var msql = 'INSERT INTO funcionario SET ? ';

	conexao.query(msql, dados, callback);
}

function editarFuncionario(dados, callback) {
    console.log('Estou alterando os funcionários { M O D E L } .......' + dados);

    var msql = "UPDATE funcionario SET fun_nome = '" + dados.fun_nome + 
    "' , fun_ativoinativo = '" + dados.fun_ativoinativo +     
    "' , fun_cargo      = '" + dados.fun_cargo + 
    "' , fun_depto         = '" + dados.fun_depto + 
    "' , fun_registro     = '" + dados.fun_registro + 
    "' , pre_codigo        = '" + dados.pre_codigo + 
    "'  WHERE fun_codigo  = '" + dados.fun_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}



















function ativarInativar (id, ativo, callback) {
    console.log('Funcionários Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update funcionario set liv_ativoinativo = '" + ativo + "' where liv_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Funcionarios Ativando/Inativando Registro ' + id + " - Status: " + ativo)
    
}

