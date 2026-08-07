
//==================================================
//      cadastro_adicional.js
//      Sipaúba Lanches
//==================================================


//==================================================
//              SELECIONAR IMAGEM
//==================================================

document.getElementById("btnSelecionarImagem").
addEventListener("click", function () {

    //==================================================
    //              ABRIR SELEÇÃO
    //==================================================

    document.getElementById("imagemAdicional").click();

});


//==================================================
//              PREVIEW DA IMAGEM
//==================================================

document.getElementById("imagemAdicional").
addEventListener("change", function () {

    //==================================================
    //              PEGAR IMAGEM
    //==================================================

    const arquivo =
        document.getElementById("imagemAdicional").files[0];


    //==================================================
    //              PEGAR PREVIEW
    //==================================================

    const preview =
        document.getElementById("previewImagem");


    //==================================================
    //              LIMPAR PREVIEW
    //==================================================

    preview.innerHTML = "";


    //==================================================
    //              VERIFICAR IMAGEM
    //==================================================

    if (!arquivo) {

        return;

    }


    //==================================================
    //              CRIAR IMAGEM
    //==================================================

    const imagem =
        document.createElement("img");


    imagem.src =
        URL.createObjectURL(arquivo);


    imagem.alt =
        "Preview do adicional";


    //==================================================
    //              ADICIONAR NO PREVIEW
    //==================================================

    preview.appendChild(imagem);

});


//======================================================
//              CADASTRO ADICIONAL
//======================================================

document.getElementById("btnSalvar").
addEventListener("click", function () {


    //==================================================
    //              PEGAR DADOS DO INPUT
    //==================================================

    const nomeAdicional =
        document.getElementById("nomeAdicional").value;


    const descricaoAdicional =
        document.getElementById("descricaoAdicional").value;


    const precoAdicional =
        document.getElementById("precoAdicional").value;


    const imagemAdicional =
        document.getElementById("imagemAdicional").files[0];


    //==================================================
    //              VALIDAR NOME
    //==================================================

    if (
        nomeAdicional.trim() === ""
    ) {

        alert(
            "Por favor, preencha o nome do adicional."
        );

        return;

    }


    //==================================================
    //              VALIDAR DESCRIÇÃO
    //==================================================

    if (
        descricaoAdicional.trim() === ""
    ) {

        alert(
            "Por favor, preencha a descrição."
        );

        return;

    }


    //==================================================
    //              VALIDAR PREÇO
    //==================================================

    if (
        precoAdicional === "" ||
        isNaN(Number(precoAdicional)) ||
        Number(precoAdicional) <= 0
    ) {

        alert(
            "Por favor, informe um preço válido."
        );

        return;

    }


    //==================================================
    //              VALIDAR IMAGEM
    //==================================================

    if (!imagemAdicional) {

        alert(
            "Por favor, selecione uma imagem."
        );

        return;

    }


    //==================================================
    //              VALIDAR TAMANHO
    //==================================================

    if (
        imagemAdicional.size >
        10 * 1024 * 1024
    ) {

        alert(
            "A imagem deve ter no máximo 10MB."
        );

        return;

    }


    //==================================================
    //              VALIDAR TIPO
    //==================================================

    if (
        !imagemAdicional.type.startsWith("image/")
    ) {

        alert(
            "Selecione uma imagem válida."
        );

        return;

    }


    //==================================================
    //              CRIAR FORMDATA
    //==================================================

    const adicional =
        new FormData();


    //==================================================
    //              ADICIONAR DADOS
    //==================================================

    adicional.append(
        "nome",
        nomeAdicional.trim()
    );


    adicional.append(
        "descricao",
        descricaoAdicional.trim()
    );


    adicional.append(
        "preco",
        precoAdicional
    );


    adicional.append(
        "imagem",
        imagemAdicional
    );


    //==================================================
    //              ENVIAR PARA O SERVIDOR
    //==================================================

    fetch(
        "http://localhost:3000/adicionais",
        {

            method: "POST",

            body: adicional

        }
    )


    //==================================================
    //              CONVERTER RESPOSTA
    //==================================================

    .then(response => {

        return response.json();

    })


    //==================================================
    //              RECEBER RESPOSTA
    //==================================================

    .then(data => {

        console.log(
            "Resposta do servidor:",
            data
        );


        //==================================================
        //              VERIFICAR ERRO
        //==================================================

        if (data.erro) {

            alert(
                data.erro
            );

            return;

        }


        //==================================================
        //              SUCESSO
        //==================================================

        alert(
            "Adicional cadastrado com sucesso!"
        );


        //==================================================
        //              LIMPAR FORMULÁRIO
        //==================================================

        document.getElementById(
            "formAdicional"
        ).reset();


        //==================================================
        //              LIMPAR PREVIEW
        //==================================================

        document.getElementById(
            "previewImagem"
        ).innerHTML = "";

    })


    //==================================================
    //              TRATAR ERRO
    //==================================================

    .catch(error => {

        console.error(
            "Erro ao cadastrar adicional:",
            error
        );

        alert(
            "Erro ao cadastrar adicional."
        );

    });

});


//==================================================
//              BOTÃO CANCELAR
//==================================================

document.getElementById("btnCancelar").
addEventListener("click", function () {


    //==================================================
    //              LIMPAR FORMULÁRIO
    //==================================================

    document.getElementById(
        "formAdicional"
    ).reset();


    //==================================================
    //              LIMPAR PREVIEW
    //==================================================

    document.getElementById(
        "previewImagem"
    ).innerHTML = "";

});


//==================================================
//              BOTÃO PESQUISAR
//==================================================

document.getElementById("btnPesquisar").
addEventListener("click", function () {


    //==================================================
    //              PEGAR PESQUISA
    //==================================================

    const pesquisa =
        document.getElementById(
            "campoPesquisa"
        ).value.trim();


    //==================================================
    //              MOSTRAR NO CONSOLE
    //==================================================

    console.log(
        "Pesquisa:",
        pesquisa
    );

});

