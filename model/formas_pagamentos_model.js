const conexao = require("../conexao/conexao.js");

// OBSERVAÇÃO:
// No banco, a tabela correta chama-se Forma_Pagamento.

// CADASTRAR FORMA DE PAGAMENTO
function cadastrar(formaPagamento, callback) {
    const sql = `
        INSERT INTO Forma_Pagamento
        (nome, link, ativo)
        VALUES (?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            formaPagamento.link || null,
            formaPagamento.ativo ?? true
        ],
        callback
    );
}

// LISTAR FORMAS DE PAGAMENTO
function listar(callback) {
    conexao.query("SELECT * FROM Forma_Pagamento", callback);
}

// BUSCAR POR ID
function buscarPorId(id, callback) {
    const sql = `
        SELECT *
        FROM Forma_Pagamento
        WHERE idForma_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);
}

// BUSCAR POR NOME
function buscarPorNome(nome, callback) {
    const sql = `
        SELECT *
        FROM Forma_Pagamento
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);
}

// ATUALIZAR
function atualizar(id, formaPagamento, callback) {
    const sql = `
        UPDATE Forma_Pagamento
        SET nome = ?,
            link = ?,
            ativo = ?
        WHERE idForma_Pagamento = ?
    `;

    conexao.query(
        sql,
        [
            formaPagamento.nome,
            formaPagamento.link || null,
            formaPagamento.ativo,
            id
        ],
        callback
    );
}

// EXCLUIR
function excluir(id, callback) {
    const sql = `
        DELETE FROM Forma_Pagamento
        WHERE idForma_Pagamento = ?
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
