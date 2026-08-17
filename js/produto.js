//==================================================
//      produto.js
//      HOME - Sipaúba Lanches
//==================================================


//==================================================
//              CONFIGURAÇÕES
//==================================================

const API =
    "http://localhost:3000";


const API_PRODUTOS =
    `${API}/produtos`;


const API_CATEGORIAS =
    `${API}/categorias`;


//==================================================
//              ELEMENTOS
//==================================================

const categoriasProdutos =
    document.getElementById(
        "categoriasProdutos"
    );


const listaProdutos =
    document.getElementById(
        "listaProdutos"
    );


//==================================================
//              VERIFICAR ELEMENTOS
//==================================================

if (!categoriasProdutos) {

    console.error(
        "Elemento #categoriasProdutos não encontrado."
    );

}


if (!listaProdutos) {

    console.error(
        "Elemento #listaProdutos não encontrado."
    );

}


//==================================================
//          CONFIGURAR TÍTULOS
//==================================================

document.getElementById(
    "tituloProdutos"
).innerText =
    "Nosso Cardápio";


document.getElementById(
    "subtituloProdutos"
).innerText =
    "Escolha uma categoria e encontre seu lanche favorito.";


//==================================================
//          CONVERTER BUFFER EM IMAGEM
//==================================================

function converterImagem(
    buffer
) {

    if (
        !buffer ||
        !buffer.data
    ) {

        return "";

    }


    try {

        const bytes =
            new Uint8Array(
                buffer.data
            );


        let binario =
            "";


        for (
            let i = 0;
            i < bytes.length;
            i++
        ) {

            binario +=
                String.fromCharCode(
                    bytes[i]
                );

        }


        return (
            "data:image/jpeg;base64," +
            btoa(binario)
        );

    }

    catch (error) {

        console.error(
            "Erro ao converter imagem:",
            error
        );


        return "";

    }

}


//==================================================
//              CARREGAR CATEGORIAS
//==================================================

function carregarCategorias() {

    if (!categoriasProdutos) {

        return;

    }


    categoriasProdutos.innerHTML = `

        <p>
            Carregando categorias...
        </p>

    `;


    fetch(
        API_CATEGORIAS
    )

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao carregar categorias."
                );

            }


            return response.json();

        })

        .then(categorias => {

            categoriasProdutos.innerHTML =
                "";


            //==================================================
            //              VERIFICAR CATEGORIAS
            //==================================================

            if (
                !Array.isArray(categorias) ||
                categorias.length === 0
            ) {

                categoriasProdutos.innerHTML = `

                    <p class="semCategorias">

                        Nenhuma categoria cadastrada.

                    </p>

                `;


                listaProdutos.innerHTML = `

                    <p class="semProdutos">

                        Nenhum produto disponível.

                    </p>

                `;


                return;

            }


            //==================================================
            //              CRIAR BOTÕES
            //==================================================

            categorias.forEach(
                (
                    categoria,
                    indice
                ) => {

                    const botao =
                        document.createElement(
                            "button"
                        );


                    botao.type =
                        "button";


                    botao.classList.add(
                        "btnCategoria"
                    );


                    botao.dataset.id =
                        categoria.idCategoria;


                    //==================================================
                    //              ÍCONE
                    //==================================================

                    botao.innerHTML = `

                        <i class="fa-solid fa-utensils"></i>

                        <span>

                            ${categoria.nome}

                        </span>

                    `;


                    //==================================================
                    //          PRIMEIRA ATIVA
                    //==================================================

                    if (
                        indice === 0
                    ) {

                        botao.classList.add(
                            "ativo"
                        );

                    }


                    //==================================================
                    //              CLIQUE
                    //==================================================

                    botao.addEventListener(
                        "click",
                        function () {

                            //==================================================
                            //          REMOVER ATIVO
                            //==================================================

                            document
                                .querySelectorAll(
                                    ".btnCategoria"
                                )
                                .forEach(
                                    item => {

                                        item.classList.remove(
                                            "ativo"
                                        );

                                    }
                                );


                            //==================================================
                            //          ATIVAR BOTÃO
                            //==================================================

                            botao.classList.add(
                                "ativo"
                            );


                            //==================================================
                            //          CARREGAR PRODUTOS
                            //==================================================

                            listarProdutosPorCategoria(
                                categoria.idCategoria
                            );

                        }
                    );


                    categoriasProdutos.appendChild(
                        botao
                    );

                }
            );


            //==================================================
            //      CARREGAR PRIMEIRA CATEGORIA
            //==================================================

            listarProdutosPorCategoria(
                categorias[0].idCategoria
            );

        })

        .catch(error => {

            console.error(
                "Erro ao carregar categorias:",
                error
            );


            categoriasProdutos.innerHTML = `

                <p class="mensagemErro">

                    Não foi possível carregar as categorias.

                </p>

            `;


            listaProdutos.innerHTML = `

                <p class="mensagemErro">

                    Não foi possível carregar os produtos.

                </p>

            `;

        });

}


//==================================================
//      LISTAR PRODUTOS POR CATEGORIA
//==================================================

function listarProdutosPorCategoria(
    idCategoria
) {

    if (!listaProdutos) {

        return;

    }


    //==================================================
    //              CARREGANDO
    //==================================================

    listaProdutos.innerHTML = `

        <p class="carregando">

            Carregando produtos...

        </p>

    `;


    fetch(
        `${API_PRODUTOS}/categoria/${idCategoria}`
    )

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao carregar produtos da categoria."
                );

            }


            return response.json();

        })

        .then(produtos => {

            listaProdutos.innerHTML =
                "";


            //==================================================
            //              VERIFICAR RESPOSTA
            //==================================================

            if (
                !Array.isArray(produtos)
            ) {

                throw new Error(
                    "Resposta inválida do servidor."
                );

            }


            //==================================================
            //              FILTRAR ATIVOS
            //==================================================

            const produtosAtivos =
                produtos.filter(
                    produto => {

                        return (
                            produto.ativo === true ||
                            produto.ativo === 1 ||
                            produto.ativo === "1" ||
                            produto.ativo === "true"
                        );

                    }
                );


            //==================================================
            //              SEM PRODUTOS
            //==================================================

            if (
                produtosAtivos.length === 0
            ) {

                listaProdutos.innerHTML = `

                    <p class="semProdutos">

                        Nenhum produto disponível nesta categoria.

                    </p>

                `;


                return;

            }


            //==================================================
            //              CRIAR CARDS
            //==================================================

            produtosAtivos.forEach(
                produto => {

                    criarCardProduto(
                        produto
                    );

                }
            );

        })

        .catch(error => {

            console.error(
                "Erro ao listar produtos:",
                error
            );


            listaProdutos.innerHTML = `

                <p class="mensagemErro">

                    Não foi possível carregar os produtos.

                </p>

            `;

        });

}


//==================================================
//              CRIAR CARD
//==================================================

function criarCardProduto(
    produto
) {

    const card =
        document.createElement(
            "article"
        );


    card.classList.add(
        "cardProduto"
    );


    //==================================================
    //              IMAGEM
    //==================================================

    const imagem =
        converterImagem(
            produto.imagem
        );


    //==================================================
    //              PREÇOS
    //==================================================

    const precoAtual =
        Number(
            produto.preco_promocional ||
            0
        );


    const precoAntigo =
        Number(
            produto.preco_antigo ||
            0
        );


    //==================================================
    //              CONTEÚDO
    //==================================================

    card.innerHTML = `

        <div class="imagemProduto">

            ${
                imagem

                ?

                `
                    <img
                        src="${imagem}"
                        alt="${produto.nome}"
                    >
                `

                :

                `
                    <div class="semImagem">

                        <i class="fa-solid fa-burger"></i>

                    </div>
                `
            }

        </div>


        <div class="conteudoProduto">


            <h3>

                ${produto.nome}

            </h3>


            <p class="descricaoProduto">

                ${produto.descricao || ""}

            </p>


            <div class="precos">


                ${
                    precoAntigo > 0

                    ?

                    `
                        <span class="precoAntigo">

                            R$

                            ${precoAntigo
                                .toFixed(2)
                                .replace(".", ",")
                            }

                        </span>
                    `

                    :

                    ""
                }


                <strong class="precoAtual">

                    R$

                    ${precoAtual
                        .toFixed(2)
                        .replace(".", ",")
                    }

                </strong>


            </div>


            <button
                type="button"
                class="btnEscolher"
            >

                Ver detalhes

            </button>


        </div>

    `;


    //==================================================
    //      CLICAR NO CARD
    //==================================================

    card.addEventListener(
        "click",
        function () {

            abrirDetalhesProduto(
                produto.idProduto
            );

        }
    );


    //==================================================
    //      BOTÃO DETALHES
    //==================================================

    const botao =
        card.querySelector(
            ".btnEscolher"
        );


    if (botao) {

        botao.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                abrirDetalhesProduto(
                    produto.idProduto
                );

            }
        );

    }


    //==================================================
    //              ADICIONAR À LISTA
    //==================================================

    listaProdutos.appendChild(
        card
    );

}


//==================================================
//          ABRIR DETALHES DO PRODUTO
//==================================================

function abrirDetalhesProduto(
    idProduto
) {

    window.location.href =
        `detalhes.html?id=${idProduto}`;

}


//==================================================
//              BOTÃO HOME
//==================================================

const btnHome =
    document.getElementById(
        "btnHome"
    );


if (btnHome) {

    btnHome.addEventListener(
        "click",
        function () {

            // Já está na Home
            window.location.href =
                "produto.html";

        }
    );

}


//==================================================
//              PROMOÇÕES
//==================================================

const btnPromocoes =
    document.getElementById(
        "btnPromocoes"
    );


if (btnPromocoes) {

    btnPromocoes.addEventListener(
        "click",
        function () {

            window.location.href =
                "promocoes.html";

        }
    );

}


//==================================================
//              PEDIDOS
//==================================================

const btnPedidos =
    document.getElementById(
        "btnPedidos"
    );


if (btnPedidos) {

    btnPedidos.addEventListener(
        "click",
        function () {

            window.location.href =
                "pedidos.html";

        }
    );

}


//==================================================
//              ENTRAR
//==================================================

const btnEntrar =
    document.getElementById(
        "btnEntrar"
    );


if (btnEntrar) {

    btnEntrar.addEventListener(
        "click",
        function () {

            window.location.href =
                "login.html";

        }
    );

}


//==================================================
//              INICIAR
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarCategorias();

    }
);