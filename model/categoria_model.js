const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Categoria
// =========================

function cadastrar(categoria, callback) {

    const sql = `
        INSERT INTO Categoria (nome)
        VALUES (?)
    `;

    conexao.query(
        sql,
        [categoria.nome],
        callback
    );

}

// =========================
// Listar Categorias
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Categoria
        ORDER BY nome ASC
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Categoria por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar Categoria por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Categoria
// =========================

function atualizar(id, categoria, callback) {

    const sql = `
        UPDATE Categoria
        SET nome = ?
        WHERE idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            categoria.nome,
            id
        ],
        callback
    );

}

// =========================
// Excluir Categoria
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};