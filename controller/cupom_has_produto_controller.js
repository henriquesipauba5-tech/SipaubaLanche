const cupomProdutoModel = require("../model/cupom_has_produto_model");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    cupomProdutoModel.listar((erro, resultados) => {

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

    const cupomId = req.params.cupomId;
    const produtoId = req.params.produtoId;

    cupomProdutoModel.buscar(
        cupomId,
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

    cupomProdutoModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Produto vinculado ao cupom com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const cupomId = req.params.cupomId;
    const produtoId = req.params.produtoId;

    cupomProdutoModel.excluir(
        cupomId,
        produtoId,
        (erro) => {

            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

            res.json({
                mensagem: "Relacionamento excluído com sucesso!"
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