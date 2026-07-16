const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Produto ao Cupom
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Cupom_has_Produto
        (
            Cupom_idCupom,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Cupom_idCupom,
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
        FROM Cupom_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(cupomId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [cupomId, produtoId], callback);

}

// =========================
// Buscar Produtos do Cupom
// =========================

function buscarPorCupom(cupomId, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);

}

// =========================
// Buscar Cupons do Produto
// =========================

function buscarPorProduto(produtoId, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Remover Produto do Cupom
// =========================

function excluir(cupomId, produtoId, callback) {

    const sql = `
        DELETE FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [cupomId, produtoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorCupom,
    buscarPorProduto,
    excluir

};