const cartaoPagamentoModel = require("../model/cartao_pagamento_model");

// =========================
// Cadastrar Cartão
// =========================

function cadastrar(req, res) {

    const cartao = req.body;

    cartaoPagamentoModel.cadastrar(cartao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Cartão cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Cartões
// =========================

function listar(req, res) {

    cartaoPagamentoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Cartão por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Cartão não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Cartões do Cliente
// =========================

function buscarPorCliente(req, res) {

    const clienteId = req.params.clienteId;

    cartaoPagamentoModel.buscarPorCliente(clienteId, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Nenhum cartão encontrado para este cliente."
            });
        }

        res.json(resultados);

    });

}

// =========================
// Atualizar Cartão
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const cartao = req.body;

    cartaoPagamentoModel.atualizar(id, cartao, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Cartão atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Cartão
// =========================

function excluir(req, res) {

    const id = req.params.id;

    cartaoPagamentoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Cartão excluído com sucesso!"
        });

    });

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCliente,
    atualizar,
    excluir

};