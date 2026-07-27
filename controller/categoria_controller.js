const categoriaModel = require("../model/categoria_model");

// =========================
// Cadastrar Categoria
// =========================

function cadastrar(req, res) {

    const categoria = req.body;

    categoriaModel.cadastrar(categoria, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Categoria cadastrada com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Listar Categorias
// =========================

function listar(req, res) {

    categoriaModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Categoria por ID
// =========================

function buscarPorId(req, res) {

    const id = req.params.id;

    categoriaModel.buscarPorId(id, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Categoria não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Buscar Categoria por Nome
// =========================

function buscarPorNome(req, res) {

    const nome = req.params.nome;

    categoriaModel.buscarPorNome(nome, (erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        if (resultados.length === 0) {
            return res.status(404).json({
                mensagem: "Categoria não encontrada."
            });
        }

        res.json(resultados[0]);

    });

}

// =========================
// Atualizar Categoria
// =========================

function atualizar(req, res) {

    const id = req.params.id;
    const categoria = req.body;

    categoriaModel.atualizar(id, categoria, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Categoria atualizada com sucesso!"
        });

    });

}

// =========================
// Excluir Categoria
// =========================

function excluir(req, res) {

    const id = req.params.id;

    categoriaModel.excluir(id, (erro) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json({
            mensagem: "Categoria excluída com sucesso!"
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