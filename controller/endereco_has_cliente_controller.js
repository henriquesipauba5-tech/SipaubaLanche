const enderecoClienteModel = require("../model/endereco_has_cliente_model");

// =========================
// Listar Relacionamentos
// =========================

function listar(req, res) {

    enderecoClienteModel.listar((erro, resultados) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.json(resultados);

    });

}

// =========================
// Buscar Relacionamento
// =========================

function buscar(req, res) {

    const enderecoId = req.params.enderecoId;
    const clienteId = req.params.clienteId;

    enderecoClienteModel.buscar(
        enderecoId,
        clienteId,
        (erro, resultados) => {

            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

            if (resultados.length === 0) {
                return res.status(404).json({
                    mensagem: "Relacionamento não encontrado."
                });
            }

            res.json(resultados[0]);

        }
    );

}

// =========================
// Cadastrar Relacionamento
// =========================

function cadastrar(req, res) {

    const relacao = req.body;

    enderecoClienteModel.cadastrar(relacao, (erro, resultado) => {

        if (erro) {
            return res.status(500).json({
                erro: erro.message
            });
        }

        res.status(201).json({
            mensagem: "Relacionamento cadastrado com sucesso!",
            id: resultado.insertId
        });

    });

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(req, res) {

    const enderecoId = req.params.enderecoId;
    const clienteId = req.params.clienteId;

    enderecoClienteModel.excluir(
        enderecoId,
        clienteId,
        (erro) => {

            if (erro) {
                return res.status(500).json({
                    erro: erro.message
                });
            }

            res.json({
                mensagem: "Relacionamento excluído com sucesso!"
            });

        }
    );

}

module.exports = {

    listar,
    buscar,
    cadastrar,
    excluir

};