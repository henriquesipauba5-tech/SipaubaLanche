const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(carrinho, callback) {

    const sql = `INSERT INTO Carrinho
        (
            quantidade_produto,
            preco_total,
            Cliente_idCliente
        )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            carrinho.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Carrinhos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Cliente
// =========================

function buscarPorCliente(idCliente, callback) {

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [idCliente], callback);

}

// =========================
// Atualizar Carrinho
// =========================

function atualizar(id, carrinho, callback) {

    const sql = `
        UPDATE Carrinho
        SET

            quantidade_produto = ?,
            preco_total = ?,
            Cliente_idCliente = ?

        WHERE idCarrinho = ?
    `;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            carrinho.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCliente,
    atualizar,
    excluir

};