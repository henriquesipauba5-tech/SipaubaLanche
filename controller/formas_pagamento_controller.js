const formasPagamentoModel = require("../model/formas_pagamentos_model.js");

// CADASTRAR FORMA DE PAGAMENTO
function cadastrar(req, res) {
    const dados = req.body || {};

    if (dados.nome === undefined || dados.nome === null || String(dados.nome).trim() === "") {
        return res.status(400).json({
            erro: "O nome é obrigatório."
        });
    }

    formasPagamentoModel.cadastrar(dados, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao cadastrar forma de pagamento:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.status(201).json({
            mensagem: "Forma de pagamento cadastrado(a) com sucesso!",
            id: resultado.insertId
        });
    });
}

// LISTAR FORMAS DE PAGAMENTO
function listar(req, res) {
    formasPagamentoModel.listar((erro, resultados) => {
        if (erro) {
            console.error("Erro ao listar formas de pagamento:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.status(200).json(resultados);
    });
}

// BUSCAR FORMA DE PAGAMENTO POR ID
function buscarPorId(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ erro: "ID não informado." });
    }

    formasPagamentoModel.buscarPorId(id, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar forma de pagamento:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Forma de pagamento não encontrado(a)."
            });
        }

        return res.status(200).json(resultados[0]);
    });
}

// BUSCAR FORMA DE PAGAMENTO POR NOME
function buscarPorNome(req, res) {
    const valor = req.params.nome;

    formasPagamentoModel.buscarPorNome(valor, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar forma de pagamento:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Forma de pagamento não encontrada."
            });
        }

        return res.status(200).json(resultados[0]);
    });
}

// ATUALIZAR FORMA DE PAGAMENTO
function atualizar(req, res) {
    const id = req.params.id;
    const dados = req.body || {};

    if (!id) {
        return res.status(400).json({ erro: "ID não informado." });
    }

    if (dados.nome === undefined || dados.nome === null || String(dados.nome).trim() === "") {
        return res.status(400).json({
            erro: "O nome é obrigatório."
        });
    }

    formasPagamentoModel.atualizar(id, dados, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao atualizar forma de pagamento:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Forma de pagamento não encontrado(a)."
            });
        }

        return res.status(200).json({
            mensagem: "Forma de pagamento atualizado(a) com sucesso!"
        });
    });
}

// EXCLUIR FORMA DE PAGAMENTO
function excluir(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ erro: "ID não informado." });
    }

    formasPagamentoModel.excluir(id, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao excluir forma de pagamento:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Forma de pagamento não encontrado(a)."
            });
        }

        return res.status(200).json({
            mensagem: "Forma de pagamento excluído(a) com sucesso!"
        });
    });
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    buscarPorNome
};
