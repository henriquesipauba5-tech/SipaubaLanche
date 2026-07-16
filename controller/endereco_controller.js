const enderecoModel = require("../models/enderecoModel");

// =========================
// Cadastrar Endereço
// =========================

function cadastrar(req, res) {

    const endereco = req.body;

    enderecoModel.cadastrar(endereco, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Endereço cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Endereços
// =========================

function listar(req, res) {

    enderecoModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Endereço por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    enderecoModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Endereço não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Endereço
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const endereco = req.body;

    enderecoModel.atualizar(id, endereco, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Endereço atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Endereço
// =========================

function excluir(req, res) {

    const id = req.params.id;

    enderecoModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Endereço excluído com sucesso!"
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