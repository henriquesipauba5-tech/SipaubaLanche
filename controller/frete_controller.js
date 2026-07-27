const freteModel = require("../model/frete_model");

// =========================
// Cadastrar Frete
// =========================

function cadastrar(req, res) {

    const frete = req.body;

    freteModel.cadastrar(frete, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Frete cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Fretes
// =========================

function listar(req, res) {

    freteModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Frete por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    freteModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Frete não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Frete por Código de Rastreio
// =========================

function buscarPorCodigo(req, res) {

    const codigo = req.params.codigo;

    freteModel.buscarPorCodigo(codigo, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Frete não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Frete
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const frete = req.body;

    freteModel.atualizar(id, frete, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Frete atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Frete
// =========================

function excluir(req, res) {

    const id = req.params.id;

    freteModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Frete excluído com sucesso!"
        });

    });

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigo,
    atualizar,
    excluir

};