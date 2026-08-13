//==================================================
//      detalhes.js
//      Sipaúba Lanches
//==================================================


//==================================================
//              CONFIGURAÇÕES
//==================================================

const API =
    "http://localhost:3000";


const API_PRODUTOS =
    `${API}/produtos`;


const API_ADICIONAIS =
    `${API}/adicionais`;


//==================================================
//              WHATSAPP DA LOJA
//==================================================

// Coloque somente números.
// Exemplo:
// 5563999999999

const WHATSAPP_LOJA =
    "5563992497895";


//==================================================
//              PRODUTO ATUAL
//==================================================

let produtoAtual =
    null;


let quantidadeProduto =
    1;


//==================================================
//              ADICIONAIS ESCOLHIDOS
//==================================================

const adicionaisSelecionados =
    {};


//==================================================
//              PEGAR ID DA URL
//==================================================

const parametros =
    new URLSearchParams(
        window.location.search
    );


const idProduto =
    parametros.get(
        "id"
    );


//==================================================
//              ELEMENTOS
//==================================================

const imagemProduto =
    document.getElementById(
        "imagemProduto"
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


const precoProduto =
    document.getElementById(
        "precoProduto"
    );


const precoAntigoProduto =
    document.getElementById(
        "precoAntigoProduto"
    );


const quantidadeProdutoElemento =
    document.getElementById(
        "quantidadeProduto"
    );


const estoqueProduto =
    document.getElementById(
        "estoqueProduto"
    );


const listaAdicionais =
    document.getElementById(
        "listaAdicionais"
    );


//==================================================
//              FORMATAR PREÇO
//==================================================

function formatarPreco(
    valor
) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {

            style:
                "currency",

            currency:
                "BRL"

        }
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
//              CARREGAR PRODUTO
//==================================================

function carregarProduto() {

    if (!idProduto) {

        alert(
            "Produto não informado."
        );


        window.history.back();


        return;

    }


    fetch(
        `${API_PRODUTOS}/${idProduto}`
    )

        .then(async response => {

            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.erro ||
                    data.mensagem ||
                    "Produto não encontrado."
                );

            }


            return data;

        })

        .then(produto => {

            console.log(
                "Produto:",
                produto
            );


            produtoAtual =
                produto;


            //==================================================
            //              NOME
            //==================================================

            nomeProduto.innerText =
                produto.nome;


            //==================================================
            //              DESCRIÇÃO
            //==================================================

            descricaoProduto.innerText =
                produto.descricao;


            //==================================================
            //              CATEGORIA
            //==================================================

            categoriaProduto.innerText =
                produto.categoria || "";


            //==================================================
            //              PREÇO
            //==================================================

            precoProduto.innerText =
                formatarPreco(
                    produto.preco_promocional
                );


            //==================================================
            //              PREÇO ANTIGO
            //==================================================

            if (
                Number(
                    produto.preco_antigo
                ) > 0
            ) {

                precoAntigoProduto.innerText =
                    formatarPreco(
                        produto.preco_antigo
                    );


                precoAntigoProduto.style.display =
                    "inline";

            }

            else {

                precoAntigoProduto.style.display =
                    "none";

            }


            //==================================================
            //              ESTOQUE
            //==================================================

            estoqueProduto.innerText =
                `Disponível: ${produto.quantidade_estoque}`;


            //==================================================
            //              IMAGEM
            //==================================================

            const imagem =
                converterImagem(
                    produto.imagem
                );


            if (imagem) {

                imagemProduto.src =
                    imagem;

            }

            else {

                imagemProduto.src =
                    "/assets/logo.png";

            }


            //==================================================
            //              TOTAL
            //==================================================

            atualizarTotal();

        })

        .catch(error => {

            console.error(
                "Erro ao carregar produto:",
                error
            );


            alert(
                error.message
            );

        });

}


//==================================================
//              CARREGAR ADICIONAIS
//==================================================

function carregarAdicionais() {

    fetch(
        API_ADICIONAIS
    )

        .then(async response => {

            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.erro ||
                    "Erro ao carregar adicionais."
                );

            }


            return data;

        })

        .then(adicionais => {

            console.log(
                "Adicionais:",
                adicionais
            );


            listaAdicionais.innerHTML =
                "";


            //==================================================
            //              SEM ADICIONAIS
            //==================================================

            if (
                adicionais.length === 0
            ) {

                listaAdicionais.innerHTML = `

                <p>

                    Nenhum adicional disponível.

                </p>

            `;


                return;

            }


            //==================================================
            //              CRIAR ADICIONAIS
            //==================================================

            adicionais.forEach(
                adicional => {

                    criarAdicional(
                        adicional
                    );

                }
            );

        })

        .catch(error => {

            console.error(
                "Erro ao carregar adicionais:",
                error
            );


            listaAdicionais.innerHTML = `

            <p>

                Não foi possível carregar os adicionais.

            </p>

        `;

        });

}


//==================================================
//              CRIAR ADICIONAL
//==================================================

function criarAdicional(
    adicional
) {

    const div =
        document.createElement(
            "div"
        );


    div.classList.add(
        "adicional"
    );


    //==================================================
    //              QUANTIDADE INICIAL
    //==================================================

    adicionaisSelecionados[
        adicional.idAdicional
    ] = {

        idAdicional:
            adicional.idAdicional,

        nome:
            adicional.nome,

        preco:
            Number(
                adicional.preco
            ),

        quantidade:
            0

    };


    //==================================================
    //              IMAGEM
    //==================================================

    const imagem =
        converterImagem(
            adicional.imagem
        );


    div.innerHTML = `

        <div class="imagemAdicional">

            ${imagem

            ?

            `
                    <img
                        src="${imagem}"
                        alt="${adicional.nome}"
                    >
                    `

            :

            `
                    <i class="fa-solid fa-plus"></i>
                    `
        }

        </div>


        <div class="info">

            <h4>

                ${adicional.nome}

            </h4>


            <p>

                ${adicional.descricao || ""}

            </p>


            <span>

                ${formatarPreco(
            adicional.preco
        )}

            </span>

        </div>


        <div class="controle-adicional">


            <button
                type="button"
                class="menosAdicional"
            >

                <i class="fa-solid fa-circle-minus"></i>

            </button>


            <span class="qtdAdicional">

                0

            </span>


            <button
                type="button"
                class="maisAdicional"
            >

                <i class="fa-solid fa-circle-plus"></i>

            </button>


        </div>

    `;


    //==================================================
    //              ELEMENTOS
    //==================================================

    const quantidade =
        div.querySelector(
            ".qtdAdicional"
        );


    const btnMais =
        div.querySelector(
            ".maisAdicional"
        );


    const btnMenos =
        div.querySelector(
            ".menosAdicional"
        );


    //==================================================
    //              MAIS
    //==================================================

    btnMais.addEventListener(
        "click",
        function () {

            adicionaisSelecionados[
                adicional.idAdicional
            ].quantidade++;


            quantidade.innerText =
                adicionaisSelecionados[
                    adicional.idAdicional
                ].quantidade;


            atualizarTotal();

        }
    );


    //==================================================
    //              MENOS
    //==================================================

    btnMenos.addEventListener(
        "click",
        function () {

            const item =
                adicionaisSelecionados[
                adicional.idAdicional
                ];


            if (
                item.quantidade > 0
            ) {

                item.quantidade--;

            }


            quantidade.innerText =
                item.quantidade;


            atualizarTotal();

        }
    );


    listaAdicionais.appendChild(
        div
    );

}


//==================================================
//          AUMENTAR QUANTIDADE PRODUTO
//==================================================

document.getElementById(
    "maisProduto"
)
    .addEventListener(
        "click",
        function () {

            if (!produtoAtual) {

                return;

            }


            const estoque =
                Number(
                    produtoAtual.quantidade_estoque
                );


            if (
                quantidadeProduto >= estoque
            ) {

                alert(
                    "Quantidade máxima disponível em estoque."
                );


                return;

            }


            quantidadeProduto++;


            quantidadeProdutoElemento.innerText =
                quantidadeProduto;


            atualizarTotal();

        }
    );


//==================================================
//          DIMINUIR QUANTIDADE PRODUTO
//==================================================

document.getElementById(
    "menosProduto"
)
    .addEventListener(
        "click",
        function () {

            if (
                quantidadeProduto > 1
            ) {

                quantidadeProduto--;

            }


            quantidadeProdutoElemento.innerText =
                quantidadeProduto;


            atualizarTotal();

        }
    );


//==================================================
//              CALCULAR ADICIONAIS
//==================================================

function calcularAdicionais() {

    let total =
        0;


    Object.values(
        adicionaisSelecionados
    )
        .forEach(
            adicional => {

                total +=

                    adicional.preco *

                    adicional.quantidade;

            }
        );


    return total;

}


//==================================================
//              ATUALIZAR TOTAL
//==================================================

function atualizarTotal() {

    if (!produtoAtual) {

        return;

    }


    //==================================================
    //              PRODUTO
    //==================================================

    const precoProduto =
        Number(
            produtoAtual.preco_promocional
        );


    const subtotalProduto =
        precoProduto *
        quantidadeProduto;


    //==================================================
    //              ADICIONAIS
    //==================================================

    const subtotalAdicionais =
        calcularAdicionais();


    //==================================================
    //              TOTAL
    //==================================================

    const total =

        subtotalProduto +

        subtotalAdicionais;


    //==================================================
    //              MOSTRAR
    //==================================================

    document.getElementById(
        "subtotalProduto"
    ).innerText =
        formatarPreco(
            subtotalProduto
        );


    document.getElementById(
        "subtotalAdicionais"
    ).innerText =
        formatarPreco(
            subtotalAdicionais
        );


    document.getElementById(
        "valorTotal"
    ).innerText =
        formatarPreco(
            total
        );


    document.getElementById(
        "valorTotalBotao"
    ).innerText =
        formatarPreco(
            total
        );

}


//==================================================
//          MONTAR LISTA DE ADICIONAIS
//==================================================

function montarTextoAdicionais() {

    const selecionados =
        Object.values(
            adicionaisSelecionados
        )
            .filter(
                adicional =>
                    adicional.quantidade > 0
            );


    if (
        selecionados.length === 0
    ) {

        return "Nenhum";

    }


    let texto =
        "";


    selecionados.forEach(
        adicional => {

            const subtotal =

                adicional.preco *

                adicional.quantidade;


            texto +=

                `\n- ${adicional.quantidade}x ${adicional.nome}` +

                ` (${formatarPreco(subtotal)})`;

        }
    );


    return texto;

}


//==================================================
//              ENVIAR WHATSAPP
//==================================================

document.getElementById(
    "btnWhatsapp"
)
    .addEventListener(
        "click",
        function () {

            if (!produtoAtual) {

                alert(
                    "Produto ainda não foi carregado."
                );


                return;

            }


            //==================================================
            //              PREÇO PRODUTO
            //==================================================

            const subtotalProduto =

                Number(
                    produtoAtual.preco_promocional
                ) *

                quantidadeProduto;


            //==================================================
            //              ADICIONAIS
            //==================================================

            const subtotalAdicionais =
                calcularAdicionais();


            //==================================================
            //              TOTAL
            //==================================================

            const total =

                subtotalProduto +

                subtotalAdicionais;


            //==================================================
            //              OBSERVAÇÃO
            //==================================================

            const observacao =
                document.getElementById(
                    "observacao"
                ).value.trim();


            //==================================================
            //              TEXTO DOS ADICIONAIS
            //==================================================

            const textoAdicionais =
                montarTextoAdicionais();


            //==================================================
            //              MONTAR PEDIDO
            //==================================================

            let mensagem =

                `🍔 *NOVO PEDIDO - SIPAÚBA LANCHES*

*Produto:*
${quantidadeProduto}x ${produtoAtual.nome}

*Preço do produto:*
${formatarPreco(subtotalProduto)}

*Adicionais:*
${textoAdicionais}

*Subtotal adicionais:*
${formatarPreco(subtotalAdicionais)}

*TOTAL DO PEDIDO:*
${formatarPreco(total)}`;


            //==================================================
            //              OBSERVAÇÃO
            //==================================================

            if (
                observacao !== ""
            ) {

                mensagem +=

                    `

*Observação:*
${observacao}`;

            }


            mensagem +=

                `

--------------------------
Pedido enviado pelo site
Sipaúba Lanches 🍔`;


            //==================================================
            //              CODIFICAR
            //==================================================

            const mensagemCodificada =
                encodeURIComponent(
                    mensagem
                );


            //==================================================
            //              WHATSAPP
            //==================================================

            const url =

                `https://wa.me/${WHATSAPP_LOJA}` +

                `?text=${mensagemCodificada}`;


            window.open(
                url,
                "_blank"
            );

        }
    );


//==================================================
//              VOLTAR
//==================================================

document.getElementById(
    "btnVoltar"
)
    .addEventListener(
        "click",
        function () {

            window.history.back();

        }
    );


//==================================================
//              INICIAR
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        carregarProduto();

        carregarAdicionais();

    }
);