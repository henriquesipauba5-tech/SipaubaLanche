const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Adicional
// =========================

function cadastrar(adicional, callback) {

    const sql = `
        INSERT INTO Adicional
        (
            nome,
            descricao,
            preco,
            imagem
        )
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            adicional.nome,
            adicional.descricao,
            adicional.preco,
            adicional.imagem
        ],
        callback
    );
}


// =========================
// Listar Adicionais
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Adicional
    `;

    conexao.query(sql, callback);
}


// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Adicional
        WHERE idAdicional = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Adicional
        WHERE nome = ?
    `;

    conexao.query(
        sql,
        [nome],
        callback
    );
}


// =========================
// Atualizar Adicional
// =========================

function atualizar(id, adicional, callback) {

    const sql = `
        UPDATE Adicional
        SET

            nome = ?,
            descricao = ?,
            preco = ?,
            imagem = ?

        WHERE idAdicional = ?
    `;

    conexao.query(
        sql,
        [
            adicional.nome,
            adicional.descricao,
            adicional.preco,
            adicional.imagem,
            id
        ],
        callback
    );
}


// =========================
// Excluir Adicional
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Adicional
        WHERE idAdicional = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


// =========================
// Exportar Funções
// =========================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};