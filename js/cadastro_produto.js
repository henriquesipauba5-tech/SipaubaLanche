//==================================================
//      cadastro_produto.js
//      Sipaúba Lanches
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
//              CONTROLE DE EDIÇÃO
//==================================================

let idProdutoEditando =
    null;


//==================================================
//              ELEMENTOS
//==================================================

const formProduto =
    document.getElementById(
        "formProduto"
    );


const nomeProduto =
    document.getElementById(
        "nomeProduto"
    );


const descricaoProduto =
    document.getElementById(
        "descricaoProduto"
    );


const categoriaProduto =
    document.getElementById(
        "categoriaProduto"
    );


const precoAntigoProduto =
    document.getElementById(
        "precoAntigoProduto"
    );


const precoPromocionalProduto =
    document.getElementById(
        "precoPromocionalProduto"
    );


const quantidadeProduto =
    document.getElementById(
        "quantidadeProduto"
    );


const statusProduto =
    document.getElementById(
        "statusProduto"
    );


const imagemProduto =
    document.getElementById(
        "imagemProduto"
    );


const previewImagem =
    document.getElementById(
        "previewImagem"
    );


const btnSalvar =
    document.getElementById(
        "btnSalvar"
    );


//==================================================
//          SELECIONAR IMAGEM
//==================================================

document.getElementById(
    "btnSelecionarImagem"
)
    .addEventListener(
        "click",
        function () {

            imagemProduto.click();

        }
    );


//==================================================
//              PREVIEW DA IMAGEM
//==================================================

imagemProduto.addEventListener(
    "change",
    function () {

        const arquivo =
            imagemProduto.files[0];


        previewImagem.innerHTML =
            "";


        if (!arquivo) {

            return;

        }


        //==================================================
        //              VALIDAR TIPO
        //==================================================

        if (
            !arquivo.type.startsWith(
                "image/"
            )
        ) {

            alert(
                "Selecione uma imagem válida."
            );


            imagemProduto.value =
                "";


            return;

        }


        //==================================================
        //              VALIDAR TAMANHO
        //==================================================

        if (
            arquivo.size >
            5 * 1024 * 1024
        ) {

            alert(
                "A imagem deve possuir no máximo 5MB."
            );


            imagemProduto.value =
                "";


            return;

        }


        mostrarPreviewArquivo(
            arquivo
        );

    }
);


//==================================================
//              PREVIEW NOVA IMAGEM
//==================================================

function mostrarPreviewArquivo(
    arquivo
) {

    previewImagem.innerHTML =
        "";


    const imagem =
        document.createElement(
            "img"
        );


    imagem.src =
        URL.createObjectURL(
            arquivo
        );


    imagem.alt =
        "Imagem do produto";


    previewImagem.appendChild(
        imagem
    );

}


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

function carregarCategorias(
    categoriaSelecionada = null
) {

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

            categoriaProduto.innerHTML = `

            <option value="">

                Selecione uma categoria

            </option>

        `;


            categorias.forEach(
                categoria => {

                    const option =
                        document.createElement(
                            "option"
                        );


                    option.value =
                        categoria.idCategoria;


                    option.innerText =
                        categoria.nome;


                    categoriaProduto.appendChild(
                        option
                    );

                }
            );


            if (
                categoriaSelecionada !== null
            ) {

                categoriaProduto.value =
                    String(
                        categoriaSelecionada
                    );

            }

        })

        .catch(error => {

            console.error(
                "Erro ao carregar categorias:",
                error
            );

        });

}


//==================================================
//              CADASTRAR CATEGORIA
//==================================================

document.getElementById(
    "btnCadastrarCategoria"
)
    .addEventListener(
        "click",
        function () {

            const campo =
                document.getElementById(
                    "novaCategoria"
                );


            const nome =
                campo.value.trim();


            if (
                nome === ""
            ) {

                alert(
                    "Informe o nome da categoria."
                );


                return;

            }


            fetch(
                API_CATEGORIAS,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            nome:
                                nome

                        })

                }
            )

                .then(async response => {

                    const data =
                        await response.json();


                    if (!response.ok) {

                        throw new Error(
                            data.erro ||
                            data.mensagem
                        );

                    }


                    return data;

                })

                .then(data => {

                    alert(
                        "Categoria cadastrada com sucesso!"
                    );


                    campo.value =
                        "";


                    carregarCategorias(
                        data.idCategoria
                    );

                })

                .catch(error => {

                    console.error(
                        error
                    );


                    alert(
                        error.message
                    );

                });

        }
    );


//==================================================
//          CADASTRAR / ATUALIZAR PRODUTO
//==================================================

formProduto.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        //==================================================
        //              EVITAR DUPLICAÇÃO
        //==================================================

        if (
            btnSalvar.disabled
        ) {

            return;

        }


        //==================================================
        //              PEGAR DADOS
        //==================================================

        const nome =
            nomeProduto.value.trim();


        const descricao =
            descricaoProduto.value.trim();


        const categoria =
            categoriaProduto.value;


        const precoAntigo =
            precoAntigoProduto.value;


        const precoPromocional =
            precoPromocionalProduto.value;


        const quantidade =
            quantidadeProduto.value;


        const arquivoImagem =
            imagemProduto.files[0];


        //==================================================
        //              VALIDAR
        //==================================================

        if (
            nome === ""
        ) {

            alert(
                "Informe o nome do produto."
            );


            return;

        }


        if (
            descricao === ""
        ) {

            alert(
                "Informe a descrição do produto."
            );


            return;

        }


        if (
            categoria === ""
        ) {

            alert(
                "Selecione uma categoria."
            );


            return;

        }


        if (
            precoPromocional === "" ||
            isNaN(
                Number(
                    precoPromocional
                )
            ) ||
            Number(
                precoPromocional
            ) <= 0
        ) {

            alert(
                "Informe um preço válido."
            );


            return;

        }


        if (
            quantidade === "" ||
            isNaN(
                Number(
                    quantidade
                )
            ) ||
            Number(
                quantidade
            ) < 0
        ) {

            alert(
                "Informe uma quantidade válida."
            );


            return;

        }


        //==================================================
        //      IMAGEM OBRIGATÓRIA SÓ NO CADASTRO
        //==================================================

        if (
            idProdutoEditando === null &&
            !arquivoImagem
        ) {

            alert(
                "Selecione uma imagem do produto."
            );


            return;

        }


        //==================================================
        //              CRIAR FORMDATA
        //==================================================

        const dados =
            new FormData();


        dados.append(
            "nome",
            nome
        );


        dados.append(
            "descricao",
            descricao
        );


        dados.append(
            "preco_antigo",
            precoAntigo === ""
                ? "0"
                : precoAntigo
        );


        dados.append(
            "preco_promocional",
            precoPromocional
        );


        dados.append(
            "quantidade_estoque",
            quantidade
        );


        dados.append(
            "ativo",
            statusProduto.checked
        );


        dados.append(
            "Loja_idLoja",
            "1"
        );


        dados.append(
            "Categoria_idCategoria",
            categoria
        );


        //==================================================
        //              IMAGEM
        //==================================================

        if (arquivoImagem) {

            dados.append(
                "imagem",
                arquivoImagem
            );

        }


        //==================================================
        //          CADASTRO OU EDIÇÃO
        //==================================================

        const estaEditando =
            idProdutoEditando !== null;


        let url =
            API_PRODUTOS;


        let metodo =
            "POST";


        if (
            estaEditando
        ) {

            url =
                `${API_PRODUTOS}/${idProdutoEditando}`;


            metodo =
                "PUT";

        }


        //==================================================
        //              BLOQUEAR BOTÃO
        //==================================================

        btnSalvar.disabled =
            true;


        //==================================================
        //              ENVIAR
        //==================================================

        fetch(
            url,
            {

                method:
                    metodo,

                body:
                    dados

            }
        )

            .then(async response => {

                const data =
                    await response.json();


                if (!response.ok) {

                    throw new Error(
                        data.erro ||
                        data.mensagem ||
                        "Erro ao salvar produto."
                    );

                }


                return data;

            })

           .then(() => {

    //==================================================
    //              PRODUTO ATUALIZADO
    //==================================================

    if (estaEditando) {

        alert(
            "Produto atualizado com sucesso!"
        );

        limparFormularioProduto();

        listarProdutos();

    }

    //==================================================
    //              PRODUTO CADASTRADO
    //==================================================

    else {

        alert(
            "Produto cadastrado com sucesso!"
        );

        // Vai automaticamente para a tela Home
        window.location.href = "produto.html";

    }

})

            .catch(error => {

                console.error(
                    "Erro ao salvar produto:",
                    error
                );


                alert(
                    error.message
                );

            })

            .finally(() => {

                btnSalvar.disabled =
                    false;

            });

    }
);


//==================================================
//              LISTAR PRODUTOS
//==================================================

function listarProdutos() {

    fetch(
        API_PRODUTOS
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

            const lista =
                document.getElementById(
                    "listaProdutosCadastrados"
                );


            const contador =
                document.getElementById(
                    "quantidadeProdutos"
                );


            lista.innerHTML =
                "";


            contador.innerText =
                produtos.length;


            if (
                produtos.length === 0
            ) {

                lista.innerHTML = `

                <p class="mensagemLista">

                    Nenhum produto cadastrado.

                </p>

            `;


                return;

            }


            produtos.forEach(
                produto => {

                    const card =
                        document.createElement(
                            "div"
                        );


                    card.classList.add(
                        "cardProdutoCadastrado"
                    );


                    const imagem =
                        converterImagem(
                            produto.imagem
                        );


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


                    card.innerHTML = `

                    <div class="imagemProdutoCard">

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

                                    <i class="fa-solid fa-image"></i>

                                </div>
                                `
                        }

                    </div>


                    <div class="dadosProduto">

                        <h3>

                            ${produto.nome}

                        </h3>


                        <p>

                            ${produto.descricao}

                        </p>


                        <p>

                            <strong>
                                Categoria:
                            </strong>

                            ${produto.categoria || "Não informada"}

                        </p>


                        <p>

                            <strong>
                                Estoque:
                            </strong>

                            ${produto.quantidade_estoque}

                        </p>


                        <div class="precosProduto">

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


                        <span
                            class="
                                statusLista
                                ${produto.ativo
                            ? "ativo"
                            : "inativo"
                        }
                            "
                        >

                            ${produto.ativo
                            ? "Ativo"
                            : "Inativo"
                        }

                        </span>

                    </div>


                    <div class="acoes">

                        <button
                            type="button"
                            onclick="editarProduto(${produto.idProduto})"
                        >

                            <i class="fa-solid fa-pen"></i>

                        </button>


                        <button
                            type="button"
                            onclick="excluirProduto(${produto.idProduto})"
                        >

                            <i class="fa-solid fa-trash"></i>

                        </button>

                    </div>

                `;


                    lista.appendChild(
                        card
                    );

                }
            );

        })

        .catch(error => {

            console.error(
                error
            );


            document.getElementById(
                "listaProdutosCadastrados"
            ).innerHTML = `

            <p class="mensagemErro">

                Não foi possível carregar os produtos.

            </p>

        `;

        });

}


//==================================================
//              EDITAR PRODUTO
//==================================================

function editarProduto(
    idProduto
) {

    fetch(
        `${API_PRODUTOS}/${idProduto}`
    )

        .then(async response => {

            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.erro ||
                    "Produto não encontrado."
                );

            }


            return data;

        })

        .then(produto => {

            //==================================================
            //              GUARDAR ID
            //==================================================

            idProdutoEditando =
                produto.idProduto;


            //==================================================
            //              PREENCHER CAMPOS
            //==================================================

            nomeProduto.value =
                produto.nome || "";


            descricaoProduto.value =
                produto.descricao || "";


            precoAntigoProduto.value =
                produto.preco_antigo || 0;


            precoPromocionalProduto.value =
                produto.preco_promocional || "";


            quantidadeProduto.value =
                produto.quantidade_estoque || 0;


            statusProduto.checked =
                Boolean(
                    produto.ativo
                );


            categoriaProduto.value =
                String(
                    produto.Categoria_idCategoria ||
                    ""
                );


            //==================================================
            //      LIMPAR INPUT DE NOVA IMAGEM
            //==================================================

            imagemProduto.value =
                "";


            //==================================================
            //              IMAGEM ATUAL
            //==================================================

            previewImagem.innerHTML =
                "";


            const imagem =
                converterImagem(
                    produto.imagem
                );


            if (imagem) {

                const img =
                    document.createElement(
                        "img"
                    );


                img.src =
                    imagem;


                img.alt =
                    produto.nome;


                previewImagem.appendChild(
                    img
                );

            }


            //==================================================
            //              MODO EDIÇÃO
            //==================================================

            document.getElementById(
                "tituloPagina"
            ).innerText =
                "Editar Produto";


            btnSalvar.innerHTML = `

            <i class="fa-solid fa-floppy-disk"></i>

            Atualizar Produto

        `;


            formProduto.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        })

        .catch(error => {

            console.error(
                error
            );


            alert(
                error.message
            );

        });

}


//==================================================
//              EXCLUIR PRODUTO
//==================================================

function excluirProduto(
    idProduto
) {

    const confirmar =
        confirm(
            "Deseja realmente excluir este produto?"
        );


    if (!confirmar) {

        return;

    }


    fetch(
        `${API_PRODUTOS}/${idProduto}`,
        {

            method:
                "DELETE"

        }
    )

        .then(async response => {

            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.erro ||
                    data.mensagem
                );

            }


            return data;

        })

        .then(() => {

            alert(
                "Produto excluído com sucesso!"
            );


            if (
                Number(
                    idProdutoEditando
                ) ===
                Number(
                    idProduto
                )
            ) {

                limparFormularioProduto();

            }


            listarProdutos();

        })

        .catch(error => {

            console.error(
                error
            );


            alert(
                error.message
            );

        });

}


//==================================================
//              LIMPAR FORMULÁRIO
//==================================================

function limparFormularioProduto() {

    formProduto.reset();


    previewImagem.innerHTML =
        "";


    imagemProduto.value =
        "";


    idProdutoEditando =
        null;


    statusProduto.checked =
        true;


    document.getElementById(
        "tituloPagina"
    ).innerText =
        "Cadastrar Novo Produto";


    document.getElementById(
        "descricaoPagina"
    ).innerText =
        "Preencha as informações abaixo para cadastrar um produto.";


    btnSalvar.innerHTML = `

        <i class="fa-solid fa-floppy-disk"></i>

        Salvar Produto

    `;

}


//==================================================
//              CANCELAR
//==================================================

document.getElementById(
    "btnCancelar"
)
    .addEventListener(
        "click",
        function () {

            limparFormularioProduto();

        }
    );


//==================================================
//              PESQUISAR
//==================================================

function pesquisarProdutos() {

    const pesquisa =
        document.getElementById(
            "campoPesquisa"
        )
            .value
            .trim()
            .toLowerCase();


    const cards =
        document.querySelectorAll(
            ".cardProdutoCadastrado"
        );


    cards.forEach(
        card => {

            const texto =
                card.innerText
                    .toLowerCase();


            card.style.display =

                texto.includes(
                    pesquisa
                )

                    ? ""

                    : "none";

        }
    );

}


//==================================================
//              BOTÃO PESQUISAR
//==================================================

document.getElementById(
    "btnPesquisar"
)
    .addEventListener(
        "click",
        pesquisarProdutos
    );


//==================================================
//              PESQUISA AO DIGITAR
//==================================================

document.getElementById(
    "campoPesquisa"
)
    .addEventListener(
        "input",
        pesquisarProdutos
    );


//==================================================
//              INICIAR PÁGINA
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarCategorias();

        listarProdutos();

    }
);