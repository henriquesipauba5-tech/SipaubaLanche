const lojistaModel = require("../models/lojistaModel");

// =========================
// Cadastrar Lojista
// =========================

function cadastrar(req, res) {

    const lojista = req.body;

    lojistaModel.cadastrar(lojista, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Lojista cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Lojistas
// =========================

function listar(req, res) {

    lojistaModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Lojista por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    lojistaModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Lojista não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Lojista por Email
// =========================

function buscarPorEmail(req, res) {

    const email = req.params.email;

    lojistaModel.buscarPorEmail(email, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Lojista não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Lojista
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const lojista = req.body;

    lojistaModel.atualizar(id, lojista, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Lojista atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Lojista
// =========================

function excluir(req, res) {

    const id = req.params.id;

    lojistaModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Lojista excluído com sucesso!"
        });

    });

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    atualizar,
    excluir

};