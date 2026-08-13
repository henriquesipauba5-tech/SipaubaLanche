const bannerProdutoModel = require("../model/banner_has_produto_model.js");

function listar(req, res) {
    bannerProdutoModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscar(req, res) {
    const a = req.params.bannerId;
    const b = req.params.produtoId;

    bannerProdutoModel.buscar(a, b, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function cadastrar(req, res) {
    const relacao = req.body || {};

    bannerProdutoModel.cadastrar(relacao, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        return res.status(201).json({
            mensagem: "Produto vinculado ao banner com sucesso!",
            id: resultado.insertId
        });
    });
}

function excluir(req, res) {
    const a = req.params.bannerId;
    const b = req.params.produtoId;

    bannerProdutoModel.excluir(a, b, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (resultado && resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json({ mensagem: "Relacionamento excluído com sucesso!" });
    });
}

function buscarPorBanner(req, res) {
    const valor = req.params.bannerId;

    bannerProdutoModel.buscarPorBanner(valor, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorProduto(req, res) {
    const valor = req.params.produtoId;

    bannerProdutoModel.buscarPorProduto(valor, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

module.exports = {
    listar, buscar, cadastrar, excluir, buscarPorBanner, buscarPorProduto
};
