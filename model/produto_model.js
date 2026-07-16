const conexao = require("../conexao/conexao.js");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(produto, callback) {

    const sql = `INSERT INTO Produto
        (
            nome,
            descricao,
            codigo,
            preco_antigo,
            preco_promocional,
            quantidade_estoque,
            ativo,
            Loja_idLoja,
            Categoria_idCategoria,
            Adicional_idAdicional
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.Loja_idLoja,
            produto.Categoria_idCategoria,
            produto.Adicional_idAdicional
        ],
        callback
    );

}

// =========================
// Listar Produtos
// =========================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Código
// =========================

function buscarPorCodigo(codigo, callback) {

    const sql = `
        SELECT *
        FROM Produto
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Produto
// =========================

function atualizar(id, produto, callback) {

    const sql = `
        UPDATE Produto
        SET

            nome = ?,
            descricao = ?,
            codigo = ?,
            preco_antigo = ?,
            preco_promocional = ?,
            quantidade_estoque = ?,
            ativo = ?,
            Loja_idLoja = ?,
            Categoria_idCategoria = ?,
            Adicional_idAdicional = ?

        WHERE idProduto = ?
    `;

    conexao.query(
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.Loja_idLoja,
            produto.Categoria_idCategoria,
            produto.Adicional_idAdicional,
            id
        ],
        callback
    );

}

// =========================
// Excluir Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
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