//==================================================
//      produto_controller.js
//      Sipaúba Lanches
//==================================================


//==================================================
//                  MODELS
//==================================================

const produtoModel = require(
    "../model/produto_model.js"
);


const imagemProdutoModel = require(
    "../model/imagem_produto_model.js"
);


//==================================================
//              CADASTRAR PRODUTO
//==================================================

function cadastrar(req, res) {


    //==================================================
    //              PEGAR DADOS
    //==================================================

    const produto =
        req.body || {};


    //==================================================
    //              VALIDAR NOME
    //==================================================

    if (
        !produto.nome ||
        produto.nome.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "O nome do produto é obrigatório."

        });

    }


    //==================================================
    //              VALIDAR DESCRIÇÃO
    //==================================================

    if (
        !produto.descricao ||
        produto.descricao.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "A descrição do produto é obrigatória."

        });

    }


    //==================================================
    //              VALIDAR PREÇO
    //==================================================

    if (
        produto.preco === undefined ||
        produto.preco === "" ||
        isNaN(Number(produto.preco)) ||
        Number(produto.preco) <= 0
    ) {

        return res.status(400).json({

            erro:
                "Informe um preço válido."

        });

    }


    //==================================================
    //              VALIDAR ESTOQUE
    //==================================================

    if (
        produto.quantidade_estoque === undefined ||
        produto.quantidade_estoque === "" ||
        isNaN(
            Number(
                produto.quantidade_estoque
            )
        ) ||
        Number(
            produto.quantidade_estoque
        ) < 0
    ) {

        return res.status(400).json({

            erro:
                "Informe uma quantidade válida para o estoque."

        });

    }


    //==================================================
    //              CADASTRAR PRODUTO
    //==================================================

    produtoModel.cadastrar(

        produto,

        function (
            erro,
            resultado
        ) {

            if (erro) {

                console.error(
                    "Erro ao cadastrar produto:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            //==================================================
            //              PEGAR ID
            //==================================================

            const idProduto =
                resultado.insertId;


            //==================================================
            //              PEGAR IMAGENS
            //==================================================

            const imagens =
                req.files || [];


            //==================================================
            //              SEM IMAGEM
            //==================================================

            if (
                imagens.length === 0
            ) {

                return res.status(201).json({

                    mensagem:
                        "Produto cadastrado com sucesso!",

                    id:
                        idProduto

                });

            }


            //==================================================
            //              CONTADOR
            //==================================================

            let quantidadeSalva = 0;


            //==================================================
            //              SALVAR IMAGENS
            //==================================================

            imagens.forEach(

                function (arquivo) {

                    const imagem = {

                        imagem:
                            arquivo.buffer,

                        Produto_idProduto:
                            idProduto

                    };


                    imagemProdutoModel.cadastrar(

                        imagem,

                        function (
                            erroImagem
                        ) {

                            if (
                                erroImagem
                            ) {

                                console.error(
                                    "Erro ao cadastrar imagem:",
                                    erroImagem
                                );

                                return res.status(
                                    500
                                ).json({

                                    erro:
                                        erroImagem.message

                                });

                            }


                            quantidadeSalva++;


                            //==================================================
                            //              TODAS SALVAS
                            //==================================================

                            if (
                                quantidadeSalva ===
                                imagens.length
                            ) {

                                return res.status(
                                    201
                                ).json({

                                    mensagem:
                                        "Produto e imagens cadastrados com sucesso!",

                                    id:
                                        idProduto,

                                    imagens:
                                        quantidadeSalva

                                });

                            }

                        }

                    );

                }

            );

        }

    );

}


//==================================================
//              LISTAR PRODUTOS
//==================================================

function listar(req, res) {

    produtoModel.listar(

        function (
            erro,
            resultados
        ) {

            if (erro) {

                console.error(
                    "Erro ao listar produtos:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            return res.status(200).json(
                resultados
            );

        }

    );

}


//==================================================
//              BUSCAR PRODUTO POR ID
//==================================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    if (!id) {

        return res.status(400).json({

            erro:
                "ID do produto não informado."

        });

    }


    produtoModel.buscarPorId(

        id,

        function (
            erro,
            resultados
        ) {

            if (erro) {

                console.error(
                    "Erro ao buscar produto:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            if (
                resultados.length === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json(
                resultados[0]
            );

        }

    );

}


//==================================================
//              BUSCAR POR CÓDIGO
//==================================================

function buscarPorCodigo(req, res) {

    const codigo =
        req.params.codigo;


    if (!codigo) {

        return res.status(400).json({

            erro:
                "Código do produto não informado."

        });

    }


    produtoModel.buscarPorCodigo(

        codigo,

        function (
            erro,
            resultados
        ) {

            if (erro) {

                console.error(
                    "Erro ao buscar produto:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            if (
                resultados.length === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json(
                resultados[0]
            );

        }

    );

}


//==================================================
//              ATUALIZAR PRODUTO
//==================================================

function atualizar(req, res) {

    const id =
        req.params.id;


    const produto =
        req.body || {};


    if (!id) {

        return res.status(400).json({

            erro:
                "ID do produto não informado."

        });

    }


    produtoModel.atualizar(

        id,

        produto,

        function (
            erro,
            resultado
        ) {

            if (erro) {

                console.error(
                    "Erro ao atualizar produto:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                mensagem:
                    "Produto atualizado com sucesso!"

            });

        }

    );

}


//==================================================
//              EXCLUIR PRODUTO
//==================================================

function excluir(req, res) {

    const id =
        req.params.id;


    if (!id) {

        return res.status(400).json({

            erro:
                "ID do produto não informado."

        });

    }


    produtoModel.excluir(

        id,

        function (
            erro,
            resultado
        ) {

            if (erro) {

                console.error(
                    "Erro ao excluir produto:",
                    erro
                );

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    mensagem:
                        "Produto não encontrado."

                });

            }


            return res.status(200).json({

                mensagem:
                    "Produto excluído com sucesso!"

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

    buscarPorCodigo,

    atualizar,

    excluir

};