const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Categoria à Promoção
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Categoria_has_Promocao
        (
            Categoria_idCategoria,
            Promocao_idPromocao
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Categoria_idCategoria,
            relacao.Promocao_idPromocao
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
        FROM Categoria_has_Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(categoriaId, promocaoId, callback) {

    const sql = `
        SELECT *
        FROM Categoria_has_Promocao
        WHERE Categoria_idCategoria = ?
        AND Promocao_idPromocao = ?
    `;

    conexao.query(sql, [categoriaId, promocaoId], callback);

}

// =========================
// Buscar Promoções da Categoria
// =========================

function buscarPorCategoria(categoriaId, callback) {

    const sql = `
        SELECT *
        FROM Categoria_has_Promocao
        WHERE Categoria_idCategoria = ?
    `;

    conexao.query(sql, [categoriaId], callback);

}

// =========================
// Buscar Categorias da Promoção
// =========================

function buscarPorPromocao(promocaoId, callback) {

    const sql = `
        SELECT *
        FROM Categoria_has_Promocao
        WHERE Promocao_idPromocao = ?
    `;

    conexao.query(sql, [promocaoId], callback);

}

// =========================
// Remover Categoria da Promoção
// =========================

function excluir(categoriaId, promocaoId, callback) {

    const sql = `
        DELETE FROM Categoria_has_Promocao
        WHERE Categoria_idCategoria = ?
        AND Promocao_idPromocao = ?
    `;

    conexao.query(sql, [categoriaId, promocaoId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorCategoria,
    buscarPorPromocao,
    excluir

};