const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cartão de Pagamento
// =========================

function cadastrar(cartao, callback) {

    const sql = `INSERT INTO Cartao_Pagamento
        (
            numero,
            data_vencimento,
            cvc,
            nome_propietario,
            nome_indentificacao,
            bandeira,
            cpf,
            tipo,
            ativo,
            Cliente_idCliente
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            cartao.numero,
            cartao.data_vencimento,
            cartao.cvc,
            cartao.nome_propietario,
            cartao.nome_indentificacao,
            cartao.bandeira,
            cartao.cpf,
            cartao.tipo,
            cartao.ativo,
            cartao.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Cartões
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamento
        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Cliente
// =========================

function buscarPorCliente(idCliente, callback) {

    const sql = `
        SELECT *
        FROM Cartao_Pagamento
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [idCliente], callback);

}

// =========================
// Atualizar Cartão
// =========================

function atualizar(id, cartao, callback) {

    const sql = `
        UPDATE Cartao_Pagamento
        SET

            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            nome_propietario = ?,
            nome_indentificacao = ?,
            bandeira = ?,
            cpf = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?

        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            cartao.numero,
            cartao.data_vencimento,
            cartao.cvc,
            cartao.nome_propietario,
            cartao.nome_indentificacao,
            cartao.bandeira,
            cartao.cpf,
            cartao.tipo,
            cartao.ativo,
            cartao.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cartão
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_Pagamento
        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCliente,
    atualizar,
    excluir

};