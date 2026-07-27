const promocaoProdutoModel = require("../model/promocao_has_porduto_model");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    promocaoProdutoModel.listar((erro, resultados) => {

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

    const promocaoId = req.params.promocaoId;
    const produtoId = req.params.produtoId;

    promocaoProdutoModel.buscar(
        promocaoId,
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

    promocaoProdutoModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Produto vinculado à promoção com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const promocaoId = req.params.promocaoId;
    const produtoId = req.params.produtoId;

    promocaoProdutoModel.excluir(
        promocaoId,
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