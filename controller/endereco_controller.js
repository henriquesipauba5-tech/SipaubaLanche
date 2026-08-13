const enderecoModel = require("../model/endereco_model.js");

function cadastrar(req, res) {
    const endereco = req.body || {};

    if (!endereco.rua || !endereco.cep || !endereco.bairro) {
        return res.status(400).json({
            erro: "Rua, CEP e bairro são obrigatórios."
        });
    }

    enderecoModel.cadastrar(endereco, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        return res.status(201).json({
            mensagem: "Endereço cadastrado com sucesso!",
            id: resultado.insertId
        });
    });
}

function listar(req, res) {
    enderecoModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorId(req, res) {
    enderecoModel.buscarPorId(req.params.id, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Endereço não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function buscarPorCep(req, res) {
    enderecoModel.buscarPorCep(req.params.cep, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function atualizar(req, res) {
    const endereco = req.body || {};

    if (!endereco.rua || !endereco.cep || !endereco.bairro) {
        return res.status(400).json({
            erro: "Rua, CEP e bairro são obrigatórios."
        });
    }

    enderecoModel.atualizar(req.params.id, endereco, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Endereço não encontrado." });
        }

        return res.status(200).json({ mensagem: "Endereço atualizado com sucesso!" });
    });
}

function excluir(req, res) {
    enderecoModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Endereço não encontrado." });
        }

        return res.status(200).json({ mensagem: "Endereço excluído com sucesso!" });
    });
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    buscarPorCep,
    atualizar,
    excluir
};
