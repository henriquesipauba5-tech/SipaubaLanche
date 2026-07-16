const formasPagamentoModel = require("../models/formasPagamentoModel");

// =========================
// Cadastrar Forma de Pagamento
// =========================

function cadastrar(req, res) {

    const formaPagamento = req.body;

    formasPagamentoModel.cadastrar(formaPagamento, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Forma de pagamento cadastrada com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(req, res) {

    formasPagamentoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Forma de Pagamento por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    formasPagamentoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Forma de pagamento não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Forma de Pagamento por Nome
// =========================

function buscarPorNome(req, res) {

    const nome = req.params.nome;

    formasPagamentoModel.buscarPorNome(nome, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Forma de pagamento não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Forma de Pagamento
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const formaPagamento = req.body;

    formasPagamentoModel.atualizar(id, formaPagamento, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Forma de pagamento atualizada com sucesso!"
        });

    });

}

// =========================
// Excluir Forma de Pagamento
// =========================

function excluir(req, res) {

    const id = req.params.id;

    formasPagamentoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Forma de pagamento excluída com sucesso!"
        });

    });

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};