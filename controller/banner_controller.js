const bannerModel = require("../model/banner_model.js");

function cadastrar(req, res) {
    const banner = req.body || {};

    if (req.file) {
        banner.imagem = req.file.buffer;
    }

    if (!banner.imagem) {
        return res.status(400).json({ erro: "A imagem do banner é obrigatória." });
    }

    if (!banner.data_inicio || !banner.data_final) {
        return res.status(400).json({
            erro: "Data inicial e data final são obrigatórias."
        });
    }

    if (!banner.Loja_idLoja) {
        return res.status(400).json({ erro: "A loja é obrigatória." });
    }

    bannerModel.cadastrar(banner, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        return res.status(201).json({
            mensagem: "Banner cadastrado com sucesso!",
            id: resultado.insertId
        });
    });
}

function listar(req, res) {
    bannerModel.listar((erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultados);
    });
}

function buscarPorId(req, res) {
    bannerModel.buscarPorId(req.params.id, (erro, resultados) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Banner não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

function atualizar(req, res) {
    const banner = req.body || {};

    if (req.file) {
        banner.imagem = req.file.buffer;
    }

    bannerModel.atualizar(req.params.id, banner, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Banner não encontrado." });
        }

        return res.status(200).json({
            mensagem: "Banner atualizado com sucesso!"
        });
    });
}

function excluir(req, res) {
    bannerModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Banner não encontrado." });
        }

        return res.status(200).json({
            mensagem: "Banner excluído com sucesso!"
        });
    });
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir
};
