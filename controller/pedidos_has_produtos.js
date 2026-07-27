const pedidoProdutoModel = require("../model/pedidos_has_produtos_model");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    pedidoProdutoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Relacionamento
// =========================

function buscar(req, res) {

    const pedidoId = req.params.pedidoId;
    const produtoId = req.params.produtoId;

    pedidoProdutoModel.buscar(
        pedidoId,
        produtoId,
        (erro, resultados) => {

            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

            if (resultados.length === 0) {
                return res.status(404).json({
                    mensagem: "Relacionamento não encontrado."
                });
            }

            res.json(resultados[0]);

        }
    );

}

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(req, res) {

    const relacao = req.body;

    pedidoProdutoModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Produto vinculado ao pedido com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const pedidoId = req.params.pedidoId;
    const produtoId = req.params.produtoId;

    pedidoProdutoModel.excluir(
        pedidoId,
        produtoId,
        (erro) => {

            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

            res.json({
                mensagem: "Produto removido do pedido com sucesso!"
            });

        }
    );

}

module.exports = {

    listar,
    buscar,
    cadastrar,
    excluir

};