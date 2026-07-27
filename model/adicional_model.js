const conexao = require("../conexao/servidor");

// =========================
// Cadastrar Adicional
// =========================

function cadastrar(adicional, callback) {

    const sql = `
        INSERT INTO Adicional
        (nome, preco, imagem, quantidade)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            adicional.nome,
            adicional.preco,
            adicional.imagem,
            adicional.quantidade
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

    conexao.query(sql, [id], callback);

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

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Adicional
// =========================

function atualizar(id, adicional, callback) {

    const sql = `
        UPDATE Adicional
        SET
            nome = ?,
            preco = ?,
            imagem = ?,
            quantidade = ?
        WHERE idAdicional = ?
    `;

    conexao.query(
        sql,
        [
            adicional.nome,
            adicional.preco,
            adicional.imagem,
            adicional.quantidade,
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