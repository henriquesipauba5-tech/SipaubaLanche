//==================================================
//      cadastro_adicional.js
//      Sipaúba Lanches
//==================================================


//==================================================
//              CONFIGURAÇÃO
//==================================================

const API_ADICIONAIS =
    "http://localhost:3000/adicionais";


//==================================================
//              CONTROLE DE EDIÇÃO
//==================================================

let idAdicionalEditando = null;


//==================================================
//              SELECIONAR IMAGEM
//==================================================

document.getElementById(
    "btnSelecionarImagem"
)
    .addEventListener(
        "click",
        function () {

            document.getElementById(
                "imagemAdicional"
            ).click();

        }
    );


//==================================================
//              PREVIEW DA IMAGEM
//==================================================

document.getElementById(
    "imagemAdicional"
)
    .addEventListener(
        "change",
        function () {

            const arquivo =
                this.files[0];


            const preview =
                document.getElementById(
                    "previewImagem"
                );


            preview.innerHTML = "";


            if (!arquivo) {

                return;

            }


            const imagem =
                document.createElement(
                    "img"
                );


            imagem.src =
                URL.createObjectURL(
                    arquivo
                );


            imagem.alt =
                "Preview do adicional";


            preview.appendChild(
                imagem
            );

        }
    );


//==================================================
//              SALVAR / ATUALIZAR
//==================================================

document.getElementById(
    "btnSalvar"
)
    .addEventListener(
        "click",
        function (event) {

            //==================================================
            // EVITAR ENVIO DUPLO DO FORMULÁRIO
            //==================================================

            event.preventDefault();


            //==================================================
            // PEGAR BOTÃO
            //==================================================

            const botaoSalvar =
                document.getElementById(
                    "btnSalvar"
                );


            //==================================================
            // EVITAR CLIQUE DUPLO
            //==================================================

            if (botaoSalvar.disabled) {

                return;

            }


            //==================================================
            // PEGAR CAMPOS
            //==================================================

            const nomeAdicional =
                document.getElementById(
                    "nomeAdicional"
                ).value.trim();


            const descricaoAdicional =
                document.getElementById(
                    "descricaoAdicional"
                ).value.trim();


            const precoAdicional =
                document.getElementById(
                    "precoAdicional"
                ).value;


            const imagemAdicional =
                document.getElementById(
                    "imagemAdicional"
                ).files[0];


            //==================================================
            // VALIDAR NOME
            //==================================================

            if (
                nomeAdicional === ""
            ) {

                alert(
                    "Preencha o nome do adicional."
                );

                return;

            }


            //==================================================
            // VALIDAR DESCRIÇÃO
            //==================================================

            if (
                descricaoAdicional === ""
            ) {

                alert(
                    "Preencha a descrição."
                );

                return;

            }


            //==================================================
            // VALIDAR PREÇO
            //==================================================

            if (
                precoAdicional === "" ||
                isNaN(
                    Number(
                        precoAdicional
                    )
                ) ||
                Number(
                    precoAdicional
                ) <= 0
            ) {

                alert(
                    "Informe um preço válido."
                );

                return;

            }


            //==================================================
            // IMAGEM OBRIGATÓRIA SOMENTE NO CADASTRO
            //==================================================

            if (
                idAdicionalEditando === null &&
                !imagemAdicional
            ) {

                alert(
                    "Selecione uma imagem."
                );

                return;

            }


            //==================================================
            // VALIDAR NOVA IMAGEM
            //==================================================

            if (imagemAdicional) {

                //==================================================
                // TAMANHO MÁXIMO 5 MB
                //==================================================

                if (
                    imagemAdicional.size >
                    5 * 1024 * 1024
                ) {

                    alert(
                        "A imagem deve ter no máximo 5MB."
                    );

                    return;

                }


                //==================================================
                // TIPO DO ARQUIVO
                //==================================================

                if (
                    !imagemAdicional.type
                        .startsWith("image/")
                ) {

                    alert(
                        "Selecione uma imagem válida."
                    );

                    return;

                }

            }


            //==================================================
            // CRIAR FORMDATA
            //==================================================

            const dados =
                new FormData();


            dados.append(
                "nome",
                nomeAdicional
            );


            dados.append(
                "descricao",
                descricaoAdicional
            );


            dados.append(
                "preco",
                precoAdicional
            );


            //==================================================
            // SOMENTE ENVIA IMAGEM SE ESCOLHER UMA
            //==================================================

            if (imagemAdicional) {

                dados.append(
                    "imagem",
                    imagemAdicional
                );

            }


            //==================================================
            // DEFINIR SE É CADASTRO OU EDIÇÃO
            //==================================================

            const estaEditando =
                idAdicionalEditando !== null;


            const idEmEdicao =
                idAdicionalEditando;


            let url =
                API_ADICIONAIS;


            let metodo =
                "POST";


            if (estaEditando) {

                url =
                    `${API_ADICIONAIS}/${idEmEdicao}`;


                metodo =
                    "PUT";

            }


            console.log(
                "Operação:",
                metodo,
                url
            );


            //==================================================
            // BLOQUEAR BOTÃO
            //==================================================

            botaoSalvar.disabled =
                true;


            //==================================================
            // ENVIAR PARA O SERVIDOR
            //==================================================

            fetch(
                url,
                {

                    method: metodo,

                    body: dados

                }
            )

                .then(async response => {

                    const data =
                        await response.json();


                    if (!response.ok) {

                        throw new Error(
                            data.erro ||
                            data.mensagem ||
                            "Erro ao salvar adicional."
                        );

                    }


                    return data;

                })

                .then(data => {

                    console.log(
                        "Resposta:",
                        data
                    );


                    //==================================================
                    // MENSAGEM CORRETA
                    //==================================================

                    if (estaEditando) {

                        alert(
                            "Adicional atualizado com sucesso!"
                        );

                    }

                    else {

                        alert(
                            "Adicional cadastrado com sucesso!"
                        );

                    }


                    //==================================================
                    // LIMPAR FORMULÁRIO
                    //==================================================

                    limparFormularioAdicional();


                    //==================================================
                    // ATUALIZAR LISTA
                    //==================================================

                    listarAdicionais();

                })

                .catch(error => {

                    console.error(
                        "Erro ao salvar adicional:",
                        error
                    );


                    alert(
                        error.message
                    );

                })

                .finally(() => {

                    //==================================================
                    // LIBERAR BOTÃO
                    //==================================================

                    botaoSalvar.disabled =
                        false;

                });

        }
    );


//==================================================
//              LISTAR ADICIONAIS
//==================================================

function listarAdicionais() {

    fetch(
        API_ADICIONAIS
    )

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao carregar adicionais."
                );

            }


            return response.json();

        })

        .then(adicionais => {

            const lista =
                document.getElementById(
                    "listaAdicionaisCadastrados"
                );


            const contador =
                document.getElementById(
                    "quantidadeAdicionais"
                );


            lista.innerHTML = "";


            contador.innerText =
                adicionais.length;


            //==================================================
            // NENHUM CADASTRADO
            //==================================================

            if (
                adicionais.length === 0
            ) {

                lista.innerHTML = `

                <p class="mensagemLista">

                    Nenhum adicional cadastrado.

                </p>

            `;

                return;

            }


            //==================================================
            // CRIAR CARDS
            //==================================================

            adicionais.forEach(
                adicional => {

                    const card =
                        document.createElement(
                            "div"
                        );


                    card.classList.add(
                        "cardAdicionalCadastrado"
                    );


                    //==================================================
                    // CONVERTER IMAGEM
                    //==================================================

                    let imagemSrc = "";


                    if (
                        adicional.imagem &&
                        adicional.imagem.data
                    ) {

                        imagemSrc =
                            converterBufferParaImagem(
                                adicional.imagem.data
                            );

                    }


                    //==================================================
                    // CARD
                    //==================================================

                    card.innerHTML = `

                    ${imagemSrc
                            ?

                            `
                            <img
                                src="${imagemSrc}"
                                alt="${adicional.nome}"
                            >
                            `

                            :

                            `
                            <div class="semImagem">

                                <i class="fa-solid fa-image"></i>

                            </div>
                            `
                        }


                    <div class="dadosAdicional">

                        <h3>

                            ${adicional.nome}

                        </h3>


                        <p>

                            R$
                            ${Number(
                            adicional.preco
                        )
                            .toFixed(2)
                            .replace(".", ",")}

                        </p>


                        <span>

                            ${adicional.descricao}

                        </span>

                    </div>


                    <div class="acoes">

                        <button
                            type="button"
                            onclick="editarAdicional(${adicional.idAdicional})"
                            title="Editar"
                        >

                            <i class="fa-solid fa-pen"></i>

                        </button>


                        <button
                            type="button"
                            onclick="excluirAdicional(${adicional.idAdicional})"
                            title="Excluir"
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
                "Erro ao listar adicionais:",
                error
            );


            document.getElementById(
                "listaAdicionaisCadastrados"
            ).innerHTML = `

            <p class="mensagemErro">

                Não foi possível carregar os adicionais.

            </p>

        `;

        });

}


//==================================================
//          CONVERTER BUFFER PARA IMAGEM
//==================================================

function converterBufferParaImagem(
    dados
) {

    const bytes =
        new Uint8Array(
            dados
        );


    let binario = "";


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
//              EDITAR ADICIONAL
//==================================================

function editarAdicional(
    idAdicional
) {

    fetch(
        `${API_ADICIONAIS}/${idAdicional}`
    )

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Erro ao buscar adicional."
                );

            }


            return response.json();

        })

        .then(adicional => {

            //==================================================
            // GUARDAR ID
            //==================================================

            idAdicionalEditando =
                adicional.idAdicional;


            //==================================================
            // PREENCHER CAMPOS
            //==================================================

            document.getElementById(
                "nomeAdicional"
            ).value =
                adicional.nome;


            document.getElementById(
                "descricaoAdicional"
            ).value =
                adicional.descricao;


            document.getElementById(
                "precoAdicional"
            ).value =
                adicional.preco;


            //==================================================
            // LIMPAR INPUT DE ARQUIVO
            //==================================================

            document.getElementById(
                "imagemAdicional"
            ).value = "";


            //==================================================
            // MOSTRAR IMAGEM ATUAL
            //==================================================

            const preview =
                document.getElementById(
                    "previewImagem"
                );


            preview.innerHTML = "";


            if (
                adicional.imagem &&
                adicional.imagem.data
            ) {

                const imagem =
                    document.createElement(
                        "img"
                    );


                imagem.src =
                    converterBufferParaImagem(
                        adicional.imagem.data
                    );


                imagem.alt =
                    adicional.nome;


                preview.appendChild(
                    imagem
                );

            }


            //==================================================
            // ALTERAR BOTÃO
            //==================================================

            document.getElementById(
                "btnSalvar"
            ).innerHTML = `

            <i class="fa-solid fa-floppy-disk"></i>

            Atualizar

        `;


            //==================================================
            // IR PARA FORMULÁRIO
            //==================================================

            document.getElementById(
                "formAdicional"
            ).scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        })

        .catch(error => {

            console.error(
                "Erro ao editar adicional:",
                error
            );


            alert(
                "Não foi possível carregar o adicional."
            );

        });

}


//==================================================
//              EXCLUIR ADICIONAL
//==================================================

function excluirAdicional(
    idAdicional
) {

    const confirmar =
        confirm(
            "Deseja realmente excluir este adicional?"
        );


    if (!confirmar) {

        return;

    }


    fetch(
        `${API_ADICIONAIS}/${idAdicional}`,
        {

            method: "DELETE"

        }
    )

        .then(async response => {

            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.erro ||
                    data.mensagem ||
                    "Erro ao excluir adicional."
                );

            }


            return data;

        })

        .then(() => {

            alert(
                "Adicional excluído com sucesso!"
            );


            //==================================================
            // SE ESTAVA EDITANDO O MESMO
            //==================================================

            if (
                Number(
                    idAdicionalEditando
                ) ===
                Number(
                    idAdicional
                )
            ) {

                limparFormularioAdicional();

            }


            listarAdicionais();

        })

        .catch(error => {

            console.error(
                "Erro ao excluir:",
                error
            );


            alert(
                error.message
            );

        });

}


//==================================================
//          LIMPAR FORMULÁRIO
//==================================================

function limparFormularioAdicional() {

    document.getElementById(
        "formAdicional"
    ).reset();


    document.getElementById(
        "previewImagem"
    ).innerHTML = "";


    //==================================================
    // SAIR DO MODO EDIÇÃO
    //==================================================

    idAdicionalEditando =
        null;


    document.getElementById(
        "btnSalvar"
    ).innerHTML = `

        <i class="fa-solid fa-floppy-disk"></i>

        Salvar

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
        function (event) {

            event.preventDefault();

            limparFormularioAdicional();

        }
    );


//==================================================
//              PESQUISAR
//==================================================

document.getElementById(
    "btnPesquisar"
)
    .addEventListener(
        "click",
        function () {

            const pesquisa =
                document.getElementById(
                    "campoPesquisa"
                ).value
                    .trim()
                    .toLowerCase();


            const cards =
                document.querySelectorAll(
                    ".cardAdicionalCadastrado"
                );


            cards.forEach(
                card => {

                    const texto =
                        card.innerText
                            .toLowerCase();


                    if (
                        texto.includes(
                            pesquisa
                        )
                    ) {

                        card.style.display = "";

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );


//==================================================
//              CARREGAR PÁGINA
//==================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        listarAdicionais();

    }
);