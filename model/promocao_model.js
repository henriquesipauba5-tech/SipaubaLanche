const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Promoção
// =========================

function cadastrar(promocao, callback) {

    const sql = `INSERT INTO Promocao
        (
            data_inicio,
            data_final,
            valor_promocao,
            nome,
            Banner_idBanner
        )
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            promocao.Banner_idBanner
        ],
        callback
    );

}

// =========================
// Listar Promoções
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Promocao
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Promoção
// =========================

function atualizar(id, promocao, callback) {

    const sql = `
        UPDATE Promocao
        SET

            data_inicio = ?,
            data_final = ?,
            valor_promocao = ?,
            nome = ?,
            Banner_idBanner = ?

        WHERE idPromocao = ?
    `;

    conexao.query(
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            promocao.Banner_idBanner,
            id
        ],
        callback
    );

}

// =========================
// Excluir Promoção
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
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