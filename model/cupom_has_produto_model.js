const conexao = require("../conexao/conexao.js");

// VINCULAR PRODUTO AO CUPOM
function cadastrar(relacao, callback) {
    const sql = `
        INSERT INTO Cupom_has_Produto
        (Cupom_idCupom, Produto_idProduto)
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Cupom_idCupom,
            relacao.Produto_idProduto
        ],
        callback
    );
}

// LISTAR RELAÇÕES
function listar(callback) {
    conexao.query("SELECT * FROM Cupom_has_Produto", callback);
}

// BUSCAR RELAÇÃO
function buscar(cupomId, produtoId, callback) {
    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
          AND Produto_idProduto = ?
    `;

    conexao.query(sql, [cupomId, produtoId], callback);
}

// BUSCAR PRODUTOS DO CUPOM
function buscarPorCupom(cupomId, callback) {
    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);
}

// BUSCAR CUPONS DO PRODUTO
function buscarPorProduto(produtoId, callback) {
    const sql = `
        SELECT *
        FROM Cupom_has_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);
}

// EXCLUIR RELAÇÃO
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
