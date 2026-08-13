const conexao = require("../conexao/conexao.js");

// VINCULAR PRODUTO AO BANNER
function cadastrar(relacao, callback) {
    const sql = `
        INSERT INTO Banner_has_Produto
        (Produto_idProduto, Banner_idBanner)
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Produto_idProduto,
            relacao.Banner_idBanner
        ],
        callback
    );
}

// LISTAR RELAÇÕES
function listar(callback) {
    conexao.query("SELECT * FROM Banner_has_Produto", callback);
}

// BUSCAR RELAÇÃO
function buscar(bannerId, produtoId, callback) {
    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
          AND Produto_idProduto = ?
    `;

    conexao.query(sql, [bannerId, produtoId], callback);
}

// BUSCAR PRODUTOS DO BANNER
function buscarPorBanner(bannerId, callback) {
    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
    `;

    conexao.query(sql, [bannerId], callback);
}

// BUSCAR BANNERS DO PRODUTO
function buscarPorProduto(produtoId, callback) {
    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);
}

// EXCLUIR RELAÇÃO
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
