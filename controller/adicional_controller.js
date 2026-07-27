const adicionalModel = require("../model/adicional_model");

// =========================
// Cadastrar Adicional
// =========================

function cadastrar(req, res) {

    const adicional = req.body;

    adicionalModel.cadastrar(adicional, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Adicional cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Adicionais
// =========================

function listar(req, res) {

    adicionalModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Adicional por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    adicionalModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Adicional não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Adicional por Nome
// =========================

function buscarPorNome(req, res) {

    const nome = req.params.nome;

    adicionalModel.buscarPorNome(nome, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Adicional não encontrado."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Adicional
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const adicional = req.body;

    adicionalModel.atualizar(id, adicional, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Adicional atualizado com sucesso!"
        });

    });

}

// =========================
// Excluir Adicional
// =========================

function excluir(req, res) {

    const id = req.params.id;

    adicionalModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Adicional excluído com sucesso!"
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