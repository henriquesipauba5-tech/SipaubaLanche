
//==================================================
//      adicional_controller.js
//      Sipaúba Lanches
//==================================================


//==================================================
//                  MODEL
//==================================================

const adicionalModel = require(
    "../model/adicional_model.js"
);


//==================================================
//              CADASTRAR ADICIONAL
//==================================================

function cadastrar(req, res) {

    //==================================================
    //              PEGAR DADOS
    //==================================================

    const adicional = req.body || {};


    //==================================================
    //              PEGAR IMAGEM
    //==================================================

    if (req.file) {

        adicional.imagem = req.file.buffer;

    }


    //==================================================
    //              VALIDAR NOME
    //==================================================

    if (
        !adicional.nome ||
        adicional.nome.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "O nome do adicional é obrigatório."

        });

    }


    //==================================================
    //              VALIDAR DESCRIÇÃO
    //==================================================

    if (
        !adicional.descricao ||
        adicional.descricao.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "A descrição do adicional é obrigatória."

        });

    }


    //==================================================
    //              VALIDAR PREÇO
    //==================================================

    if (
        adicional.preco === undefined ||
        adicional.preco === null ||
        adicional.preco === "" ||
        isNaN(Number(adicional.preco)) ||
        Number(adicional.preco) <= 0
    ) {

        return res.status(400).json({

            erro:
                "Informe um preço válido."

        });

    }


    //==================================================
    //              CONVERTER PREÇO
    //==================================================

    adicional.preco =
        Number(adicional.preco);


    //==================================================
    //              CADASTRAR
    //==================================================

    adicionalModel.cadastrar(

        adicional,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao cadastrar adicional:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              RESPOSTA
            //==================================================

            return res.status(201).json({

                mensagem:
                    "Adicional cadastrado com sucesso!",

                id:
                    resultado.insertId

            });

        }

    );

}


//==================================================
//              LISTAR ADICIONAIS
//==================================================

function listar(req, res) {

    adicionalModel.listar(

        (erro, resultados) => {

            if (erro) {

                console.error(
                    "Erro ao listar adicionais:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              RESPOSTA
            //==================================================

            return res.status(200).json(
                resultados
            );

        }

    );

}


//==================================================
//          BUSCAR ADICIONAL POR ID
//==================================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    //==================================================
    //              VALIDAR ID
    //==================================================

    if (!id) {

        return res.status(400).json({

            erro:
                "ID do adicional não informado."

        });

    }


    //==================================================
    //              BUSCAR
    //==================================================

    adicionalModel.buscarPorId(

        id,

        (erro, resultados) => {

            if (erro) {

                console.error(
                    "Erro ao buscar adicional:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              VERIFICAR RESULTADO
            //==================================================

            if (
                resultados.length === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Adicional não encontrado."

                });

            }


            //==================================================
            //              RESPOSTA
            //==================================================

            return res.status(200).json(
                resultados[0]
            );

        }

    );

}


//==================================================
//          BUSCAR ADICIONAL POR NOME
//==================================================

function buscarPorNome(req, res) {

    const nome =
        req.params.nome;


    //==================================================
    //              VALIDAR NOME
    //==================================================

    if (!nome) {

        return res.status(400).json({

            erro:
                "Nome do adicional não informado."

        });

    }


    //==================================================
    //              BUSCAR
    //==================================================

    adicionalModel.buscarPorNome(

        nome,

        (erro, resultados) => {

            if (erro) {

                console.error(
                    "Erro ao buscar adicional por nome:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              VERIFICAR RESULTADO
            //==================================================

            if (
                resultados.length === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Adicional não encontrado."

                });

            }


            //==================================================
            //              RESPOSTA
            //==================================================

            return res.status(200).json(
                resultados
            );

        }

    );

}


//==================================================
//              ATUALIZAR ADICIONAL
//==================================================

function atualizar(req, res) {

    const id =
        req.params.id;

    const adicional =
        req.body || {};


    //==================================================
    //              VALIDAR ID
    //==================================================

    if (!id) {

        return res.status(400).json({

            erro:
                "ID do adicional não informado."

        });

    }


    //==================================================
    //              PEGAR IMAGEM
    //==================================================

    if (req.file) {

        adicional.imagem =
            req.file.buffer;

    }


    //==================================================
    //              VALIDAR NOME
    //==================================================

    if (
        !adicional.nome ||
        adicional.nome.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "O nome do adicional é obrigatório."

        });

    }


    //==================================================
    //              VALIDAR DESCRIÇÃO
    //==================================================

    if (
        !adicional.descricao ||
        adicional.descricao.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "A descrição do adicional é obrigatória."

        });

    }


    //==================================================
    //              VALIDAR PREÇO
    //==================================================

    if (
        adicional.preco === undefined ||
        adicional.preco === null ||
        adicional.preco === "" ||
        isNaN(Number(adicional.preco)) ||
        Number(adicional.preco) <= 0
    ) {

        return res.status(400).json({

            erro:
                "Informe um preço válido."

        });

    }


    //==================================================
    //              CONVERTER PREÇO
    //==================================================

    adicional.preco =
        Number(adicional.preco);


    //==================================================
    //              ATUALIZAR
    //==================================================

    adicionalModel.atualizar(

        id,

        adicional,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao atualizar adicional:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              VERIFICAR EXISTÊNCIA
            //==================================================

            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Adicional não encontrado."

                });

            }


            //==================================================
            //              RESPOSTA
            //==================================================

            return res.status(200).json({

                mensagem:
                    "Adicional atualizado com sucesso!"

            });

        }

    );

}


//==================================================
//              EXCLUIR ADICIONAL
//==================================================

function excluir(req, res) {

    const id =
        req.params.id;


    //==================================================
    //              VALIDAR ID
    //==================================================

    if (!id) {

        return res.status(400).json({

            erro:
                "ID do adicional não informado."

        });

    }


    //==================================================
    //              EXCLUIR
    //==================================================

    adicionalModel.excluir(

        id,

        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao excluir adicional:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              VERIFICAR EXISTÊNCIA
            //==================================================

            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Adicional não encontrado."

                });

            }


            //==================================================
            //              RESPOSTA
            //==================================================

            return res.status(200).json({

                mensagem:
                    "Adicional excluído com sucesso!"

            });

        }

    );

}


//==================================================
//                  EXPORTAR
//==================================================

module.exports = {

    cadastrar,

    listar,

    buscarPorId,

    buscarPorNome,

    atualizar,

    excluir

};
