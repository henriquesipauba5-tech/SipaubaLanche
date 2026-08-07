//==================================================
//      cadastro-produto.js
//      Sipaúba Lanches
//==================================================


//==================================================
//              CARREGAR CATEGORIAS
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarCategorias();

    }
);


//==================================================
//              FUNÇÃO CARREGAR CATEGORIAS
//==================================================

function carregarCategorias() {


    //==================================================
    //              PEGAR SELECT
    //==================================================

    const categoriaProduto =
        document.getElementById(
            "categoriaProduto"
        );


    //==================================================
    //              VERIFICAR SELECT
    //==================================================

    if (!categoriaProduto) {

        console.error(
            "Campo de categoria não encontrado."
        );

        return;

    }


    //==================================================
    //              BUSCAR CATEGORIAS
    //==================================================

    fetch(
        "http://localhost:3000/categorias"
    )


    //==================================================
    //              CONVERTER RESPOSTA
    //==================================================

    .then(
        response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao buscar categorias."
                );

            }

            return response.json();

        }
    )


    //==================================================
    //              PREENCHER SELECT
    //==================================================

    .then(
        categorias => {


            //==================================================
            //              LIMPAR SELECT
            //==================================================

            categoriaProduto.innerHTML = "";


            //==================================================
            //              OPÇÃO PADRÃO
            //==================================================

            const opcaoInicial =
                document.createElement(
                    "option"
                );


            opcaoInicial.value = "";

            opcaoInicial.textContent =
                "Selecione";


            categoriaProduto.appendChild(
                opcaoInicial
            );


            //==================================================
            //              VERIFICAR CATEGORIAS
            //==================================================

            if (
                !categorias ||
                categorias.length === 0
            ) {

                console.log(
                    "Nenhuma categoria cadastrada."
                );

                return;

            }


            //==================================================
            //              PERCORRER CATEGORIAS
            //==================================================

            categorias.forEach(
                function (categoria) {


                    //==================================================
                    //              CRIAR OPTION
                    //==================================================

                    const opcao =
                        document.createElement(
                            "option"
                        );


                    //==================================================
                    //              ID DA CATEGORIA
                    //==================================================

                    opcao.value =
                        categoria.idCategoria;


                    //==================================================
                    //              NOME DA CATEGORIA
                    //==================================================

                    opcao.textContent =
                        categoria.nome;


                    //==================================================
                    //              ADICIONAR OPTION
                    //==================================================

                    categoriaProduto.appendChild(
                        opcao
                    );

                }
            );

        }
    )


    //==================================================
    //              ERRO
    //==================================================

    .catch(
        error => {

            console.error(
                "Erro ao carregar categorias:",
                error
            );


            categoriaProduto.innerHTML = "";


            const opcaoErro =
                document.createElement(
                    "option"
                );


            opcaoErro.value = "";

            opcaoErro.textContent =
                "Erro ao carregar categorias";


            categoriaProduto.appendChild(
                opcaoErro
            );

        }
    );

}


//==================================================
//              SELECIONAR IMAGEM
//==================================================

document.getElementById(
    "btnSelecionarImagem"
).
addEventListener(
    "click",
    function () {


        //==================================================
        //              PEGAR INPUT
        //==================================================

        const imagemProduto =
            document.getElementById(
                "imagemProduto"
            );


        //==================================================
        //              ABRIR SELEÇÃO
        //==================================================

        imagemProduto.click();

    }
);


//==================================================
//              SELECIONAR IMAGENS
//==================================================

document.getElementById(
    "imagemProduto"
).
addEventListener(
    "change",
    function () {


        //==================================================
        //              PEGAR ARQUIVOS
        //==================================================

        const arquivos =
            this.files;


        //==================================================
        //              MOSTRAR MINIATURAS
        //==================================================

        mostrarMiniaturas(
            arquivos
        );

    }
);


//==================================================
//              MOSTRAR MINIATURAS
//==================================================

function mostrarMiniaturas(
    arquivos
) {


    //==================================================
    //              PEGAR ÁREA
    //==================================================

    const miniaturas =
        document.getElementById(
            "miniaturas"
        );


    //==================================================
    //              LIMPAR
    //==================================================

    miniaturas.innerHTML = "";


    //==================================================
    //              VERIFICAR ARQUIVOS
    //==================================================

    if (
        !arquivos ||
        arquivos.length === 0
    ) {

        return;

    }


    //==================================================
    //              PERCORRER ARQUIVOS
    //==================================================

    for (
        let i = 0;
        i < arquivos.length;
        i++
    ) {


        //==================================================
        //              PEGAR ARQUIVO
        //==================================================

        const arquivo =
            arquivos[i];


        //==================================================
        //              VALIDAR TIPO
        //==================================================

        if (
            !arquivo.type.startsWith(
                "image/"
            )
        ) {

            continue;

        }


        //==================================================
        //              CRIAR CONTAINER
        //==================================================

        const container =
            document.createElement(
                "div"
            );


        container.className =
            "miniaturaItem";


        //==================================================
        //              CRIAR IMAGEM
        //==================================================

        const imagem =
            document.createElement(
                "img"
            );


        imagem.src =
            URL.createObjectURL(
                arquivo
            );


        imagem.alt =
            arquivo.name;


        //==================================================
        //              ADICIONAR IMAGEM
        //==================================================

        container.appendChild(
            imagem
        );


        //==================================================
        //              ADICIONAR CONTAINER
        //==================================================

        miniaturas.appendChild(
            container
        );

    }

}


//==================================================
//              ARRASTAR IMAGEM
//==================================================

document.getElementById(
    "uploadArea"
).
addEventListener(
    "dragover",
    function (event) {


        //==================================================
        //              IMPEDIR COMPORTAMENTO
        //==================================================

        event.preventDefault();


        //==================================================
        //              CLASSE VISUAL
        //==================================================

        this.classList.add(
            "arrastando"
        );

    }
);


//==================================================
//              SAIR DA ÁREA
//==================================================

document.getElementById(
    "uploadArea"
).
addEventListener(
    "dragleave",
    function () {


        //==================================================
        //              REMOVER CLASSE
        //==================================================

        this.classList.remove(
            "arrastando"
        );

    }
);


//==================================================
//              SOLTAR IMAGEM
//==================================================

document.getElementById(
    "uploadArea"
).
addEventListener(
    "drop",
    function (event) {


        //==================================================
        //              IMPEDIR COMPORTAMENTO
        //==================================================

        event.preventDefault();


        //==================================================
        //              REMOVER CLASSE
        //==================================================

        this.classList.remove(
            "arrastando"
        );


        //==================================================
        //              PEGAR ARQUIVOS
        //==================================================

        const arquivos =
            event.dataTransfer.files;


        //==================================================
        //              VERIFICAR ARQUIVOS
        //==================================================

        if (
            !arquivos ||
            arquivos.length === 0
        ) {

            return;

        }


        //==================================================
        //              MOSTRAR MINIATURAS
        //==================================================

        mostrarMiniaturas(
            arquivos
        );


        //==================================================
        //              COLOCAR ARQUIVOS NO INPUT
        //==================================================

        const imagemProduto =
            document.getElementById(
                "imagemProduto"
            );


        imagemProduto.files =
            arquivos;

    }
);


//==================================================
//              CADASTRO PRODUTO
//==================================================

document.getElementById(
    "btnSalvar"
).
addEventListener(
    "click",
    function (event) {


        //==================================================
        //              IMPEDIR FORMULÁRIO
        //==================================================

        event.preventDefault();


        //==================================================
        //              CAPTURAR NOME
        //==================================================

        const nomeProduto =
            document.getElementById(
                "nomeProduto"
            ).value.trim();


        //==================================================
        //              CAPTURAR CATEGORIA
        //==================================================

        const categoriaProduto =
            document.getElementById(
                "categoriaProduto"
            ).value;


        //==================================================
        //              CAPTURAR DESCRIÇÃO
        //==================================================

        const descricaoProduto =
            document.getElementById(
                "descricaoProduto"
            ).value.trim();


        //==================================================
        //              CAPTURAR PREÇO
        //==================================================

        const precoProduto =
            document.getElementById(
                "precoProduto"
            ).value;


        //==================================================
        //              CAPTURAR ESTOQUE
        //==================================================

        const quantidadeProduto =
            document.getElementById(
                "quantidadeProduto"
            ).value;


        //==================================================
        //              CAPTURAR STATUS
        //==================================================

        const statusProduto =
            document.getElementById(
                "statusProduto"
            ).checked;


        //==================================================
        //              CAPTURAR IMAGENS
        //==================================================

        const imagemProduto =
            document.getElementById(
                "imagemProduto"
            );


        const imagens =
            imagemProduto.files;


        //==================================================
        //              VALIDAR NOME
        //==================================================

        if (
            nomeProduto === ""
        ) {

            alert(
                "Por favor, preencha o nome do produto."
            );

            return;

        }


        //==================================================
        //              VALIDAR CATEGORIA
        //==================================================

        if (
            categoriaProduto === ""
        ) {

            alert(
                "Por favor, selecione uma categoria."
            );

            return;

        }


        //==================================================
        //              VALIDAR DESCRIÇÃO
        //==================================================

        if (
            descricaoProduto === ""
        ) {

            alert(
                "Por favor, preencha a descrição do produto."
            );

            return;

        }


        //==================================================
        //              VALIDAR PREÇO
        //==================================================

        if (
            precoProduto === "" ||
            isNaN(
                Number(precoProduto)
            ) ||
            Number(precoProduto) <= 0
        ) {

            alert(
                "Por favor, informe um preço válido."
            );

            return;

        }


        //==================================================
        //              VALIDAR ESTOQUE
        //==================================================

        if (
            quantidadeProduto === "" ||
            isNaN(
                Number(
                    quantidadeProduto
                )
            ) ||
            Number(
                quantidadeProduto
            ) < 0
        ) {

            alert(
                "Por favor, informe uma quantidade válida para o estoque."
            );

            return;

        }


        //==================================================
        //              VALIDAR IMAGEM
        //==================================================

        if (
            imagens.length === 0
        ) {

            alert(
                "Por favor, selecione pelo menos uma imagem."
            );

            return;

        }


        //==================================================
        //              VALIDAR TAMANHO DAS IMAGENS
        //==================================================

        for (
            let i = 0;
            i < imagens.length;
            i++
        ) {


            const arquivo =
                imagens[i];


            //==================================================
            //              VALIDAR TIPO
            //==================================================

            if (
                !arquivo.type.startsWith(
                    "image/"
                )
            ) {

                alert(
                    "Selecione somente arquivos de imagem."
                );

                return;

            }


            //==================================================
            //              VALIDAR TAMANHO
            //==================================================

            const tamanhoMaximo =
                10 * 1024 * 1024;


            if (
                arquivo.size >
                tamanhoMaximo
            ) {

                alert(
                    "Cada imagem deve ter no máximo 10MB."
                );

                return;

            }

        }


        //==================================================
        //              GERAR CÓDIGO
        //==================================================

        const codigo =
            "PROD-" +
            Date.now();


        //==================================================
        //              CRIAR FORMDATA
        //==================================================

        const produto =
            new FormData();


        //==================================================
        //              ADICIONAR NOME
        //==================================================

        produto.append(
            "nome",
            nomeProduto
        );


        //==================================================
        //              ADICIONAR DESCRIÇÃO
        //==================================================

        produto.append(
            "descricao",
            descricaoProduto
        );


        //==================================================
        //              ADICIONAR CÓDIGO
        //==================================================

        produto.append(
            "codigo",
            codigo
        );


        //==================================================
        //              ADICIONAR PREÇO
        //==================================================

        produto.append(
            "preco",
            Number(precoProduto)
        );


        //==================================================
        //              ADICIONAR ESTOQUE
        //==================================================

        produto.append(
            "quantidade_estoque",
            Number(
                quantidadeProduto
            )
        );


        //==================================================
        //              ADICIONAR STATUS
        //==================================================

        produto.append(
            "ativo",
            statusProduto ? 1 : 0
        );


        //==================================================
        //              ID DA LOJA
        //==================================================

        /*
            ATENÇÃO:

            Por enquanto estamos usando
            Loja_idLoja = 1.

            Depois podemos pegar o ID da loja
            do login do lojista.
        */

        produto.append(
            "Loja_idLoja",
            1
        );


        //==================================================
        //              ID DA CATEGORIA
        //==================================================

        produto.append(
            "Categoria_idCategoria",
            Number(
                categoriaProduto
            )
        );


        //==================================================
        //              ADICIONAR IMAGENS
        //==================================================

        for (
            let i = 0;
            i < imagens.length;
            i++
        ) {

            produto.append(
                "imagens",
                imagens[i]
            );

        }


        //==================================================
        //              MOSTRAR NO CONSOLE
        //==================================================

        console.log(
            "Dados enviados:"
        );


        console.log(
            "Nome:",
            nomeProduto
        );


        console.log(
            "Categoria:",
            categoriaProduto
        );


        console.log(
            "Descrição:",
            descricaoProduto
        );


        console.log(
            "Preço:",
            precoProduto
        );


        console.log(
            "Estoque:",
            quantidadeProduto
        );


        console.log(
            "Ativo:",
            statusProduto
        );


        console.log(
            "Quantidade de imagens:",
            imagens.length
        );


        //==================================================
        //              ENVIAR PARA SERVIDOR
        //==================================================

        fetch(
            "http://localhost:3000/produtos",
            {

                method: "POST",

                body: produto

            }
        )


        //==================================================
        //              RECEBER RESPOSTA
        //==================================================

        .then(
            response => {


                //==================================================
                //              VERIFICAR RESPOSTA
                //==================================================

                if (!response.ok) {

                    return response.json()
                    .then(
                        data => {

                            throw new Error(
                                data.erro ||
                                "Erro ao cadastrar produto."
                            );

                        }
                    );

                }


                return response.json();

            }
        )


        //==================================================
        //              RESULTADO
        //==================================================

        .then(
            data => {


                console.log(
                    "Produto cadastrado:",
                    data
                );


                //==================================================
                //              MENSAGEM
                //==================================================

                alert(
                    "Produto cadastrado com sucesso!"
                );


                //==================================================
                //              LIMPAR FORMULÁRIO
                //==================================================

                document.getElementById(
                    "formProduto"
                ).reset();


                //==================================================
                //              LIMPAR MINIATURAS
                //==================================================

                document.getElementById(
                    "miniaturas"
                ).innerHTML = "";


                //==================================================
                //              RECARREGAR CATEGORIAS
                //==================================================

                carregarCategorias();

            }
        )


        //==================================================
        //              TRATAR ERRO
        //==================================================

        .catch(
            error => {


                console.error(
                    "Erro ao cadastrar produto:",
                    error
                );


                alert(
                    error.message ||
                    "Erro ao cadastrar produto."
                );

            }
        );

    }
);


//==================================================
//              BOTÃO CANCELAR
//==================================================

document.getElementById(
    "btnCancelar"
).
addEventListener(
    "click",
    function () {


        //==================================================
        //              LIMPAR FORMULÁRIO
        //==================================================

        document.getElementById(
            "formProduto"
        ).reset();


        //==================================================
        //              LIMPAR MINIATURAS
        //==================================================

        document.getElementById(
            "miniaturas"
        ).innerHTML = "";


        //==================================================
        //              RECARREGAR CATEGORIAS
        //==================================================

        carregarCategorias();


    }
);


//==================================================
//              ÁREA DE UPLOAD
//==================================================

document.getElementById(
    "uploadArea"
).
addEventListener(
    "click",
    function (event) {


        //==================================================
        //              NÃO ABRIR DUAS VEZES
        //==================================================

        if (
            event.target.id ===
            "btnSelecionarImagem"
        ) {

            return;

        }


        //==================================================
        //              PEGAR INPUT
        //==================================================

        const imagemProduto =
            document.getElementById(
                "imagemProduto"
            );


        //==================================================
        //              ABRIR ARQUIVO
        //==================================================

        imagemProduto.click();

    }
);