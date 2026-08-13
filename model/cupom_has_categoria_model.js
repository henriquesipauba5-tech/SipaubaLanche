const conexao = require("../conexao/conexao.js");

// OBSERVAÇÃO:
// No banco, a tabela correta chama-se Categoria_has_Cupom.

// VINCULAR CATEGORIA AO CUPOM
function cadastrar(relacao, callback) {
    const sql = `
        INSERT INTO Categoria_has_Cupom
        (Categoria_idCategoria, Cupom_idCupom)
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Categoria_idCategoria,
            relacao.Cupom_idCupom
        ],
        callback
    );
}

// LISTAR RELAÇÕES
function listar(callback) {
    conexao.query("SELECT * FROM Categoria_has_Cupom", callback);
}

// BUSCAR RELAÇÃO
function buscar(cupomId, categoriaId, callback) {
    const sql = `
        SELECT *
        FROM Categoria_has_Cupom
        WHERE Cupom_idCupom = ?
          AND Categoria_idCategoria = ?
    `;

    conexao.query(sql, [cupomId, categoriaId], callback);
}

// BUSCAR CATEGORIAS DO CUPOM
function buscarPorCupom(cupomId, callback) {
    const sql = `
        SELECT *
        FROM Categoria_has_Cupom
        WHERE Cupom_idCupom = ?
    `;

    conexao.query(sql, [cupomId], callback);
}

// BUSCAR CUPONS DA CATEGORIA
function buscarPorCategoria(categoriaId, callback) {
    const sql = `
        SELECT *
        FROM Categoria_has_Cupom
        WHERE Categoria_idCategoria = ?
    `;

    conexao.query(sql, [categoriaId], callback);
}

// EXCLUIR RELAÇÃO
function excluir(cupomId, categoriaId, callback) {
    const sql = `
        DELETE FROM Categoria_has_Cupom
        WHERE Cupom_idCupom = ?
          AND Categoria_idCategoria = ?
    `;

    conexao.query(sql, [cupomId, categoriaId], callback);
}

module.exports = {
    cadastrar,
    listar,
    buscar,
    buscarPorCupom,
    buscarPorCategoria,
    excluir
};
