const adicionalModel = require("../model/adicional_model.js");

// CADASTRAR ADICIONAL
function cadastrar(req, res) {
    const adicional = req.body || {};

    if (req.file) {
        adicional.imagem = req.file.buffer;
    }

    if (!adicional.nome || adicional.nome.trim() === "") {
        return res.status(400).json({ erro: "O nome do adicional é obrigatório." });
    }

    if (!adicional.descricao || adicional.descricao.trim() === "") {
        return res.status(400).json({ erro: "A descrição do adicional é obrigatória." });
    }

    if (
        adicional.preco === undefined ||
        adicional.preco === null ||
        adicional.preco === "" ||
        isNaN(Number(adicional.preco)) ||
        Number(adicional.preco) <= 0
    ) {
        return res.status(400).json({ erro: "Informe um preço válido." });
    }

    adicional.nome = adicional.nome.trim();
    adicional.descricao = adicional.descricao.trim();
    adicional.preco = Number(adicional.preco);

    adicionalModel.cadastrar(adicional, (erro, resultado) => {
        if (erro) {
            console.error("Erro ao cadastrar adicional:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.status(201).json({
            mensagem: "Adicional cadastrado com sucesso!",
            id: resultado.insertId
        });
    });
}

// LISTAR
function listar(req, res) {
    adicionalModel.listar((erro, resultados) => {
        if (erro) {
            console.error("Erro ao listar adicionais:", erro);
            return res.status(500).json({ erro: erro.message });
        }

        return res.status(200).json(resultados);
    });
}

// BUSCAR POR ID
function buscarPorId(req, res) {
    adicionalModel.buscarPorId(req.params.id, (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Adicional não encontrado." });
        }

        return res.status(200).json(resultados[0]);
    });
}

// BUSCAR POR NOME
function buscarPorNome(req, res) {
    adicionalModel.buscarPorNome(req.params.nome, (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ mensagem: "Adicional não encontrado." });
        }

        return res.status(200).json(resultados);
    });
}

// ATUALIZAR
function atualizar(req, res) {
    const id = req.params.id;
    const adicional = req.body || {};

    if (req.file) {
        adicional.imagem = req.file.buffer;
    }

    if (!adicional.nome || !adicional.descricao) {
        return res.status(400).json({
            erro: "Nome e descrição são obrigatórios."
        });
    }

    if (
        adicional.preco === undefined ||
        adicional.preco === "" ||
        isNaN(Number(adicional.preco)) ||
        Number(adicional.preco) <= 0
    ) {
        return res.status(400).json({ erro: "Informe um preço válido." });
    }

    adicional.preco = Number(adicional.preco);

    adicionalModel.atualizar(id, adicional, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Adicional não encontrado." });
        }

        return res.status(200).json({
            mensagem: "Adicional atualizado com sucesso!"
        });
    });
}

// EXCLUIR
function excluir(req, res) {
    adicionalModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Adicional não encontrado." });
        }

        return res.status(200).json({
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
