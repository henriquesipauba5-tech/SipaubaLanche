const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cupom
// =========================

function cadastrar(cupom, callback) {

    const sql = `INSERT INTO Cupom
        (
            nome,
            data_validade,
            quantidade,
            desconto,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.quantidade,
            cupom.desconto,
            cupom.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Cupons
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cupom
        WHERE idCupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Cupom
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Cupom
// =========================

function atualizar(id, cupom, callback) {

    const sql = `
        UPDATE Cupom
        SET

            nome = ?,
            data_validade = ?,
            quantidade = ?,
            desconto = ?,
            Loja_idLoja = ?

        WHERE idCupom = ?
    `;

    conexao.query(
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.quantidade,
            cupom.desconto,
            cupom.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cupom
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cupom
        WHERE idCupom = ?
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