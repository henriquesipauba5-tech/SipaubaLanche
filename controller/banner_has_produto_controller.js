const bannerProdutoModel = require("../model/banner_has_produto_model");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    bannerProdutoModel.listar((erro, resultados) => {

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

    const bannerId = req.params.bannerId;
    const produtoId = req.params.produtoId;

    bannerProdutoModel.buscar(
        bannerId,
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

    bannerProdutoModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Produto vinculado ao banner com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const bannerId = req.params.bannerId;
    const produtoId = req.params.produtoId;

    bannerProdutoModel.excluir(
        bannerId,
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