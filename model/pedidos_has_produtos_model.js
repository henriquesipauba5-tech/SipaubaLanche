const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Produto ao Pedido
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Pedidos_has_Produto
        (
            Pedidos_idPedidos,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Pedidos_idPedidos,
            relacao.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(pedidoId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [pedidoId, produtoId], callback);

}

// =========================
// Buscar Produtos do Pedido
// =========================

function buscarPorPedido(pedidoId, callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
    `;

    conexao.query(sql, [pedidoId], callback);

}

// =========================
// Buscar Pedidos do Produto
// =========================

function buscarPorProduto(produtoId, callback) {

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Remover Produto do Pedido
// =========================

function excluir(pedidoId, produtoId, callback) {

    const sql = `
        DELETE FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [pedidoId, produtoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorPedido,
    buscarPorProduto,
    excluir

};