const conexao = require("../conexao/conexao.js");

// CADASTRAR BANNER
function cadastrar(banner, callback) {
    const sql = `
        INSERT INTO Banner
        (imagem, data_inicio, data_final, status_visibilidade, Loja_idLoja)
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade ?? true,
            banner.Loja_idLoja
        ],
        callback
    );
}

// LISTAR BANNERS
function listar(callback) {
    conexao.query("SELECT * FROM Banner", callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);
}

// ATUALIZAR BANNER
function atualizar(id, banner, callback) {
    const sql = `
        UPDATE Banner
        SET imagem = ?,
            data_inicio = ?,
            data_final = ?,
            status_visibilidade = ?,
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
            banner.Loja_idLoja,
            id
        ],
        callback
    );
}

// EXCLUIR BANNER
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
    atualizar,
    excluir
};
