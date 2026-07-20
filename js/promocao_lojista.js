// ===============================================
// promocoes-banners.js
// ===============================================

document.addEventListener("DOMContentLoaded", () => {

    //=========================================
    // ELEMENTOS
    //=========================================

    const logoLoja = document.getElementById("logoLoja");
    const nomePainel = document.getElementById("nomePainel");

    const campoPesquisa = document.getElementById("campoPesquisa");

    const tipoDesconto = document.getElementById("tipoDesconto");

    const uploadDesktop = document.getElementById("uploadDesktop");
    const uploadMobile = document.getElementById("uploadMobile");

    const bannerDesktop = document.getElementById("bannerDesktop");
    const bannerMobile = document.getElementById("bannerMobile");

    const btnDesktop = document.getElementById("btnDesktop");
    const btnMobile = document.getElementById("btnMobile");

    const btnSalvar = document.getElementById("btnSalvar");
    const btnCancelar = document.getElementById("btnCancelar");

    const formPromocao = document.getElementById("formPromocao");

    const statusSistema = document.getElementById("statusSistema");

    //=========================================
    // DADOS DA LOJA
    //=========================================

    const loja = {

        nome: "Painel do Lojista",

        logo: "../assets/logo.png"

    };

    logoLoja.src = loja.logo;
    logoLoja.alt = loja.nome;
    nomePainel.textContent = loja.nome;

    //=========================================
    // TIPOS DE DESCONTO
    //=========================================

    const descontos = [

        "Selecione",

        "Porcentagem (%)",

        "Valor Fixo (R$)",

        "Frete Grátis",

        "Compre e Ganhe",

        "Cupom"

    ];

    descontos.forEach(tipo => {

        const option = document.createElement("option");

        option.value = tipo;

        option.textContent = tipo;

        tipoDesconto.appendChild(option);

    });

    //=========================================
    // BOTÕES DE UPLOAD
    //=========================================

    btnDesktop.addEventListener("click", () => {

        bannerDesktop.click();

    });

    btnMobile.addEventListener("click", () => {

        bannerMobile.click();

    });

    uploadDesktop.addEventListener("click", () => {

        bannerDesktop.click();

    });

    uploadMobile.addEventListener("click", () => {

        bannerMobile.click();

    });

    //=========================================
    // PRÉ-VISUALIZAÇÃO DESKTOP
    //=========================================

    bannerDesktop.addEventListener("change", () => {

        mostrarPreview(bannerDesktop, uploadDesktop);

    });

    //=========================================
    // PRÉ-VISUALIZAÇÃO MOBILE
    //=========================================

    bannerMobile.addEventListener("change", () => {

        mostrarPreview(bannerMobile, uploadMobile);

    });

    function mostrarPreview(input, area){

        const arquivo = input.files[0];

        if(!arquivo) return;

        const reader = new FileReader();

        reader.onload = function(e){

            area.innerHTML = "";

            const imagem = document.createElement("img");

            imagem.src = e.target.result;

            imagem.style.width = "100%";
            imagem.style.height = "100%";
            imagem.style.objectFit = "cover";
            imagem.style.borderRadius = "10px";

            area.appendChild(imagem);

        }

        reader.readAsDataURL(arquivo);

    }

    //=========================================
    // DRAG & DROP DESKTOP
    //=========================================

    uploadDesktop.addEventListener("dragover",(e)=>{

        e.preventDefault();

        uploadDesktop.style.borderColor="#111";

    });

    uploadDesktop.addEventListener("dragleave",()=>{

        uploadDesktop.style.borderColor="#d9d9d9";

    });

    uploadDesktop.addEventListener("drop",(e)=>{

        e.preventDefault();

        bannerDesktop.files=e.dataTransfer.files;

        mostrarPreview(bannerDesktop,uploadDesktop);

    });

    //=========================================
    // DRAG & DROP MOBILE
    //=========================================

    uploadMobile.addEventListener("dragover",(e)=>{

        e.preventDefault();

        uploadMobile.style.borderColor="#111";

    });

    uploadMobile.addEventListener("dragleave",()=>{

        uploadMobile.style.borderColor="#d9d9d9";

    });

    uploadMobile.addEventListener("drop",(e)=>{

        e.preventDefault();

        bannerMobile.files=e.dataTransfer.files;

        mostrarPreview(bannerMobile,uploadMobile);

    });

    //=========================================
    // PESQUISA
    //=========================================

    campoPesquisa.addEventListener("keyup",()=>{

        console.log("Pesquisar:",campoPesquisa.value);

    });

    //=========================================
    // CANCELAR
    //=========================================

    btnCancelar.addEventListener("click",()=>{

        const resposta=confirm("Deseja cancelar esta campanha?");

        if(!resposta) return;

        formPromocao.reset();

        restaurarUpload(uploadDesktop,true);

        restaurarUpload(uploadMobile,false);

    });

    function restaurarUpload(area,desktop){

        if(desktop){

            area.innerHTML=`

                <i class="fa-solid fa-cloud-arrow-up"></i>

                <h3>Banner Desktop (1920x600)</h3>

                <p>PNG ou JPG até 10MB</p>

                <button type="button" id="btnDesktop">
                    Selecionar Banner
                </button>

            `;

        }else{

            area.innerHTML=`

                <i class="fa-solid fa-cloud-arrow-up"></i>

                <h3>Banner Mobile (800x800)</h3>

                <button type="button" id="btnMobile">
                    Selecionar Banner
                </button>

            `;

        }

        location.reload();

    }

    //=========================================
    // SALVAR
    //=========================================

    formPromocao.addEventListener("submit",(e)=>{

        e.preventDefault();

        const campanha={

            nome:

                document.getElementById("nomePromocao").value,

            tipo:

                tipoDesconto.value,

            desconto:

                document.getElementById("valorDesconto").value,

            inicio:

                document.getElementById("dataInicio").value,

            fim:

                document.getElementById("dataFim").value,

            produtos:

                document.getElementById("buscarProdutos").value,

            link:

                document.getElementById("linkDestino").value,

            status:

                document.getElementById("statusPromocao").checked,

            bannerDesktop:

                bannerDesktop.files[0],

            bannerMobile:

                bannerMobile.files[0]

        };

        //=====================================
        // VALIDAÇÕES
        //=====================================

        if(campanha.nome.trim()==""){

            alert("Informe o nome da promoção.");

            return;

        }

        if(campanha.tipo=="Selecione"){

            alert("Escolha um tipo de desconto.");

            return;

        }

        if(campanha.desconto==""){

            alert("Informe o valor do desconto.");

            return;

        }

        if(campanha.inicio==""){

            alert("Informe a data inicial.");

            return;

        }

        if(campanha.fim==""){

            alert("Informe a data final.");

            return;

        }

        if(!campanha.bannerDesktop){

            alert("Selecione o banner Desktop.");

            return;

        }

        if(!campanha.bannerMobile){

            alert("Selecione o banner Mobile.");

            return;

        }

        console.table(campanha);

        alert("Campanha cadastrada com sucesso!");

        //=================================================
        // FUTURA INTEGRAÇÃO COM NODE.JS + EXPRESS + MYSQL
        //=================================================

        /*
        const formData = new FormData();

        formData.append("nome", campanha.nome);
        formData.append("tipo", campanha.tipo);
        formData.append("desconto", campanha.desconto);
        formData.append("inicio", campanha.inicio);
        formData.append("fim", campanha.fim);
        formData.append("produtos", campanha.produtos);
        formData.append("link", campanha.link);
        formData.append("status", campanha.status);

        formData.append("bannerDesktop", campanha.bannerDesktop);
        formData.append("bannerMobile", campanha.bannerMobile);

        fetch("http://localhost:3000/promocoes",{

            method:"POST",

            body:formData

        });
        */

    });

    //=========================================
    // STATUS DO SISTEMA
    //=========================================

    statusSistema.textContent="Operacional";

    statusSistema.style.color="#0a9b41";

});