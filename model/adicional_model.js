const conexao = require("../conexao/conexao.js");

// CADASTRAR ADICIONAL
function cadastrar(adicional, callback) {
    const sql = `
        INSERT INTO Adicional
        (nome, descricao, preco, imagem)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            adicional.nome,
            adicional.descricao,
            adicional.preco,
            adicional.imagem || null
        ],
        callback
    );
}

// LISTAR ADICIONAIS
function listar(callback) {
    const sql = `
        SELECT *
        FROM Adicional
        ORDER BY nome ASC
    `;

    conexao.query(sql, callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Adicional
        WHERE idAdicional = ?
    `;

    conexao.query(sql, [id], callback);
}

// BUSCAR POR NOME
function buscarPorNome(nome, callback) {
    const sql = `
        SELECT *
        FROM Adicional
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);
}

// ATUALIZAR ADICIONAL
function atualizar(id, adicional, callback) {
    const sql = `
        UPDATE Adicional
        SET nome = ?,
            descricao = ?,
            preco = ?,
            imagem = ?
        WHERE idAdicional = ?
    `;

    conexao.query(
        sql,
        [
            adicional.nome,
            adicional.descricao,
            adicional.preco,
            adicional.imagem || null,
            id
        ],
        callback
    );
}

// EXCLUIR ADICIONAL
function excluir(id, callback) {
    const sql = `
        DELETE FROM Adicional
        WHERE idAdicional = ?
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
