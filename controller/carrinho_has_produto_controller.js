const carrinhoProdutoModel = require("../model/carrinho_has_produto_model.js");

function listar(req, res) {
    carrinhoProdutoModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscar(req, res) {
    const a = req.params.carrinhoId;
    const b = req.params.produtoId;

    carrinhoProdutoModel.buscar(a, b, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function cadastrar(req, res) {
    const relacao = req.body || {};

    carrinhoProdutoModel.cadastrar(relacao, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        return res.status(201).json({
            mensagem: "Produto adicionado ao carrinho com sucesso!",
            id: resultado.insertId
        });
    });
}

function atualizar(req, res) {
    const a = req.params.carrinhoId;
    const b = req.params.produtoId;
    const dados = req.body || {};

    carrinhoProdutoModel.atualizar(a, b, dados, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json({ mensagem: "Relacionamento atualizado com sucesso!" });
    });
}

function excluir(req, res) {
    const a = req.params.carrinhoId;
    const b = req.params.produtoId;

    carrinhoProdutoModel.excluir(a, b, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (resultado && resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json({ mensagem: "Relacionamento excluído com sucesso!" });
    });
}

function buscarPorCarrinho(req, res) {
    const valor = req.params.carrinhoId;

    carrinhoProdutoModel.buscarPorCarrinho(valor, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorProduto(req, res) {
    const valor = req.params.produtoId;

    carrinhoProdutoModel.buscarPorProduto(valor, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

module.exports = {
    listar, buscar, cadastrar, excluir, buscarPorCarrinho, buscarPorProduto, atualizar
};
