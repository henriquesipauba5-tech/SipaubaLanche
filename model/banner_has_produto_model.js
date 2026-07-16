const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Produto ao Banner
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Banner_has_Produto
        (
            Banner_idBanner,
            Produto_idProduto
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Banner_idBanner,
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
        FROM Banner_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(bannerId, produtoId, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [bannerId, produtoId], callback);

}

// =========================
// Buscar Produtos do Banner
// =========================

function buscarPorBanner(bannerId, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
    `;

    conexao.query(sql, [bannerId], callback);

}

// =========================
// Buscar Banners do Produto
// =========================

function buscarPorProduto(produtoId, callback) {

    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);

}

// =========================
// Remover Produto do Banner
// =========================

function excluir(bannerId, produtoId, callback) {

    const sql = `
        DELETE FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [bannerId, produtoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorBanner,
    buscarPorProduto,
    excluir

};