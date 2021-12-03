const mysql = require('mysql2');
const database = 'dados212n'

// instancias objeto de acesso ao banco de dados

const conexao = mysql.createConnection({
    user: 'root',
    password: 'Torg@sk*1',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if(err) {
        console.log('Erro ao conectar no MySQL ', err)
        return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso!!!');
})

module.exports = conexao;

