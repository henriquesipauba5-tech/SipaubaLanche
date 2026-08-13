const conexao = require("../conexao/conexao.js");

// CADASTRAR CARRINHO
function cadastrar(carrinho, callback) {
    const sql = `
        INSERT INTO Carrinho
        (quantidade_produto, preco_total, Cliente_idCliente)
        VALUES (?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            carrinho.quantidade_produto ?? 0,
            carrinho.preco_total ?? 0,
            carrinho.Cliente_idCliente
        ],
        callback
    );
}

// LISTAR CARRINHOS
function listar(callback) {
    conexao.query("SELECT * FROM Carrinho", callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);
}

// BUSCAR POR CLIENTE
function buscarPorCliente(idCliente, callback) {
    const sql = `
        SELECT *
        FROM Carrinho
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [idCliente], callback);
}

// ATUALIZAR CARRINHO
function atualizar(id, carrinho, callback) {
    const sql = `
        UPDATE Carrinho
        SET quantidade_produto = ?,
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

// EXCLUIR CARRINHO
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
