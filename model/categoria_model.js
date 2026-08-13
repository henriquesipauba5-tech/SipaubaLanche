const conexao = require("../conexao/conexao.js");

// CADASTRAR CATEGORIA
function cadastrar(categoria, callback) {
    const sql = `
        INSERT INTO Categoria (nome)
        VALUES (?)
    `;

    conexao.query(sql, [categoria.nome], callback);
}

// LISTAR CATEGORIAS
function listar(callback) {
    const sql = `
        SELECT idCategoria, nome
        FROM Categoria
        ORDER BY nome ASC
    `;

    conexao.query(sql, callback);
}

// BUSCAR POR ID
function buscarPorId(idCategoria, callback) {
    const sql = `
        SELECT idCategoria, nome
        FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [idCategoria], callback);
}

// BUSCAR POR NOME
function buscarPorNome(nome, callback) {
    const sql = `
        SELECT idCategoria, nome
        FROM Categoria
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);
}

// ATUALIZAR
function atualizar(idCategoria, categoria, callback) {
    const sql = `
        UPDATE Categoria
        SET nome = ?
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [categoria.nome, idCategoria], callback);
}

// EXCLUIR
function excluir(idCategoria, callback) {
    const sql = `
        DELETE FROM Categoria
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [idCategoria], callback);
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir
};
