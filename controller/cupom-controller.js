const cupomModel = require("../model/cupom_model");

// =========================
// Cadastrar Cupom
// =========================

function cadastrar(req, res) {

    const cupom = req.body;

    cupomModel.cadastrar(cupom, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Cupom cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Cupons
// =========================

function listar(req, res) {

    cupomModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Cupom por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    cupomModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Cupom não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Cupom por Nome
// =========================

function buscarPorNome(req, res) {

    const nome = req.params.nome;

    cupomModel.buscarPorNome(nome, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Cupom não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Cupom
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const cupom = req.body;

    cupomModel.atualizar(id, cupom, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Cupom atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Cupom
// =========================

function excluir(req, res) {

    const id = req.params.id;

    cupomModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Cupom excluído com sucesso!"
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