const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Produto à Promoção
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Promocao_has_Produto
        (
            Promocao_idPromocao,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Promocao_idPromocao,
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
        FROM Promocao_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(promocaoId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Promocao_has_Produto
        WHERE Promocao_idPromocao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [promocaoId, produtoId], callback);

}

// =========================
// Buscar Produtos da Promoção
// =========================

function buscarPorPromocao(promocaoId, callback) {

    const sql = `
        SELECT *
        FROM Promocao_has_Produto
        WHERE Promocao_idPromocao = ?
    `;

    conexao.query(sql, [promocaoId], callback);

}

// =========================
// Buscar Promoções do Produto
// =========================

function buscarPorProduto(produtoId, callback) {

    const sql = `
        SELECT *
        FROM Promocao_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Remover Produto da Promoção
// =========================

function excluir(promocaoId, produtoId, callback) {

    const sql = `
        DELETE FROM Promocao_has_Produto
        WHERE Promocao_idPromocao = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [promocaoId, produtoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorPromocao,
    buscarPorProduto,
    excluir

};