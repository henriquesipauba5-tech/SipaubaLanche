const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Forma de Pagamento
// =========================

function cadastrar(formaPagamento, callback) {

    const sql = `INSERT INTO Formas_Pagamento
        (
            nome,
            link,
            ativo
        )
        VALUES (?, ?, ?)`;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            formaPagamento.link,
            formaPagamento.ativo
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Formas_Pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Formas_Pagamento
        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) {

    const sql = `
        SELECT *
        FROM Formas_Pagamento
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Forma de Pagamento
// =========================

function atualizar(id, formaPagamento, callback) {

    const sql = `
        UPDATE Formas_Pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?

        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            formaPagamento.link,
            formaPagamento.ativo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Forma de Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Formas_Pagamento
        WHERE idFormas_Pagamento = ?
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