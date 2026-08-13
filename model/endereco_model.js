const conexao = require("../conexao/conexao.js");

// CADASTRAR ENDEREÇO
function cadastrar(endereco, callback) {
    const sql = `
        INSERT INTO Endereco
        (rua, cep, bairro, numero, complemento, tipo)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.bairro,
            endereco.numero || null,
            endereco.complemento || null,
            endereco.tipo || null
        ],
        callback
    );
}

// LISTAR ENDEREÇOS
function listar(callback) {
    conexao.query("SELECT * FROM Endereco", callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);
}

// BUSCAR POR CEP
function buscarPorCep(cep, callback) {
    const sql = `
        SELECT *
        FROM Endereco
        WHERE cep = ?
    `;

    conexao.query(sql, [cep], callback);
}

// ATUALIZAR ENDEREÇO
function atualizar(id, endereco, callback) {
    const sql = `
        UPDATE Endereco
        SET rua = ?,
            cep = ?,
            bairro = ?,
            numero = ?,
            complemento = ?,
            tipo = ?
        WHERE idEndereco = ?
    `;

    conexao.query(
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.bairro,
            endereco.numero || null,
            endereco.complemento || null,
            endereco.tipo || null,
            id
        ],
        callback
    );
}

// EXCLUIR ENDEREÇO
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
