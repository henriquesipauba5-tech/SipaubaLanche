const pedidosModel = require("../model/pedidos_model");

// =========================
// Cadastrar Pedido
// =========================

function cadastrar(req, res) {

    const pedido = req.body;

    pedidosModel.cadastrar(pedido, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Pedido cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Pedidos
// =========================

function listar(req, res) {

    pedidosModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Pedido por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    pedidosModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Pedido não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Pedido por Código
// =========================

function buscarPorCodigo(req, res) {

    const codigo = req.params.codigo;

    pedidosModel.buscarPorCodigo(codigo, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Pedido não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Pedido
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const pedido = req.body;

    pedidosModel.atualizar(id, pedido, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Pedido atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Pedido
// =========================

function excluir(req, res) {

    const id = req.params.id;

    pedidosModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Pedido excluído com sucesso!"
        });

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