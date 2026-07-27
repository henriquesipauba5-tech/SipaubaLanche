const conexao = require("../conexao/conexao.js");

// =========================
// Vincular Endereço ao Cliente
// =========================

function cadastrar(relacao, callback) {

    const sql = `INSERT INTO Endereco_has_Cliente
        (
            Endereco_idEndereco,
            Cliente_idCliente
        )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            relacao.Endereco_idEndereco,
            relacao.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Relações
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar Relação
// =========================

function buscar(enderecoId, clienteId, callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(sql, [enderecoId, clienteId], callback);

}

// =========================
// Buscar Endereços do Cliente
// =========================

function buscarPorCliente(clienteId, callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [clienteId], callback);

}

// =========================
// Buscar Clientes do Endereço
// =========================

function buscarPorEndereco(enderecoId, callback) {

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
    `;

    conexao.query(sql, [enderecoId], callback);

}

// =========================
// Excluir Relação
// =========================

function excluir(enderecoId, clienteId, callback) {

    const sql = `
        DELETE FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(sql, [enderecoId, clienteId], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscar,
    buscarPorCliente,
    buscarPorEndereco,
    excluir

};