// ===============================
// cadastro-lojista.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // ELEMENTOS
    // ===============================

    const logoLoja = document.getElementById("logoLoja");
    const nomePainel = document.getElementById("nomePainel");

    const categoriaProduto = document.getElementById("categoriaProduto");

    const uploadArea = document.getElementById("uploadArea");
    const imagemProduto = document.getElementById("imagemProduto");
    const miniaturas = document.getElementById("miniaturas");
    const btnSelecionarImagem = document.getElementById("btnSelecionarImagem");

    const btnSalvar = document.getElementById("btnSalvar");
    const btnCancelar = document.getElementById("btnCancelar");

    const formProduto = document.getElementById("formProduto");

    const campoPesquisa = document.getElementById("campoPesquisa");
    const statusSistema = document.getElementById("statusSistema");

    // ===============================
    // DADOS DA LOJA
    // (Depois poderão vir da API)
    // ===============================

    const loja = {

        nome: "Painel do Lojista",

        logo: "../assets/logo.png"

    };

    nomePainel.textContent = loja.nome;

    logoLoja.src = loja.logo;

    logoLoja.alt = loja.nome;

    // ===============================
    // CATEGORIAS
    // (Depois virão do banco)
    // ===============================

    const categorias = [

        "Selecione",

        "Roupas",

        "Calçados",

        "Acessórios",

        "Eletrônicos",

        "Esportes",

        "Informática",

        "Casa",

        "Beleza"

    ];

    categorias.forEach(categoria => {

        const option = document.createElement("option");

        option.value = categoria;

        option.textContent = categoria;

        categoriaProduto.appendChild(option);

    });

    // ===============================
    // UPLOAD
    // ===============================

    btnSelecionarImagem.addEventListener("click", () => {

        imagemProduto.click();

    });

    uploadArea.addEventListener("click", () => {

        imagemProduto.click();

    });

    imagemProduto.addEventListener("change", carregarImagens);

    // ===============================
    // DRAG AND DROP
    // ===============================

    uploadArea.addEventListener("dragover", (e) => {

        e.preventDefault();

        uploadArea.style.borderColor = "#000";

    });

    uploadArea.addEventListener("dragleave", () => {

        uploadArea.style.borderColor = "#d7d7d7";

    });

    uploadArea.addEventListener("drop", (e) => {

        e.preventDefault();

        imagemProduto.files = e.dataTransfer.files;

        carregarImagens();

    });

    // ===============================
    // MINIATURAS
    // ===============================

    function carregarImagens() {

        miniaturas.innerHTML = "";

        const arquivos = imagemProduto.files;

        for (let arquivo of arquivos) {

            const reader = new FileReader();

            reader.onload = function (e) {

                const div = document.createElement("div");

                const img = document.createElement("img");

                img.src = e.target.result;

                div.appendChild(img);

                miniaturas.appendChild(div);

            };

            reader.readAsDataURL(arquivo);

        }

    }

    // ===============================
    // PESQUISA
    // ===============================

    campoPesquisa.addEventListener("keyup", () => {

        console.log("Pesquisar:", campoPesquisa.value);

    });

    // ===============================
    // CANCELAR
    // ===============================

    btnCancelar.addEventListener("click", () => {

        if (confirm("Deseja cancelar o cadastro?")) {

            formProduto.reset();

            miniaturas.innerHTML = "";

        }

    });

    // ===============================
    // SALVAR
    // ===============================

    formProduto.addEventListener("submit", (e) => {

        e.preventDefault();

        const produto = {

            nome:

                document.getElementById("nomeProduto").value,

            categoria:

                categoriaProduto.value,

            descricao:

                document.getElementById("descricaoProduto").value,

            preco:

                document.getElementById("precoProduto").value,

            quantidade:

                document.getElementById("quantidadeProduto").value,

            status:

                document.getElementById("statusProduto").checked,

            imagens:

                imagemProduto.files

        };

        // ===============================
        // VALIDAÇÕES
        // ===============================

        if (produto.nome.trim() === "") {

            alert("Informe o nome do produto.");

            return;

        }

        if (produto.categoria === "Selecione") {

            alert("Selecione uma categoria.");

            return;

        }

        if (produto.preco === "") {

            alert("Informe o preço.");

            return;

        }

        if (produto.quantidade === "") {

            alert("Informe a quantidade.");

            return;

        }

        console.table(produto);

        alert("Produto cadastrado com sucesso!");

        // Aqui futuramente será enviado para a API

        /*
        fetch("http://localhost:3000/produtos", {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(produto)

        });
        */

    });

    // ===============================
    // STATUS DO SISTEMA
    // ===============================

    statusSistema.textContent = "Operacional";

    statusSistema.style.color = "green";

});