// conectar com o sevidor do node.js e o banco de dados MySQL
const mysql = require("mysql2");

// variável que vai armazenar a conexão com o banco de dados 
const conexao = mysql.createConnection({
    host: "zephyr.proxy.rlwy.net",
    user: "root",
    port: 44478, // porta padrão do MySQL
    password: "UjbdZqVveRMHfypaBaaPpbpCtFyCgtVX", // senha do MySQL
    database: "railway"
});

conexao.connect((erro) => {

    if (erro) {
        console.log("Erro ao conectar:", erro);
        return;
    }

    console.log("Banco conectado com sucesso!");

});

module.exports = conexao;