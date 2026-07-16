const conexao = require("../conexao/conexao.js");

// =========================
// Adicionar Produto ao Carrinho
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Carrinho_has_Produto
        (
            Carrinho_idCarrinho,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Carrinho_idCarrinho,
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
        FROM Carrinho_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(carrinhoId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [carrinhoId, produtoId], callback);

}

// =========================
// Buscar Produtos do Carrinho
// =========================

function buscarPorCarrinho(carrinhoId, callback) {

    const sql = `
        SELECT *
        FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
    `;

    conexao.query(sql, [carrinhoId], callback);

}

// =========================
// Buscar Carrinhos do Produto
// =========================

function buscarPorProduto(produtoId, callback) {

    const sql = `
        SELECT *
        FROM Carrinho_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Remover Produto do Carrinho
// =========================

function excluir(carrinhoId, produtoId, callback) {

    const sql = `
        DELETE FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [carrinhoId, produtoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorCarrinho,
    buscarPorProduto,
    excluir

};