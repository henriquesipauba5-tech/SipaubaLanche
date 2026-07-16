const categoriaPromocaoModel = require("../models/categoriaPromocaoModel");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    categoriaPromocaoModel.listar((erro, resultados) => {

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

    const categoriaId = req.params.categoriaId;
    const promocaoId = req.params.promocaoId;

    categoriaPromocaoModel.buscar(
        categoriaId,
        promocaoId,
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

    categoriaPromocaoModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Categoria vinculada à promoção com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const categoriaId = req.params.categoriaId;
    const promocaoId = req.params.promocaoId;

    categoriaPromocaoModel.excluir(
        categoriaId,
        promocaoId,
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