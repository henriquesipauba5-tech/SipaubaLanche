const conexao = require("../conexao/conexao.js");

// OBSERVAÇÃO:
// Apesar do nome do arquivo ser usuario_model.js,
// este model trabalha com a tabela Cliente.

// CADASTRAR CLIENTE
function cadastrar(cliente, callback) {
    const sql = `
        INSERT INTO Cliente
        (
            nome,
            cpf,
            telefone,
            email,
            senha,
            data_nascimento,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.cpf,
            cliente.telefone,
            cliente.email,
            cliente.senha,
            cliente.data_nascimento,
            cliente.Loja_idLoja || null
        ],
        callback
    );
}

// LISTAR CLIENTES
function listar(callback) {
    conexao.query("SELECT * FROM Cliente", callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Cliente
        WHERE idCliente = ?
    `;

    conexao.query(sql, [id], callback);
}

// BUSCAR POR EMAIL
function buscarPorEmail(email, callback) {
    const sql = `
        SELECT *
        FROM Cliente
        WHERE email = ?
    `;

    conexao.query(sql, [email], callback);
}

// LOGIN
function login(email, senha, callback) {
    const sql = `
        SELECT *
        FROM Cliente
        WHERE email = ?
          AND senha = ?
    `;

    conexao.query(sql, [email, senha], callback);
}

// ATUALIZAR CLIENTE
function atualizar(id, cliente, callback) {
    const sql = `
        UPDATE Cliente
        SET nome = ?,
            cpf = ?,
            telefone = ?,
            email = ?,
            senha = ?,
            data_nascimento = ?,
            Loja_idLoja = ?
        WHERE idCliente = ?
    `;

    conexao.query(
        sql,
        [
            cliente.nome,
            cliente.cpf,
            cliente.telefone,
            cliente.email,
            cliente.senha,
            cliente.data_nascimento,
            cliente.Loja_idLoja || null,
            id
        ],
        callback
    );
}

// EXCLUIR CLIENTE
function excluir(id, callback) {
    const sql = `
        DELETE FROM Cliente
        WHERE idCliente = ?
    `;

    conexao.query(sql, [id], callback);
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    login,
    atualizar,
    excluir
};
