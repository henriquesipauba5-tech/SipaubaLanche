const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Cliente
// =========================

function cadastrar(Endereco, callback) {

    const sql = `INSERT INTO Endereco
        ( rua, cep, setor, numero, complemento, tipo)
        VALUES (?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            Endereco.rua,
            Endereco.cep,
            Endereco.setor,
            Endereco.numero,
            Endereco.complemento,
            Endereco.tipo
        ],
        callback
    );

}

// =========================
// Listar Clientes
// =========================

function listar(callback) {

    const sql = `
        SELECT * FROM Endereco
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Email
// =========================

function buscarPorCep(cep, callback) {

    const sql = `
        SELECT * FROM Endereco
        WHERE cep = ?
    `;

    conexao.query(sql, [cep], callback);

}

// =========================
// Atualizar Cliente
// =========================

function atualizar(id, Endereco, callback) {

    const sql = `
        UPDATE Endereco
        SET

            rua= ?,
            cep = ?,
            setor = ?,
            numero = ?,
            complemento = ?,
            tipo = ?

        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [
            Endereco.nome,
            Endereco.cep,
            Endereco.setor,
            Endereco.numero,
            Endereco.complemento,
            Endereco.tipo
           
        ],
        callback
    );

}

// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCep,
    atualizar,
    excluir

};