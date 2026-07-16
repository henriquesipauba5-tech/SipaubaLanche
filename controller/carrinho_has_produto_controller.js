const carrinhoProdutoModel = require("../models/carrinhoProdutoModel");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    carrinhoProdutoModel.listar((erro, resultados) => {

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

    const carrinhoId = req.params.carrinhoId;
    const produtoId = req.params.produtoId;

    carrinhoProdutoModel.buscar(
        carrinhoId,
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

    carrinhoProdutoModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Produto adicionado ao carrinho com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const carrinhoId = req.params.carrinhoId;
    const produtoId = req.params.produtoId;

    carrinhoProdutoModel.excluir(
        carrinhoId,
        produtoId,
        (erro) => {

            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

            res.json({
                mensagem: "Produto removido do carrinho com sucesso!"
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