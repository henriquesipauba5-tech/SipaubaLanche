const conexao = require("../conexao/conexao.js");

// OBSERVAÇÃO:
// No banco, a tabela correta chama-se Produto_has_Carrinho.

// ADICIONAR PRODUTO AO CARRINHO
function cadastrar(relacao, callback) {
    const sql = `
        INSERT INTO Produto_has_Carrinho
        (
            Carrinho_idCarrinho,
            Produto_idProduto,
            quantidade,
            preco_unitario
        )
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            relacao.Carrinho_idCarrinho,
            relacao.Produto_idProduto,
            relacao.quantidade ?? 1,
            relacao.preco_unitario ?? null
        ],
        callback
    );
}

// LISTAR RELAÇÕES
function listar(callback) {
    conexao.query("SELECT * FROM Produto_has_Carrinho", callback);
}

// BUSCAR RELAÇÃO
function buscar(carrinhoId, produtoId, callback) {
    const sql = `
        SELECT *
        FROM Produto_has_Carrinho
        WHERE Carrinho_idCarrinho = ?
          AND Produto_idProduto = ?
    `;

    conexao.query(sql, [carrinhoId, produtoId], callback);
}

// BUSCAR PRODUTOS DO CARRINHO
function buscarPorCarrinho(carrinhoId, callback) {
    const sql = `
        SELECT *
        FROM Produto_has_Carrinho
        WHERE Carrinho_idCarrinho = ?
    `;

    conexao.query(sql, [carrinhoId], callback);
}

// BUSCAR CARRINHOS DO PRODUTO
function buscarPorProduto(produtoId, callback) {
    const sql = `
        SELECT *
        FROM Produto_has_Carrinho
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [produtoId], callback);
}

// ATUALIZAR QUANTIDADE/PREÇO
function atualizar(carrinhoId, produtoId, relacao, callback) {
    const sql = `
        UPDATE Produto_has_Carrinho
        SET quantidade = ?,
            preco_unitario = ?
        WHERE Carrinho_idCarrinho = ?
          AND Produto_idProduto = ?
    `;

    conexao.query(
        sql,
        [
            relacao.quantidade,
            relacao.preco_unitario,
            carrinhoId,
            produtoId
        ],
        callback
    );
}

// REMOVER PRODUTO DO CARRINHO
function excluir(carrinhoId, produtoId, callback) {
    const sql = `
        DELETE FROM Produto_has_Carrinho
        WHERE Carrinho_idCarrinho = ?
          AND Produto_idProduto = ?
    `;

    conexao.query(sql, [carrinhoId, produtoId], callback);
}

module.exports = {
    cadastrar,
    listar,
    buscar,
    buscarPorCarrinho,
    buscarPorProduto,
    atualizar,
    excluir
};
