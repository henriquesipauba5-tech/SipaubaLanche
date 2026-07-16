const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Banner
// =========================

function cadastrar(banner, callback) {

    const sql = `INSERT INTO Banner
        (
            imagem,
            data_inicio,
            data_final,
            status_visibilidade,
            nome,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.nome,
            banner.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Banners
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Banner
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) {

    const sql = `
        UPDATE Banner
        SET

            imagem = ?,
            data_inicio = ?,
            data_final = ?,
            status_visibilidade = ?,
            nome = ?,
            Loja_idLoja = ?

        WHERE idBanner = ?
    `;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.nome,
            banner.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Banner
        WHERE idBanner = ?
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