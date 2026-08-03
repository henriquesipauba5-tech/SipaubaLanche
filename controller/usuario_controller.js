//==========================================
// IMPORTA O MODEL
//==========================================

const clienteModel = require("../model/usuario_model");

//==========================================
// CADASTRAR CLIENTE
//==========================================

function cadastrar(req, res) {

    const cliente = req.body;

    // Caso não seja enviada a loja,
    // define a loja padrão como 1

    if (!cliente.Loja_idLoja) {
        cliente.Loja_idLoja = 1;
    }

    // Validação dos campos obrigatórios

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
            mensagem: "Preencha todos os campos."
        });

    }

    // Verifica se o e-mail já existe

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

        // Cadastra o cliente

        clienteModel.cadastrar(cliente, (erro, resultado) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cliente."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cliente cadastrado com sucesso!",
                idCliente: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    clienteModel.listar((erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar clientes."
            });

        }

        res.status(200).json(resultado);

    });

}

//==========================================
// BUSCAR CLIENTE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    clienteModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cliente."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });

        }

        res.status(200).json(resultado[0]);

    });

}
//==========================================
// ATUALIZAR CLIENTE
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cliente = req.body;

    if (!cliente.Loja_idLoja) {
        cliente.Loja_idLoja = 1;
    }

    clienteModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar cliente."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });

        }

        clienteModel.atualizar(id, cliente, (erro) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar cliente."
                });

            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Cliente atualizado com sucesso."
            });

        });

    });

}

//==========================================
// EXCLUIR CLIENTE
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    clienteModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar cliente."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cliente não encontrado."
            });

        }

        clienteModel.excluir(id, (erro) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir cliente."
                });

            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Cliente excluído com sucesso."
            });

        });

    });

}

//==========================================
// LOGIN
//==========================================

function login(req, res) {

    const { email, senha } = req.body;

    if (!email || !senha) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe o e-mail e a senha."
        });

    }

    clienteModel.buscarPorEmail(email, (erro, resultado) => {

        if (erro) {

            console.error(erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno."
            });

        }

        if (resultado.length === 0) {

            return res.status(401).json({
                sucesso: false,
                mensagem: "E-mail ou senha inválidos."
            });

        }

        const cliente = resultado[0];

        if (cliente.senha !== senha) {

            return res.status(401).json({
                sucesso: false,
                mensagem: "E-mail ou senha inválidos."
            });

        }

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

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    login

};