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


//==================================================
//              CARREGAR CATEGORIAS
//==================================================

function carregarCategorias() {

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
            //              SEM CATEGORIAS
            //==================================================

            if (
                categorias.length === 0
            ) {

                categoriasProdutos.innerHTML = `

                <p>
                    Nenhuma categoria cadastrada.
                </p>

            `;


                listaProdutos.innerHTML = `

                <p>
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


                    botao.innerHTML = `

                    <i class="fa-solid fa-utensils"></i>

                    <span>

                        ${categoria.nome}

                    </span>

                `;


                    //==================================================
                    // PRIMEIRA CATEGORIA ATIVA
                    //==================================================

                    if (
                        indice === 0
                    ) {

                        botao.classList.add(
                            "ativo"
                        );

                    }


                    //==================================================
                    // CLIQUE NA CATEGORIA
                    //==================================================

                    botao.addEventListener(
                        "click",
                        function () {

                            //==================================================
                            // REMOVER ATIVO
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
                            // ATIVAR ATUAL
                            //==================================================

                            botao.classList.add(
                                "ativo"
                            );


                            //==================================================
                            // CARREGAR PRODUTOS
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
            // CARREGAR PRIMEIRA CATEGORIA
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

            <p>
                Não foi possível carregar as categorias.
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

    //==================================================
    //              CARREGANDO
    //==================================================

    listaProdutos.innerHTML = `

        <p>
            Carregando produtos...
        </p>

    `;


    fetch(
        `${API_PRODUTOS}/categoria/${idCategoria}`
    )

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao carregar produtos."
                );

            }


            return response.json();

        })

        .then(produtos => {

            listaProdutos.innerHTML =
                "";


            //==================================================
            //              SEM PRODUTOS
            //==================================================

            if (
                produtos.length === 0
            ) {

                listaProdutos.innerHTML = `

                <p class="semProdutos">

                    Nenhum produto disponível nesta categoria.

                </p>

            `;


                return;

            }


            //==================================================
            //              APENAS ATIVOS
            //==================================================

            const produtosAtivos =
                produtos.filter(
                    produto =>
                        Boolean(
                            produto.ativo
                        )
                );


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

            ${imagem

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

                ${produto.descricao}

            </p>


            <div class="precos">


                ${precoAntigo > 0

            ?

            `
                        <span class="precoAntigo">

                            R$
                            ${precoAntigo
                .toFixed(2)
                .replace(".", ",")}

                        </span>
                        `

            :

            ""
        }


                <strong class="precoAtual">

                    R$
                    ${precoAtual
            .toFixed(2)
            .replace(".", ",")}

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
    //      ABRIR DETALHES CLICANDO NO CARD
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
    //      BOTÃO TAMBÉM ABRE DETALHES
    //==================================================

    const botao =
        card.querySelector(
            ".btnEscolher"
        );


    botao.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            abrirDetalhesProduto(
                produto.idProduto
            );

        }
    );


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
        `../pages/detalhes.html?id=${idProduto}`;

}


//==================================================
//              BOTÃO HOME
//==================================================

document.getElementById(
    "btnHome"
)
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "index.html";

        }
    );


//==================================================
//              ENTRAR
//==================================================

document.getElementById(
    "btnEntrar"
)
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "login.html";

        }
    );


//==================================================
//              INICIAR
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarCategorias();

    }
);