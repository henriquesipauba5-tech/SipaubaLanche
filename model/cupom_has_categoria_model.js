const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Categoria ao Cupom
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Cupom_has_Categoria
        (
            Cupom_idCupom,
            Categoria_idCategoria
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Cupom_idCupom,
            relacao.Categoria_idCategoria
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
        FROM Cupom_has_Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(cupomId, categoriaId, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Categoria
        WHERE Cupom_idCupom = ?
        AND Categoria_idCategoria = ?
    `;

    conexao.query(sql, [cupomId, categoriaId], callback);

}

// =========================
// Buscar Categorias do Cupom
// =========================

function buscarPorCupom(cupomId, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Categoria
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);

}

// =========================
// Buscar Cupons da Categoria
// =========================

function buscarPorCategoria(categoriaId, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Categoria
        WHERE Categoria_idCategoria = ?
    `;

    conexao.query(sql, [categoriaId], callback);

}

// =========================
// Remover Categoria do Cupom
// =========================

function excluir(cupomId, categoriaId, callback) {

    const sql = `
        DELETE FROM Cupom_has_Categoria
        WHERE Cupom_idCupom = ?
        AND Categoria_idCategoria = ?
    `;

    conexao.query(sql, [cupomId, categoriaId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorCupom,
    buscarPorCategoria,
    excluir

};