const produtoModel = require("../models/produtoModel");

// =========================
// Cadastrar Produto
// =========================

function cadastrar(req, res) {

    const produto = req.body;

    produtoModel.cadastrar(produto, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Produtos
// =========================

function listar(req, res) {

    produtoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Produto por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    produtoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Produto por Código
// =========================

function buscarPorCodigo(req, res) {

    const codigo = req.params.codigo;

    produtoModel.buscarPorCodigo(codigo, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Produto
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const produto = req.body;

    produtoModel.atualizar(id, produto, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Produto atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Produto
// =========================

function excluir(req, res) {

    const id = req.params.id;

    produtoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Produto excluído com sucesso!"
        });

    });

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigo,
    atualizar,
    excluir

};