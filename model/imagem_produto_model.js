//==================================================
//      imagem_produto_model.js
//      Sipaúba Lanches
//==================================================


const conexao = require(
    "../conexao/conexao.js"
);


//==================================================
//              CADASTRAR IMAGEM
//==================================================

function cadastrar(imagem, callback) {

    const sql = `
        INSERT INTO Imagem_Produto
        (
            imagem,
            Produto_idProduto
        )
        VALUES (?, ?)
    `;


    conexao.query(

        sql,

        [
            imagem.imagem,
            imagem.Produto_idProduto
        ],

        callback

    );

}


//==================================================
//              LISTAR IMAGENS DO PRODUTO
//==================================================

function listarPorProduto(
    idProduto,
    callback
) {

    const sql = `
        SELECT *
        FROM Imagem_Produto
        WHERE Produto_idProduto = ?
    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}


//==================================================
//              EXCLUIR IMAGENS DO PRODUTO
//==================================================

function excluirPorProduto(
    idProduto,
    callback
) {

    const sql = `
        DELETE FROM Imagem_Produto
        WHERE Produto_idProduto = ?
    `;


    conexao.query(

        sql,

        [idProduto],

        callback

    );

}


//==================================================
//              EXPORTAR
//==================================================

module.exports = {

    cadastrar,

    listarPorProduto,

    excluirPorProduto

};