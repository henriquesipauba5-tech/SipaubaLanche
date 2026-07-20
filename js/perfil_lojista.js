// ===============================================
// perfil-lojista.js
// ===============================================

document.addEventListener("DOMContentLoaded", () => {

    //=========================================
    // ELEMENTOS
    //=========================================

    const logoLoja = document.getElementById("logoLoja");
    const nomePainel = document.getElementById("nomePainel");

    const fotoPerfil = document.getElementById("fotoPerfil");
    const previewFoto = document.getElementById("previewFoto");

    const uploadFoto = document.getElementById("uploadFoto");
    const btnSelecionarImagem = document.getElementById("btnSelecionarImagem");

    const campoPesquisa = document.getElementById("campoPesquisa");

    const formPerfil = document.getElementById("formPerfil");

    const btnSalvar = document.getElementById("btnSalvar");
    const btnCancelar = document.getElementById("btnCancelar");

    const statusSistema = document.getElementById("statusSistema");

    //=========================================
    // DADOS DA LOJA
    //=========================================

    const lojista = {

        nomePainel: "Painel do Lojista",

        logo: "../assets/logo.png",

        foto: "../assets/perfil.png",

        nome: "João da Silva",

        email: "joao@email.com",

        telefone: "(11) 99999-9999",

        loja: "Loja Aurora Moda",

        cnpj: "12.345.678/0001-90",

        endereco: "Rua das Flores, 100 - Centro"

    };

    //=========================================
    // PREENCHER DADOS
    //=========================================

    nomePainel.textContent = lojista.nomePainel;

    logoLoja.src = lojista.logo;

    previewFoto.src = lojista.foto;

    document.getElementById("nomeCompleto").value = lojista.nome;

    document.getElementById("email").value = lojista.email;

    document.getElementById("telefone").value = lojista.telefone;

    document.getElementById("nomeLoja").value = lojista.loja;

    document.getElementById("cnpj").value = lojista.cnpj;

    document.getElementById("endereco").value = lojista.endereco;

    //=========================================
    // PESQUISA
    //=========================================

    campoPesquisa.addEventListener("keyup", () => {

        console.log("Pesquisar:", campoPesquisa.value);

    });

    //=========================================
    // UPLOAD DA FOTO
    //=========================================

    btnSelecionarImagem.addEventListener("click", () => {

        fotoPerfil.click();

    });

    uploadFoto.addEventListener("click", (e) => {

        if(e.target.tagName !== "BUTTON"){

            fotoPerfil.click();

        }

    });

    fotoPerfil.addEventListener("change", mostrarPreview);

    function mostrarPreview(){

        const arquivo = fotoPerfil.files[0];

        if(!arquivo){

            return;

        }

        const reader = new FileReader();

        reader.onload = function(e){

            previewFoto.src = e.target.result;

        }

        reader.readAsDataURL(arquivo);

    }

    //=========================================
    // DRAG AND DROP
    //=========================================

    uploadFoto.addEventListener("dragover",(e)=>{

        e.preventDefault();

        uploadFoto.style.borderColor="#111";

    });

    uploadFoto.addEventListener("dragleave",()=>{

        uploadFoto.style.borderColor="#d8d8d8";

    });

    uploadFoto.addEventListener("drop",(e)=>{

        e.preventDefault();

        fotoPerfil.files = e.dataTransfer.files;

        mostrarPreview();

    });

    //=========================================
    // CANCELAR
    //=========================================

    btnCancelar.addEventListener("click",()=>{

        if(!confirm("Cancelar as alterações?")){

            return;

        }

        formPerfil.reset();

        previewFoto.src = lojista.foto;

        document.getElementById("nomeCompleto").value = lojista.nome;

        document.getElementById("email").value = lojista.email;

        document.getElementById("telefone").value = lojista.telefone;

        document.getElementById("nomeLoja").value = lojista.loja;

        document.getElementById("cnpj").value = lojista.cnpj;

        document.getElementById("endereco").value = lojista.endereco;

    });

    //=========================================
    // SALVAR
    //=========================================

    formPerfil.addEventListener("submit",(e)=>{

        e.preventDefault();

        const dados = {

            nome:

                document.getElementById("nomeCompleto").value,

            email:

                document.getElementById("email").value,

            telefone:

                document.getElementById("telefone").value,

            loja:

                document.getElementById("nomeLoja").value,

            cnpj:

                document.getElementById("cnpj").value,

            endereco:

                document.getElementById("endereco").value,

            senhaAtual:

                document.getElementById("senhaAtual").value,

            novaSenha:

                document.getElementById("novaSenha").value,

            confirmarSenha:

                document.getElementById("confirmarSenha").value,

            foto:

                fotoPerfil.files[0]

        };

        //=========================================
        // VALIDAÇÕES
        //=========================================

        if(dados.nome.trim() === ""){

            alert("Informe seu nome.");

            return;

        }

        if(dados.email.trim() === ""){

            alert("Informe o e-mail.");

            return;

        }

        if(dados.loja.trim() === ""){

            alert("Informe o nome da loja.");

            return;

        }

        if(dados.cnpj.trim() === ""){

            alert("Informe o CNPJ.");

            return;

        }

        if(dados.novaSenha !== "" || dados.confirmarSenha !== ""){

            if(dados.senhaAtual === ""){

                alert("Informe a senha atual.");

                return;

            }

            if(dados.novaSenha !== dados.confirmarSenha){

                alert("As novas senhas não coincidem.");

                return;

            }

            if(dados.novaSenha.length < 6){

                alert("A nova senha deve possuir pelo menos 6 caracteres.");

                return;

            }

        }

        console.table(dados);

        alert("Perfil atualizado com sucesso!");

        //=========================================
        // FUTURA API
        //=========================================

        /*
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("email", dados.email);
        formData.append("telefone", dados.telefone);
        formData.append("loja", dados.loja);
        formData.append("cnpj", dados.cnpj);
        formData.append("endereco", dados.endereco);
        formData.append("senhaAtual", dados.senhaAtual);
        formData.append("novaSenha", dados.novaSenha);

        if(dados.foto){

            formData.append("foto", dados.foto);

        }

        fetch("http://localhost:3000/lojista/perfil",{

            method:"PUT",

            body:formData

        })
        .then(res=>res.json())
        .then(resposta=>{

            console.log(resposta);

        })
        .catch(erro=>{

            console.log(erro);

        });
        */

    });

    //=========================================
    // STATUS DO SISTEMA
    //=========================================

    statusSistema.textContent = "Operacional";

    statusSistema.style.color = "#0a9b41";

});