const cupomModel = require("../model/cupom_model.js");

function cadastrar(req, res) {
    const cupom = req.body || {};

    if (!cupom.codigo || cupom.codigo.trim() === "") {
        return res.status(400).json({ erro: "O código do cupom é obrigatório." });
    }

    if (
        cupom.desconto === undefined ||
        cupom.desconto === "" ||
        isNaN(Number(cupom.desconto)) ||
        Number(cupom.desconto) <= 0
    ) {
        return res.status(400).json({ erro: "Informe um desconto válido." });
    }

    cupom.codigo = cupom.codigo.trim();
    cupom.desconto = Number(cupom.desconto);

    cupomModel.cadastrar(cupom, (erro, resultado) => {
        if (erro) {
            if (erro.code === "ER_DUP_ENTRY") {
                return res.status(409).json({ erro: "Código de cupom já cadastrado." });
            }
            return res.status(500).json({ erro: erro.message });
        }

        return res.status(201).json({
            mensagem: "Cupom cadastrado com sucesso!",
            id: resultado.insertId
        });
    });
}

function listar(req, res) {
    cupomModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorId(req, res) {
    cupomModel.buscarPorId(req.params.id, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Cupom não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function buscarPorCodigo(req, res) {
    cupomModel.buscarPorCodigo(req.params.codigo, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Cupom não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function atualizar(req, res) {
    const cupom = req.body || {};

    cupomModel.atualizar(req.params.id, cupom, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Cupom não encontrado." });
        }

        return res.status(200).json({ mensagem: "Cupom atualizado com sucesso!" });
    });
}

function excluir(req, res) {
    cupomModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Cupom não encontrado." });
        }

        return res.status(200).json({ mensagem: "Cupom excluído com sucesso!" });
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
