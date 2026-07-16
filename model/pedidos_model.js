const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Pedido
// =========================

function cadastrar(pedido, callback) {

    const sql = `INSERT INTO Pedidos
        (
            data,
            nota_fiscal,
            data_entrega,
            status_entrega,
            status_pagamento,
            codigo,
            Cliente_idCliente,
            Loja_idLoja,
            Endereco_idEndereco,
            Formas_Pagamento_idFormas_Pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            pedido.data,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.status_pagamento,
            pedido.codigo,
            pedido.Cliente_idCliente,
            pedido.Loja_idLoja,
            pedido.Endereco_idEndereco,
            pedido.Formas_Pagamento_idFormas_Pagamento
        ],
        callback
    );

}

// =========================
// Listar Pedidos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Pedidos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Pedidos
        WHERE idPedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Código
// =========================

function buscarPorCodigo(codigo, callback) {

    const sql = `
        SELECT *
        FROM Pedidos
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Pedido
// =========================

function atualizar(id, pedido, callback) {

    const sql = `
        UPDATE Pedidos
        SET

            data = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            status_pagamento = ?,
            codigo = ?,
            Cliente_idCliente = ?,
            Loja_idLoja = ?,
            Endereco_idEndereco = ?,
            Formas_Pagamento_idFormas_Pagamento = ?

        WHERE idPedidos = ?
    `;

    conexao.query(
        sql,
        [
            pedido.data,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.status_pagamento,
            pedido.codigo,
            pedido.Cliente_idCliente,
            pedido.Loja_idLoja,
            pedido.Endereco_idEndereco,
            pedido.Formas_Pagamento_idFormas_Pagamento,
            id
        ],
        callback
    );

}

// =========================
// Excluir Pedido
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedidos
        WHERE idPedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigo,
    atualizar,
    excluir

};