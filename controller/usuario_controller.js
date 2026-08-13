const clienteModel = require("../model/usuario_model.js");

// CADASTRAR CLIENTE
function cadastrar(req, res) {
    const cliente = req.body || {};

    if (!cliente.Loja_idLoja) {
        cliente.Loja_idLoja = 1;
    }

    if (
        !cliente.nome ||
        !cliente.cpf ||
        !cliente.telefone ||
        !cliente.email ||
        !cliente.senha ||
        !cliente.data_nascimento
    ) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });
    }

    clienteModel.buscarPorEmail(cliente.email, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });
        }

        if (resultado.length > 0) {
            return res.status(409).json({
                sucesso: false,
                mensagem: "E-mail já cadastrado."
            });
        }

        clienteModel.cadastrar(cliente, (erroCadastro, resultadoCadastro) => {
            if (erroCadastro) {
                if (erroCadastro.code === "ER_DUP_ENTRY") {
                    return res.status(409).json({
                        sucesso: false,
                        mensagem: "CPF ou e-mail já cadastrado."
                    });
                }

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cliente.",
                    detalhe: erroCadastro.message
                });
            }

            return res.status(201).json({
                sucesso: true,
                mensagem: "Cliente cadastrado com sucesso!",
                idCliente: resultadoCadastro.insertId
            });
        });
    });
}

// LISTAR
function listar(req, res) {
    clienteModel.listar((erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar clientes."
            });
        }

        return res.status(200).json(resultado);
    });
}

// BUSCAR POR ID
function buscarPorId(req, res) {
    clienteModel.buscarPorId(req.params.id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cliente."
            });
        }

        if (!resultado || resultado.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });
        }

        return res.status(200).json(resultado[0]);
    });
}

// ATUALIZAR
function atualizar(req, res) {
    const cliente = req.body || {};

    if (!cliente.Loja_idLoja) {
        cliente.Loja_idLoja = 1;
    }

    clienteModel.atualizar(req.params.id, cliente, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cliente.",
                detalhe: erro.message
            });
        }

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });
        }

        return res.status(200).json({
            sucesso: true,
            mensagem: "Cliente atualizado com sucesso."
        });
    });
}

// EXCLUIR
function excluir(req, res) {
    clienteModel.excluir(req.params.id, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cliente.",
                detalhe: erro.message
            });
        }

        if (!resultado || resultado.affectedRows === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });
        }

        return res.status(200).json({
            sucesso: true,
            mensagem: "Cliente excluído com sucesso."
        });
    });
}

// LOGIN
function login(req, res) {
    const { email, senha } = req.body || {};

    if (!email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o e-mail e a senha."
        });
    }

    clienteModel.login(email, senha, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno.",
                detalhe: erro.message
            });
        }

        if (!resultado || resultado.length === 0) {
            return res.status(401).json({
                sucesso: false,
                mensagem: "E-mail ou senha inválidos."
            });
        }

        const cliente = resultado[0];

        return res.status(200).json({
            sucesso: true,
            mensagem: "Login realizado com sucesso.",
            cliente: {
                idCliente: cliente.idCliente,
                nome: cliente.nome,
                cpf: cliente.cpf,
                telefone: cliente.telefone,
                email: cliente.email,
                data_nascimento: cliente.data_nascimento,
                Loja_idLoja: cliente.Loja_idLoja
            }
        });
    });
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    login
};
