const lojistaModel = require("../model/lojista_model.js");

// IMPORTANTE:
// Este controller está corrigido para a tabela Lojista do banco.
// Para funcionar, deve existir ../model/lojista_model.js com os métodos:
// cadastrar, listar, buscarPorId, buscarPorEmail, atualizar e excluir.

function cadastrar(req, res) {
    const lojista = req.body || {};

    if (!lojista.nome || !lojista.cpf || !lojista.email || !lojista.senha) {
        return res.status(400).json({
            erro: "Nome, CPF, e-mail e senha são obrigatórios."
        });
    }

    lojistaModel.cadastrar(lojista, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        return res.status(201).json({
            mensagem: "Lojista cadastrado com sucesso!",
            id: resultado.insertId
        });
    });
}

function listar(req, res) {
    lojistaModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorId(req, res) {
    lojistaModel.buscarPorId(req.params.id, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Lojista não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function buscarPorEmail(req, res) {
    lojistaModel.buscarPorEmail(req.params.email, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Lojista não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function atualizar(req, res) {
    lojistaModel.atualizar(req.params.id, req.body || {}, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Lojista não encontrado." });
        }

        return res.status(200).json({ mensagem: "Lojista atualizado com sucesso!" });
    });
}

function excluir(req, res) {
    lojistaModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Lojista não encontrado." });
        }

        return res.status(200).json({ mensagem: "Lojista excluído com sucesso!" });
    });
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir
};
