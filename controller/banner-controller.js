const bannerModel = require("../model/banner_model");

// =========================
// Cadastrar Banner
// =========================

function cadastrar(req, res) {

    const banner = req.body;

    bannerModel.cadastrar(banner, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Banner cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Banners
// =========================

function listar(req, res) {

    bannerModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Banner por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    bannerModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Banner não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Banner por Nome
// =========================

function buscarPorNome(req, res) {

    const nome = req.params.nome;

    bannerModel.buscarPorNome(nome, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Banner não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Banner
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const banner = req.body;

    bannerModel.atualizar(id, banner, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Banner atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Banner
// =========================

function excluir(req, res) {

    const id = req.params.id;

    bannerModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Banner excluído com sucesso!"
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