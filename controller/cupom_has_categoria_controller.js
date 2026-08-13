const cupomCategoriaModel = require("../model/cupom_has_categoria_model.js");

function listar(req, res) {
    cupomCategoriaModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscar(req, res) {
    const a = req.params.cupomId;
    const b = req.params.categoriaId;

    cupomCategoriaModel.buscar(a, b, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function cadastrar(req, res) {
    const relacao = req.body || {};

    cupomCategoriaModel.cadastrar(relacao, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        return res.status(201).json({
            mensagem: "Categoria vinculada ao cupom com sucesso!",
            id: resultado.insertId
        });
    });
}

function excluir(req, res) {
    const a = req.params.cupomId;
    const b = req.params.categoriaId;

    cupomCategoriaModel.excluir(a, b, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (resultado && resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Relacionamento não encontrado." });
        }

        return res.status(200).json({ mensagem: "Relacionamento excluído com sucesso!" });
    });
}

function buscarPorCupom(req, res) {
    const valor = req.params.cupomId;

    cupomCategoriaModel.buscarPorCupom(valor, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorCategoria(req, res) {
    const valor = req.params.categoriaId;

    cupomCategoriaModel.buscarPorCategoria(valor, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

module.exports = {
    listar, buscar, cadastrar, excluir, buscarPorCupom, buscarPorCategoria
};
