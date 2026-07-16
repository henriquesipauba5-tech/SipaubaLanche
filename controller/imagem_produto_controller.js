const imagemProdutoModel = require("../models/imagemProdutoModel");

// =========================
// Cadastrar Imagem do Produto
// =========================

function cadastrar(req, res) {

    const imagemProduto = req.body;

    imagemProdutoModel.cadastrar(imagemProduto, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Imagem do produto cadastrada com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Imagens
// =========================

function listar(req, res) {

    imagemProdutoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Imagem por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    imagemProdutoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Imagem não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Imagens por Produto
// =========================

function buscarPorProduto(req, res) {

    const produtoId = req.params.produtoId;

    imagemProdutoModel.buscarPorProduto(produtoId, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Nenhuma imagem encontrada para este produto."
            });
        }

        res.json(resultados);

    });

}

// =========================
// Atualizar Imagem
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const imagemProduto = req.body;

    imagemProdutoModel.atualizar(id, imagemProduto, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Imagem atualizada com sucesso!"
        });

    });

}

// =========================
// Excluir Imagem
// =========================

function excluir(req, res) {

    const id = req.params.id;

    imagemProdutoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Imagem excluída com sucesso!"
        });

    });

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorProduto,
    atualizar,
    excluir

};