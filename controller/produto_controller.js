const produtoModel =
    require("../model/produto_model.js");


//==================================================
//              CADASTRAR PRODUTO
//==================================================

function cadastrar(req, res) {

    const produto =
        req.body || {};


    //==================================================
    //              PEGAR IMAGEM
    //==================================================

    if (req.file) {

        produto.imagem =
            req.file.buffer;

    }


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
        produto.preco_promocional === undefined ||
        produto.preco_promocional === "" ||
        isNaN(
            Number(
                produto.preco_promocional
            )
        ) ||
        Number(
            produto.preco_promocional
        ) <= 0
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
                "Informe uma quantidade válida."

        });

    }


    //==================================================
    //              VALIDAR CATEGORIA
    //==================================================

    if (
        !produto.Categoria_idCategoria
    ) {

        return res.status(400).json({

            erro:
                "Selecione uma categoria."

        });

    }


    //==================================================
    //              VALIDAR IMAGEM
    //==================================================

    if (!produto.imagem) {

        return res.status(400).json({

            erro:
                "Selecione uma imagem do produto."

        });

    }


    //==================================================
    //              CONVERTER DADOS
    //==================================================

    produto.nome =
        produto.nome.trim();


    produto.descricao =
        produto.descricao.trim();


    produto.preco_antigo =
        produto.preco_antigo === "" ||
            produto.preco_antigo === undefined

            ? 0

            : Number(
                produto.preco_antigo
            );


    produto.preco_promocional =
        Number(
            produto.preco_promocional
        );


    produto.quantidade_estoque =
        Number(
            produto.quantidade_estoque
        );


    produto.Categoria_idCategoria =
        Number(
            produto.Categoria_idCategoria
        );


    produto.Loja_idLoja =
        produto.Loja_idLoja

            ? Number(
                produto.Loja_idLoja
            )

            : 1;


    // FormData envia boolean como texto.

    produto.ativo =
        produto.ativo === "true" ||
        produto.ativo === true ||
        produto.ativo === "1";


    //==================================================
    //              CADASTRAR
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
                        erro.sqlMessage ||
                        erro.message

                });

            }


            return res.status(201).json({

                mensagem:
                    "Produto cadastrado com sucesso!",

                idProduto:
                    resultado.insertId

            });

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
//              BUSCAR POR ID
//==================================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    produtoModel.buscarPorId(

        id,

        function (
            erro,
            resultados
        ) {

            if (erro) {

                return res.status(500).json({

                    erro:
                        erro.message

                });

            }


            if (
                resultados.length === 0
            ) {

                return res.status(404).json({

                    erro:
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
//          BUSCAR POR CATEGORIA
//==================================================

function buscarPorCategoria(
    req,
    res
) {

    const categoriaId =
        req.params.categoriaId;


    produtoModel.buscarPorCategoria(

        categoriaId,

        function (
            erro,
            resultados
        ) {

            if (erro) {

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
//              ATUALIZAR PRODUTO
//==================================================

function atualizar(req, res) {

    const id =
        req.params.id;


    const produto =
        req.body || {};


    //==================================================
    //      NOVA IMAGEM, SE HOUVER
    //==================================================

    if (req.file) {

        produto.imagem =
            req.file.buffer;

    }


    //==================================================
    //              VALIDAÇÕES
    //==================================================

    if (
        !produto.nome ||
        produto.nome.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "Informe o nome do produto."

        });

    }


    if (
        !produto.descricao ||
        produto.descricao.trim() === ""
    ) {

        return res.status(400).json({

            erro:
                "Informe a descrição."

        });

    }


    if (
        produto.preco_promocional === "" ||
        isNaN(
            Number(
                produto.preco_promocional
            )
        ) ||
        Number(
            produto.preco_promocional
        ) <= 0
    ) {

        return res.status(400).json({

            erro:
                "Informe um preço válido."

        });

    }


    //==================================================
    //              CONVERTER
    //==================================================

    produto.preco_antigo =
        produto.preco_antigo === ""

            ? 0

            : Number(
                produto.preco_antigo
            );


    produto.preco_promocional =
        Number(
            produto.preco_promocional
        );


    produto.quantidade_estoque =
        Number(
            produto.quantidade_estoque
        );


    produto.Loja_idLoja =
        Number(
            produto.Loja_idLoja || 1
        );


    produto.Categoria_idCategoria =
        Number(
            produto.Categoria_idCategoria
        );


    produto.ativo =
        produto.ativo === "true" ||
        produto.ativo === true ||
        produto.ativo === "1";


    //==================================================
    //              ATUALIZAR
    //==================================================

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
                        erro.sqlMessage ||
                        erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    erro:
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
                        erro.sqlMessage ||
                        erro.message

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    erro:
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

    buscarPorCategoria,

    atualizar,

    excluir

};