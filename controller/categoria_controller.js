const categoriaModel = require("../model/categoria_model.js");

function cadastrar(req, res) {
    const nome = req.body?.nome;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "O nome da categoria é obrigatório."
        });
    }

    categoriaModel.cadastrar({ nome: nome.trim() }, (erro, resultado) => {
        if (erro) {
            if (erro.code === "ER_DUP_ENTRY") {
                return res.status(409).json({
                    erro: "Já existe uma categoria com esse nome."
                });
            }

            return res.status(500).json({ erro: erro.message });
        }

        return res.status(201).json({
            mensagem: "Categoria cadastrada com sucesso.",
            idCategoria: resultado.insertId
        });
    });
}

function listar(req, res) {
    categoriaModel.listar((erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });
        return res.status(200).json(resultado);
    });
}

function buscarPorId(req, res) {
    categoriaModel.buscarPorId(req.params.id, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.length === 0) {
            return res.status(404).json({ erro: "Categoria não encontrada." });
        }

        return res.status(200).json(resultado[0]);
    });
}

function buscarPorNome(req, res) {
    categoriaModel.buscarPorNome(req.params.nome, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.length === 0) {
            return res.status(404).json({ erro: "Categoria não encontrada." });
        }

        return res.status(200).json(resultado[0]);
    });
}

function atualizar(req, res) {
    const nome = req.body?.nome;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "O nome da categoria é obrigatório."
        });
    }

    categoriaModel.atualizar(
        req.params.id,
        { nome: nome.trim() },
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro: erro.message });

            if (!resultado || resultado.affectedRows === 0) {
                return res.status(404).json({ erro: "Categoria não encontrada." });
            }

            return res.status(200).json({
                mensagem: "Categoria atualizada com sucesso."
            });
        }
    );
}

function excluir(req, res) {
    categoriaModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: erro.message });

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Categoria não encontrada." });
        }

        return res.status(200).json({
            mensagem: "Categoria excluída com sucesso."
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
