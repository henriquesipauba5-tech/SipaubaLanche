const conexao = require("../conexao/conexao.js");


//==================================================
//              CADASTRAR PRODUTO
//==================================================

function cadastrar(produto, callback) {

    const sql = `
        INSERT INTO Produto
        (
            nome,
            descricao,
            preco_antigo,
            preco_promocional,
            quantidade_estoque,
            ativo,
            Loja_idLoja,
            imagem,
            Categoria_idCategoria
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;


    const valores = [

        produto.nome,

        produto.descricao,

        produto.preco_antigo,

        produto.preco_promocional,

        produto.quantidade_estoque,

        produto.ativo,

        produto.Loja_idLoja,

        produto.imagem,

        produto.Categoria_idCategoria

    ];


    conexao.query(
        sql,
        valores,
        callback
    );

}


//==================================================
//              LISTAR PRODUTOS
//==================================================

function listar(callback) {

    const sql = `
        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.ativo,

            p.Loja_idLoja,

            p.imagem,

            p.Categoria_idCategoria,

            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Categoria c

            ON p.Categoria_idCategoria =
               c.idCategoria

        ORDER BY p.idProduto DESC
    `;


    conexao.query(
        sql,
        callback
    );

}


//==================================================
//              BUSCAR POR ID
//==================================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.ativo,

            p.Loja_idLoja,

            p.imagem,

            p.Categoria_idCategoria,

            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Categoria c

            ON p.Categoria_idCategoria =
               c.idCategoria

        WHERE p.idProduto = ?
    `;


    conexao.query(
        sql,
        [id],
        callback
    );

}


//==================================================
//          BUSCAR POR CATEGORIA
//==================================================

function buscarPorCategoria(
    idCategoria,
    callback
) {

    const sql = `
        SELECT

            p.idProduto,

            p.nome,

            p.descricao,

            p.preco_antigo,

            p.preco_promocional,

            p.quantidade_estoque,

            p.ativo,

            p.Loja_idLoja,

            p.imagem,

            p.Categoria_idCategoria,

            c.nome AS categoria

        FROM Produto p

        LEFT JOIN Categoria c

            ON p.Categoria_idCategoria =
               c.idCategoria

        WHERE p.Categoria_idCategoria = ?

        ORDER BY p.nome ASC
    `;


    conexao.query(
        sql,
        [idCategoria],
        callback
    );

}


//==================================================
//              ATUALIZAR PRODUTO
//==================================================

function atualizar(
    id,
    produto,
    callback
) {

    //==================================================
    //      SE FOI ENVIADA UMA NOVA IMAGEM
    //==================================================

    if (produto.imagem) {

        const sql = `
            UPDATE Produto
            SET
                nome = ?,
                descricao = ?,
                preco_antigo = ?,
                preco_promocional = ?,
                quantidade_estoque = ?,
                ativo = ?,
                Loja_idLoja = ?,
                imagem = ?,
                Categoria_idCategoria = ?
            WHERE idProduto = ?
        `;


        const valores = [

            produto.nome,

            produto.descricao,

            produto.preco_antigo,

            produto.preco_promocional,

            produto.quantidade_estoque,

            produto.ativo,

            produto.Loja_idLoja,

            produto.imagem,

            produto.Categoria_idCategoria,

            id

        ];


        return conexao.query(
            sql,
            valores,
            callback
        );

    }


    //==================================================
    //      SEM NOVA IMAGEM
    //      MANTÉM A IMAGEM ANTIGA
    //==================================================

    const sql = `
        UPDATE Produto
        SET
            nome = ?,
            descricao = ?,
            preco_antigo = ?,
            preco_promocional = ?,
            quantidade_estoque = ?,
            ativo = ?,
            Loja_idLoja = ?,
            Categoria_idCategoria = ?
        WHERE idProduto = ?
    `;


    const valores = [

        produto.nome,

        produto.descricao,

        produto.preco_antigo,

        produto.preco_promocional,

        produto.quantidade_estoque,

        produto.ativo,

        produto.Loja_idLoja,

        produto.Categoria_idCategoria,

        id

    ];


    conexao.query(
        sql,
        valores,
        callback
    );

}


//==================================================
//              EXCLUIR PRODUTO
//==================================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
    `;


    conexao.query(
        sql,
        [id],
        callback
    );

}


//==================================================
//                  EXPORTAR
//==================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    buscarPorCategoria,

    atualizar,

    excluir

};