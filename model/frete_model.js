const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Frete
// =========================

function cadastrar(frete, callback) {

    const sql = `INSERT INTO Frete
        (
            valor,
            tipo,
            bairro,
            entrega_full,
            codigo_rastreio,
            Pedidos_idPedidos,
            Pedidos_Endereco_idEndereco
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.codigo_rastreio,
            frete.Pedidos_idPedidos,
            frete.Pedidos_Endereco_idEndereco
        ],
        callback
    );

}

// =========================
// Listar Fretes
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Frete
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Frete
        WHERE idFrete = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Código de Rastreio
// =========================

function buscarPorCodigoRastreio(codigo, callback) {

    const sql = `
        SELECT *
        FROM Frete
        WHERE codigo_rastreio = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Frete
// =========================

function atualizar(id, frete, callback) {

    const sql = `
        UPDATE Frete
        SET

            valor = ?,
            tipo = ?,
            bairro = ?,
            entrega_full = ?,
            codigo_rastreio = ?,
            Pedidos_idPedidos = ?,
            Pedidos_Endereco_idEndereco = ?

        WHERE idFrete = ?
    `;

    conexao.query(
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.codigo_rastreio,
            frete.Pedidos_idPedidos,
            frete.Pedidos_Endereco_idEndereco,
            id
        ],
        callback
    );

}

// =========================
// Excluir Frete
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Frete
        WHERE idFrete = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigoRastreio,
    atualizar,
    excluir

};