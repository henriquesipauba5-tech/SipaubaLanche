const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Imagem do Produto
// =========================

function cadastrar(imagemProduto, callback) {

    const sql = `INSERT INTO Imagem_Produto
        (arquivo, Produto_idProduto)
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            imagemProduto.arquivo,
            imagemProduto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Imagens
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Produto
// =========================

function buscarPorProduto(idProduto, callback) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Atualizar Imagem
// =========================

function atualizar(id, imagemProduto, callback) {

    const sql = `
        UPDATE Imagem_Produto
        SET
            arquivo = ?,
            Produto_idProduto = ?
        WHERE idImagem_Produto = ?
    `;

    conexao.query(
        sql,
        [
            imagemProduto.arquivo,
            imagemProduto.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Imagem
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Imagem_Produto
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorProduto,
    atualizar,
    excluir

};