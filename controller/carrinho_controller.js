const carrinhoModel = require("../models/carrinhoModel");

// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(req, res) {

    const carrinho = req.body;

    carrinhoModel.cadastrar(carrinho, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Carrinho cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Carrinhos
// =========================

function listar(req, res) {

    carrinhoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Carrinho por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    carrinhoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Carrinho não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Carrinho por Cliente
// =========================

function buscarPorCliente(req, res) {

    const clienteId = req.params.clienteId;

    carrinhoModel.buscarPorCliente(clienteId, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Carrinho não encontrado para este cliente."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Carrinho
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const carrinho = req.body;

    carrinhoModel.atualizar(id, carrinho, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Carrinho atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Carrinho
// =========================

function excluir(req, res) {

    const id = req.params.id;

    carrinhoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Carrinho excluído com sucesso!"
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