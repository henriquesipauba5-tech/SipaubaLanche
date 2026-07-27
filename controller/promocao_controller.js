const promocaoModel = require("../model/promocao_model");

// =========================
// Cadastrar Promoção
// =========================

function cadastrar(req, res) {

    const promocao = req.body;

    promocaoModel.cadastrar(promocao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Promoção cadastrada com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Promoções
// =========================

function listar(req, res) {

    promocaoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Promoção por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    promocaoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Promoção não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Promoção por Nome
// =========================

function buscarPorNome(req, res) {

    const nome = req.params.nome;

    promocaoModel.buscarPorNome(nome, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Promoção não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Promoção
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const promocao = req.body;

    promocaoModel.atualizar(id, promocao, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Promoção atualizada com sucesso!"
        });

    });

}

// =========================
// Excluir Promoção
// =========================

function excluir(req, res) {

    const id = req.params.id;

    promocaoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Promoção excluída com sucesso!"
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