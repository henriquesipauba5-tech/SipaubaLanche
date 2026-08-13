const conexao = require("../conexao/conexao.js");

// CADASTRAR CUPOM
function cadastrar(cupom, callback) {
    const sql = `
        INSERT INTO Cupom
        (
            codigo,
            descricao,
            desconto,
            data_inicio,
            data_final,
            ativo,
            Loja_idLoja
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            cupom.codigo,
            cupom.descricao || null,
            cupom.desconto,
            cupom.data_inicio || null,
            cupom.data_final || null,
            cupom.ativo ?? true,
            cupom.Loja_idLoja
        ],
        callback
    );
}

// LISTAR CUPONS
function listar(callback) {
    conexao.query("SELECT * FROM Cupom", callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Cupom
        WHERE idCupom = ?
    `;

    conexao.query(sql, [id], callback);
}

// BUSCAR POR CÓDIGO
function buscarPorCodigo(codigo, callback) {
    const sql = `
        SELECT *
        FROM Cupom
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);
}

// ATUALIZAR CUPOM
function atualizar(id, cupom, callback) {
    const sql = `
        UPDATE Cupom
        SET codigo = ?,
            descricao = ?,
            desconto = ?,
            data_inicio = ?,
            data_final = ?,
            ativo = ?,
            Loja_idLoja = ?
        WHERE idCupom = ?
    `;

    conexao.query(
        sql,
        [
            cupom.codigo,
            cupom.descricao || null,
            cupom.desconto,
            cupom.data_inicio || null,
            cupom.data_final || null,
            cupom.ativo,
            cupom.Loja_idLoja,
            id
        ],
        callback
    );
}

// EXCLUIR CUPOM
function excluir(id, callback) {
    const sql = `
        DELETE FROM Cupom
        WHERE idCupom = ?
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
